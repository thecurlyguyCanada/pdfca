const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'utils', 'i18n.ts');
const startLine = 2304; // 1-indexed
const endLine = 3509; // 1-indexed

const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Javascript arrays are 0-indexed
const startIndex = startLine - 1;
const endIndex = endLine - 1;

// Verify content looks like what we expect (sanity check)
if (!lines[startIndex].includes('de: {')) {
    console.error(`Error: Line ${startLine} does not contain 'de: {'`);
    console.error(`Actual content: ${lines[startIndex]}`);
    process.exit(1);
}

if (!lines[endIndex].trim().startsWith('},')) {
    console.error(`Error: Line ${endLine} does not contain '},'`);
    console.error(`Actual content: ${lines[endIndex]}`);
    process.exit(1);
}

// Check next line to ensure it is 'pt: {'
if (!lines[endIndex + 1].includes('pt: {')) {
    console.error(`Error: Line ${endLine + 1} does not contain 'pt: {'`);
    console.error(`Actual content: ${lines[endIndex + 1]}`);
    process.exit(1);
}

console.log(`Removing lines ${startLine} to ${endLine}...`);
lines.splice(startIndex, (endIndex - startIndex) + 1);

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Successfully removed lines.');
