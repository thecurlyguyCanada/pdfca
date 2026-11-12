/**
 * Copies the pdf.js worker and the tesseract.js worker, wasm cores and OCR language data (English,
 * French) into public/vendor so the site never loads them from a CDN. Runs on postinstall, predev and
 * prebuild; public/vendor is git-ignored.
 */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const nm = (...p) => join(root, 'node_modules', ...p);
const version = (pkg) => JSON.parse(readFileSync(nm(pkg, 'package.json'), 'utf8')).version;

const vendorTs = readFileSync(join(root, 'config', 'vendor.ts'), 'utf8');
for (const [pkg, constName] of [['pdfjs-dist', 'PDFJS_VERSION'], ['tesseract.js', 'TESSERACT_VERSION']]) {
    if (!vendorTs.includes(`${constName} = '${version(pkg)}'`)) {
        console.error(`config/vendor.ts ${constName} does not match installed ${pkg}@${version(pkg)}`);
        process.exit(1);
    }
}

const out = join(root, 'public', 'vendor');
rmSync(out, { recursive: true, force: true });

const pdfjsDir = join(out, `pdfjs-${version('pdfjs-dist')}`);
mkdirSync(pdfjsDir, { recursive: true });
cpSync(nm('pdfjs-dist', 'build', 'pdf.worker.min.mjs'), join(pdfjsDir, 'pdf.worker.min.mjs'));

const tessDir = join(out, `tesseract-${version('tesseract.js')}`);
mkdirSync(join(tessDir, 'core'), { recursive: true });
cpSync(nm('tesseract.js', 'dist', 'worker.min.js'), join(tessDir, 'worker.min.js'));
// tesseract.js picks one of these LSTM cores at runtime (plain, SIMD or relaxed SIMD), so all three must exist.
for (const v of ['', '-simd', '-relaxedsimd']) {
    const f = `tesseract-core${v}-lstm.wasm.js`;
    if (!existsSync(nm('tesseract.js-core', f))) {
        console.error(`Missing node_modules/tesseract.js-core/${f}: OCR would fail at runtime. Is tesseract.js-core installed at the top level?`);
        process.exit(1);
    }
    cpSync(nm('tesseract.js-core', f), join(tessDir, 'core', f));
}
const langDir = join(out, 'tessdata-4.0.0_best_int');
mkdirSync(langDir, { recursive: true });
for (const lang of ['eng', 'fra']) {
    cpSync(nm('@tesseract.js-data', lang, '4.0.0_best_int', `${lang}.traineddata.gz`), join(langDir, `${lang}.traineddata.gz`));
}
console.log('Copied pdf.js and tesseract.js assets to public/vendor/');
