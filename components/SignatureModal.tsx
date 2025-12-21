import React, { useState, useRef, useEffect } from 'react';
import { X, Type, PenTool, Upload, Check, Trash2 } from 'lucide-react';

interface SignatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (dataUrl: string) => void;
    t: any;
    title: string;
    defaultTab?: 'draw' | 'type' | 'upload';
}

export const SignatureModal: React.FC<SignatureModalProps> = ({
    isOpen,
    onClose,
    onSave,
    t,
    title,
    defaultTab = 'draw'
}) => {
    const [activeTab, setActiveTab] = useState<'draw' | 'type' | 'upload'>(defaultTab);
    const [typedText, setTypedText] = useState('');
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Dynamic resize handler
    const resizeCanvas = () => {
        if (canvasRef.current && containerRef.current) {
            const canvas = canvasRef.current;
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();

            // Only resize if dimensions actually changed significantly to avoid clearing
            if (Math.abs(canvas.width - rect.width) > 5 || Math.abs(canvas.height - rect.height) > 5) {
                // We need to save the current drawing if possible, but simpler to just clear for now on drastic resize
                // Implementing a "save and restore" for canvas content on resize is complex.
                // For now, let's just resize on init.
                const dpr = window.devicePixelRatio || 1;
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;

                const context = canvas.getContext('2d');
                if (context) {
                    context.scale(dpr, dpr);
                    context.lineCap = 'round';
                    context.lineJoin = 'round';
                    context.lineWidth = 3;
                    context.strokeStyle = 'black';
                    contextRef.current = context;
                }
            }
        }
    };

    useEffect(() => {
        if (isOpen && activeTab === 'draw') {
            // Slight delay to allow modal animation to settle or layout to compute
            const timer = setTimeout(resizeCanvas, 100);
            window.addEventListener('resize', resizeCanvas);
            return () => {
                window.removeEventListener('resize', resizeCanvas);
                clearTimeout(timer);
            };
        }
    }, [isOpen, activeTab]);

    if (!isOpen) return null;

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        // Prevent default to stop scrolling on mobile while drawing
        if (e.type === 'touchstart') {
            // e.preventDefault(); // Moved to passive: false in effect if needed, otherwise rely on touch-action
        }

        const { offsetX, offsetY } = getCoordinates(e);
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
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
            const touch = e.touches[0];
            return {
                offsetX: touch.clientX - rect.left,
                offsetY: touch.clientY - rect.top
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
            context.clearRect(0, 0, canvas.width, canvas.height); // Use actual pixel dims
        }
        // Force re-setup context props after clear if needed (rarely for 2D)
        if (context) {
            context.beginPath();
        }
    };

    const handleSave = () => {
        if (activeTab === 'draw') {
            const canvas = canvasRef.current;
            if (canvas) {
                onSave(canvas.toDataURL());
            }
        } else if (activeTab === 'type') {
            if (!typedText.trim()) return;

            const canvas = document.createElement('canvas');
            canvas.width = 600;
            canvas.height = 200;
            const ctx = canvas.getContext('2d');
            if (ctx) {
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
        <div
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-scale-in flex flex-col max-h-[90vh] md:max-h-[85vh]">
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 shrink-0">
                    <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex border-b border-gray-100 shrink-0 overflow-x-auto no-scrollbar">
                    {['draw', 'type', 'upload'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`flex-1 py-3 md:py-4 flex items-center justify-center gap-2 font-bold transition-all whitespace-nowrap px-4 active:scale-95 ${activeTab === tab ? 'text-canada-red border-b-4 border-canada-red bg-red-50/30' : 'text-gray-500 hover:bg-gray-50 active:bg-gray-100'}`}
                        >
                            {tab === 'draw' && <PenTool size={18} />}
                            {tab === 'type' && <Type size={18} />}
                            {tab === 'upload' && <Upload size={18} />}
                            <span className="capitalize">{t[`${tab}Title`]}</span>
                        </button>
                    ))}
                </div>

                <div className="p-4 md:p-8 overflow-y-auto flex-grow bg-gray-50 flex flex-col">
                    {activeTab === 'draw' && (
                        <div className="flex flex-col h-full gap-2">
                            <div className="text-xs text-gray-400 text-center mb-1 hidden md:block">Draw your signature below</div>
                            <div
                                ref={containerRef}
                                className="relative border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden bg-white flex-grow touch-none shadow-sm min-h-[200px]"
                            >
                                <canvas
                                    ref={canvasRef}
                                    className="w-full h-full cursor-crosshair touch-none"
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
                                    className="absolute bottom-4 right-4 p-3 bg-white shadow-lg border border-gray-100 rounded-full text-gray-500 hover:text-canada-red transition-all active:scale-95"
                                    title="Clear"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
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
                                    className="w-full border-2 border-gray-200 rounded-2xl p-4 text-xl md:text-2xl outline-none focus:border-canada-red transition-all bg-white"
                                    placeholder="John Doe"
                                    autoFocus
                                    inputMode="text"
                                    autoComplete="name"
                                    autoCapitalize="words"
                                />
                            </div>
                            <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl bg-white flex items-center justify-center min-h-[120px] shadow-sm">
                                {typedText ? (
                                    <span className="text-3xl md:text-5xl italic text-gray-800 break-all text-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                        {typedText}
                                    </span>
                                ) : (
                                    <span className="text-gray-300 italic">Preview</span>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'upload' && (
                        <div className="flex flex-col h-full justify-center">
                            {!uploadedImage ? (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-gray-300 rounded-2xl p-8 md:p-12 bg-white flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-canada-red hover:bg-red-50/10 transition-all group h-64 shadow-sm"
                                >
                                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <Upload size={32} />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-gray-700">Tap to upload image</p>
                                        <p className="text-sm text-gray-400 mt-1">Accepts PNG, JPG, WEBP</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative group h-full max-h-64">
                                    <div className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-url-grid flex items-center justify-center p-4 h-full bg-white">
                                        <img src={uploadedImage} alt="Uploaded" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <button
                                        onClick={() => setUploadedImage(null)}
                                        className="absolute top-2 right-2 p-2 bg-white shadow-md rounded-full text-gray-500 hover:text-canada-red"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            )}
                            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                        </div>
                    )}
                </div>

                <div className="p-4 md:p-6 bg-white border-t border-gray-100 flex gap-3 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 md:py-4 bg-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-all active:scale-95"
                    >
                        {t.fbCancel}
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={(activeTab === 'type' && !typedText.trim()) || (activeTab === 'upload' && !uploadedImage)}
                        className="flex-1 py-3 md:py-4 bg-canada-red text-white rounded-xl font-bold shadow-lg shadow-red-500/20 hover:bg-canada-darkRed transition-all active:scale-95 disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <Check size={20} /> {t.btnCreate || 'Create'}
                    </button>
                </div>
            </div>
        </div>
    );
};
