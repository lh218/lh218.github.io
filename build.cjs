// Optional: refresh static HTML for crawlers and readers with JavaScript disabled.
// Run: node build.cjs (no package installation required).
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const dir = __dirname;
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(dir,'config.js'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'render.js'),'utf8')+'\nthis.output = homepage(USER_CONFIG); this.cfg = USER_CONFIG;',context);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
fs.writeFileSync(path.join(dir,'index.html'),`<!DOCTYPE html>
<html lang="en" data-theme="light"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(context.cfg.name)} (雷浩瑀) | Research</title>
<meta name="description" content="${esc(context.cfg.description)}">
<meta property="og:title" content="${esc(context.cfg.name)} | Research">
<meta property="og:description" content="${esc(context.cfg.description)}">
<meta property="og:type" content="website">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head><body><div id="homepage">${context.output}</div>
<script src="config.js"></script><script src="render.js"></script><script src="script.js"></script>
</body></html>\n`);
console.log('Generated index.html with all personal content.');
