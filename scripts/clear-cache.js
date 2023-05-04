const fs = require('fs');
const path = require('path');

const cacheDir = path.join(__dirname, '..', 'node_modules', '.cache');

console.log('Clear-cache script has been started');

if (fs.existsSync(cacheDir)) {
	fs.rmSync(cacheDir, { recursive: true });
	console.log('Cache directory has been deleted');
}