const fs = require('fs');
const path = require('path');

const targets = [
  '.next',
  '.turbo',
  path.join('node_modules', '.cache')
];

function removeDir(target) {
  const p = path.resolve(process.cwd(), target);
  if (fs.existsSync(p)) {
    try {
      fs.rmSync(p, { recursive: true, force: true });
      console.log(`Removed: ${p}`);
    } catch (err) {
      console.error(`Failed to remove ${p}:`, err);
      process.exitCode = 1;
    }
  } else {
    console.log(`Not found, skipping: ${p}`);
  }
}

console.log('Cleaning build caches...');
targets.forEach(removeDir);
console.log('Clean complete.');