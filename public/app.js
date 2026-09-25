const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const paths={grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',dense:'<path d="M3 3h4v4H3zM10 3h4v4h-4zM17 3h4v4h-4zM3 10h4v4H3zM10 10h4v4h-4zM17 10h4v4h-4zM3 17h4v4H3zM10 17h4v4h-4zM17 17h4v4h-4z"/>',moon:'<path d="M20 13.5A8.5 8.5 0 0 1 10.5 4 8.5 8.5 0 1 0 20 13.5Z"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>',trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 5H5a2 2 0 0 0-2 2c0 2.2 1.8 3.5 4 3.5M16 5h3a2 2 0 0 1 2 2c0 2.2-1.8 3.5-4 3.5M12 13v4M8.5 20h7M10 17h4"/>',flask:'<path d="M9 3h6M10 3v5.5L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 8.5V3"/><path d="M7.5 14h9"/>',folderplus:'<path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="M12 11v6M9 14h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>',mute:'<path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="m16 9 6 6M22 9l-6 6"/>',book:'<path d="M5 3h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V3Z"/><path d="M5 17a2 2 0 0 1 2-2h11"/>',package:'<path d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8M1 3h22v5H1zM10 12h4"/>',tv:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M9 6l3-3 3 3M8 21h8"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',folder:'<path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>',sparkles:'<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4M18 4h4"/>',shuffle:'<path d="M3 6h3c5 0 7 12 12 12h3m-4-4 4 4-4 4M3 18h3c2 0 3.8-2 5-4M14 9c1.2-2 2.5-3 4-3h3m-4-4 4 4-4 4"/>',play:'<path d="m8 4 13 8-13 8V4Z"/>',pause:'<path d="M8 4v16M16 4v16"/>',keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/>',search:'<circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 5 5"/>',plus:'<path d="M12 4v16M4 12h16"/>','arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>','arrow-left':'<path d="M20 12H4m6-6-6 6 6 6"/>','arrow-down':'<path d="M12 4v16m-6-6 6 6 6-6"/>',x:'<path d="m6 6 12 12M6 18 18 6"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 15v5h16v-5"/>',upload:'<path d="M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5"/>',edit:'<path d="m15 5 4 4M4 20l5-1L21 7a2.8 2.8 0 0 0-4-4L5 15l-1 5Z"/>',link:'<path d="m10 13 4-4M8 15l-2 2a3.5 3.5 0 0 1-5-5l5-5a3.5 3.5 0 0 1 5 0m2 2 2-2a3.5 3.5 0 0 1 5 5l-5 5a3.5 3.5 0 0 1-5 0"/>',check:'<path d="m4 12 5 5L20 6"/>'};
const icon=n=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[n]||paths.sparkles}</svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function hydrateIcons(root=document){root.querySelectorAll('[data-icon]').forEach(e=>e.innerHTML=icon(e.dataset.icon));}
hydrateIcons();
const moods=[['all','✳','All memes'],['relatable','☁','Too relatable'],['chaos','⚡','Pure chaos'],['wholesome','♡','Wholesome'],['judgment','◉','Judging you'],['sleepy','☾','Very eepy'],['snacks','◒','Snack time']];
const moodInfo=m=>moods.find(x=>x[0]===m)||moods[1];
const moodTag=m=>`<span class="mood-label" data-mood="${esc(m)}">${moodInfo(m)[1]} ${moodInfo(m)[2]}</span>`;
const readState=(k,d)=>{try{return JSON.parse(localStorage.getItem('mmc-'+k))??d}catch{return d}};
const asIds=v=>new Set(Array.isArray(v)?v.filter(x=>typeof x==='string'):[]);
let saved=asIds(readState('saved',[])),seen=asIds(readState('seen',[])),created=[],library=[],page='discover',mood='all',query='',collection='',limit=18,order=[];
function readSets(){const d=readState('sets',[]);return Array.isArray(d)?d.filter(s=>s&&typeof s.id==='string'&&typeof s.name==='string'&&Array.isArray(s.ids)):[]}
let userSets=readSets();
const saveSets=()=>setLocal('sets',userSets);
const setById=id=>userSets.find(s=>s.id===id);
function createSet(name){const s={id:'set-'+crypto.randomUUID(),name:String(name||'').trim().slice(0,40)||'Untitled set',ids:[]};userSets.push(s);saveSets();return s}
function deleteSet(id){userSets=userSets.filter(s=>s.id!==id);if(collection===id)collection='';saveSets()}
function toggleInSet(setId,memeId){const s=setById(setId);if(!s)return false;const has=s.ids.includes(memeId);s.ids=has?s.ids.filter(x=>x!==memeId):[...s.ids,memeId];saveSets();return !has}
function renderSets(){const p=$('#sets-panel');if(!p)return;
  p.innerHTML=`<h3>Your sets</h3><p class="leader-sub">Hoard with purpose. Sets live in this browser — or in a file, if you export them.</p><form id="new-set-form"><input id="new-set-name" maxlength="40" placeholder="Name a set… e.g. send to mom" aria-label="New set name"><button class="primary-button" type="submit">Create set</button></form><div class="lab-row"><button type="button" class="outline-button" data-exportsets>⤓ Export sets</button><label class="outline-button upload-label">⤒ Import sets<input type="file" id="import-sets" accept="application/json,.json" hidden></label></div>${userSets.length?userSets.map(s=>`<div class="set-row"><button class="set-open ${collection===s.id?'active':''}" data-collection="${esc(s.id)}" aria-pressed="${collection===s.id}"><strong>${esc(s.name)}</strong><span>${s.ids.length} ${s.ids.length===1?'meme':'memes'}</span></button><button class="set-delete" data-delset="${esc(s.id)}" aria-label="Delete ${esc(s.name)}">Delete</button></div>`).join(''):'<p class="leader-empty">No sets yet. Name one above — future you says thanks.</p>'}`}
function exportSets(){if(!userSets.length){toast('No sets to export. Hoard first.');return}const blob=new Blob([JSON.stringify({app:'MEMECHIMP-sets',version:1,exported:new Date().toISOString(),sets:userSets.map(s=>({name:s.name,ids:s.ids}))},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='meme-sets.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);toast(`Exported ${userSets.length} ${userSets.length===1?'set':'sets'}. Send it to a friend.`)}
async function importSets(file){if(!file)return;try{const data=JSON.parse(await file.text());const arr=Array.isArray(data)?data:data.sets;if(!Array.isArray(arr))throw new Error('bad file');const known=new Set(allMemes().map(m=>m.id));let added=0;
  for(const s of arr){if(!s||typeof s.name!=='string'||!Array.isArray(s.ids))continue;const ids=[...new Set(s.ids.filter(id=>typeof id==='string'&&known.has(id)))];let name=s.name.trim().slice(0,40)||'Untitled set';if(userSets.some(u=>u.name===name))name=`${name} (imported)`;userSets.push({id:'set-'+crypto.randomUUID(),name,ids});added++}
  if(!added)throw new Error('bad file');saveSets();if(page==='collections')render();toast(`Imported ${added} ${added===1?'set':'sets'}. Sharing is caring.`)}catch{toast('That file isn’t a MemeChimp set export.')}}
function renderCollect(){const m=currentMeme();const box=$('#collect-list');if(!box||!m)return;
  box.innerHTML=userSets.length?userSets.map(s=>`<button class="collect-row ${s.ids.includes(m.id)?'in':''}" data-collect="${esc(s.id)}" aria-pressed="${s.ids.includes(m.id)}"><span>${s.ids.includes(m.id)?'✓':'＋'} ${esc(s.name)}</span><span class="leader-score">${s.ids.length}</span></button>`).join(''):'<p class="leader-empty">No sets yet — create one below.</p>'}
const PACK_MS=24*60*60*1000;
function readPack(){const d=readState('pack',{lastOpened:0,streak:0,best:0,haul:{},lastPull:null,scrap:0});return {lastOpened:d.lastOpened|0,streak:d.streak|0,best:d.best|0,haul:{...d.haul||{}},lastPull:d.lastPull||null,scrap:d.scrap|0}}
let pack=readPack(),packStage='sealed',packReveal=null,keepTab='sets';
const savePack=()=>setLocal('pack',pack);
const haulSize=()=>Object.values(pack.haul).reduce((a,b)=>a+(b|0),0);
const canOpenPack=()=>Date.now()-(pack.lastOpened||0)>=PACK_MS;
function packCountdown(){const left=PACK_MS-(Date.now()-(pack.lastOpened||0));if(left<=0)return 'Ready!';const h=Math.floor(left/3600000),m=Math.floor(left%3600000/60000),s=Math.floor(left%60000/1000);return `${h}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`}
function rollRarity(){const r=Math.random();return r<0.08?'legendary':r<0.3?'rare':'common'}
function openPack(){if(!canOpenPack()){toast(`Next pack in ${packCountdown()}. Patience, goblin.`);return}doPull(false)}
function forgePack(){if((pack.scrap|0)<3){toast('Need 3 scrap. Melt spare copies below.');return}pack.scrap-=3;doPull(true)}
function meltDupe(id){if((pack.haul[id]|0)<2){toast('Only spare copies can be melted. The original stays.');return}pack.haul[id]--;pack.scrap=(pack.scrap|0)+1;savePack();renderPacks();sfx('blip');toast('+1 scrap. The furnace hungers.')}
function doPull(bonus){
  const pool=allMemes();if(!pool.length)return;
  const unseen=pool.filter(m=>!pack.haul[m.id]&&!seen.has(m.id));
  const lucky=Math.random()<0.7&&unseen.length?unseen[Math.floor(Math.random()*unseen.length)]:pool[Math.floor(Math.random()*pool.length)];
  const rarity=rollRarity(),wasOwned=(pack.haul[lucky.id]|0)>0;
  pack.haul[lucky.id]=(pack.haul[lucky.id]|0)+1;
  if(!bonus){const gap=Date.now()-(pack.lastOpened||0);pack.streak=pack.lastOpened&&gap<2*PACK_MS?pack.streak+1:1;pack.best=Math.max(pack.best,pack.streak);pack.lastOpened=Date.now()}
  pack.lastPull={id:lucky.id,rarity,shiny:wasOwned,at:Date.now(),bonus:!!bonus};
  savePack();packStage='opening';packReveal=pack.lastPull;renderPacks();sfx('chaos');
  setTimeout(()=>{if(page!=='packs')return;packStage='revealed';renderPacks();
    if(rarity==='legendary'){sfx('fanfare');confetti();biscuitExcited()}else if(rarity==='rare'){sfx('save');biscuitHappy()}else sfx('save');
    checkAwards();if(!bonus&&pack.streak>=2)buddySay('streak');
    toast(wasOwned?`✨ SHINY ${lucky.title}! A duplicate, but make it fashion.`:`${bonus?'Forged pull! ':rarity==='legendary'?'🌟 LEGENDARY PULL! ':rarity==='rare'?'💎 Rare pull! ':''}“${lucky.title}” joins your haul.`)}
  ,1100)}
function renderPacks(){const panel=$('#pack-panel');if(!panel)return;
  const ready=canOpenPack();
  panel.innerHTML=packStage==='opening'
   ?`<div class="pack-sealed opening"><span>📦</span><p>Ripping it open…</p></div>`
   :ready
   ?`<button class="pack-sealed" id="pack-open" aria-label="Open today's pack"><span>📦</span><strong>Today's drop is here!</strong><small>Tap to rip it open</small></button>`
   :`<div class="pack-wait"><div><strong>Next drop in</strong><div class="pack-timer" id="pack-timer">${packCountdown()}</div><span class="arena-hint">one pack per human per 24h. rules are rules.</span></div>${pack.lastPull?packMini(allMemes().find(m=>m.id===pack.lastPull.id),pack.lastPull):''}</div>`;
  if(packStage==='revealed'&&packReveal){const m=allMemes().find(m=>m.id===packReveal.id);if(m){panel.insertAdjacentHTML('beforeend',packMini(m,packReveal,true));panel.insertAdjacentHTML('beforeend',`<div class="reveal-actions"><button class="outline-button" data-share="${esc(m.id)}">⏫ Share this pull</button></div>`)}}
  $('#pack-stats').innerHTML=`<div class="stat-chip" title="Consecutive days with a pack opened"><strong><span data-count="${pack.streak}">0</span> 🔥</strong>day streak</div><div class="stat-chip" title="Your longest opening run"><strong><span data-count="${pack.best}">0</span> 🏆</strong>best streak</div><div class="stat-chip" title="Total memes pulled"><strong><span data-count="${haulSize()}">0</span></strong>memes hauled</div>`;countUp($('#pack-stats'));
  renderForge();
  const bc=$('#daily-count');if(bc)bc.textContent=ready?'🎁':haulSize()}
function renderKeep(){const tabs=$('#keep-tabs');if(!tabs)return;const loved=allMemes().filter(m=>saved.has(m.id)).length;
  tabs.innerHTML=[['sets','📁 Sets'],['haul',`📦 Haul · ${haulSize()}`],['loved',`♥ Loved · ${loved}`],['trophies',`🏆 Trophies · ${awards.length}/${ACH.length}`]].map(([id,label])=>`<button class="${keepTab===id?'active':''}" data-keeptab="${id}">${label}</button>`).join('');
  const show={sets:['collection-grid','sets-panel'],haul:['keep-haul'],loved:['keep-loved'],trophies:['trophies']}[keepTab]||[];
  for(const id of ['collection-grid','sets-panel','keep-haul','keep-loved','trophies'])document.getElementById(id).hidden=!show.includes(id);
  if(keepTab==='sets'){$('#collection-grid').innerHTML=collections.map(c=>`<button class="collection-card ${collection===c.id?'active':''}" data-collection="${c.id}" aria-pressed="${collection===c.id}"><small>${library.filter(c.filter).length} MEMES · CURATED COLLECTION</small><h3>${c.title}</h3><p>${c.description}</p><img src="/assets/memes/${c.image}" alt="" loading="lazy"></button>`).join('');renderSets()}
  if(keepTab==='haul'){const list=allMemes().filter(m=>pack.haul[m.id]).slice(0,60);$('#keep-haul').innerHTML=list.length?list.map((m,i)=>packCard(m,i)).join(''):'<p class="leader-empty">No pulls yet. Rip a pack on the Daily Drop page.</p>'}
  if(keepTab==='loved'){const list=allMemes().filter(m=>saved.has(m.id)).slice(0,60);$('#keep-loved').innerHTML=list.length?list.map(card).join(''):'<p class="leader-empty">No loved memes yet — tap ♥ on any meme.</p>'}
  if(keepTab==='trophies')renderTrophies()}
function renderForge(){const f=$('#forge');if(!f)return;const dupes=allMemes().filter(m=>(pack.haul[m.id]|0)>1);
  f.innerHTML=`<h3>The Forge</h3><p class="leader-sub">Melt spare copies into scrap. <strong>3 scrap = 1 bonus pack</strong>, no waiting.</p><div class="forge-top"><span class="scrap-count">🪙 ${pack.scrap|0} scrap</span><button class="primary-button" data-forge ${((pack.scrap|0)<3)?'disabled':''}>Forge bonus pack · 3 🪙</button></div>${dupes.length?dupes.map(m=>`<div class="leader-row"><img src="${esc(m.image)}" alt="" loading="lazy"><span class="leader-name">${esc(m.title)}</span><span class="leader-score">×${pack.haul[m.id]} owned</span><button class="leader-open" data-melt="${esc(m.id)}" aria-label="Melt a spare copy of ${esc(m.title)}">Melt +1</button></div>`).join(''):'<p class="leader-empty">No spares yet. Duplicates you pull become meltable here.</p>'}`}
function packMini(m,pull,fresh){if(!m)return '';return `<button class="pack-mini ${pull.rarity}${pull.shiny?' shiny':''}${fresh?' fresh':''}" data-open="${esc(m.id)}" aria-label="View ${esc(m.title)}"><img src="${esc(m.image)}" alt="" loading="lazy"><span><strong>${pull.shiny?'✨ SHINY ':''}${esc(m.title)}</strong><small>${pull.rarity}${pull.shiny?' · dupe upgrade':''}</small></span></button>`}
async function sharePull(id){const m=allMemes().find(m=>m.id===id);if(!m)return;
  await document.fonts.ready;let img;try{img=await loadImage(m.image)}catch{toast('That meme refuses to travel.');return}
  const width=1000,pad=48,fontSize=44,lineHeight=56,headH=150,footH=120;
  const canvas=document.createElement('canvas');canvas.width=width;
  let ctx=canvas.getContext('2d');const sht=memeTheme(m);ctx.font=`800 ${fontSize}px ${sht.font}`;
  const top=m.top?wrapText(ctx,m.top.toUpperCase(),width-pad*2):[],bottom=m.bottom?wrapText(ctx,m.bottom.toUpperCase(),width-pad*2):[];
  const imageH=Math.round(Math.min(img.height*(width/img.width),1100)),th=top.length?top.length*lineHeight+40:0,bh=bottom.length?bottom.length*lineHeight+40:0;
  canvas.height=headH+th+imageH+bh+footH;ctx=canvas.getContext('2d');ctx.textBaseline='top';
  ctx.fillStyle='#4A412A';ctx.fillRect(0,0,width,headH);
  ctx.fillStyle='#F7F5EE';ctx.font='800 34px "DM Sans", sans-serif';ctx.fillText('MEMECHIMP · DAILY DROP',pad,40);
  const pull=pack.lastPull&&pack.lastPull.id===id?pack.lastPull:null,tag=pull?`${pull.rarity.toUpperCase()}${pull.shiny?' · SHINY':''}`:'PACK PULL';
  ctx.fillStyle='#B9C5F3';ctx.font='700 26px "DM Sans", sans-serif';ctx.fillText(tag,pad,86);
  ctx.fillStyle=sht.bg;ctx.fillRect(0,headH,width,th+imageH+bh);
  ctx.fillStyle=sht.fg;ctx.font=`800 ${fontSize}px ${sht.font}`;
  top.forEach((s,i)=>ctx.fillText(s,pad,headH+20+i*lineHeight));
  const ratio=Math.min(width/img.width,imageH/img.height),iw=img.width*ratio,ih=img.height*ratio;
  ctx.drawImage(img,(width-iw)/2,headH+th+(imageH-ih)/2,iw,ih);
  bottom.forEach((s,i)=>ctx.fillText(s,pad,headH+th+imageH+20+i*lineHeight));
  ctx.fillStyle='#4A412A';ctx.fillRect(0,headH+th+imageH+bh,width,footH);
  ctx.fillStyle='#F7F5EE';ctx.font='700 28px "DM Sans", sans-serif';ctx.fillText(m.title.slice(0,48),pad,headH+th+imageH+bh+28);
  ctx.fillStyle='#B9C5F3';ctx.font='500 22px "DM Sans", sans-serif';ctx.fillText('ripped from a daily pack · good memes, questionable behavior',pad,headH+th+imageH+bh+66);
  const blob=await new Promise(res=>canvas.toBlob(res,'image/png'));if(!blob){toast('The card couldn’t be made.');return}
  const file=new File([blob],'meme-drop.png',{type:'image/png'});
  try{if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'My daily meme'});toast('Shared! Go forth and convert friends.');return}}catch(e){if(e&&e.name==='AbortError')return}
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`meme-drop-${m.id}.png`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);toast('Card downloaded. Spread the gospel.')}
function packCard(m,i){const n=pack.haul[m.id]|0;return `<article class="meme-card${n>1?' is-shiny':''}" style="animation-delay:${Math.min(i,8)*22}ms"><button class="meme-open" data-open="${esc(m.id)}" aria-label="Open ${esc(m.title)}">${n>1?'<span class="shiny-badge">✨ SHINY</span>':''}${visual(m,i<6?'eager':'lazy')}</button><div class="card-meta"><div class="card-topline">${moodTag(m.mood)}<span class="card-source">${n>1?`PULLED ×${n}`:'PACK PULL'}</span></div><div class="card-bottomline"><h3 class="card-title">${esc(m.title)}</h3><button class="save-button" data-share="${esc(m.id)}" aria-label="Share ${esc(m.title)}">${icon('upload')}</button><button class="save-button ${saved.has(m.id)?'saved':''}" data-save="${esc(m.id)}" aria-label="Save ${esc(m.title)}" aria-pressed="${saved.has(m.id)}">${icon('heart')}</button></div></div></article>`}
setInterval(()=>{const el=$('#pack-timer');if(el&&page==='packs'&&!canOpenPack())el.textContent=packCountdown();if(el&&page==='packs'&&canOpenPack()&&packStage!=='opening')renderPacks()},1000);
const ACH=[
 {id:'collector',icon:'💾',name:'Hoarder',desc:'Save 10 memes'},
 {id:'creator',icon:'✨',name:'Meme parent',desc:'Create your first meme'},
 {id:'prolific',icon:'🏭',name:'Meme factory',desc:'Create 5 memes'},
 {id:'explorer',icon:'🧭',name:'Completionist-ish',desc:'View 30 different memes'},
 {id:'first-pull',icon:'📦',name:'Unboxer',desc:'Open your first daily pack'},
 {id:'week-streak',icon:'📅',name:'Regular',desc:'Open packs 7 days in a row'},
 {id:'dex-half',icon:'📖',name:'Halfway there',desc:'Discover half the archive'},
 {id:'dex-full',icon:'🌟',name:'Living dex',desc:'Discover all 100 memes'}];
let awards=readState('awards',[]);
function checkAwards(){const earned=[];
  const need=(id,ok)=>{if(ok&&!awards.includes(id)&&!earned.includes(id))earned.push(id)};
  need('collector',allMemes().filter(m=>saved.has(m.id)).length>=10);need('creator',created.length>=1);need('prolific',created.length>=5);
need('explorer',seen.size>=30);
  need('first-pull',haulSize()>=1);need('week-streak',pack.best>=7);
  need('dex-half',discoveredCount()>=Math.ceil(library.length/2));need('dex-full',library.length>0&&discoveredCount()>=library.length);
  if(!earned.length)return;awards=[...awards,...earned];setLocal('awards',awards);sfx('fanfare');
  toast(earned.length===1?`🏆 Achievement: ${ACH.find(a=>a.id===earned[0]).name}!`:`🏆 ${earned.length} achievements: ${earned.map(id=>ACH.find(a=>a.id===id).name).join(' · ')}!`);
  renderTrophies()}
function renderTrophies(){const t=$('#trophies');if(!t)return;
  t.innerHTML=`<h3>Trophies</h3><p class="leader-sub">${awards.length} of ${ACH.length} unlocked · stored in this browser</p><div class="trophy-grid">${ACH.map(a=>{const has=awards.includes(a.id);return `<div class="trophy ${has?'won':''}" title="${esc(a.desc)}"><span aria-hidden="true">${has?a.icon:'🔒'}</span><strong>${esc(a.name)}</strong><small>${esc(a.desc)}</small></div>`}).join('')}</div>`}
let viewerQueue=[],viewerIndex=0,autoTimer=null,tvMode=false,toastTimer=null,editing=null,inspired=false,uploadedTemplate=null,dbPromise=null;
const collections=[{id:'office',title:'The office survival kit',description:'For meetings that could have been naps.',image:'1bh7.jpg',filter:m=>m.tags.some(t=>['work','email','meeting','career','deadline'].includes(t))},{id:'battery',title:'The low battery club',description:'A safe space for professional nappers.',image:'11wis1.jpg',filter:m=>m.mood==='sleepy'},{id:'serotonin',title:'A little serotonin',description:'Small memes. Unreasonably big feelings.',image:'amuvy.jpg',filter:m=>m.mood==='wholesome'}];
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3300);}
function setLocal(k,value){try{localStorage.setItem('mmc-'+k,JSON.stringify(value));return true}catch{toast('Browser storage is unavailable. Download to keep a copy.');return false}}
function database(){if(!dbPromise)dbPromise=new Promise((res,rej)=>{const req=indexedDB.open('MEMECHIMP',2);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains('creations'))db.createObjectStore('creations',{keyPath:'id'});if(!db.objectStoreNames.contains('clips'))db.createObjectStore('clips',{keyPath:'id'})};req.onsuccess=()=>res(req.result);req.onerror=()=>rej(req.error)});return dbPromise}
async function dbReadClips(){try{const db=await database();return await new Promise((res,rej)=>{const r=db.transaction('clips').objectStore('clips').getAll();r.onsuccess=()=>res(r.result||[]);r.onerror=()=>rej(r.error)})}catch{return[]}}
async function dbPutClip(value){const db=await database();return new Promise((res,rej)=>{const tx=db.transaction('clips','readwrite');tx.objectStore('clips').put(value);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);tx.onabort=()=>rej(tx.error)})}
async function dbRead(){const db=await database();return new Promise((res,rej)=>{const r=db.transaction('creations').objectStore('creations').getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function dbPut(value){const db=await database();return new Promise((res,rej)=>{const tx=db.transaction('creations','readwrite');tx.objectStore('creations').put(value);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);tx.onabort=()=>rej(tx.error)})}
const allMemes=()=>[...library,...created];
const hotScore=id=>(pack.haul[id]|0)*3+(saved.has(id)?2:0)+(seen.has(id)?1:0);
function hotIds(){return new Set([...allMemes()].filter(m=>hotScore(m.id)>=2).sort((a,b)=>hotScore(b.id)-hotScore(a.id)).slice(0,12).map(m=>m.id))}
let templateFilter=null,hotCache=new Set();
function showTemplate(image){navigate('discover');templateFilter=image;limit=18;render();const m=library.find(m=>m.image===image);toast(m?`Every “${m.template}” in the house.`:'Template view.')}
function filterMemes(){let list=page==='studio'?[...created].reverse():page==='saved'?allMemes().filter(m=>saved.has(m.id)):[...library];
  if(templateFilter)list=list.filter(m=>m.image===templateFilter);
  if(collection){const c=collections.find(c=>c.id===collection);if(c)list=list.filter(c.filter);else{const u=setById(collection);if(u){const keep=new Set(u.ids);list=allMemes().filter(m=>keep.has(m.id))}}}
 if(mood!=='all')list=list.filter(m=>m.mood===mood);
 if(query){const terms=query.toLowerCase().trim().split(/\s+/);list=list.filter(m=>{const haystack=[m.title,m.top,m.bottom,m.template,m.mood,moodInfo(m.mood)[2],...m.tags].join(' ').toLowerCase();return terms.every(t=>haystack.includes(t))})}
  const sort=$('#sort').value;
  if(sort==='az')list.sort((a,b)=>a.title.localeCompare(b.title));else if(sort==='hot')list.sort((a,b)=>hotScore(b.id)-hotScore(a.id)||b.title.localeCompare(a.title));else if(sort==='unseen')list.sort((a,b)=>Number(seen.has(a.id))-Number(seen.has(b.id)));else if(order.length){const map=new Map(order.map((x,i)=>[x,i]));list.sort((a,b)=>(map.get(a.id)??999)-(map.get(b.id)??999))}
 return list;
}
function memeTheme(m){const fonts={dm:'"DM Sans", sans-serif',fraunces:'Fraunces, Georgia, serif',mono:'ui-monospace, SFMono-Regular, Menlo, monospace'};const styles={light:{bg:'#fff',fg:'#24231e'},dark:{bg:'#171410',fg:'#F7F5EE'},banana:{bg:'#FFD75E',fg:'#3A2F10'}};return {font:fonts[m?.font]||fonts.dm,...(styles[m?.style]||styles.light)}}
function visual(m,loading='lazy'){const st=m.sticker&&m.sticker.emoji?`<span class="sticker corner-${m.sticker.corner||'tr'}" aria-hidden="true">${esc(m.sticker.emoji)}</span>`:'';return `<div class="meme-visual font-${m.font||'dm'} style-${m.style||'light'}">${m.top?`<div class="meme-caption">${esc(m.top)}</div>`:''}<img class="meme-image" src="${esc(m.image)}" alt="${esc(m.template)}" loading="${loading}" decoding="async">${m.bottom?`<div class="meme-caption bottom">${esc(m.bottom)}</div>`:''}${st}</div>`}
function card(m,i){const hot=hotCache.has(m.id);return `<article class="meme-card" style="animation-delay:${Math.min(i,8)*22}ms"><button class="meme-open" data-open="${esc(m.id)}" aria-label="Open ${esc(m.title)}">${visual(m,i<6?'eager':'lazy')}</button><div class="card-meta"><div class="card-topline">${moodTag(m.mood)}${hot?'<span class="hot-badge">🔥 HOT</span>':''}<span class="card-source">${m.kind==='creation'?'YOUR CREATION':'CHIMP REMIX'}</span></div><div class="card-bottomline"><h3 class="card-title">${esc(m.title)}</h3><button class="save-button ${saved.has(m.id)?'saved':''}" data-save="${esc(m.id)}" aria-label="${saved.has(m.id)?'Unsave':'Save'} ${esc(m.title)}" aria-pressed="${saved.has(m.id)}">${icon('heart')}</button></div></div></article>`}
function updateCounts(){$('#all-count').textContent=library.length;const dc=$('#daily-count');if(dc)dc.textContent=canOpenPack()?'🎁':haulSize();const dx=$('#dex-count');if(dx)dx.textContent=discoveredCount();$('#created-count').textContent=created.length}
function render(){updateCounts();$$('[data-page]').forEach(b=>{b.classList.toggle('active',b.dataset.page===page);if(b.dataset.page===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
  $('#hero').hidden=page!=='discover'||!!query;$('#ticker').hidden=$('#hero').hidden;
  $('#breadcrumb').textContent=({discover:'THE MEME ARCHIVE',packs:'THE DAILY DROP',album:'THE COMPLETE DEX',saved:'SAVED FOR A RAINY DAY',collections:'HANDPICKED COLLECTIONS',studio:'THE NONSENSE LAB'})[page]||'THE MEME ARCHIVE';
  $('#section-eyebrow').textContent=({discover:'THE GOOD STUFF',packs:'A LITTLE GAMBLE.',album:'GOTTA PET ’EM ALL.',saved:'YOUR PERSONAL SEROTONIN STASH',collections:'A MEME FOR EVERY OCCASION',studio:'MADE BY YOU. APPROVED BY YOU.'})[page];
  const tmplName=templateFilter?(library.find(m=>m.image===templateFilter)?.template||'Template'):'';
  $('#library-title').textContent=page==='packs'?"Today's drop.":page==='album'?'Every meme. Yours to find.':templateFilter?`More ${tmplName}.`:query?`Memes matching “${query}”`:({discover:'Find your meme frequency.',saved:'The keepers.',collections:'Good things come in collections.',studio:'Your little masterpieces.'})[page];
  const desc=({discover:'',packs:'One sealed pack per human per 24 hours. Rip it, keep the meme, chase the streak.',album:'Open, pull, or browse the whole archive. Silhouettes are personal failures.',saved:'Every meme you’ve hearted, right here when you need one.',collections:'Small, handpicked corners of the archive. Pick one and settle in.',studio:'Your captions. Your memes. Your very questionable sense of humor.'})[page];$('#page-description').textContent=desc;$('#page-description').hidden=!desc;
  const inPacks=page==='packs',inAlbum=page==='album',hideGrid=inPacks||inAlbum;
  $('#packs').hidden=!inPacks;$('#album').hidden=!inAlbum;$('#shuffle').hidden=hideGrid;
  $('#filter-row').hidden=hideGrid;$('#collection-grid').hidden=page!=='collections';
  document.querySelector('.results-bar').hidden=hideGrid;$('#meme-grid').hidden=hideGrid;$('#empty').hidden=hideGrid?true:!!0;$('#load-more').hidden=hideGrid;$('#end-note').hidden=hideGrid;
  if(inPacks){renderPacks();return}
  if(inAlbum){renderDex();return}
  if(page==='collections'){renderKeep()}
  $('#stash').hidden=page!=='collections';
 $('#mood-filters').innerHTML=moods.map(([id,symbol,label])=>`<button class="mood-filter ${mood===id?'active':''}" data-mood="${id}" aria-pressed="${mood===id}"><span aria-hidden="true">${symbol}</span>${label}</button>`).join('');
  const list=filterMemes(),display=list.slice(0,limit);hotCache=hotIds();$('#meme-grid').innerHTML=display.map(card).join('');
  if(setById(collection)){$$('#meme-grid .meme-card').forEach(c=>{const id=c.querySelector('[data-open]')?.dataset.open;if(!id)return;const b=document.createElement('button');b.className='remove-from-set';b.dataset.removeFromSet=id;b.textContent='× Remove from set';b.setAttribute('aria-label','Remove from set');c.append(b)})}
  $('#result-count').innerHTML=list.length?`<strong>${list.length} ${list.length===1?'meme':'memes'}</strong> ${page==='saved'?'worth keeping':mood==='all'&&!query&&!collection?'and not a single thought':collection?'in this collection':'in this corner'} <span class="shown-count">· showing ${display.length}</span>${templateFilter?' · <button class="leader-open" data-tclear>all templates</button>':''}`:'0 memes found';
 $('#empty').hidden=!!list.length;$('#load-more').hidden=list.length<=limit;$('#end-note').hidden=!list.length||list.length>limit;
 const unfiltered=!query&&mood==='all'&&!collection;
 $('#empty-title').textContent=page==='saved'&&unfiltered?'Your favorites are waiting to happen.':page==='studio'&&unfiltered?'Every masterpiece starts with a meme.':'No memes in this corner.';
  $('#empty-copy').textContent=page==='saved'&&unfiltered?'Tap the heart on any meme. We’ll keep it warm for you.':page==='studio'&&unfiltered?'Pick a meme, add a caption, make someone’s day.':`Try a different search — ${library.length} memes are hiding somewhere.`;
 $('#empty-action').textContent=page==='studio'&&unfiltered?'Make your first meme':page==='saved'&&unfiltered?'Find some favorites':'Show all memes';
}
const BUDDY_QUIPS={
 hello:['Psst. I saved you the good memes. You’re welcome.','New here? Rule one: trust the banana cat. Rule two: see rule one.','I curate. The chimp approves. Mostly.'],
 idle:['Still here? Elite behavior.','You’ve been staring for a while. Hydrate, then resume memes.','I counted your blinks. Rookie numbers.','The chimp noticed you stayed. They’re pretending not to care.'],
 click:['Boop received. Filing it under “morale”.','Yes, I’m real. No, I won’t share my snacks.','Poke me again and I’ll tell the chimp.','I’m the reason the vibes are like this.'],
 night:['Past midnight, huh? The forbidden browsing hours. Respect.','Shh. The day-people must never know about this.'],
 packReady:['Your daily pack is RIPE. Go rip it.','Psst — fresh pack upstairs. Don’t let it age.'],
 streak:['Streak looking tasty. Don’t fumble it.','One more day keeps the streak dream alive.']};
let buddyMuted=readState('buddy',{muted:false}).muted===true,buddyLast=0,buddyHideT=null,buddyPressT=null,buddyTypeT=null;
function buddySay(kind){if(buddyMuted&&kind!=='force')return;const now=Date.now();if(kind!=='force'&&now-buddyLast<25000)return;buddyLast=now;
  const lines=BUDDY_QUIPS[kind]||BUDDY_QUIPS.idle;const b=$('#buddy-bubble');if(!b)return;
  const msg=lines[Math.floor(Math.random()*lines.length)];b.hidden=false;clearTimeout(buddyHideT);clearInterval(buddyTypeT);b.classList.remove('typing');
  if(reducedMotion()){b.textContent=msg;buddyHideT=setTimeout(()=>{b.hidden=true},4500);return}
  let i=0;b.textContent='';b.classList.add('typing');buddyTypeT=setInterval(()=>{i++;b.textContent=msg.slice(0,i);if(i>=msg.length){clearInterval(buddyTypeT);b.classList.remove('typing');buddyHideT=setTimeout(()=>{b.hidden=true},4500)}},14)}
function buddyInit(){const w=$('#chimp-buddy');if(!w)return;w.hidden=false;w.classList.toggle('muted',buddyMuted);
  setTimeout(()=>{if(page==='discover'&&!location.hash.slice(1)){buddySay('hello');sfx('meow')}},2500);
  $('#buddy-btn').onclick=()=>{sfx('meow');biscuitPoke();buddySay('force')};
  $('#buddy-btn').addEventListener('pointerdown',()=>{clearTimeout(buddyPressT);buddyPressT=setTimeout(()=>{buddyMuted=!buddyMuted;setLocal('buddy',{muted:buddyMuted});w.classList.toggle('muted',buddyMuted);$('#buddy-bubble').hidden=true;toast(buddyMuted?'Biscuit muted. She’ll pretend it doesn’t hurt.':'Biscuit is back. She missed you terribly.')},650)});
  $('#buddy-btn').addEventListener('pointerup',()=>clearTimeout(buddyPressT));
  $('#buddy-btn').addEventListener('pointerleave',()=>clearTimeout(buddyPressT));
  let idleT=null;const poke=()=>{biscuitWake();clearTimeout(idleT);idleT=setTimeout(()=>buddySay('idle'),90000);const h=new Date().getHours();if((h>=23||h<5)&&Math.random()<0.3)buddySay('night')};
  for(const ev of ['pointerdown','keydown'])document.addEventListener(ev,poke,{passive:true,capture:true});poke();buddy3D();biscuitStart()}
function buddy3D(){const btn=$('#buddy-btn');if(!btn||!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;let raf=null;addEventListener('pointermove',e=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=null;const r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=Math.max(-1,Math.min(1,(e.clientX-cx)/220)),dy=Math.max(-1,Math.min(1,(e.clientY-cy)/220));btn.style.transform=`rotateY(${(dx*22).toFixed(1)}deg) rotateX(${(-dy*22).toFixed(1)}deg)`;btn.style.setProperty('--gx',`${50+dx*40}%`);btn.style.setProperty('--gy',`${50+dy*40}%`);biscuit.lookTX=dx;biscuit.lookTY=dy})},{passive:true})}
const biscuit={lookX:0,lookY:0,lookTX:0,lookTY:0,sleeping:false,y:0,vy:0,squash:0,blink:0,nextBlink:1800,earT:0,nextEar:6000,wave:0,happyT:0,excited:0,parts:[],lastActive:Date.now(),zT:0,started:false};
function biscuitBurst(n){for(let i=0;i<n;i++)biscuit.parts.push({x:68+(Math.random()-0.5)*50,y:60+(Math.random()-0.5)*40,vx:(Math.random()-0.5)*90,vy:-40-Math.random()*110,life:0,max:700+Math.random()*500,kind:'s',c:Math.random()<0.5?'#E8B84B':'#8F9DDF'})}
function biscuitPoke(){const B=biscuit;B.lastActive=Date.now();if(B.sleeping){B.sleeping=false;B.blink=160}if(B.y===0)B.vy=-330;B.wave=900;B.happyT=Math.max(B.happyT,900);biscuitBurst(6)}
function biscuitHappy(){const B=biscuit;B.lastActive=Date.now();if(B.sleeping)B.sleeping=false;if(B.y===0)B.vy=-400;B.happyT=1600;biscuitBurst(10)}
function biscuitExcited(){const B=biscuit;B.lastActive=Date.now();if(B.sleeping)B.sleeping=false;if(B.y===0)B.vy=-360;B.excited=2;B.happyT=1600;biscuitBurst(12)}
function biscuitWake(){biscuit.lastActive=Date.now();biscuit.sleeping=false}
function biscuitRR(x,a,b,w,h,r){x.beginPath();if(x.roundRect)x.roundRect(a,b,w,h,r);else x.rect(a,b,w,h);x.fill()}
function biscuitDraw(t){
  const c=$('#buddy-canvas');if(!c)return;const x=c.getContext('2d'),B=biscuit;
  x.clearRect(0,0,136,136);
  let g=x.createRadialGradient(68,56,8,68,64,68);
  g.addColorStop(0,'#FFFDF7');g.addColorStop(0.7,'#F2EBD7');g.addColorStop(1,'#DFD5B8');
  x.fillStyle=g;x.beginPath();x.arc(68,68,64,0,7);x.fill();
  x.lineWidth=4;x.strokeStyle='#4A412A';x.beginPath();x.arc(68,68,62,0,7);x.stroke();
  const h=Math.max(0,-B.y),sh=1-Math.min(0.45,h/80);
  x.fillStyle='rgba(51,46,32,.22)';x.beginPath();x.ellipse(68,121,28*sh,6*sh,0,0,7);x.fill();
  const br=1+Math.sin(t/(B.sleeping?950:480))*(B.sleeping?0.008:0.016);
  x.save();x.translate(68+B.lookX*5,97+B.y);x.scale(1+B.squash*0.28,(1-B.squash*0.24)*br);
  const fur='#F5EFE2',sh2='#DCD2B8',deep='#C4B797';
  const sw=Math.sin(t/450)*7;
  x.strokeStyle=sh2;x.lineCap='round';x.lineWidth=11;
  x.beginPath();x.moveTo(24,-16);x.quadraticCurveTo(42,-14+sw*0.4,44+sw*0.3,-32+sw);x.stroke();
  x.strokeStyle=fur;x.lineWidth=7;
  x.beginPath();x.moveTo(24,-16);x.quadraticCurveTo(42,-14+sw*0.4,44+sw*0.3,-32+sw);x.stroke();
  x.fillStyle=fur;biscuitRR(x,-28,-60,56,74,17);
  x.fillStyle=sh2;biscuitRR(x,8,-60,20,74,10);
  x.fillStyle='rgba(255,255,255,.55)';biscuitRR(x,-28,-60,9,74,7);
  x.fillStyle='#4A412A';x.fillRect(-13,-60,5,12);x.fillRect(-3,-62,5,14);x.fillRect(7,-60,5,12);
  const tw=B.earT>0?-7:0;
  x.fillStyle=fur;
  x.beginPath();x.moveTo(-28,-52);x.lineTo(-22,-74);x.lineTo(-8,-54);x.closePath();x.fill();
  x.beginPath();x.moveTo(28,-52);x.lineTo(22+tw,-74+tw);x.lineTo(8,-54);x.closePath();x.fill();
  x.fillStyle='#E8A58D';
  x.beginPath();x.moveTo(-24,-54);x.lineTo(-21,-66);x.lineTo(-13,-55);x.closePath();x.fill();
  x.beginPath();x.moveTo(24,-54);x.lineTo(21+tw,-66+tw);x.lineTo(13,-55);x.closePath();x.fill();
  const lx=B.lookX*3,ly=B.lookY*2;
  if(B.sleeping){
    x.strokeStyle='#2E2A20';x.lineWidth=3;x.lineCap='round';
    x.beginPath();x.moveTo(-17,-32);x.quadraticCurveTo(-11,-28,-5,-32);x.stroke();
    x.beginPath();x.moveTo(5,-32);x.quadraticCurveTo(11,-28,17,-32);x.stroke();
  }else if(B.blink>0){
    x.fillStyle='#2E2A20';biscuitRR(x,-17,-33,12,4,2);biscuitRR(x,5,-33,12,4,2);
  }else{
    x.fillStyle='#2E2A20';biscuitRR(x,-17,-39+ly,12,16,6);biscuitRR(x,5,-39+ly,12,16,6);
    x.fillStyle='#fff';biscuitRR(x,-14+lx,-36+ly,4,5,2);biscuitRR(x,8+lx,-36+ly,4,5,2);
  }
  x.fillStyle='rgba(232,160,140,.75)';biscuitRR(x,-26,-24,9,5,2);biscuitRR(x,17,-24,9,5,2);
  x.fillStyle='#FFFDF7';biscuitRR(x,-15,-20,30,17,8);
  x.fillStyle='#D97F6A';x.beginPath();x.moveTo(-4,-17);x.lineTo(4,-17);x.lineTo(0,-12);x.closePath();x.fill();
  if(B.happyT>0){
    x.fillStyle='#7A4A3A';biscuitRR(x,-8,-11,16,11,5);
    x.fillStyle='#E8A58D';biscuitRR(x,-4,-5,8,5,2);
  }else{
    x.strokeStyle='#2E2A20';x.lineWidth=2.5;x.lineCap='round';
    x.beginPath();x.moveTo(0,-12);x.quadraticCurveTo(0,-8,-5,-8);x.stroke();
    x.beginPath();x.moveTo(0,-12);x.quadraticCurveTo(0,-8,5,-8);x.stroke();
  }
  x.strokeStyle='rgba(74,65,42,.45)';x.lineWidth=1.6;
  for(const s of [-1,1])for(let i=0;i<3;i++){x.beginPath();x.moveTo(s*19,-18+i*5);x.lineTo(s*(30+lx),-20+i*6);x.stroke()}
  const wv=B.wave>0?Math.sin(B.wave/90)*5:0;
  x.fillStyle=fur;biscuitRR(x,-21,0,15,15,6);
  if(B.wave>0){x.save();x.translate(13,-2-14*(B.wave/900));x.rotate(wv*0.03);x.fillStyle=fur;biscuitRR(x,-7,-8,15,15,6);x.fillStyle=sh2;x.fillRect(4,-8,4,15);x.restore()}
  else{x.fillStyle=fur;biscuitRR(x,6,0,15,15,6)}
  x.fillStyle=sh2;x.fillRect(-21,9,4,6);x.fillRect(17,9,4,6);
  x.fillStyle=deep;x.fillRect(-28,8,56,3);
  x.restore();
  for(const p of B.parts){
    const a=1-p.life/p.max;
    if(p.kind==='z'){x.fillStyle=`rgba(66,79,130,${(0.9*a).toFixed(2)})`;x.font='bold 13px sans-serif';x.fillText('z',p.x,p.y)}
    else{x.strokeStyle=p.c;x.globalAlpha=a;x.lineWidth=2.4;x.beginPath();x.moveTo(p.x-4,p.y);x.lineTo(p.x+4,p.y);x.moveTo(p.x,p.y-4);x.lineTo(p.x,p.y+4);x.stroke();x.globalAlpha=1}
  }
}
function biscuitTick(t,last){
  if(reducedMotion())return;
  requestAnimationFrame(n=>biscuitTick(n,t));
  if(document.hidden)return;
  const w=$('#chimp-buddy');if(!w||w.hidden)return;
  const B=biscuit,dt=Math.min(50,t-last);
  B.lookX+=(B.lookTX-B.lookX)*Math.min(1,dt*0.006);
  B.lookY+=(B.lookTY-B.lookY)*Math.min(1,dt*0.006);
  if(!B.sleeping&&Date.now()-B.lastActive>60000)B.sleeping=true;
  B.nextBlink-=dt;if(B.nextBlink<=0){B.blink=140;B.nextBlink=2200+Math.random()*2800}
  if(B.blink>0)B.blink-=dt;
  B.nextEar-=dt;if(B.nextEar<=0){B.earT=320;B.nextEar=5000+Math.random()*6000}
  if(B.earT>0)B.earT-=dt;
  if(B.wave>0)B.wave-=dt;
  if(B.happyT>0)B.happyT-=dt;
  if(B.squash>0)B.squash=Math.max(0,B.squash-dt*0.004);
  if(B.y!==0||B.vy!==0){B.vy+=dt*2.6;B.y+=B.vy*dt/1000;if(B.y>=0){B.y=0;B.vy=0;B.squash=1;if(B.excited>0){B.excited--;B.vy=-330}}}
  if(B.sleeping){B.zT-=dt;if(B.zT<=0){B.zT=1100;B.parts.push({x:96,y:44,vx:8,vy:-16,life:0,max:2200,kind:'z'})}}
  for(const p of B.parts){p.life+=dt;if(p.kind!=='z'){p.vy+=dt*0.25;p.x+=p.vx*dt/1000;p.y+=p.vy*dt/1000}else{p.x+=p.vx*dt/1000;p.y+=p.vy*dt/1000}}
  B.parts=B.parts.filter(p=>p.life<p.max);
  biscuitDraw(t);
}
function biscuitStart(){const B=biscuit;if(B.started)return;B.started=true;B.lastActive=Date.now();
  if(reducedMotion()){biscuitDraw(0);return}
  requestAnimationFrame(t=>biscuitTick(t,t))}
function countUp(root){if(!root)return;if(matchMedia('(prefers-reduced-motion: reduce)').matches){root.querySelectorAll('[data-count]').forEach(s=>{s.textContent=s.dataset.count});return}root.querySelectorAll('[data-count]').forEach(s=>{const target=+s.dataset.count||0,t0=performance.now();const step=t=>{const p=Math.min(1,(t-t0)/600);s.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)})}
function fillTicker(){const el=$('#ticker-inner');if(!el||!library.length)return;const picks=Array.from({length:12},()=>library[Math.floor(Math.random()*library.length)].title);const half=picks.map(t=>`BREAKING: ${esc(t)}`).join(' &nbsp;✳&nbsp; ');el.innerHTML=`<span>${half} &nbsp;✳&nbsp; </span><span aria-hidden="true">${half} &nbsp;✳&nbsp; </span>`}
function heroParallax(){const hero=document.querySelector('.hero'),art=document.querySelector('.hero-art');if(!hero||!art||!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;let raf=null;hero.addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-0.5,dy=(e.clientY-r.top)/r.height-0.5;if(raf)return;raf=requestAnimationFrame(()=>{raf=null;art.style.transform=`translate(${dx*14}px,${dy*10}px)`})});hero.addEventListener('pointerleave',()=>{art.style.transform=''})}
function discoveredCount(){return library.filter(m=>seen.has(m.id)||pack.haul[m.id]).length}
function renderDex(){const total=library.length,done=discoveredCount(),pct=total?Math.round(done/total*100):0;
  $('#album').innerHTML=`<div class="dex-progress"><strong>${done} / ${total}</strong><span class="rate-bar" aria-hidden="true"><i style="width:${pct}%"></i></span><span>${pct}% discovered</span></div>`+moods.slice(1).map(([id,sym,label])=>{const ms=library.map((m,i)=>({m,idx:i})).filter(x=>x.m.mood===id),got=ms.filter(x=>seen.has(x.m.id)||pack.haul[x.m.id]).length;
   return `<h3 class="dex-mood">${sym} ${label} · ${got}/${ms.length}</h3><div class="dex-grid">${ms.map(x=>{const known=seen.has(x.m.id)||pack.haul[x.m.id];return known?`<button class="dex-card" data-open="${esc(x.m.id)}" aria-label="View ${esc(x.m.title)}"><span class="dex-num">#${String(x.idx+1).padStart(3,'0')}</span><img src="${esc(x.m.image)}" alt="" loading="lazy"><span class="dex-name">${esc(x.m.title)}</span></button>`:`<div class="dex-card locked" data-locked="${esc(x.m.id)}" role="img" aria-label="Undiscovered ${esc(label)} meme"><span class="dex-num">#${String(x.idx+1).padStart(3,'0')}</span><span class="dex-q">?</span><span class="dex-name">${esc(label)} mystery</span></div>`}).join('')}</div>`}).join('');
  const bc=$('#dex-count');if(bc)bc.textContent=done}
function navigate(p){page=p;mood='all';query='';collection='';templateFilter=null;limit=18;$('#search').value='';if(p==='packs'&&canOpenPack())setTimeout(()=>buddySay('packReady'),800);render();window.scrollTo({top:0,behavior:'smooth'})}
function toggleSave(id){const added=!saved.has(id);const next=new Set(saved);next.has(id)?next.delete(id):next.add(id);if(!setLocal('saved',[...next]))return;saved=next;if(added){sfx('save');biscuitHappy()}checkAwards();
   if(page==='packs')render();else{$$(`[data-save="${id}"]`).forEach(b=>{b.classList.toggle('saved',saved.has(id));b.setAttribute('aria-pressed',saved.has(id));const m=allMemes().find(m=>m.id===id);b.setAttribute('aria-label',`${saved.has(id)?'Unsave':'Save'} ${m?.title||'meme'}`)});updateCounts()}
 if($('#viewer').open)updateViewerSave();toast(saved.has(id)?'A good meme, safely tucked away.':'Released back into the wild.');
}
function shuffle(list){const out=[...list];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out}
function shuffledGrid(){order=shuffle(allMemes()).map(m=>m.id);$('#sort').value='curated';limit=18;sfx('chaos');render();toast('Same good memes. A little new chaos.')}
function currentMeme(){return viewerQueue[viewerIndex]}
function updateViewerSave(){const on=saved.has(currentMeme()?.id);$('#viewer-save').classList.toggle('saved',on);$('#viewer-save').setAttribute('aria-pressed',on);$('#viewer-save').innerHTML=icon(on?'check':'heart')+`<span>${on?'Saved':'Save'}</span>`}
function showViewer(){const m=currentMeme();if(!m)return;tvClip=false;clearTimeout(clipT);$('#viewer-image-wrap').innerHTML=visual(m,'eager');$('#viewer-title').textContent=m.title;$('#viewer-mood').outerHTML=moodTag(m.mood).replace('class="mood-label"','id="viewer-mood" class="mood-label"');$('#viewer-template').textContent=m.kind==='creation'?'Your original creation':`${m.template} · ${m.status||'remix'} · est. ${m.origin||'unknown'}`;$('#viewer-template').title=m.lore||'';const vm=$('#viewer-more');if(vm){vm.hidden=m.kind==='creation';if(m.kind!=='creation')vm.textContent=`More ${m.template}`}
  $('#viewer-progress').textContent=`${String(viewerIndex+1).padStart(2,'0')} / ${String(viewerQueue.length).padStart(2,'0')}`;
  $('#viewer').classList.toggle('tv',tvMode);const ov=$('#tv-overlay');ov.hidden=!tvMode;
  if(tvMode)updateTVOverlay(m)
 $('#viewer-source').hidden=!m.source;if(m.source)$('#viewer-source').href=m.source;updateViewerSave();
  seen.add(m.id);try{localStorage.setItem('mmc-seen',JSON.stringify([...seen]))}catch{}checkAwards();
 history.replaceState(null,'',m.kind==='creation'?location.pathname:location.pathname+'#meme='+encodeURIComponent(m.id));
 if(autoTimer)restartAutoplay();
}
function openViewer(id,list=filterMemes()){stopAutoplay();viewerQueue=list.length?[...list]:[...library];viewerIndex=Math.max(0,viewerQueue.findIndex(m=>m.id===id));if(!viewerQueue.length)return;showViewer();$('#viewer').showModal()}
function browse(delta){if(!viewerQueue.length)return;viewerIndex=(viewerIndex+delta+viewerQueue.length)%viewerQueue.length;if(tvMode){tvVJ++;if(tvVJ>=4){tvVJ=0;vjSlot()}}showViewer()}
function randomCat(){const list=filterMemes();if(!list.length){toast('No memes here yet. Discover a few first.');return}const unseen=list.filter(m=>!seen.has(m.id));const pool=unseen.length?unseen:list;const m=pool[Math.floor(Math.random()*pool.length)];openViewer(m.id,shuffle(list))}
function closeViewer(){$('#viewer').close()}
function enterTV(){if(!viewerQueue.length)return;tvReturn={queue:[...viewerQueue],index:viewerIndex};tvMode=true;const blk=tvBlock();tvChannel=blk.mood==='prime'?'all':blk.mood;tvPrime=blk.mood==='prime';tvBlockName=blk.name;
 if(tvPrime){viewerQueue=[...allMemes()].sort((a,b)=>hotScore(b.id)-hotScore(a.id)||a.title.localeCompare(b.title))}else{const pool=tvChannel==='all'?[...allMemes()]:allMemes().filter(m=>m.mood===tvChannel);viewerQueue=pool.length?shuffle(pool):shuffle([...allMemes()])}
 viewerIndex=0;tvPlays=0;tvVJ=0;const vj0=$('#tv-vj');if(vj0)vj0.textContent='';showViewer();restartAutoplay();zap();ident('📺 MEME TV',`${blk.name.toUpperCase()}${tvPrime?' · HOTTEST FIRST':''}`)}
function exitTV(){tvMode=false;tvSleep=0;tvClip=false;clearTimeout(clipT);$('#viewer').classList.remove('tv');$('#tv-overlay').hidden=true;$('#screen').hidden=true;stopAutoplay();if(tvReturn){viewerQueue=tvReturn.queue;viewerIndex=Math.min(tvReturn.index,Math.max(0,viewerQueue.length-1));tvReturn=null;if($('#viewer').open)showViewer()}}
const TV_SPEEDS=[3,6,10],TV_SLEEPS=[0,10,20,30];
let tvChannel='all',tvSpeedIdx=1,tvSleepIdx=0,tvSleep=0,tvReturn=null,tvPlays=0,tvVJ=0,tvPrime=false,tvBlockName='',identT=null;
function tvBlock(h=new Date().getHours()){const order=[[2,'snacks','Night Snacks'],[5,'wholesome','Morning Cuddles'],[10,'relatable','Midday Relatables'],[13,'chaos','Afternoon Chaos'],[17,'prime','Prime Time'],[22,'sleepy','After Dark']];let b=order[order.length-1];for(const x of order)if(h>=x[0])b=x;return {mood:b[1],name:b[2]}}
const VJ_QUIPS=['That last one broke me. In a good way.','I would like the record to show: I laughed.','My whiskers are tingling. Good sign.','Note to self: steal that one for the group chat.','Ten out of ten. No notes. Next.','I pay zero rent and judge this highly.','Somewhere, a dog is furious about this broadcast.','This channel is my Roman empire.','Shh. The good part is coming. Probably.','I approved this message. I approve most messages.'];
function vjSlot(){const vj=$('#tv-vj');if(!vj)return;vj.textContent='🐱 Biscuit: '+VJ_QUIPS[Math.floor(Math.random()*VJ_QUIPS.length)];sfx('meow')}
const reducedMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function ident(big,small){if(reducedMotion()){toast(`📺 ${big} — ${small}`);return}const s=$('#screen');if(!s)return;s.innerHTML=`<div><div class="ident-big">${esc(big)}</div><div class="ident-small">${esc(small)}</div></div>`;s.hidden=false;s.classList.remove('show');void s.offsetWidth;s.classList.add('show');clearTimeout(identT);identT=setTimeout(()=>{s.hidden=true},1600)}
function signOff(){const s=$('#screen');if(!reducedMotion()&&s){s.innerHTML=`<div class="testcard"><div class="testbars"></div><div class="testcap">PLEASE STAND BY<small>NAPPING IN PROGRESS…</small></div></div>`;s.hidden=false;s.classList.remove('show');void s.offsetWidth;s.classList.add('show');setTimeout(()=>{closeViewer();toast('💤 TV off. Dream of potassium.')},2600)}else{closeViewer();toast('💤 TV off. Dream of potassium.')}}
const ADS=[
 {brand:'Potassium™',line:'For memes with places to be.',img:'/assets/memes/7s8bhl.jpg',cta:'ASK YOUR HUMAN'},
 {brand:'THE BOX',line:'Now with 20% more box.',img:'/assets/memes/tau4.jpg',cta:'FITS (ALLEGEDLY)'},
 {brand:'NapCo™',line:'Horizontal is a lifestyle.',img:'/assets/memes/lp2ba.jpg',cta:'DO NOT PERCEIVE'},
 {brand:'Sunbeam Reserve',line:'Moves one inch. So do you.',img:'/assets/memes/11wis1.jpg',cta:'CHASE IT'},
 {brand:'Crünch™',line:'Louder means hungrier.',img:'/assets/memes/4p3h78.jpg',cta:'SECOND BREAKFAST'},
 {brand:'Grump™',line:'Judgment you can trust.',img:'/assets/memes/8p0a.jpg',cta:'NO REFUNDS'},
 {brand:'Zoomies Energy',line:'3AM. No destination.',img:'/assets/memes/24uu.jpg',cta:'FEEL THE RUSH'},
 {brand:'Smug™',line:'The absence of vegetables.',img:'/assets/memes/39binw.jpg',cta:'ORDER ANYWAY'}];
function showAd(){const ad=ADS[Math.floor(Math.random()*ADS.length)];$('#viewer-image-wrap').innerHTML=`<div class="ad-break"><span class="ad-bug">AD</span><div class="ad-brand">${esc(ad.brand)}</div><img src="${esc(ad.img)}" alt="${esc(ad.brand)}" loading="eager"><div class="ad-line">${esc(ad.line)}</div><span class="ad-cta">${esc(ad.cta)}</span></div>`;$('#tv-name').textContent='📢 '+ad.brand;$('#tv-next').textContent='Your show resumes shortly · click to skip';sfx('save')}
function tvTick(){if(tvSleep>0){tvSleep--;const m=currentMeme();if(m)updateTVOverlay(m);if(tvSleep<=0){signOff();return}}tvPlays++;const clips=[...BUNDLED_CLIPS,...userClips];if(clips.length&&tvPlays%8===0){showClip(clips[Math.floor(Math.random()*clips.length)])}else if(tvPlays%5===0){showAd()}else{browse(1)}}
const BUNDLED_CLIPS=[
 {src:'/assets/clips/calico.mp4',title:'Calico Cam',credit:'CC BY-SA · Wikimedia Commons'},
 {src:'/assets/clips/tokyo.mp4',title:'Tokyo Kitten',credit:'CC BY · Wikimedia Commons'},
 {src:'/assets/clips/gatos.mp4',title:'Gatos Playing',credit:'CC BY-SA · Wikimedia Commons'}];
let userClips=[],tvClip=false,clipT=null;
function showClip(clip){if(!clip)return;tvClip=true;stopAutoplay();$('#viewer-image-wrap').innerHTML=`<video class="clip-player" src="${esc(clip.src)}" autoplay muted loop playsinline></video>`;$('#tv-name').textContent='🎥 '+clip.title;$('#tv-next').textContent='Back to the show shortly · click to skip';sfx('blip');clearTimeout(clipT);clipT=setTimeout(()=>{if(tvMode&&$('#viewer').open){tvClip=false;browse(1);restartAutoplay()}},5500)}
function skipClip(){clearTimeout(clipT);tvClip=false;browse(1);restartAutoplay()}
async function importClip(file){if(!file)return;if(!['video/mp4','video/webm'].includes(file.type)){toast('MP4 or WebM only, please.');return}if(file.size>15*1024*1024){toast('That’s a big clip. Under 15 MB, please.');return}if(userClips.length>=10){toast('Ten personal clips max. The schedule is full.');return}
 try{const rec={id:'clip-'+crypto.randomUUID(),name:file.name,blob:file,added:new Date().toISOString()};await dbPutClip(rec);userClips.push({id:rec.id,title:file.name.replace(/\.[^.]+$/,''),src:URL.createObjectURL(file)});toast('Your clip joins the rotation. Stardom awaits.')}catch{toast('Could not store that clip in this browser.')}}
function cycleVol(){volIdx=(volIdx+1)%VOLS.length;masterVol=VOLS[volIdx];setLocal('vol',masterVol);applySoundIcon();updateTVOverlay(currentMeme());sfx('blip')}
function zap(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const z=$('#zap');if(!z)return;z.classList.remove('on');void z.offsetWidth;z.classList.add('on')}
function setTVChannel(d){const i=(moods.findIndex(m=>m[0]===tvChannel)+d+moods.length)%moods.length;tvChannel=moods[i][0];tvPrime=false;const pool=tvChannel==='all'?[...allMemes()]:allMemes().filter(m=>m.mood===tvChannel);if(!pool.length)return;viewerQueue=shuffle(pool);viewerIndex=0;showViewer();zap();sfx('blip');ident(`CH${i+1} · ${moods[i][1]} ${moods[i][2]}`,tvChannel==='all'?`${library.length} MEMES · NO MERCY`:`${pool.length} MEMES · ALL ${moods[i][2].toUpperCase()}`)}
function cycleTVSpeed(){tvSpeedIdx=(tvSpeedIdx+1)%TV_SPEEDS.length;if(autoTimer)restartAutoplay();updateTVOverlay(currentMeme());sfx('blip')}
function cycleTVSleep(){tvSleepIdx=(tvSleepIdx+1)%TV_SLEEPS.length;tvSleep=TV_SLEEPS[tvSleepIdx];updateTVOverlay(currentMeme());toast(tvSleep?`💤 Sleep timer: TV off in ${tvSleep} memes.`:'💤 Sleep timer off. Eternal broadcast.')}
function updateTVOverlay(m){if(!m)return;const i=Math.max(0,moods.findIndex(x=>x[0]===tvChannel));$('#tv-chan').textContent=tvPrime?`⭐ PRIME · Trending`:`CH${i+1} ${moods[i][1]} ${moods[i][2]}`;$('#tv-clock').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});$('#tv-count').textContent=`${viewerIndex+1} / ${viewerQueue.length}`;$('#tv-name').textContent=m.title;const nx=viewerQueue[(viewerIndex+1)%viewerQueue.length];$('#tv-next').textContent=nx&&viewerQueue.length>1?`Up next: ${nx.title}`:'';$('#tv-speed').textContent=TV_SPEEDS[tvSpeedIdx]+'s';$('#tv-sleep').textContent=tvSleep?`💤 ${tvSleep}`:'💤 Off';$('#tv-vol').textContent=`🔊 ${Math.round(masterVol*100)}%`}
function stopAutoplay(){clearInterval(autoTimer);autoTimer=null;$('#autoplay').innerHTML=icon('play')+'<span>Autoplay</span>';$('#autoplay').setAttribute('aria-pressed','false');$('#autoplay-fill').classList.remove('running')}
function restartAutoplay(){clearInterval(autoTimer);const secs=tvMode?TV_SPEEDS[tvSpeedIdx]:6;autoTimer=setInterval(()=>{if(tvMode)tvTick();else browse(1)},secs*1000);$('#autoplay').innerHTML=icon('pause')+'<span>Pause</span>';$('#autoplay').setAttribute('aria-pressed','true');const fill=$('#autoplay-fill');fill.style.animationDuration=secs+'s';fill.classList.remove('running');void fill.offsetWidth;fill.classList.add('running')}
function templates(){return [...new Map(library.map(m=>[m.image,m])).values()]}
function editorMeme(){const sv=$('#editor-sticker').value;return {...editing,title:$('#meme-name').value.trim()||'My little masterpiece',top:$('#top-caption').value.trim(),bottom:$('#bottom-caption').value.trim(),mood:$('#editor-mood').value,font:$('#editor-font').value,style:$('#editor-style').value,sticker:sv==='none'?null:{emoji:sv,corner:$('#editor-corner').value}}}
function preview(){$('#editor-preview').innerHTML=visual(editorMeme(),'eager')}
function openEditor(m){if($('#viewer').open)closeViewer();inspired=false;editing={...(m||library[0])};uploadedTemplate=editing.image.startsWith('data:')?{image:editing.image,template:editing.template,source:editing.source}:null;$('#template-select').innerHTML=templates().map(t=>`<option value="${esc(t.image)}">${esc(t.template)}</option>`).join('');
 if(editing.image.startsWith('data:')){$('#template-select').insertAdjacentHTML('afterbegin','<option value="custom">Your uploaded image</option>');$('#template-select').value='custom'}else $('#template-select').value=editing.image;
  $('#top-caption').value=m?.top||'';$('#bottom-caption').value=m?.bottom||'';$('#meme-name').value=m?m.title+' (my version)':'';$('#editor-mood').innerHTML=moods.slice(1).map(([id,s,label])=>`<option value="${id}">${s} ${label}</option>`).join('');$('#editor-mood').value=m?.mood||'relatable';$('#editor-font').value=m?.font||'dm';$('#editor-style').value=m?.style||'light';$('#editor-sticker').value=m?.sticker?.emoji||'none';$('#editor-corner').value=m?.sticker?.corner||'tr';$('#upload').value='';preview();$('#editor').showModal()
}
const loadImage=src=>new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>reject(new Error('This image could not be loaded.'));img.src=src});
async function uploadCat(file){if(!file)return;if(!['image/jpeg','image/png','image/webp','image/gif'].includes(file.type)){toast('Please choose a JPG, PNG, WebP, or GIF.');return}if(file.size>12*1024*1024){toast('That’s a big image. Choose an image under 12 MB.');return}
 const url=URL.createObjectURL(file);try{const img=await loadImage(url);const scale=Math.min(1,1400/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);uploadedTemplate={image:c.toDataURL('image/jpeg',.9),template:file.name,source:null};editing={...editing,...uploadedTemplate};if(!$('#template-select option[value="custom"]'))$('#template-select').insertAdjacentHTML('afterbegin','<option value="custom">Your uploaded image</option>');$('#template-select').value='custom';preview();toast(file.type==='image/gif'?'Your meme is in. GIFs use a still frame.':'Your meme has entered the chat.')}catch(e){toast(e.message)}finally{URL.revokeObjectURL(url)}
}
function wrapText(ctx,text,width){const lines=[];for(const paragraph of text.split('\n')){let line='';for(const word of paragraph.split(/\s+/)){const next=line?line+' '+word:word;if(ctx.measureText(next).width<=width){line=next;continue}if(line)lines.push(line);line='';for(const char of word){if(ctx.measureText(line+char).width>width){lines.push(line);line=char}else line+=char}}lines.push(line)}return lines}
function chainFrom(lines){const starts=[],map=new Map(),known=new Set();
  for(const raw of lines){const line=String(raw||'').trim();if(!line)continue;known.add(line.toLowerCase());const words=line.split(/\s+/).filter(Boolean);if(words.length<2)continue;starts.push(words[0]);
    for(let i=0;i<words.length-1;i++){if(!map.has(words[i]))map.set(words[i],[]);map.get(words[i]).push(words[i+1])}}
  return {starts,map,known}}
function walkChain(ch,maxWords=12){for(let t=0;t<25;t++){let w=ch.starts[Math.floor(Math.random()*ch.starts.length)];if(!w)break;const out=[w];
    for(let i=1;i<maxWords;i++){const next=ch.map.get(w);if(!next||!next.length)break;w=next[Math.floor(Math.random()*next.length)];out.push(w);if(/[.!?…]$/.test(w)&&out.length>3)break}
    let s=out.join(' ').replace(/\s+([,.!?…])/g,'$1');if(s.length<8||s.length>110)continue;const low=s.toLowerCase();
    if(ch.known.has(low))continue;if(out.length<3)continue;
    return s.charAt(0).toUpperCase()+s.slice(1)}
  return null}
function inspireCaption(){const pool=allMemes();const tops=pool.map(m=>m.top).filter(Boolean),bottoms=pool.map(m=>m.bottom).filter(Boolean);
  const top=walkChain(chainFrom(tops))||tops[Math.floor(Math.random()*tops.length)]||'';
  const bottom=walkChain(chainFrom(bottoms))||bottoms[Math.floor(Math.random()*bottoms.length)]||'';
  return {top,bottom}}
async function exportPNG(m){await document.fonts.ready;const img=await loadImage(m.image);const th_=memeTheme(m);const canvas=document.createElement('canvas'),width=1000,fontSize=42,lineHeight=55,pad=42;canvas.width=width;let ctx=canvas.getContext('2d');ctx.font=`700 ${fontSize}px ${th_.font}`;
 const top=m.top?wrapText(ctx,m.top,width-pad*2):[],bottom=m.bottom?wrapText(ctx,m.bottom,width-pad*2):[];
 const imageH=Math.round(Math.min(img.height*(width/img.width),1200));const th=top.length?top.length*lineHeight+pad:0,bh=bottom.length?bottom.length*lineHeight+pad:0;canvas.height=th+imageH+bh;ctx=canvas.getContext('2d');ctx.fillStyle=th_.bg;ctx.fillRect(0,0,width,canvas.height);ctx.fillStyle=th_.fg;ctx.font=`700 ${fontSize}px ${th_.font}`;ctx.textBaseline='top';
 top.forEach((s,i)=>ctx.fillText(s,pad,pad/2+i*lineHeight));const ratio=Math.min(width/img.width,imageH/img.height),iw=img.width*ratio,ih=img.height*ratio;ctx.drawImage(img,(width-iw)/2,th+(imageH-ih)/2,iw,ih);bottom.forEach((s,i)=>ctx.fillText(s,pad,th+imageH+pad/2+i*lineHeight));
 if(m.sticker&&m.sticker.emoji){ctx.font='130px serif';const sx=m.sticker.corner==='tl'||m.sticker.corner==='bl'?pad:width-pad-130,sy=m.sticker.corner==='tl'||m.sticker.corner==='tr'?th+10:th+imageH-140;ctx.fillText(m.sticker.emoji,sx,sy)}
 const blob=await new Promise(res=>canvas.toBlob(res,'image/png'));if(!blob)throw new Error('The PNG couldn’t be created. Please try again.');return blob;
}
async function download(m,button){if(button)button.disabled=true;try{const blob=await exportPNG(m);const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='memechimp-'+m.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.png';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);toast('One portable meme. PNG downloaded.')}catch(e){toast(e.message||'Download failed. Please try again.')}finally{if(button)button.disabled=false}}
async function exportMotion(m,button){if(button)button.disabled=true;try{
  if(!('MediaRecorder' in window)||!HTMLCanvasElement.prototype.captureStream)throw new Error('Motion export needs a modern browser. PNG still works.');
  const still=await exportPNG(m);const url=URL.createObjectURL(still);let frame;try{frame=await loadImage(url)}finally{setTimeout(()=>URL.revokeObjectURL(url),5000)}
  const width=640,Hs=Math.round(frame.height*(width/frame.width));
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=Hs;const ctx=canvas.getContext('2d');
  const stream=canvas.captureStream(30);const mime=MediaRecorder.isTypeSupported('video/webm;codecs=vp9')?'video/webm;codecs=vp9':'video/webm';
  const rec=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:2500000});const chunks=[];rec.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data)};
  const done=new Promise(res=>{rec.onstop=res});rec.start();toast('Rolling… three seconds of cinema.');
  const DUR=3000,t0=performance.now();
  await new Promise(res=>{const step=()=>{const p=Math.min(1,(performance.now()-t0)/DUR),s=1+p*0.12,dw=width*s,dh=Hs*s;ctx.drawImage(frame,(width-dw)/2,(Hs-dh)/2-p*24,dw,dh);if(p<1)requestAnimationFrame(step);else res()};requestAnimationFrame(step)});
  rec.stop();await done;
  const blob=new Blob(chunks,{type:'video/webm'});if(!blob.size)throw new Error('The video came out empty. PNG still works.');
  const vurl=URL.createObjectURL(blob),a=document.createElement('a');a.href=vurl;a.download='memechimp-'+(m.title||'motion').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.webm';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(vurl),5000);toast('Motion meme exported. Hollywood calls.')}catch(e){toast(e.message||'Motion export failed. PNG still works.')}finally{if(button)button.disabled=false}}
function info(title,content){$('#info-title').textContent=title;$('#info-content').innerHTML=content;$('#info').showModal()}
function about(){info('An unserious archive. A serious color.',`<p><strong>MEMECHIMP</strong> is a small, lovingly assembled corner of the internet for taking a meme break.</p><div class="palette"><div style="background:#4A412A;color:#fffef9">448 C · #4A412A</div><div style="background:#B9C5F3;color:#303952">PERIWINKLE</div><div style="background:#F7F5EE">WARM CREAM</div></div><p>The pixel chimp wears <strong>#4A412A</strong>, a screen approximation of Pantone 448 C. Deep olive-brown anchors the app; complementary blue and periwinkle bring a little lightness. Its silhouette comes from the canonical Chimp facekit.</p><p>Made with creative direction and code by <strong>GPT-6 Astra</strong>. No accounts, no subscription, no paid API, no tracking. Your favorites and creations stay in this browser.</p><p><a href="https://www.colorxs.com/color/pantone-448-c" target="_blank" rel="noopener noreferrer">Color reference ↗</a></p>`)}
function sources(){info('A little credit for the memes.',`<p>The starter archive contains <strong>${library.length} original MEMECHIMP caption remixes</strong> using <strong>${templates().length} community templates</strong> from Imgflip. Every meme’s viewer links to its individual image source.</p><p>The captions were written for this app. Source photographs and templates belong to their respective creators; this app does not claim their ownership or grant reuse rights. Files are stored locally so the collection keeps working when you’re offline.</p><p>This is a curated collection, not a live trending feed. The starter collection was assembled on <strong>September 8, 2026</strong>.</p><p>Your favorites use browser storage and your creations use IndexedDB. Clearing this site’s browser data clears them; download your creations if you want a separate copy.</p><p><a href="https://imgflip.com/memesearch?q=cat" target="_blank" rel="noopener noreferrer">Explore the source templates on Imgflip ↗</a></p>`)}
function shortcuts(){info('Less clicking. More memes.',`<table class="shortcut-table"><tbody><tr><td>/</td><td>Jump to search</td></tr><tr><td>R</td><td>A random meme from this view</td></tr><tr><td>← / →</td><td>Previous / next meme in the viewer</td></tr><tr><td>↑ / ↓</td><td>Change TV channel in Meme TV mode</td></tr><tr><td>O</td><td>Open today's pack on the Daily Drop page</td></tr><tr><td>M</td><td>Mute / unmute sounds</td></tr><tr><td>S</td><td>Save the meme in the viewer</td></tr><tr><td>Space</td><td>Pause / resume autoplay in the viewer</td></tr><tr><td>Esc</td><td>Close the current panel</td></tr><tr><td>?</td><td>This little cheat sheet</td></tr></tbody></table><p>On your phone, swipe left or right on a meme in the viewer. Tap the heart to save a meme. Autoplay changes memes every six seconds and pauses when you leave the tab.</p>`)}
document.addEventListener('click',e=>{const nav=e.target.closest('[data-page]');if(nav){navigate(nav.dataset.page);return}const open=e.target.closest('[data-open]');if(open){openViewer(open.dataset.open,filterMemes());return}const save=e.target.closest('[data-save]');if(save){toggleSave(save.dataset.save);return}const mb=e.target.closest('[data-mood]');if(mb?.classList.contains('mood-filter')){mood=mb.dataset.mood;limit=18;render();return}const cb=e.target.closest('[data-collection]');if(cb){collection=collection===cb.dataset.collection?'':cb.dataset.collection;mood='all';limit=18;render();return}const ds=e.target.closest('[data-delset]');if(ds){const s=setById(ds.dataset.delset);deleteSet(ds.dataset.delset);render();toast(s?`“${s.name}” released into the wild.`:'Set deleted.');return}const cr=e.target.closest('[data-collect]');if(cr){const added=toggleInSet(cr.dataset.collect,currentMeme()?.id);renderCollect();updateCounts();toast(added?'Stashed. A fine addition.':'Removed from that set.');return}const rm=e.target.closest('[data-remove-from-set]');if(rm){toggleInSet(collection,rm.dataset.removeFromSet);render();return}const po=e.target.closest('#pack-open');if(po){openPack();return}const pt=e.target.closest('[data-keeptab]');if(pt){keepTab=pt.dataset.keeptab;renderKeep();return}const tc=e.target.closest('[data-tclear]');if(tc){templateFilter=null;render();return}const lk=e.target.closest('[data-locked]');if(lk){toast('Undiscovered. Prowl Discover and packs…');return}const sh=e.target.closest('[data-share]');if(sh){sharePull(sh.dataset.share);return}const mz=e.target.closest('[data-melt]');if(mz){meltDupe(mz.dataset.melt);return}if(e.target.closest('[data-forge]')){forgePack();return}const xs=e.target.closest('[data-exportsets]');if(xs){exportSets();return}});
$('.brand').addEventListener('click',e=>{e.preventDefault();navigate('discover')});
$('#search').addEventListener('input',()=>{query=$('#search').value.trim();limit=18;render()});$('#sort').addEventListener('change',()=>{limit=18;render()});
$('#shuffle').onclick=shuffledGrid;$('#hero-random').onclick=randomCat;$('#side-random').onclick=randomCat;$('#side-focus').onclick=()=>{const list=filterMemes();if(list.length)openViewer((list.find(m=>!seen.has(m.id))||list[0]).id);else toast('This corner needs a few memes first.')};
$('#load-more').onclick=()=>{const before=$$('#meme-grid .meme-card').length;limit+=18;render();const first=$$('#meme-grid .meme-open')[before];first?.focus({preventScroll:true})};
$('#back-top').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
$('#empty-action').onclick=()=>{if(page==='studio'&&!query&&mood==='all')openEditor();else navigate('discover')};
function setDensity(dense){$('#meme-grid').classList.toggle('dense',dense);$('#view-comfy').classList.toggle('selected',!dense);$('#view-dense').classList.toggle('selected',dense);$('#view-comfy').setAttribute('aria-pressed',!dense);$('#view-dense').setAttribute('aria-pressed',dense)}
setDensity(readState('dense',false)===true);$('#view-comfy').onclick=()=>{setDensity(false);setLocal('dense',false)};$('#view-dense').onclick=()=>{setDensity(true);setLocal('dense',true)};
function applyTheme(t){document.documentElement.dataset.theme=t;const b=$('#theme-toggle');if(!b)return;b.innerHTML=icon(t==='dark'?'sun':'moon');b.setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode')}
function toggleTheme(){const next=document.documentElement.dataset.theme==='dark'?'light':'dark';setLocal('theme',next);applyTheme(next);toast(next==='dark'?'Lights out. The chimp can see in the dark.':'Lights on. The chimp judges you clearly again.')}
applyTheme(readState('theme',matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));$('#theme-toggle').onclick=toggleTheme;
let soundOn=readState('sound',true),audioCtx=null,audioReady=false;
const _vol=readState('vol',1);let masterVol=typeof _vol==='number'&&_vol>=0&&_vol<=1?_vol:1;
const VOLS=[1,0.6,0.3,0];let volIdx=Math.max(0,VOLS.indexOf(masterVol));if(VOLS[volIdx]!==masterVol)volIdx=0;
for(const ev of ['pointerdown','keydown'])document.addEventListener(ev,()=>{audioReady=true;try{if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume()}catch{}},{once:true,capture:true});
function tone(freq,dur,{type='sine',vol=0.12,at=0,slide=null}={}){const t0=audioCtx.currentTime+at;const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.setValueAtTime(freq,t0);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t0+dur);g.gain.setValueAtTime(0.0001,t0);g.gain.exponentialRampToValueAtTime(Math.max(0.0001,vol*masterVol),t0+0.015);g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);o.connect(g);g.connect(audioCtx.destination);o.start(t0);o.stop(t0+dur+0.05)}
function sfx(name){if(!soundOn||!audioReady)return;try{if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();
  if(name==='pop')tone(520,0.12,{slide:880});else if(name==='meow'){tone(500,0.15,{slide:760,type:'triangle',vol:0.1});tone(760,0.28,{at:0.14,slide:420,type:'triangle',vol:0.1})}else if(name==='save'){tone(660,0.1);tone(880,0.14,{at:0.09})}else if(name==='fanfare')[523,659,784,1047].forEach((f,i)=>tone(f,0.16,{at:i*0.09,type:'triangle'}));else if(name==='blip')tone(440,0.07,{type:'square',vol:0.05});else if(name==='chaos')tone(300,0.2,{slide:150,type:'sawtooth',vol:0.06})}catch{}}
function applySoundIcon(){const b=$('#sound-toggle');if(!b)return;const on=soundOn&&masterVol>0;b.innerHTML=icon(on?'volume':'mute');b.setAttribute('aria-label',on?'Mute sounds':'Unmute sounds')}
function toggleSound(){soundOn=!soundOn;setLocal('sound',soundOn);applySoundIcon();if(soundOn)sfx('save');toast(soundOn?'Sound on. The memes are audible.':'Sound off. Silent judgment continues.')}
applySoundIcon();$('#sound-toggle').onclick=toggleSound;
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=$('#confetti');if(!c||!c.getContext)return;const x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const cols=['#B9C5F3','#eee2b7','#f4e0db','#e3ebd7','#ffffff'];const ps=Array.from({length:90},()=>({x:innerWidth/2+(Math.random()-0.5)*220,y:innerHeight*0.35,vx:(Math.random()-0.5)*9,vy:Math.random()*-7-2,g:0.35,s:Math.random()*7+4,r:Math.random()*Math.PI,vr:(Math.random()-0.5)*0.3,c:cols[Math.floor(Math.random()*cols.length)],l:1}));let f=0;const iv=setInterval(()=>{x.clearRect(0,0,c.width,c.height);f++;ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.r+=p.vr;p.l-=0.008;x.save();x.globalAlpha=Math.max(0,p.l);x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*0.6);x.restore()});if(f>90){clearInterval(iv);x.clearRect(0,0,c.width,c.height)}},16)}
$('#viewer-close').onclick=closeViewer;$('#viewer-prev').onclick=()=>browse(-1);$('#viewer-next').onclick=()=>browse(1);$('#viewer-save').onclick=()=>toggleSave(currentMeme().id);$('#viewer-edit').onclick=()=>openEditor(currentMeme());$('#viewer-download').onclick=()=>download(currentMeme(),$('#viewer-download'));$('#autoplay').onclick=()=>autoTimer?stopAutoplay():restartAutoplay();
$('#viewer').addEventListener('close',()=>{tvMode=false;$('#viewer').classList.remove('tv');stopAutoplay();history.replaceState(null,'',location.pathname);if($('#sort').value==='unseen')render()});
$('#viewer').addEventListener('cancel',e=>{if(tvMode){e.preventDefault();exitTV()}});
$('#viewer-image-wrap').addEventListener('click',()=>{if(tvMode){if(tvClip)skipClip();else browse(1)}});
$('#tv-toggle').onclick=enterTV;$('#tv-exit').onclick=exitTV;$('#tv-ch-up').onclick=()=>setTVChannel(-1);$('#tv-ch-down').onclick=()=>setTVChannel(1);$('#tv-speed').onclick=cycleTVSpeed;$('#tv-sleep').onclick=cycleTVSleep;$('#tv-vol').onclick=cycleVol;
$('#viewer-share').onclick=async()=>{if(currentMeme().kind==='creation'){toast('This creation lives here. Download its PNG to share it.');return}try{await navigator.clipboard.writeText(location.href);toast('Link copied. It opens on this computer while the app is running.')}catch{toast('Copy the meme link from your address bar.')}};
$('#viewer-more').onclick=()=>{const m=currentMeme();if(!m||m.kind==='creation')return;const img=m.image;closeViewer();showTemplate(img)};
$('#viewer-collect').onclick=()=>{renderCollect();$('#collect-new-name').value='';$('#collect-dialog').showModal()};$('#collect-close').onclick=()=>$('#collect-dialog').close();
document.addEventListener('submit',e=>{if(e.target.id==='new-set-form'){e.preventDefault();const s=createSet($('#new-set-name').value);render();toast(`Set “${s.name}” created. Start hoarding.`)}if(e.target.id==='collect-new'){e.preventDefault();const s=createSet($('#collect-new-name').value);$('#collect-new-name').value='';renderCollect();toast(`Set “${s.name}” created. Tap it to stash this meme.`)}});
document.addEventListener('change',e=>{if(e.target.id==='import-sets'){importSets(e.target.files[0]);e.target.value=''}if(e.target.id==='tv-clip-upload'){importClip(e.target.files[0]);e.target.value=''}});
$('#create-open').onclick=()=>openEditor();$('#editor-close').onclick=()=>$('#editor').close();$('#top-caption').oninput=preview;$('#bottom-caption').oninput=preview;
$('#template-select').onchange=()=>{const m=$('#template-select').value==='custom'?uploadedTemplate:library.find(m=>m.image===$('#template-select').value);if(m){editing={...editing,image:m.image,template:m.template,source:m.source};preview()}};
for(const id of ['editor-font','editor-style','editor-sticker','editor-corner'])document.getElementById(id).addEventListener('change',preview);
$('#upload').onchange=()=>uploadCat($('#upload').files[0]);$('#editor-download').onclick=()=>download(editorMeme(),$('#editor-download'));$('#editor-motion').onclick=()=>exportMotion(editorMeme(),$('#editor-motion'));
$('#editor-inspire').onclick=()=>{const g=inspireCaption();$('#top-caption').value=g.top;$('#bottom-caption').value=g.bottom;inspired=true;preview();sfx('blip');toast('The machine dreamed this. Edit freely, take credit.')};
$('#editor-form').onsubmit=async e=>{e.preventDefault();const button=e.submitter;button.disabled=true;const m={...editorMeme(),id:'own-'+crypto.randomUUID(),kind:'creation',added:new Date().toISOString(),tags:inspired?['my creation','robot-assisted']:['my creation']};try{await dbPut(m);created.push(m);$('#editor').close();sfx('fanfare');checkAwards();navigate('studio');biscuitHappy();toast('A masterpiece has been born. Saved in My creations.')}catch{toast('Could not save in this browser. Use PNG to keep your creation.')}finally{button.disabled=false}};
$('#about-open').onclick=about;$('#shortcuts-open').onclick=shortcuts;$('#sources-open').onclick=sources;$('#info-close').onclick=()=>$('#info').close();
for(const d of $$('dialog'))d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}});
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.altKey||e.metaKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable)return;
  if($('#viewer').open){if(tvMode&&e.key==='ArrowUp'){e.preventDefault();setTVChannel(-1)}else if(tvMode&&e.key==='ArrowDown'){e.preventDefault();setTVChannel(1)}else if(e.key==='ArrowRight'){e.preventDefault();browse(1)}else if(e.key==='ArrowLeft'){e.preventDefault();browse(-1)}else if(e.key.toLowerCase()==='s'){e.preventDefault();toggleSave(currentMeme().id)}else if(e.code==='Space'){e.preventDefault();autoTimer?stopAutoplay():restartAutoplay()}return}
  if($('dialog[open]'))return;if(e.key==='/'){e.preventDefault();$('#search').focus()}else if(e.key.toLowerCase()==='r'){e.preventDefault();randomCat()}else if(e.key==='?'){e.preventDefault();shortcuts()}else if(page==='packs'&&e.key.toLowerCase()==='o'){e.preventDefault();openPack()}else if(e.key.toLowerCase()==='m'){e.preventDefault();toggleSound()}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&autoTimer)stopAutoplay()});
let swipe=null;$('#viewer-image-wrap').addEventListener('touchstart',e=>{swipe={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},{passive:true});$('#viewer-image-wrap').addEventListener('touchend',e=>{if(!swipe)return;const dx=e.changedTouches[0].clientX-swipe.x,dy=e.changedTouches[0].clientY-swipe.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)browse(dx<0?1:-1);swipe=null},{passive:true});
async function init(){if('serviceWorker' in navigator){try{await navigator.serviceWorker.register('/sw.js')}catch{}}try{const response=await fetch('/library.json');if(!response.ok)throw new Error('The archive could not load.');library=await response.json();try{created=await dbRead()}catch{toast('Creations storage is unavailable; PNG downloads still work.')}try{for(const c of await dbReadClips())userClips.push({id:c.id,title:(c.name||'clip').replace(/\.[^.]+$/,''),src:URL.createObjectURL(c.blob)})}catch{}render();buddyInit();fillTicker();heroParallax();const deepId=new URLSearchParams(location.hash.slice(1)).get('meme');if(deepId){const m=library.find(m=>m.id===deepId);if(m)openViewer(m.id,library);else toast('That meme link is not in this archive.')}
  if(!deepId&&!readState('welcomed',false)){setLocal('welcomed',true);setTimeout(()=>info('Welcome to the meme archive.',`<p>Follow the thread: <strong>🔍 Find → 📦 Rip → 🧪 Stitch → 📦 Keep.</strong></p><p><strong>100 memes.</strong> Rip a daily pack, make your own memes, fill the album dex.</p><p><strong>/</strong> search · <strong>R</strong> random meme · <strong>O</strong> open pack · <strong>?</strong> everything else. All local, all yours.</p>`),450)}
 }catch(e){$('#result-count').textContent='The memes couldn’t arrive.';$('#empty').hidden=false;$('#empty-title').textContent='A small meme-astrophe.';$('#empty-copy').textContent='The local library could not load. Reload to try again.';$('#empty-action').textContent='Try again';$('#empty-action').onclick=()=>location.reload();console.error(e)}}
window.addEventListener('hashchange',()=>{const id=new URLSearchParams(location.hash.slice(1)).get('meme');if(!id){if($('#viewer').open)closeViewer();return}const m=library.find(m=>m.id===id);if(!m){toast('That meme link is not in this archive.');return}if($('#viewer').open){viewerQueue=[...library];viewerIndex=viewerQueue.findIndex(m=>m.id===id);showViewer()}else openViewer(id,library)});
await init();
