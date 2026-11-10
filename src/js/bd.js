/* =====================================================================
   EXPRESS dialog — works even if GSAP fails to load
   ===================================================================== */
const dlg = document.getElementById('express');
const expressBtn = document.getElementById('express-btn');
expressBtn.addEventListener('click', () => dlg.showModal());
dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });

/* =====================================================================
   MOTION — skipped entirely if GSAP is missing or the visitor
   prefers reduced motion (the page is fully readable as static HTML)
   ===================================================================== */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (window.gsap && !reduce) document.fonts.ready.then(initMotion);

function initMotion(){
  gsap.registerPlugin(ScrollTrigger, SplitText);
  ScrollTrigger.config({ ignoreMobileResize:true });

  /* smooth scroll (desktop wheel; touch keeps native scrolling) */
  if (window.Lenis){
    const lenis = new Lenis({ lerp:.1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    expressBtn.addEventListener('click', () => lenis.stop());
    dlg.addEventListener('close', () => lenis.start());
  }

  /* reading progress */
  gsap.to('#progress', { scaleX:1, ease:'none', scrollTrigger:{ start:0, end:'max', scrub:.3 } });

  /* ---------------- COVER: intro ---------------- */
  const titleSplit = SplitText.create('.title .l1, .title .l2', { type:'chars', mask:'chars' });
  gsap.timeline({ defaults:{ ease:'power4.out' } })
    .from(titleSplit.chars, { yPercent:110, duration:.8, stagger:.035 })
    .from('.cl', { y:60, opacity:0, duration:.9, stagger:.15, ease:'back.out(1.4)' }, '-=.5') // back → front
    .from('.cover-bubble', { scale:0, transformOrigin:'0% 50%', duration:.55, ease:'back.out(2.2)' }, '-=.2')
    .from('.scroll-cue', { opacity:0, duration:.5 });

  /* ---------------- COVER: mouse parallax (fine pointers only) ---------------- */
  if (matchMedia('(pointer:fine)').matches){
    const layers = gsap.utils.toArray('.plx').map(el => ({
      d:+el.dataset.depth,
      x:gsap.quickTo(el, 'x', { duration:.8, ease:'power3' }),
      y:gsap.quickTo(el, 'y', { duration:.8, ease:'power3' }),
    }));
    addEventListener('mousemove', e => {
      const mx = e.clientX / innerWidth - .5, my = e.clientY / innerHeight - .5;
      layers.forEach(l => { l.x(-mx * l.d * 2); l.y(-my * l.d * 2); });
    });
  }

  /* ---------------- COVER: scroll = camera dives through the window ----------------
     Pin the cover and zoom the drawing around the window's upper-right
     pane (68.1% / 28.7% of the 1920×1080 layers). The glass is see-through,
     so it lands on paper, then the "Meanwhile…" caption hands over to ch.1. */
  const art = document.getElementById('cover-art');
  const pane = () => {
    const bw = art.offsetWidth, bh = art.offsetHeight, s = Math.max(bw / 1920, bh / 1080);
    const [px, py] = getComputedStyle(art.querySelector('.cl')).objectPosition.split(' ').map(v => parseFloat(v) / 100);
    return { x:(bw - 1920 * s) * px + .681 * 1920 * s, y:(bh - 1080 * s) * py + .287 * 1080 * s, s };
  };
  gsap.timeline({
    scrollTrigger:{ trigger:'#cover', start:'top top', end:'+=150%', pin:true, scrub:.6, invalidateOnRefresh:true },
  })
    .to('.scroll-cue, .cover-bubble', { opacity:0, duration:.1 }, 0)
    .to('.title', { yPercent:-40, opacity:0, duration:.4, ease:'power2.in' }, 0)
    .to(art, {
      duration:1, ease:'power2.in',
      transformOrigin:() => { const p = pane(); return `${p.x}px ${p.y}px`; },
      x:() => innerWidth / 2 - (art.offsetLeft + pane().x),
      y:() => innerHeight / 2 - (art.offsetTop + pane().y),
      scale:() => Math.max(innerWidth, innerHeight) / (150 * pane().s) * 1.4,
    }, .1)
    .to(art, { opacity:0, duration:.15 }, .95)
    .to('.meanwhile', { opacity:1, duration:.2 }, 1);

  /* ---------------- CHAPTER TITLES ---------------- */
  gsap.utils.toArray('.chapter-head').forEach(head => {
    const split = SplitText.create(head.querySelector('h2'), { type:'chars', mask:'chars' });
    gsap.timeline({ scrollTrigger:{ trigger:head, start:'top 80%' } })
      .from(head.querySelector('.eyebrow'), { opacity:0, y:10, duration:.4 })
      .from(split.chars, { yPercent:110, duration:.7, stagger:.03, ease:'power4.out' }, '-=.2')
      .from(head.querySelector('p'), { opacity:0, y:16, duration:.5 }, '-=.4');
  });

  /* ---------------- PANELS: the page draws itself ---------------- */
  gsap.utils.toArray('.panel').forEach(panel => {
    const brief = panel.querySelector('.ph-brief');
    const bubbles = panel.querySelectorAll('.bubble');
    const sfx = panel.querySelectorAll('.sfx');
    const tl = gsap.timeline({ scrollTrigger:{ trigger:panel, start:'top 82%' } });
    tl.fromTo(panel.querySelector('.panel-inner'), { clipPath:'inset(0% 100% 0% 0%)' }, { clipPath:'inset(0% 0% 0% 0%)', duration:.9, ease:'power4.inOut' })
      .from(panel.querySelector('.shadow'), { x:0, y:0, opacity:0, duration:.4 }, '-=.3');
    if (brief) tl.from(brief, { opacity:0, y:12, duration:.4 }, '-=.2');
    tl.from(panel.querySelector('.caption'), { x:-24, opacity:0, duration:.45, ease:'power3.out' }, '-=.35');
    if (bubbles.length) tl.from(bubbles, {
      scale:0, duration:.5, ease:'back.out(2.5)',
      transformOrigin:(i, el) => el.classList.contains('t-right') ? '82% 120%' : '18% 120%',
    }, '-=.1');
    if (sfx.length) tl.from(sfx, { scale:3, opacity:0, rotation:-30, duration:.5, ease:'back.out(2)' }, '-=.25');

    /* depth parallax inside the frame, tied to scroll */
    panel.querySelectorAll('.lyr').forEach(l => {
      const d = +l.dataset.depth || 0;
      gsap.fromTo(l, { yPercent:d * .5 }, {
        yPercent:-d * .5, ease:'none',
        scrollTrigger:{ trigger:panel, start:'top bottom', end:'bottom top', scrub:true },
      });
    });
  });

  /* ---------------- STRIP: vertical scroll → horizontal reading ---------------- */
  const track = document.getElementById('strip-track');
  const dist = () => Math.max(0, track.scrollWidth - innerWidth);
  const strip = gsap.to(track, {
    x:() => -dist(), ease:'none',
    scrollTrigger:{ trigger:'#ch2', start:'top top', end:() => '+=' + dist(), pin:true, scrub:.6, invalidateOnRefresh:true },
  });
  gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
      yPercent:12, rotation:6, opacity:0, duration:.6, ease:'back.out(1.6)',
      scrollTrigger:{ trigger:card, containerAnimation:strip, start:'left 85%' },
    });
  });
  gsap.from('.strip .s-head > *', { y:40, opacity:0, stagger:.1, duration:.6, scrollTrigger:{ trigger:'#ch2', start:'top 70%' } });

  /* ---------------- ENDING ---------------- */
  gsap.timeline({ scrollTrigger:{ trigger:'.end-panel', start:'top 75%' } })
    .fromTo('.end-panel', { clipPath:'circle(0% at 50% 50%)' }, { clipPath:'circle(75% at 50% 50%)', duration:1, ease:'power3.inOut', clearProps:'clipPath' })
    .from('.end-panel h2', { yPercent:30, opacity:0, duration:.6 }, '-=.4')
    .from('.end-panel .bubble', { scale:0, transformOrigin:'18% 120%', duration:.5, ease:'back.out(2.5)' }, '-=.2')
    .from('.end-links .btn', { y:20, opacity:0, stagger:.08, duration:.4 }, '-=.2');

  addEventListener('load', () => ScrollTrigger.refresh());
}
