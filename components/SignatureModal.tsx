import React, { useState, useRef, useEffect } from 'react';
import { X, Type, PenTool, Upload, Check, Trash2 } from 'lucide-react';

interface SignatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (dataUrl: string) => void;
    t: any;
    title: string;
}

export const SignatureModal: React.FC<SignatureModalProps> = ({
    isOpen,
    onClose,
    onSave,
    t,
    title
}) => {
    const [activeTab, setActiveTab] = useState<'draw' | 'type' | 'upload'>('draw');
    const [typedText, setTypedText] = useState('');
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen && activeTab === 'draw' && canvasRef.current) {
            const canvas = canvasRef.current;
            // High DPI support
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            const context = canvas.getContext('2d');
            if (context) {
                context.scale(dpr, dpr);
                context.lineCap = 'round';
                context.lineJoin = 'round';
                context.strokeStyle = 'black';
                context.lineWidth = 3;
                contextRef.current = context;
            }
        }
    }, [isOpen, activeTab]);

    if (!isOpen) return null;

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        const { offsetX, offsetY } = getCoordinates(e);
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        e.preventDefault();
        const { offsetX, offsetY } = getCoordinates(e);
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();
    };

    const stopDrawing = () => {
        contextRef.current?.closePath();
        setIsDrawing(false);
    };

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { offsetX: 0, offsetY: 0 };
        const rect = canvas.getBoundingClientRect();

        if ('touches' in e) {
            return {
                offsetX: e.touches[0].clientX - rect.left,
                offsetY: e.touches[0].clientY - rect.top
            };
        } else {
            return {
                offsetX: e.nativeEvent.offsetX,
                offsetY: e.nativeEvent.offsetY
            };
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        if (canvas && context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    const handleSave = () => {
        if (activeTab === 'draw') {
            const canvas = canvasRef.current;
            if (canvas) {
                // Check if canvas is empty? (Optional)
                onSave(canvas.toDataURL());
            }
        } else if (activeTab === 'type') {
            if (!typedText.trim()) return;

            // Create a canvas to render the text
            const canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 200;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = 'white';
                // Transparent background is better for signatures
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = 'black';
                ctx.font = "italic 60px 'Dancing Script', cursive, serif";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(typedText, canvas.width / 2, canvas.height / 2);
                onSave(canvas.toDataURL());
            }
        } else if (activeTab === 'upload' && uploadedImage) {
            onSave(uploadedImage);
        }
        onClose();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setUploadedImage(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-scale-in">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => setActiveTab('draw')}
                        className={`flex-1 py-4 flex items-center justify-center gap-2 font-bold transition-all ${activeTab === 'draw' ? 'text-canada-red border-b-4 border-canada-red bg-red-50/30' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <PenTool size={20} /> {t.drawTitle}
                    </button>
                    <button
                        onClick={() => setActiveTab('type')}
                        className={`flex-1 py-4 flex items-center justify-center gap-2 font-bold transition-all ${activeTab === 'type' ? 'text-canada-red border-b-4 border-canada-red bg-red-50/30' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <Type size={20} /> {t.typeTitle}
                    </button>
                    <button
                        onClick={() => setActiveTab('upload')}
                        className={`flex-1 py-4 flex items-center justify-center gap-2 font-bold transition-all ${activeTab === 'upload' ? 'text-canada-red border-b-4 border-canada-red bg-red-50/30' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <Upload size={20} /> {t.uploadTitle}
                    </button>
                </div>

                <div className="p-8">
                    {activeTab === 'draw' && (
                        <div className="space-y-4">
                            <div className="relative border-2 border-dashed border-gray-200 rounded-2xl overflow-hidden bg-gray-50 h-64 touch-none">
                                <canvas
                                    ref={canvasRef}
                                    className="w-full h-full cursor-crosshair"
                                    onMouseDown={startDrawing}
                                    onMouseMove={draw}
                                    onMouseUp={stopDrawing}
                                    onMouseLeave={stopDrawing}
                                    onTouchStart={startDrawing}
                                    onTouchMove={draw}
                                    onTouchEnd={stopDrawing}
                                />
                                <button
                                    onClick={clearCanvas}
                                    className="absolute bottom-4 right-4 p-2 bg-white shadow-md rounded-full text-gray-500 hover:text-canada-red transition-colors"
                                    title="Clear"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 text-center">Use your mouse or touch screen to draw your signature.</p>
                        </div>
                    )}

                    {activeTab === 'type' && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Enter your name:</label>
                                <input
                                    type="text"
                                    value={typedText}
                                    onChange={(e) => setTypedText(e.target.value)}
                                    className="w-full border-2 border-gray-200 rounded-2xl p-4 text-2xl outline-none focus:border-canada-red transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="p-8 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 flex items-center justify-center min-h-[120px]">
                                {typedText ? (
                                    <span className="text-4xl italic text-gray-800" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                        {typedText}
                                    </span>
                                ) : (
                                    <span className="text-gray-400 italic">Signature Preview</span>
                                )}
                            </div>
                            <p className="text-xs text-gray-400 text-center">Your typed signature will be converted to a handwritten style.</p>
                        </div>
                    )}

                    {activeTab === 'upload' && (
                        <div className="space-y-6">
                            {!uploadedImage ? (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-gray-200 rounded-2xl p-12 bg-gray-50 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-canada-red hover:bg-red-50/30 transition-all group"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-canada-red transition-all">
                                        <Upload size={32} />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-gray-700">Click to upload an image</p>
                                        <p className="text-sm text-gray-500 mt-1">PNG, JPG, or WEBP. Transparent PNG works best.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative group">
                                    <div className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-8 h-64">
                                        <img src={uploadedImage} alt="Uploaded signature" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <button
                                        onClick={() => setUploadedImage(null)}
                                        className="absolute top-4 right-4 p-2 bg-white shadow-md rounded-full text-gray-500 hover:text-canada-red transition-colors opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            )}
                            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                        </div>
                    )}
                </div>

                <div className="p-6 bg-gray-50 flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-gray-600 hover:bg-gray-100 transition-all active:scale-95"
                    >
                        {t.fbCancel}
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={(activeTab === 'type' && !typedText.trim()) || (activeTab === 'upload' && !uploadedImage)}
                        className="flex-1 py-4 bg-canada-red text-white rounded-2xl font-bold shadow-lg shadow-red-500/20 hover:bg-canada-darkRed transition-all active:scale-95 disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <Check size={20} /> Create
                    </button>
                </div>
            </div>
        </div>
    );
};
