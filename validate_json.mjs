import fs from 'node:fs';
import path from 'node:path';

function validateJson(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                validateJson(fullPath);
            }
        } else if (file.endsWith('.json')) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                JSON.parse(content);
            } catch (e) {
                console.log(`ERROR in ${fullPath}: ${e.message}`);
                // Try to find position 831 or line 30
                const content = fs.readFileSync(fullPath, 'utf8');
                const lines = content.split('\n');
                if (lines.length >= 30) {
                    console.log(`Line 30: ${lines[29]}`);
                }
            }
        }
    }
}

validateJson(process.cwd());
