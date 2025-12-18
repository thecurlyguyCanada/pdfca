import React, { useRef } from 'react';
import { Upload, Shield, FileText, Image, BookOpen, Trash2, RotateCw, PenTool, Move, ScanLine } from 'lucide-react';
import { ToolType } from '../utils/types';
// We might need to export ToolType from a shared type file eventually, but importing from App is precarious loops. 
// Better to define ToolType in a types file. For now, let's assume I can import it or redeclare it? 
// No, circular dependency potential.
// I will create a types file first? 
// Or just use 'any' or string for tool type for now to avoid refactoring EVERYTHING.
// Actually, let's move ToolType to a utils/types.ts file? 
// The plan didn't explicitly say that but it's good practice. 
// For now, I'll copy the enum or just use string checking if simple.
// Wait, `App.tsx` exports ToolType? No, it defines it continuously.
// I should extract ToolType to `utils/types.ts`.

// Let's create utils/types.ts first.
import { translations } from '../utils/i18n';

// Temporary Interface until I extract types
interface FileProcessorProps {
    tool: {
        id: ToolType;
        title: string;
        accept: string;
        icon: any;
    } | undefined;
    t: typeof translations['en'];
    onFileSelect: (file: File) => void;
}

export const FileProcessor: React.FC<FileProcessorProps> = ({ tool, t, onFileSelect }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileSelect(e.target.files[0]);
        }
    };

    return (
        <div
            className="flex-grow flex flex-col items-center justify-center p-10 text-center cursor-pointer hover:bg-gray-50 transition-colors group border-2 border-dashed border-transparent hover:border-canada-red/20 m-4 rounded-3xl"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    onFileSelect(e.dataTransfer.files[0]);
                }
            }}
            onClick={() => fileInputRef.current?.click()}
        >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {tool && <tool.icon size={32} />}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{tool?.title}</h3>
            <p className="text-gray-500 mb-2">{t.uploadDesc} ({tool?.accept})</p>

            <div className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-500 mb-8">
                <Shield size={12} /> {t.processedLocally}
            </div>

            <button className="bg-canada-red hover:bg-canada-darkRed text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-red-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                {t.selectFile}
            </button>
            <input
                type="file"
                accept={tool?.accept}
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    );
};
