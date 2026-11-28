/* ---------- EXPORT / IMPORT PROGRESS ---------- */
async function progEncode(){
  const json=JSON.stringify(S);
  try{ if(window.CompressionStream){ const s=new Blob([json]).stream().pipeThrough(new CompressionStream('gzip')); const buf=new Uint8Array(await new Response(s).arrayBuffer()); let bin=''; for(let i=0;i<buf.length;i+=8192) bin+=String.fromCharCode.apply(null,buf.subarray(i,i+8192)); return 'ENB1z:'+btoa(bin); } }catch(e){}
  return 'ENB1:'+btoa(unescape(encodeURIComponent(json)));
}
async function progDecode(code){
  code=String(code||'').replace(/\s+/g,'');
  if(code.startsWith('{')) return JSON.parse(code);
  if(code.startsWith('ENB1z:')){ const bin=atob(code.slice(6)), buf=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) buf[i]=bin.charCodeAt(i);
    const s=new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip')); return JSON.parse(await new Response(s).text()); }
  if(code.startsWith('ENB1:')) return JSON.parse(decodeURIComponent(escape(atob(code.slice(5)))));
  throw new Error('format');
}
function progImport(remote){
  if(!remote||typeof remote!=='object'||!(remote.plan||remote.ex||remote.lesson||remote.vsr)) throw new Error('empty');
  const merged=mergeState(S,remote);
  merged.vdecks=Object.assign({},remote.vdecks||{},S.vdecks||{});
  Object.keys(remote.vdecks||{}).forEach(k=>{ if(remote.vdecks[k]) merged.vdecks[k]=true; });
  S=merged; ensureDefaults(); save(); if(typeof push==='function'&&dbRefs) setTimeout(push,300);
}
function progSummary(o){ const n=x=>Object.keys(o[x]||{}).length; const P=o.plan||{}; return `${n('lesson')} lessons · ${n('ex')} exercise sets · ${n('vsr')} flashcards · ${Object.keys(P.tick||{}).length} plan ticks${o.at?' · saved '+new Date(o.at).toLocaleString('en-GB',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}):''}`; }
function renderProgress(){
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Settings · your progress</div><h1 class="title">Move your progress</h1>
   <p class="subtitle">Take your progress from one device or browser to another: the phone shortcut, the computer and the version inside Claude. Importing <b>merges</b> both progresses, so nothing you did on either side is lost.</p></header>
   <p class="callout small" style="margin:0 0 18px">${syncSt==='ok'?'Inside Claude your progress already syncs by itself between devices. Use this page to move it to or from the GitHub version (the home-screen shortcut).':'This copy saves progress only in this browser. To continue on another device, export here and import there.'}</p>
   <section class="card"><div class="card-h"><div><span class="lab">1 · On the device you were using</span><h3>Export</h3></div></div>
    <p class="note" style="margin-top:0">This device: ${esc(progSummary(S))}</p>
    <div class="btnrow"><button class="btn primary" id="pgcopy" type="button">Copy progress code</button><button class="btn" id="pgfile" type="button">Save as a file</button><span class="note" id="pgmsg"></span></div>
    <textarea class="labin" id="pgcode" rows="4" readonly hidden></textarea></section>
   <section class="card"><div class="card-h"><div><span class="lab">2 · On the device where you want to continue</span><h3>Import</h3></div></div>
    <p class="note" style="margin-top:0">Paste the code, or choose the file you saved.</p>
    <textarea class="labin" id="pgin" rows="4" placeholder="Paste the progress code here (it starts with ENB1)…"></textarea>
    <div class="btnrow" style="margin-top:8px"><button class="btn primary" id="pgimp" type="button">Import and merge</button><label class="btn" for="pgf">Open a file…</label><input type="file" id="pgf" accept=".txt,.json,text/plain,application/json" hidden><span class="note" id="pgimsg"></span></div></section>
   <section class="card"><div class="card-h"><div><span class="lab">Tip</span><h3>A simple routine</h3></div></div>
    <ul class="dots"><li>Study mostly on one device, and move the progress only when you change.</li><li>Before switching, export on the old device; on the new one, import before you start studying.</li><li>The code is long: send it to yourself by e-mail or a notes app, or save the file in your cloud drive.</li></ul></section>`;
  const msg=$('#pgmsg');
  $('#pgcopy').onclick=async()=>{ const code=await progEncode(); const ta=$('#pgcode'); ta.value=code; ta.hidden=false;
    navigator.clipboard&&navigator.clipboard.writeText(code).then(()=>{ msg.textContent=`Copied (${Math.max(1,Math.round(code.length/1024))} KB). Paste it on the other device.`; },()=>{ ta.select(); msg.textContent='Selected: press Ctrl+C / Cmd+C, or hold and copy.'; }); };
  $('#pgfile').onclick=async()=>{ const code=await progEncode(), name='english-notebook-progress-'+dayKey()+'.txt';
    const dl=window.claude&&window.claude.use?await window.claude.use('downloads').catch(()=>null):null;
    if(dl){ try{ await dl.save({filename:name,data:code}); msg.textContent='File saved.'; return; }catch(e){ msg.textContent=e&&e.code==='cancelled'?'Download cancelled.':'The file could not be saved: use «Copy progress code».'; return; } }
    try{ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([code],{type:'text/plain'})); a.download=name; document.body.appendChild(a); a.click(); a.remove(); msg.textContent='File saved.'; }catch(e){ msg.textContent='The file could not be saved: use «Copy progress code».'; } };
  const doImport=async(code)=>{ const im=$('#pgimsg');
    try{ const remote=await progDecode(code); const sum=progSummary(remote); progImport(remote); renderNav(route()); renderProgress(); toast('<span class="pen">Progress imported.</span> '+esc(sum)); }
    catch(e){ im.textContent='This code could not be read. Copy it again, the whole text, and paste it here.'; } };
  $('#pgimp').onclick=()=>{ const v=$('#pgin').value.trim(); if(!v){ $('#pgimsg').textContent='Paste the code first.'; return; } doImport(v); };
  $('#pgf').onchange=e=>{ const f=e.target.files&&e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>doImport(String(r.result)); r.readAsText(f); };
}
/* end */
