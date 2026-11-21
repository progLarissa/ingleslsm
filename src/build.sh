set -e
cd "$(dirname "$0")"
python3 apply.py
cat data/*.js > build/data.js
{ cat build/head.html; echo '<script>'; cat build/data.js; echo "(function(){"; echo "'use strict';"; cat build/app.js; echo '</script>'; } > build/english-notebook.html
# syntax check of the script part
python3 - <<'PY'
s=open('build/english-notebook.html').read()
js=s[s.index('<script>')+8:s.rindex('</script>')]
open('build/check.js','w').write(js)
PY
node --check build/check.js && echo BUILT $(wc -c < build/english-notebook.html)
# full page for the repo root (open in any browser or GitHub Pages)
python3 - <<'PY'
SKEL='<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png"><link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png"><link rel="apple-touch-icon" href="icons/apple-touch-icon.png"><link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#163C2F"><meta name="apple-mobile-web-app-title" content="English"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>'
open('../index.html','w').write(SKEL+open('build/english-notebook.html').read()+'</body></html>')
PY
