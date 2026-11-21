/* ---------- BOOKS ---------- */
function bookPhase(b){ const ss=buildPlan().filter(s=>s.band===b); return ss; }
function bookTarget(bi,sessIdx){ // chapter to reach by the end of this session
  const B=BOOKS[bi], ss=bookPhase(B.band), pos=ss.findIndex(s=>s.idx===sessIdx); if(pos<0) return null;
  return Math.min(B.ch, Math.ceil(B.ch*(pos+1)/ss.length));
}
function bookLine(s){
  const bi=BOOKS.findIndex(B=>B.band===s.band); if(bi<0) return '';
  const B=BOOKS[bi], to=bookTarget(bi,s.idx), ss=bookPhase(B.band), pos=ss.findIndex(x=>x.idx===s.idx);
  const from = pos>0 ? Math.min(B.ch, bookTarget(bi,ss[pos-1].idx)+1) : 1;
  const read=(S.books&&S.books[bi])||0;
  const what = from>to ? `continue chapter ${to}` : from===to ? `chapter ${to}` : `chapters ${from}–${to}`;
  const ok=read>=to;
  return `<div class="pbook ${ok?'on':''}"><span class="pbi">❧</span><div><b>Your book (optional, 10–15 min):</b> <i>${esc(B.title)}</i>, ${what}${ok?' · ✓ you are there':''}</div><a class="btn ghost" href="#books-${bi}">Open →</a></div>`;
}
function bookStatus(bi){
  const B=BOOKS[bi], p=planStatus(), ss=bookPhase(B.band), today=p.today;
  const past=ss.filter(s=>p.dates[s.idx]<=today); const target=past.length?bookTarget(bi,past[past.length-1].idx):0;
  const read=(S.books&&S.books[bi])||0;
  const start=p.dates[ss[0].idx], end=p.dates[ss[ss.length-1].idx];
  return {B,read,target,start,end,started:start<=today};
}
function homeBooks(){
  return `<h2 class="sec">Your three books</h2>
  <p class="note" style="margin-top:-6px">One book for each level of the course, read in the 10–15 minutes outside your study session. Buy them now (paper, Kindle or audiobook) so each one is ready when its phase starts.</p>
  <div class="bookgrid">${BOOKS.map((B,i)=>{ const st=bookStatus(i), pct=Math.round(100*st.read/B.ch);
    return `<a class="card bookcard" href="#books-${i}"><span class="bcover b${i}"><b>${esc(B.title)}</b><small>${esc(B.author)}</small></span><span class="lab">${B.lvl}</span><span class="note">${esc(fmtDay(st.start,{day:'numeric',month:'short'}))} – ${esc(fmtDay(st.end,{day:'numeric',month:'short'}))}</span><span class="rw-bar"><i style="width:${pct}%"></i></span><span class="note">${st.read}/${B.ch} chapters${st.started&&st.read<st.target?` · aim for chapter ${st.target}`:''}</span></a>`; }).join('')}</div>`;
}
function renderBooks(id){
  const i = id==null ? null : +id;
  if(i==null||!BOOKS[i]){
    $('#main').innerHTML=`<header class="uhead"><div class="eyebrow">Every day · reading</div><h1 class="title">Your books</h1><p class="subtitle">Three real novels, one per level, chosen to match the grammar of each phase. Each one also has a film or series to watch in English when you finish it.</p></header>${homeBooks()}
     <section class="card"><div class="card-h"><div><span class="lab">How to read</span><h3>Without suffering, and without a dictionary</h3></div></div><ul class="dots"><li>Read with a pencil. Underline, guess from context and keep going.</li><li>Look up a word only if it blocks the story or comes back three times. Then add it to <a href="#beyond">My words</a>.</li><li>Audiobook trick: listen to a chapter while you read it. It joins the written word to the sound, exactly what films need.</li><li>When you finish a chapter, write two or three sentences about it in <a href="#beyond">Tell me about it</a> and get them corrected.</li></ul></section>`;
    $('#main').querySelectorAll('[data-go]').forEach(()=>{});
    return;
  }
  const B=BOOKS[i], st=bookStatus(i), read=st.read, pct=Math.round(100*read/B.ch);
  $('#main').innerHTML=`<header class="uhead"><div class="eyebrow"><a href="#books">Your books</a> · ${B.lvl}</div><h1 class="title">${esc(B.title)}</h1><p class="subtitle">${esc(B.author)}, ${B.year} · ${B.pages} · ${B.ch} chapters</p></header>
   <div class="bookhead"><span class="bcover lg2 b${i}"><b>${esc(B.title)}</b><small>${esc(B.author)}</small></span>
    <div class="card" style="margin:0"><span class="lab">Read it during</span><h3 style="margin:4px 0 6px">${esc(fmtDay(st.start,{day:'numeric',month:'long'}))} – ${esc(fmtDay(st.end,{day:'numeric',month:'long',year:'numeric'}))}</h3><p class="note">${esc(B.tip)}</p>
     <div class="btnrow" style="align-items:center"><button class="btn" id="bminus" type="button" aria-label="One chapter less">−</button><b class="big" style="font-size:30px">${read}<small style="font-size:.5em">/${B.ch}</small></b><button class="btn primary" id="bplus" type="button">+ I finished a chapter</button></div>
     <span class="rw-bar" style="margin-top:10px"><i style="width:${pct}%"></i></span>
     <p class="note" style="margin:8px 0 0">${read>=B.ch?'<span class="pen" style="font-size:24px">Finished!</span> Now watch the adaptation below.':st.started?(read>=st.target?'On track: you are where the plan expects.':`The plan suggests chapter ${st.target} by today.`):'This book starts with its phase of the plan. You can always start earlier.'}</p></div></div>
   <section class="card"><div class="card-h"><div><span class="lab">Why this book</span><h3>What you get from it</h3></div></div><p>${esc(B.why)}</p><p class="note"><b>Grammar you will see:</b> ${esc(B.grammar)}</p></section>
   <section class="card"><div class="card-h"><div><span class="lab">Before you start</span><h3>Six words you will meet early</h3></div></div><div class="tw"><table class="tbl">${B.words.map(w=>`<tr><td><b>${esc(w[0])}</b></td><td class="pt">${esc(w[1])}</td></tr>`).join('')}</table></div></section>
   <section class="card"><div class="card-h"><div><span class="lab">When you finish</span><h3>Watch it in English</h3></div></div><p><b>${esc(B.screen)}</b>. Watch it with English subtitles and notice what was changed from the book. Then summarise both in <a href="#beyond">Tell me about it</a>.</p></section>
   <p class="note">To buy it: any bookshop, Amazon or Kindle store. Ask for the original English edition, not a simplified one.</p>`;
  const set=v=>{ S.books=S.books||{}; S.books[i]=Math.max(0,Math.min(B.ch,v)); save(); renderBooks(i); renderNav(route()); };
  $('#bplus').onclick=()=>{ tick(1); set(read+1); if(read+1===B.ch) toast(`<span class="pen">Book finished!</span> ${esc(B.title)}`); };
  $('#bminus').onclick=()=>set(read-1);
}
/* end */
