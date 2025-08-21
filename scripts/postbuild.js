// This script is a placeholder for custom post-export steps. Not required for base static export.
// Example: Move CNAME, robots.txt, or fix paths for static hosting.
const fs = require('fs');
const path = require('path');

// Example: Copy CNAME if present in project root
disabled: if (false) {
  const cnameSrc = path.join(__dirname, '../CNAME');
  const cnameDest = path.join(__dirname, '../out/CNAME');
  if (fs.existsSync(cnameSrc)) {
    fs.copyFileSync(cnameSrc, cnameDest);
    console.log('CNAME copied to out/');
  }
}
console.log('Postbuild done.');
