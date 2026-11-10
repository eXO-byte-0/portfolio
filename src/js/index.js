/* =========================================================================
   FACES — THE ONLY THING TO EDIT
   bg      : image on the cube face itself (square; '' = halftone)
   layers  : full-screen parallax drawing, [{src, depth, over}] back → front
   img     : the layers' pixel size, pos: crop anchor {p: portrait, l: landscape}
   items   : comic elements over the page. at = CSS position on phones,
             atL = on landscape screens.
             caption {eyebrow,title,text,tag} · bubble {text, cls:'r'|'l'} · sfx {text}
             big {text} · sticker {text, cls:'red'|'dark'} · cta / links {links:[{href,text,cls}]}
             grid {cases:[{yr,title,todo,src,pos,alt,ico}]} · pin / char {src,label,alt} · icon {src,alt}
   notes   : grey technical annotations, drawn line by line.
             space 'scene' = % of the layer image (sticks to the drawing),
             'face' = % of the cube face.
             dim {a,b,label} · lead {p,t,label} · circ {c,r,dashed} · cross {p} · hline {y,label}
   ========================================================================= */
const MAIL = 'mailto:valentinjasonamour@gmail.com';
const SAFE_TOP = 'max(12px, env(safe-area-inset-top))';
const SAFE_BOTTOM = 'max(14px, env(safe-area-inset-bottom))';

const FACES = {
  FRONT: {
    bg:'front-fond.webp',
    layers:[{ src:'front-3.webp', depth:18 }, { src:'front-2.webp', depth:40, over:true }, { src:'front-1.webp', depth:80, alt:'Val at his desk, drawing, posters on the wall' }],
    img:[1920, 1080], pos:{ p:'57% 50%', l:'50% 30%' },
    items:[
      { type:'caption', cls:'bare', depth:10, rot:-2, eyebrow:'Illustrator · Graphic designer · UI/UX · 2D/3D', title:'Val<br><em>Andrieu</em>', tag:'h1',
        at:`left:4vw;top:${SAFE_TOP}`, atL:'left:4vw;top:3svh' },
      { type:'sticker', cls:'red', depth:16, rot:7, text:'10 yrs<br>of XP',
        at:'right:4vw;top:31svh', atL:'right:5vw;top:7svh' },
      { type:'bubble', depth:24, cls:'r', text:'Oh, you scanned it? Come in — swipe any way you like.',
        at:'left:4vw;top:31svh', atL:'right:4vw;top:34svh' },
      { type:'cta', depth:20, rot:-2, links:[{ href:MAIL, text:'Hire me →' }],
        at:`left:4vw;bottom:${SAFE_BOTTOM}`, atL:'left:4vw;bottom:5svh' },
    ],
    notes:{ space:'scene', list:[
      { k:'dim', a:[54.3, 13.5], b:[76.2, 13.5], label:'window · 2 × 2 panes' },
      { k:'cross', p:[54.3, 17.6] }, { k:'cross', p:[76.2, 51.1] },
      { k:'circ', c:[53, 47.5], r:4.6 },
      { k:'lead', p:[56.5, 44], t:[66, 62], label:'fig. 1 — the artist, at work' },
      { k:'lead', p:[40, 40], t:[33, 24], label:'refs & influences' },
      { k:'hline', y:66, label:'H.L.' },
      { k:'lead', p:[34, 90], t:[24, 82], label:'sketches · a lot of them' },
    ]},
  },
  RIGHT: {
    bg:'right-fond.webp',
    items:[
      { type:'big', depth:4, rot:-8, text:'Draw', at:'left:-4vw;top:30svh', atL:'left:-2vw;top:22svh' },
      { type:'caption', cls:'bare', depth:10, rot:1.5, eyebrow:'Chapter — Art & illustration', title:'<em>Art</em>',
        at:`left:4vw;top:${SAFE_TOP}`, atL:'left:5vw;top:4svh' },
      { type:'sticker', cls:'dark', depth:16, rot:-6, text:'Hand-drawn.<br>Digitally<br>finished.',
        at:'right:4vw;top:6svh', atL:'right:6vw;top:8svh' },
      { type:'char', cls:'fig-r', depth:34, src:'char-armor.webp', label:'fig. 10 — armored scout', alt:'Character design: a young scout in patched red armor',
        at:'left:-3vw;bottom:0;width:40vw', atL:'left:2vw;top:20svh;width:min(17vw, 28svh)' },
      { type:'pin', depth:30, rot:-4, src:'front-sketch.webp', label:'fig. 0 — early sketch', alt:'Early line sketch of the hover car',
        at:'left:5vw;top:25svh;width:46vw', atL:'left:16vw;top:52svh;width:min(17vw, 240px)' },
      { type:'pin', depth:26, rot:3, src:'pin-oni.webp', label:'fig. 11 — oni-kiba', alt:'Illustration: a hooded swordsman pointing, under a blue sky',
        at:'display:none', atL:'display:block;right:4vw;top:33svh;width:min(12vw, 20svh)' },
      { type:'pin', depth:22, rot:-2, src:'pin-landscape.webp', label:'fig. 12 — comic panel · birds', alt:'Comic panel: a flock of birds over hills at sunset',
        at:'display:none', atL:'display:block;right:20vw;bottom:5svh;width:min(25vw, 360px)' },
      { type:'icon', depth:26, rot:-8, src:'logo-csp.webp', alt:'Clip Studio Paint', at:'left:54vw;top:30svh;width:12vw', atL:'left:26vw;top:12svh;width:min(5vw, 8svh)' },
      { type:'icon', depth:26, rot:7, src:'logo-blender.webp', alt:'Blender', at:'left:58vw;top:39svh;width:12vw', atL:'left:30.5vw;top:17svh;width:min(5vw, 8svh)' },
      { type:'bubble', depth:24, text:'Paper first, then Clip Studio Paint and Blender bring the sketches to life.',
        at:'right:4vw;bottom:22svh', atL:'left:37vw;top:2svh' },
      { type:'cta', depth:20, rot:2, links:[{ href:`${MAIL}?subject=Illustration`, text:'Commission me →' }],
        at:`left:4vw;bottom:${SAFE_BOTTOM}`, atL:'left:5vw;bottom:5svh' },
    ],
    notes:{ space:'face', list:[
      { k:'circ', c:[80, 72], r:31, dashed:true },
      { k:'circ', c:[75.5, 41], r:6 },
      { k:'lead', p:[75.5, 35], t:[86, 22], label:'light source' },
      { k:'lead', p:[31, 60], t:[14, 44], label:'fig. 2 — R4, 1:43' },
    ]},
  },
  LEFT: {
    bg:'bg-urban.webp',
    items:[
      { type:'big', depth:4, rot:-6, text:'10 yrs', at:'left:-6vw;bottom:2svh', atL:'right:-2vw;bottom:-4svh' },
      { type:'caption', cls:'bare', depth:10, rot:-1.5, eyebrow:'Chapter — 2016 → 2025', title:'Origin<br><em>story</em>',
        at:`left:4vw;top:${SAFE_TOP}`, atL:'left:4vw;top:4svh' },
      { type:'grid', depth:20, at:'left:4vw;right:4vw;top:31svh;bottom:37svh', atL:'left:45vw;right:4vw;top:14svh;bottom:22svh',
        cases:[
          { yr:'2016', title:'Pre-press & industrial calibration', src:'case-classroom.webp', pos:'50% 60%', alt:'Pencil sketch: a computer classroom' },
          { yr:'17', title:'3D modeling & event scenography', src:'case-cave.webp', pos:'45% 55%', alt:'Illustration: a caveman by a fire, lit like a stage' },
          { yr:'2021', title:'Web design, branding & social', src:'case-coder.webp', pos:'50% 25%', alt:'Drawing: a young designer with headphones, typing', ico:['logo-id.webp'] },
          { yr:'25', title:'Art direction & digital automation', src:'case-back.webp', pos:'62% 40%', alt:'Drawing: Val crashed on a mattress, laptop and books around', ico:['logo-xl.webp', 'logo-id.webp'] },
        ] },
      { type:'char', cls:'fig-r', depth:30, src:'char-pilgrims.webp', label:'fig. 7 — character design · pilgrims', alt:'Character design: two cloaked figures in wide mushroom hats',
        at:'right:-4vw;bottom:9svh;width:58vw', atL:'left:-2vw;bottom:5svh;width:min(32vw, 56svh)' },
      { type:'cta', depth:20, rot:-2, links:[{ href:'#express', text:'Full résumé ⚡' }],
        at:`left:4vw;bottom:${SAFE_BOTTOM}`, atL:'left:4vw;bottom:5svh' },
    ],
    notes:{ space:'face', list:[{ k:'cross', p:[3, 3] }, { k:'cross', p:[97, 97] }] },
  },
  BACK: {
    bg:'bg-wireframe.webp', // UX wireframe sketch
    items:[
      { type:'big', depth:4, rot:7, text:'UX', at:'right:-4vw;top:24svh', atL:'right:2vw;top:12svh' },
      { type:'caption', cls:'bare', depth:10, rot:1.5, eyebrow:'Front-end design', title:'UI/<em>UX</em>',
        at:`left:4vw;top:${SAFE_TOP}`, atL:'left:4vw;top:4svh' },
      { type:'sticker', cls:'red', depth:16, rot:-5, text:'SvelteKit<br>WordPress<br>SCSS<br>i18n',
        at:'left:5vw;top:30svh', atL:'right:4vw;top:29svh' },
      { type:'pin', depth:22, rot:4, src:'gd-flyer.webp', label:'fig. 9 — event flyer', alt:'Graphic design: comic-style event flyer for a computer club',
        at:'left:5vw;top:48svh;width:30vw', atL:'right:24vw;bottom:9svh;width:min(14vw, 24svh)' },
      { type:'icon', depth:26, rot:-8, src:'gd-bug.webp', alt:'Icon: crashed monitor', at:'right:6vw;top:5svh;width:15vw', atL:'display:block;left:30vw;top:5svh;width:min(7vw, 11svh)' },
      { type:'icon', depth:26, rot:6, src:'gd-neutral.webp', alt:'Icon: crash-test dummy face', at:'display:none', atL:'display:block;left:45vw;top:3svh;width:min(6vw, 10svh)' },
      { type:'icon', depth:26, rot:-6, src:'gd-tester.webp', alt:'Icon: smiley with a band-aid', at:'display:none', atL:'display:block;right:30vw;top:6svh;width:min(7vw, 11svh)' },
      { type:'icon', depth:26, rot:-10, src:'gd-thumb.webp', alt:'Icon: bandaged thumbs-up', at:'left:44vw;top:16svh;width:15vw', atL:'display:block;left:32vw;bottom:16svh;width:min(7vw, 11svh)' },
      { type:'icon', depth:26, rot:8, src:'gd-happy.webp', alt:'Icon: happy crash-test smiley', at:'right:8vw;top:77svh;width:15vw', atL:'display:block;left:52vw;top:79svh;width:min(7vw, 11svh)' },
      { type:'char', cls:'fig-r', depth:34, src:'char-dragon.webp', label:'fig. 5 — character design · dragon & rider', alt:'Character design: a furious shaggy dragon with a tiny rider',
        at:'right:-3vw;top:44svh;width:50vw', atL:'left:-1vw;top:23svh;width:min(30vw, 52svh)' },
      { type:'bubble', depth:24, cls:'r', text:'…and the obvious stuff I won’t waste your time listing.',
        at:'left:4vw;top:71svh', atL:'right:4vw;top:7svh' },
      { type:'cta', depth:20, rot:-2, links:[{ href:`${MAIL}?subject=Website`, text:'Build my site →' }],
        at:`left:4vw;bottom:${SAFE_BOTTOM}`, atL:'left:4vw;bottom:5svh' },
    ],
    notes:{ space:'face', list:[{ k:'cross', p:[10, 40] }, { k:'cross', p:[90, 80] }] },
  },
  TOP: {
    items:[
      { type:'big', depth:4, rot:-5, text:'Work', at:'left:-6vw;bottom:8svh', atL:'right:-3vw;top:2svh' },
      { type:'caption', cls:'bare', depth:10, rot:-1.5, eyebrow:'Projects & links', title:'Work<br><em>+ links</em>',
        at:`left:4vw;top:${SAFE_TOP}`, atL:'left:4vw;top:4svh' },
      { type:'grid', cls:'six', depth:20, at:'left:4vw;right:4vw;top:31svh;bottom:15svh', atL:'left:40vw;right:4vw;top:12svh;bottom:20svh',
        cases:[
          { yr:'#01', title:'AS7 Park', todo:'pitch + demo link' },
          { yr:'#02', title:'GRG Group', todo:'pitch + link' },
          { yr:'#03', title:'Holographic 3D résumé', todo:'capture / video' },
          { yr:'#04', title:'NawStar', todo:'pitch + link' },
          { yr:'#05', title:'Catalog automation · InDesign × Excel', src:'case-catalog.webp', pos:'30% 30%', alt:'Screenshot: InDesign catalog page generated from an Excel sheet with EasyCatalog', ico:['logo-xl.webp'] },
          { yr:'#06', title:'Project six', todo:'title + pitch + link' },
        ] },
      { type:'char', cls:'fig-r', depth:34, src:'char-preh.webp', label:'fig. 8 — the elder', alt:'Character design: a prehistoric elder wearing a horned bull skull, sitting cross-legged',
        at:'right:3vw;top:11svh;width:38vw', atL:'left:-2vw;top:41svh;width:min(29vw, 48svh)' },
      { type:'cta', depth:20, rot:-2, links:[{ href:MAIL, text:'Say hi →' }, { href:'https://leblogdeval.fr', text:'Blog', cls:'paper' }],
        at:`left:4vw;bottom:${SAFE_BOTTOM}`, atL:'left:4vw;bottom:5svh' },
    ],
  },
  BOTTOM: {
    bg:'bg-render.webp',
    items:[
      { type:'big', depth:4, rot:-7, text:'3D', at:'right:-6vw;top:20svh', atL:'right:4vw;top:10svh' },
      { type:'caption', cls:'bare', depth:10, rot:1.5, eyebrow:'3D & interactive', title:'<em>Web</em><br>3D',
        at:`left:4vw;top:${SAFE_TOP}`, atL:'left:4vw;top:4svh' },
      { type:'bubble', depth:24, cls:'r', text:'Three.js, GLB viewers, holographic résumé, web mini-games — part of me still dreams of game design!',
        at:'right:4vw;top:24svh', atL:'right:5vw;bottom:30svh' },
      { type:'char', cls:'fig-r behind', depth:34, src:'char-mech.webp', label:'fig. 6 — mech · hard-surface design', alt:'Character design: a heavy grey mech',
        at:'right:-4vw;bottom:12svh;width:44vw', atL:'left:7vw;top:33svh;width:min(26vw, 40svh)' },
      { type:'cta', depth:20, rot:2, links:[{ href:`${MAIL}?subject=3D%20%2F%20web`, text:'Let’s build it →' }],
        at:`left:4vw;bottom:${SAFE_BOTTOM}`, atL:'left:4vw;bottom:5svh' },
    ],
    notes:{ space:'face', list:[
      { k:'circ', c:[50, 50], r:30, dashed:true }, { k:'cross', p:[50, 50] },
      { k:'lead', p:[71, 29], t:[84, 14], label:'fig. 4 — blender scene · light study' },
    ]},
  },
};

/* ================= environment ================= */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer:fine)').matches;
const touch = !fine;
const dlg = document.getElementById('express');

/* ================= quaternion helpers (CSS space: x right, y down, z toward you) ================= */
const PI2 = Math.PI / 2;
const AX = [1, 0, 0], AY = [0, 1, 0];
const qAxis = (ax, a) => { const s = Math.sin(a / 2); return [ax[0] * s, ax[1] * s, ax[2] * s, Math.cos(a / 2)]; };
const qMul = (a, b) => [
  a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
  a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
  a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
  a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
];
const qRot = ([x, y, z, w], [vx, vy, vz]) => {
  const tx = 2 * (y * vz - z * vy), ty = 2 * (z * vx - x * vz), tz = 2 * (x * vy - y * vx);
  return [vx + w * tx + y * tz - z * ty, vy + w * ty + z * tx - x * tz, vz + w * tz + x * ty - y * tx];
};
function qSlerp(a, b, t){
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3], bb = b;
  if (d < 0){ d = -d; bb = b.map(v => -v); }
  if (d > .9995) return a.map((v, i) => v + (bb[i] - v) * t);
  const th = Math.acos(d), s = Math.sin(th), wa = Math.sin((1 - t) * th) / s, wb = Math.sin(t * th) / s;
  return a.map((v, i) => v * wa + bb[i] * wb);
}
const SNAP = [0, .5, -.5, Math.SQRT1_2, -Math.SQRT1_2, 1, -1]; // the 24 cube orientations only use these
const qSnap = q => q.map(v => SNAP.reduce((p, c) => Math.abs(c - v) < Math.abs(p - v) ? c : p));
const qCss = ([x, y, z, w]) =>
  `matrix3d(${1 - 2 * (y * y + z * z)},${2 * (x * y + z * w)},${2 * (x * z - y * w)},0,${2 * (x * y - z * w)},${1 - 2 * (x * x + z * z)},${2 * (y * z + x * w)},0,${2 * (x * z + y * w)},${2 * (y * z - x * w)},${1 - 2 * (x * x + y * y)},0,0,0,0,1)`;

const FACE_Q = { FRONT:[0, 0, 0, 1], BACK:qAxis(AY, Math.PI), RIGHT:qAxis(AY, PI2), LEFT:qAxis(AY, -PI2), TOP:qAxis(AX, PI2), BOTTOM:qAxis(AX, -PI2) };
const ROLL = { right:[AY, -PI2], left:[AY, PI2], down:[AX, PI2], up:[AX, -PI2] }; // "go right" = finger moves left

function frontFace(q){
  let best = 'FRONT', bz = -2;
  for (const k in FACE_Q){ const z = qRot(qMul(q, FACE_Q[k]), [0, 0, 1])[2]; if (z > bz){ bz = z; best = k; } }
  return best;
}
function uprightDeg(q, face){ // in-plane 90° step that makes a face's art upright once it faces you
  let best = 0, by = 2;
  for (let k = 0; k < 4; k++){
    const th = k * PI2, y = qRot(qMul(q, FACE_Q[face]), [Math.sin(th), -Math.cos(th), 0])[1];
    if (y < by){ by = y; best = k * 90; }
  }
  return best;
}

/* ================= build DOM ================= */
const cube = document.getElementById('cube'), pages = document.getElementById('pages');
const faceEl = {}, setEl = {};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
const img = (src, alt = '') => `<img data-src="${src}" alt="${esc(alt)}" decoding="async" draggable="false">`;
const WIDE = '@media (min-aspect-ratio:1/1)';
let layoutCss = '';

function itemHTML(it, i, k){
  const sel = `.set[data-face="${k}"] .it-${i}`;
  const wide = it.atL ? 'left:auto;right:auto;top:auto;bottom:auto;width:auto;' + it.atL : it.at || '';
  layoutCss += `${sel}{${it.at || ''}}${WIDE}{${sel}{${wide}}}`;
  let inner = '';
  switch (it.type){
    case 'caption': {
      const t = it.tag || 'h2';
      inner = `<div class="eyebrow">${esc(it.eyebrow || '')}</div>${it.title ? `<${t}>${it.title}</${t}>` : ''}${it.text ? `<p>${esc(it.text)}</p>` : ''}`;
      break;
    }
    case 'bubble': case 'sfx':
      inner = esc(it.text); break;
    case 'sticker': case 'big':
      inner = it.text; break;
    case 'grid':
      inner = it.cases.map(c => `<div class="case">${
        c.src ? `<div class="case-art" style="--pos:${c.pos || '50% 50%'}">${img(c.src, c.alt)}</div>` : `<span class="yr" aria-hidden="true">${esc(c.yr)}</span>`
      }<div class="cap"><small>${esc(c.yr)}</small><b>${esc(c.title)}</b></div>${
        c.todo ? `<div class="todo">${esc(c.todo)}</div>` : ''
      }${
        c.ico ? `<div class="case-ico">${c.ico.map(src => img(src)).join('')}</div>` : ''
      }</div>`).join('');
      break;
    case 'links': case 'cta':
      inner = it.links.map(l => `<a class="${it.type === 'cta' ? 'go' : 'btn'} ${l.cls || ''}" href="${l.href}"${l.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(l.text)}</a>`).join('');
      break;
    case 'char': case 'pin':
      inner = `${img(it.src, it.alt)}<span class="fig">${esc(it.label || '')}</span>`; break;
    case 'icon':
      inner = img(it.src, it.alt); break;
  }
  return `<div class="it it-${i} ${it.type} ${it.cls || ''}" data-depth="${it.depth || 10}" style="--rot:${it.rot || 0}deg"><div class="pp">${inner}</div></div>`;
}

for (const k in FACES){
  const f = FACES[k];

  const fe = document.createElement('div');
  fe.className = 'face'; fe.dataset.face = k;
  if (f.bg) fe.innerHTML = `<div class="bg">${img(f.bg)}</div>`;
  cube.appendChild(fe); faceEl[k] = fe;

  if (f.pos){
    const sel = `.set[data-face="${k}"] .ly img`;
    layoutCss += `${sel}{object-position:${f.pos.p}}${WIDE}{${sel}{object-position:${f.pos.l}}}`;
  }
  const se = document.createElement('section');
  se.className = 'set'; se.dataset.face = k; se.setAttribute('aria-hidden', 'true');
  se.innerHTML =
    (f.layers || []).map(l => `<div class="ly${l.over ? ' over' : ''}" data-depth="${l.depth}">${img(l.src, l.alt)}</div>`).join('') +
    '<svg class="notes" aria-hidden="true"></svg>' +
    (f.items || []).map((it, i) => itemHTML(it, i, k)).join('');
  pages.appendChild(se); setEl[k] = se;
}
document.head.insertAdjacentHTML('beforeend', `<style>${layoutCss}</style>`);
const loadImgs = root => root.querySelectorAll('img[data-src]').forEach(i => { i.src = i.dataset.src; i.removeAttribute('data-src'); });

/* ================= technical annotations ================= */
function mapper(k){
  const f = FACES[k], W = innerWidth, H = innerHeight;
  if (f.notes.space === 'scene'){
    const [iw, ih] = f.img, s = Math.max(W / iw, H / ih);
    const [px, py] = getComputedStyle(setEl[k].querySelector('.ly img')).objectPosition.split(' ').map(v => parseFloat(v) / 100);
    const ox = (W - iw * s) * px, oy = (H - ih * s) * py;
    return { pt:([x, y]) => [ox + x / 100 * iw * s, oy + y / 100 * ih * s], len:r => r / 100 * iw * s };
  }
  const S = cube.offsetWidth, ox = (W - S) / 2, oy = (H - S) / 2;
  return { pt:([x, y]) => [ox + x / 100 * S, oy + y / 100 * S], len:r => r / 100 * S };
}
function drawNotes(k){
  const f = FACES[k], svg = setEl[k].querySelector('.notes');
  if (!f.notes){ svg.innerHTML = ''; return; }
  const m = mapper(k), W = innerWidth, H = innerHeight;
  const P = pts => 'M' + pts.map(p => p.map(v => v.toFixed(1)).join(' ')).join('L');
  const inView = ([x, y]) => x > 8 && x < W - 8 && y > 8 && y < H - 8;
  let out = '';
  for (const n of f.notes.list){
    // skip annotations whose anchor (or label) falls off-screen — phones crop the drawing
    if (n.k === 'lead'){
      const t = m.pt(n.t), w = 31 + n.label.length * 7.2;
      if (!inView(m.pt(n.p)) || !inView(t)) continue;
      if (t[0] < W * .6 ? t[0] + w > W : t[0] - w < 0) continue;
    }
    if (n.k === 'dim' && !(inView(m.pt(n.a)) && inView(m.pt(n.b)))) continue;
    if (n.k === 'cross' && !inView(m.pt(n.p))) continue;

    if (n.k === 'dim'){
      const a = m.pt(n.a), b = m.pt(n.b), dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
      const u = [dx / L, dy / L];
      let nn = [-u[1], u[0]]; if (nn[1] > 0) nn = [-nn[0], -nn[1]];
      const tick = p => P([[p[0] + nn[0] * 7, p[1] + nn[1] * 7], [p[0] - nn[0] * 7, p[1] - nn[1] * 7]]);
      const head = (p, s) => P([[p[0] + s * u[0] * 9 + nn[0] * 3, p[1] + s * u[1] * 9 + nn[1] * 3], p, [p[0] + s * u[0] * 9 - nn[0] * 3, p[1] + s * u[1] * 9 - nn[1] * 3]]);
      out += [P([a, b]), tick(a), tick(b), head(a, 1), head(b, -1)].map(d => `<path class="ln" d="${d}"/>`).join('');
      const mx = (a[0] + b[0]) / 2 + nn[0] * 9, my = (a[1] + b[1]) / 2 + nn[1] * 9, ang = Math.atan2(dy, dx) * 180 / Math.PI;
      out += `<text x="${mx}" y="${my}" text-anchor="middle" transform="rotate(${Math.abs(ang) > 90 ? ang + 180 : ang} ${mx} ${my})">${esc(n.label || '')}</text>`;
    } else if (n.k === 'lead'){
      const p = m.pt(n.p), t = m.pt(n.t), right = t[0] < W * .6, e = [t[0] + (right ? 26 : -26), t[1]];
      out += `<circle class="dot" cx="${p[0]}" cy="${p[1]}" r="2.6"/><path class="ln" d="${P([p, t, e])}"/>`;
      out += `<text x="${e[0] + (right ? 5 : -5)}" y="${e[1] + 3.5}" text-anchor="${right ? 'start' : 'end'}">${esc(n.label)}</text>`;
    } else if (n.k === 'circ'){
      const c = m.pt(n.c);
      out += `<circle class="ln${n.dashed ? ' dash' : ''}" cx="${c[0]}" cy="${c[1]}" r="${m.len(n.r)}"/>`;
    } else if (n.k === 'cross'){
      const [x, y] = m.pt(n.p);
      out += `<circle class="ln" cx="${x}" cy="${y}" r="6"/><path class="ln" d="M${x - 11} ${y}L${x + 11} ${y}M${x} ${y - 11}L${x} ${y + 11}"/>`;
    } else if (n.k === 'hline'){
      const y = m.pt([0, n.y])[1];
      out += `<path class="ln dash" d="M0 ${y}L${W} ${y}"/><text x="10" y="${y - 6}">${esc(n.label || '')}</text>`;
    }
  }
  svg.innerHTML = out;
}
function animateNotes(k, delay){
  const svg = setEl[k].querySelector('.notes');
  const lines = [...svg.querySelectorAll('.ln:not(.dash)')], rest = svg.querySelectorAll('.dash, .dot, text');
  lines.forEach(l => { const L = l.getTotalLength(); l.style.strokeDasharray = L; l.style.strokeDashoffset = L; });
  gsap.to(lines, { strokeDashoffset:0, duration:.7, ease:'power2.inOut', stagger:.035, delay });
  gsap.fromTo(rest, { opacity:0 }, { opacity:1, duration:.5, stagger:.04, delay:delay + .35 });
}

/* ================= cube state & render ================= */
let half = 0, qT = [0, 0, 0, 1], qD = [0, 0, 0, 1], current = 'FRONT', rollTween = null;
function layout(){
  half = cube.offsetWidth / 2;
  for (const k in faceEl) faceEl[k].style.transform = `${qCss(FACE_Q[k])} translateZ(${half}px)`;
  drawNotes(current);
}
layout();
addEventListener('resize', layout);

// idle wobble only on desktop: on phones it forced a full re-composite every frame
let lastTransform = '';
gsap.ticker.add(time => {
  const w = (reduce || touch) ? [0, 0, 0, 1] : qMul(qAxis(AX, Math.sin(time * .3) * .03), qAxis(AY, Math.sin(time * .22) * .04));
  const t = `translateZ(${-half}px) ${qCss(qMul(w, qD))}`;
  if (t !== lastTransform){ cube.style.transform = t; lastTransform = t; } // only touch the DOM when it moved
});

function prepareFace(k, q){
  loadImgs(faceEl[k]); loadImgs(setEl[k]);
  const bg = faceEl[k].querySelector('.bg');
  if (bg) bg.style.transform = `rotate(${uprightDeg(q, k)}deg)`;
}
function animateTo(q, dur, ease){
  if (rollTween) rollTween.kill();
  const from = qD.slice(), o = { t:0 };
  rollTween = gsap.to(o, { t:1, duration:reduce ? 0 : dur, ease, onUpdate(){ qD = qSlerp(from, q, o.t); } });
}

/* ================= pages: enter / exit (layers slide with the cube, by depth) ================= */
const OFF = { right:[1, 0], left:[-1, 0], down:[0, 1], up:[0, -1] }; // where the new page comes from
const parts = k => [...setEl[k].querySelectorAll('.ly, .it')];
const notesOf = k => setEl[k].querySelector('.notes');
function offset(el, [ox, oy], sign){
  const d = +el.dataset.depth;
  return el.classList.contains('ly')
    ? { xPercent:ox * d * sign, yPercent:oy * d * sign, x:0, y:0 } // depth% of the screen
    : { x:ox * (80 + d * 12) * sign, y:oy * (80 + d * 12) * sign, xPercent:0, yPercent:0 };
}
function exitPage(k, dir){
  const se = setEl[k], o = OFF[dir];
  gsap.killTweensOf(parts(k));
  gsap.to(notesOf(k), { opacity:0, duration:.2 });
  parts(k).forEach(el => gsap.to(el, { ...offset(el, o, -1), opacity:0, duration:reduce ? 0 : .55, ease:'power2.in' }));
  gsap.delayedCall(reduce ? 0 : .6, () => { if (k !== current){ se.classList.remove('on'); se.setAttribute('aria-hidden', 'true'); } });
}
function enterPage(k, dir){
  const se = setEl[k], o = OFF[dir];
  se.classList.add('on'); se.removeAttribute('aria-hidden');
  gsap.killTweensOf(parts(k));
  drawNotes(k);
  gsap.set(notesOf(k), { opacity:1 });
  if (reduce){ gsap.set(parts(k), { x:0, y:0, xPercent:0, yPercent:0, opacity:1 }); return; }
  // background layers first, foreground last
  parts(k).sort((a, b) => a.dataset.depth - b.dataset.depth).forEach((el, i) =>
    gsap.fromTo(el, { ...offset(el, o, 1), opacity:0 }, {
      x:0, y:0, xPercent:0, yPercent:0, opacity:1, duration:touch ? .5 : .8, ease:'power3.out',
      delay:(touch ? .03 : .05) + i * (touch ? .04 : .07),
    }));
  const bub = se.querySelectorAll('.bubble .pp'), pop = se.querySelectorAll('.sfx .pp, .icon .pp');
  if (bub.length) gsap.fromTo(bub, { scale:0 }, {
    scale:1, duration:.5, ease:'back.out(2.6)', stagger:.1, delay:.55,
    transformOrigin:(i, el) => el.parentNode.classList.contains('r') ? '82% 120%' : el.parentNode.classList.contains('l') ? '-10% 40%' : '18% 120%',
  });
  if (pop.length) gsap.fromTo(pop, { scale:0, opacity:0 }, { scale:1, opacity:1, duration:.45, ease:'back.out(2.4)', delay:.6, stagger:.07 });
  animateNotes(k, .7);
}

/* ================= navigation ================= */
function roll(dir, fromDrag){
  const [ax, a] = ROLL[dir];
  qT = qSnap(qMul(qAxis(ax, a), qT));
  const next = frontFace(qT);
  prepareFace(next, qT);
  if (next !== current){ const prev = current; current = next; exitPage(prev, dir); enterPage(next, dir); }
  animateTo(qT, fromDrag ? .35 : (touch ? .55 : .8), fromDrag ? 'power2.out' : 'power3.inOut');
}

const KEYS = { ArrowRight:'right', ArrowLeft:'left', ArrowDown:'down', ArrowUp:'up' };
addEventListener('keydown', e => { if (KEYS[e.key] && !dlg.open){ e.preventDefault(); roll(KEYS[e.key]); } });

let wheelLock = 0;
addEventListener('wheel', e => {
  if (dlg.open) return;
  e.preventDefault();
  const now = performance.now(), ax = Math.abs(e.deltaX), ay = Math.abs(e.deltaY);
  if (now < wheelLock || Math.max(ax, ay) < 8) return;
  wheelLock = now + 750;
  roll(ax > ay ? (e.deltaX > 0 ? 'right' : 'left') : (e.deltaY > 0 ? 'down' : 'up'));
}, { passive:false });

document.querySelectorAll('.arrow').forEach(b => b.addEventListener('click', () => roll(b.dataset.dir)));

// drag: the cube and the page follow the finger, then commit or spring back
if (fine) document.body.classList.add('grab');
let drag = null;
addEventListener('pointerdown', e => {
  if (dlg.open || e.button > 0 || e.target.closest('button, a, dialog')) return;
  drag = { x0:e.clientX, y0:e.clientY, axis:null, a:0, sign:0, vx:0, vy:0, lx:e.clientX, ly:e.clientY, lt:performance.now() };
  document.body.classList.add('grabbing');
});
addEventListener('pointermove', e => {
  if (!drag) return;
  const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0, now = performance.now(), dt = Math.max(1, now - drag.lt);
  drag.vx = (e.clientX - drag.lx) / dt; drag.vy = (e.clientY - drag.ly) / dt;
  drag.lx = e.clientX; drag.ly = e.clientY; drag.lt = now;
  if (!drag.axis){
    if (Math.hypot(dx, dy) < 10) return;
    drag.axis = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
    if (rollTween) rollTween.kill();
    qD = qT.slice();
  }
  const h = drag.axis === 'h', d = h ? dx : dy, ax = h ? AY : AX;
  drag.a = gsap.utils.clamp(-PI2, PI2, (h ? d : -d) / (half * 2) * PI2 * (touch ? 1.6 : 1.15));
  qD = qMul(qAxis(ax, drag.a), qT);
  const sign = Math.sign(drag.a);
  if (sign && sign !== drag.sign){ drag.sign = sign; const qn = qSnap(qMul(qAxis(ax, sign * PI2), qT)); prepareFace(frontFace(qn), qn); }
  const f = Math.abs(drag.a) / PI2;
  parts(current).forEach(el => gsap.set(el, { x:(h ? d : 0) * el.dataset.depth / 60, y:(h ? 0 : d) * el.dataset.depth / 60, opacity:1 - f * .7 }));
  gsap.set(notesOf(current), { opacity:1 - f * 1.5 });
});
function endDrag(){
  if (!drag) return;
  const d = drag; drag = null;
  document.body.classList.remove('grabbing');
  if (!d.axis) return;
  const v = d.axis === 'h' ? d.vx : -d.vy;
  const commit = Math.abs(d.a) > PI2 * (touch ? .2 : .28) || (Math.abs(v) > (touch ? .25 : .45) && Math.sign(v) === Math.sign(d.a));
  if (commit) roll(d.axis === 'h' ? (d.a < 0 ? 'right' : 'left') : (d.a > 0 ? 'down' : 'up'), true);
  else {
    animateTo(qT, .5, 'back.out(1.6)');
    gsap.to(parts(current), { x:0, y:0, opacity:1, duration:.4, ease:'power3.out' });
    gsap.to(notesOf(current), { opacity:1, duration:.3 });
  }
}
addEventListener('pointerup', endDrag);
addEventListener('pointercancel', endDrag);

// mouse parallax (desktop): drawing layers drift by depth; comic items drift slightly the other way
if (fine && !reduce){
  const q = {};
  for (const k in setEl) q[k] = parts(k).map(el => {
    const isLy = el.classList.contains('ly'), t = el.querySelector(isLy ? 'img' : '.pp');
    return { d:+el.dataset.depth * (isLy ? 1 : -.35), x:gsap.quickTo(t, 'x', { duration:.9, ease:'power3' }), y:gsap.quickTo(t, 'y', { duration:.9, ease:'power3' }) };
  });
  addEventListener('mousemove', e => {
    if (drag && drag.axis) return;
    const mx = e.clientX / innerWidth * 2 - 1, my = e.clientY / innerHeight * 2 - 1;
    q[current].forEach(o => { o.x(mx * o.d * .12); o.y(my * o.d * .12); });
  });
}

/* ================= Express résumé ================= */
const openExpress = () => dlg.showModal();
document.getElementById('express-btn').addEventListener('click', openExpress);
dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
document.querySelectorAll('a[href="#express"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openExpress(); }));

/* ================= boot ================= */
prepareFace('FRONT', qT);
document.fonts.ready.then(() => enterPage('FRONT', 'down'));
addEventListener('load', () => (window.requestIdleCallback || setTimeout)(() => { for (const k in FACES) prepareFace(k, qT); }));
