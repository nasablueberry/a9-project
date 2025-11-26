const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.jsx', { nodir: true });
let patched = 0;
files.forEach(f => {
  const s = fs.readFileSync(f, 'utf8');
  if (s.includes('React.createElement') && !/^\s*import\s+React\b/m.test(s)) {
    const newS = "import React from 'react';\n" + s;
    fs.writeFileSync(f, newS, 'utf8');
    console.log('Patched:', f);
    patched++;
  }
});
console.log('Done. Patched files:', patched);
