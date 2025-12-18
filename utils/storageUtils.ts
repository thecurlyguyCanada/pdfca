import { get, set, del } from 'idb-keyval';
import { FormField } from './pdfUtils';

export interface AppSessionState {
    file: File;
    currentTool: string | null; // Use string to avoid circular dependency with App.tsx AppState/ToolType enums if possible, or just cast
    selectedPages: number[];
    rotations: Record<number, number>;
    ocrText: string;
    items: number[];
    formFields: FormField[];
    timestamp: number;
}

const STORAGE_KEY = 'vacymax_session';

export const saveSession = async (state: AppSessionState): Promise<void> => {
    try {
        await set(STORAGE_KEY, state);
        console.debug('Session saved to IndexedDB');
    } catch (e) {
        console.warn('Failed to save session', e);
    }
};

export const loadSession = async (): Promise<AppSessionState | null> => {
    try {
        const session = await get<AppSessionState>(STORAGE_KEY);
        if (!session) return null;

        // Check if session is too old (e.g., > 24 hours)? 
        // Let's keep it simple: if it exists, return it.
        return session;
    } catch (e) {
        console.warn('Failed to load session', e);
        return null;
    }
};

export const clearSession = async (): Promise<void> => {
    try {
        await del(STORAGE_KEY);
        console.debug('Session cleared');
    } catch (e) {
        console.warn('Failed to clear session', e);
    }
};
