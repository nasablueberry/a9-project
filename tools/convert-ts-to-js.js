const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const glob = require('glob');

function ensureDir(p){
  if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

const cwd = process.cwd();
const backupRoot = path.join(cwd, 'backups', 'convert-backup-' + Date.now());
ensureDir(backupRoot);

console.log('Backup root:', backupRoot);

const patterns = [
  'src/**/*.ts',
  'src/**/*.tsx'
];

const files = patterns.flatMap(p => glob.sync(p, { nodir: true, dot: true }));
console.log('Files to convert:', files.length);

files.forEach(file => {
  const abs = path.resolve(cwd, file);
  const rel = path.relative(cwd, abs);
  const backupPath = path.join(backupRoot, rel);
  ensureDir(path.dirname(backupPath));
  fs.copyFileSync(abs, backupPath);

  const source = fs.readFileSync(abs, 'utf8');

  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      jsx: ts.JsxEmit.React,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    },
    fileName: path.basename(abs),
  }).outputText;

  const newExt = file.endsWith('.tsx') ? '.jsx' : '.js';
  const newPath = abs.slice(0, -path.extname(abs).length) + newExt;

  ensureDir(path.dirname(newPath));
  fs.writeFileSync(newPath, transpiled, 'utf8');
  console.log('Wrote', path.relative(cwd, newPath));

  // remove original file so imports don't collide
  try {
    fs.unlinkSync(abs);
    console.log('Removed original', rel);
  } catch (err) {
    console.warn('Failed to remove original', rel, err.message);
  }
});

// Update import references in project files (replace .ts/.tsx extensions in import paths)
const targetFiles = glob.sync('**/*.{js,jsx,ts,tsx,html}', { dot: true, ignore: ['node_modules/**', 'backups/**'] });
console.log('Files to scan for import fixes:', targetFiles.length);

const reTsx = /(from\s+['\"])(.+?)\.tsx(['\"])/g;
const reTs = /(from\s+['\"])(.+?)\.ts(['\"])/g;
const reImportTypeTsx = /(import\s+type\s+.+?from\s+['\"])(.+?)\.tsx(['\"])/g;
const reImportTypeTs = /(import\s+type\s+.+?from\s+['\"])(.+?)\.ts(['\"])/g;

targetFiles.forEach(f => {
  const abs = path.resolve(cwd, f);
  let s = fs.readFileSync(abs, 'utf8');
  const orig = s;

  s = s.replace(reImportTypeTsx, (m, p1, p2, p3) => p1 + p2 + '.jsx' + p3);
  s = s.replace(reImportTypeTs, (m, p1, p2, p3) => p1 + p2 + '.js' + p3);
  s = s.replace(reTsx, (m, p1, p2, p3) => p1 + p2 + '.jsx' + p3);
  s = s.replace(reTs, (m, p1, p2, p3) => p1 + p2 + '.js' + p3);

  // remove any leftover 'import type' statements (they should've been stripped, but be safe)
  s = s.replace(/^\s*import\s+type\s+.*;\s*\n?/gm, '');

  if (s !== orig) {
    fs.writeFileSync(abs, s, 'utf8');
    console.log('Patched imports in', f);
  }
});

console.log('Conversion complete. Originals are available under', backupRoot);
console.log('Next: run the dev server and test the app.');
