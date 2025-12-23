const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexHtml = path.join(buildDir, 'index.html');
const targetHtml = path.join(buildDir, '200.html');

try {
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, targetHtml);
    console.log('✓ Copied index.html to 200.html');
  } else {
    console.error('✗ index.html not found in build directory');
    process.exit(1);
  }
} catch (error) {
  console.error('✗ Error copying index.html to 200.html:', error);
  process.exit(1);
}

