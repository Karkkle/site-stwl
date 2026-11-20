import React, { useState, useEffect, useRef } from "react";
import { FOOTER_COLUMNS, SPECIALISMS } from '../scripts/seo/nav.mjs';
import logoInk from "./brand/logos/shotwell-logo-standard-ink.svg";
import logoBone from "./brand/logos/shotwell-logo-standard-bone.svg";
import logoWordBone from "./brand/logos/shotwell-logo-wordmark-bone.svg";

/*
  BRAND — see src/brand/STYLE_GUIDE.md and src/brand/tokens.css (imported in main.jsx)
  Headings → Syne (src/brand/heading-font.css) — replaces the kit's Bricolage on-page; logo SVGs unchanged
  Body/UI  → Instrument Sans 400 / 500
  Labels   → Instrument Sans 500, uppercase, +0.17em

  VIDEO
  Vimeo ID: 1171074557
  Embedded with background=1 — autoplay, muted, looped, no controls.
*/

const VIMEO_ID   = "1228802186";
const VIMEO_HASH = "dc6bb95470";

// Get a free key at https://web3forms.com — enter the inbox pricing requests should land in.
const WEB3FORMS_ACCESS_KEY = "aef8fe27-db64-43c2-a1f0-6326b74b5c74";

/* ─────────────────────────────────────────── FONTS & GLOBAL STYLES */
const FontsAndStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* Site aliases → brand tokens (src/brand/tokens.css). Names kept so existing rules keep working. */
    :root {
      --bg:      var(--color-bg);
      --bg-alt:  var(--color-surface);
      --surface: var(--color-surface);
      --border:  var(--color-border);
      --ink:     var(--color-text);
      --gold:    var(--color-accent);          /* Sage — accent / small labels */
      --gold-lt: var(--color-whisper-sage);    /* Whisper Sage — large accent words, dividers */
      --muted:   rgba(58,52,44,0.68);          /* Taupe tint for body-size secondary text (Sage is too low-contrast on Oat) */
      --T: var(--font-body);
      --H: var(--font-heading);
      --A: var(--font-accent);
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--bg); color: var(--ink);
      font-family: var(--T); font-weight: 400; line-height: 1.6;
      overflow-x: hidden; -webkit-font-smoothing: antialiased;
      font-synthesis: none; /* the kit ships no bold/italic faces — never fake them */
    }
    em { font-style: normal; }
    strong, b { font-weight: 500; }
    ::selection { background: var(--gold); color: var(--bg); }

    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:var(--bg); }
    ::-webkit-scrollbar-thumb { background:var(--gold); }

    /* ── nav */
    nav {
      position:fixed; top:0; left:0; right:0; z-index:200;
      display:flex; align-items:center; justify-content:space-between;
      padding:30px 52px;
      transition:background .5s, padding .4s, box-shadow .4s, top .4s, left .4s, right .4s, border-radius .4s;
    }
    nav.scrolled {
      top:14px; left:24px; right:24px; border-radius:100px;
      background:rgba(139,146,128,.74); backdrop-filter:blur(26px) saturate(1.4); -webkit-backdrop-filter:blur(26px) saturate(1.4);
      /* thicker bar, frosted glass with a soft drop shadow all round */
      box-shadow:0 0 36px rgba(58,52,44,.22), 0 10px 32px rgba(58,52,44,.22);
      padding:22px 22px 22px 40px;
    }
    nav:not(.scrolled) .nav-links a { color:rgba(241,236,227,.92); }
    nav:not(.scrolled) .burger span  { background:rgba(241,236,227,.9); }
    nav.scrolled .nav-links a { color:rgba(241,236,227,.92); }
    nav.scrolled .burger span { background:rgba(241,236,227,.9); }
    nav.scrolled .nav-links a::after { background:var(--color-bone); }
    /* open menu sits on the light overlay: drop the dark pill so the Taupe Ink lockup reads */
    nav.scrolled.menu-open { background:transparent; box-shadow:none; backdrop-filter:none; -webkit-backdrop-filter:none; }
    nav.menu-open .burger span { background:var(--ink); }

    /* Logo: the kit's standard lockup as SVG (never retyped). Bone over the hero video, Taupe Ink on Oat. */
    .nav-logo { display:block; line-height:0; text-decoration:none; }
    .nav-logo-img { display:block; height:92px; width:auto; transition:height .4s; }
    .nav-logo-img--ink, .nav-logo-img--word { display:none; }
    /* scrolled: the tagline drops away and the wordmark alone shows, larger than the old lockup */
    nav.scrolled .nav-logo-img { height:50px; }
    nav.scrolled .nav-logo-img--bone, nav.scrolled .nav-logo-img--ink { display:none; }
    nav.scrolled .nav-logo-img--word { display:block; }
    nav.menu-open .nav-logo-img { height:60px; }
    nav.menu-open .nav-logo-img--bone, nav.menu-open .nav-logo-img--word { display:none; }
    nav.menu-open .nav-logo-img--ink { display:block; }

    .nav-links { display:flex; gap:40px; list-style:none; }
    .nav-links a {
      white-space:nowrap;
      font-family:var(--A); font-weight:400; font-size:0.95rem; letter-spacing:.08em; text-transform:uppercase;
      color:var(--muted); text-decoration:none; transition:color .3s; position:relative;
    }
    .nav-links a::after {
      content:''; position:absolute; bottom:-4px; left:0;
      width:0; height:1px; background:var(--gold); transition:width .32s;
    }
    .nav-links a:hover::after { width:100%; }
    nav.scrolled     .nav-links a:hover { color:#fff; }
    nav:not(.scrolled) .nav-links a:hover { color:#fff; }

    .burger { display:none; flex-direction:column; gap:5px; background:none; border:none; padding:4px; }
    .burger span { display:block; width:28px; height:1px; background:var(--ink); transition:transform .3s,opacity .3s; }

    .mob-menu {
      position:fixed; inset:0; background:var(--bg); z-index:190;
      display:flex; flex-direction:column; align-items:center; justify-content:center; gap:32px;
      opacity:0; pointer-events:none; transition:opacity .4s;
    }
    .mob-menu.open { opacity:1; pointer-events:all; }
    .mob-menu a {
      font-family:var(--H); font-size:clamp(2.1rem,6.4vw,4.4rem); font-weight: 500;
      letter-spacing:-.03em; color:var(--ink); text-decoration:none; transition:color .3s;
    }
    .mob-menu a:hover { color:var(--gold); }

    /* ── hero */
    .hero {
      position:relative; height:100vh; min-height:640px;
      display:flex; flex-direction:column;
      align-items:flex-start; justify-content:flex-end; overflow:hidden;
    }

    /* Vimeo iframe wrapper — scales 16:9 to always cover viewport */
    .yt-wrap {
      position:absolute; inset:0; z-index:0;
      pointer-events:none; overflow:hidden;
    }
    .yt-wrap iframe {
      position:absolute;
      top:50%; left:50%;
      transform:translate(-50%,-50%);
      width:100vw; height:56.25vw;
      min-height:100vh;
      min-width:177.78vh;
      border:none;
      opacity:0; transition:opacity 1.2s ease;
    }
    .yt-wrap iframe.live { opacity:1; }
    .hero-video {
      position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
      opacity:0; transition:opacity 1s ease;
    }
    .hero-video.live { opacity:1; }
    /* Still frame shown straight away, so the hero is never an empty box while the player starts */
    .hero-poster {
      position:absolute; inset:0; width:100%; height:100%;
      object-fit:cover;
    }

    /* Light darkening in front of the video, for readability — change the last number (0.34) to adjust */
    .hero-tint {
      position:absolute; inset:0; z-index:1; pointer-events:none;
      background:rgba(16,12,6,.34);
    }
    .hero-grain {
      position:absolute; inset:0; z-index:2; opacity:.05; pointer-events:none;
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }
    .hero-corner {
      position:absolute; top:96px; right:52px; opacity:.2; z-index:3; pointer-events:none;
    }
    .hero-content {
      position:relative; z-index:4; padding:0 52px clamp(72px,10vh,120px); max-width:1400px; width:100%;
    }
    .hero-eyebrow {
      font-family:var(--T); font-weight:500; font-size:.78rem; letter-spacing:var(--label-letter-spacing); text-transform:uppercase;
      color:rgba(241,236,227,.92); margin-bottom:22px;
      opacity:0; animation:fadeUp .9s .4s forwards;
    }
    .hero-title {
      font-family:var(--H); font-size:clamp(2rem,4.8vw,4.6rem); font-weight: 500;
      line-height:1.1; letter-spacing:-.035em;
      color:rgba(241,236,227,.97); margin-bottom:48px;
      opacity:0; animation:fadeUp 1s .65s forwards;
    }
    .hero-title em { font-style:normal; color:rgba(169,174,157,.95); }
    .nw { white-space:nowrap; }


    .hero-cta-row {
      display:flex; align-items:center; gap:36px;
      opacity:0; animation:fadeUp 1s 1.1s forwards;
    }

    /* Primary: solid Taupe Ink + Bone text. Hero CTA sits on the dark video, so it uses the reversed pair. */
    .btn-hero, .btn-primary {
      display:inline-block; padding:16px 38px; border-radius:100px;
      font-family:var(--T); font-weight:500; font-size:.78rem; letter-spacing:var(--label-letter-spacing); text-transform:uppercase;
      text-decoration:none; border:1px solid var(--color-taupe-ink);
      background:var(--color-taupe-ink); color:var(--color-bone);
      transition:background .3s, color .3s, border-color .3s;
    }
    .btn-primary:hover { background:transparent; color:var(--color-taupe-ink); }
    .btn-hero { border-color:var(--color-bone); background:var(--color-bone); color:var(--color-taupe-ink); }
    .btn-hero:hover { background:transparent; color:var(--color-bone); }
    .btn-primary:disabled { background:var(--color-whisper-sage); border-color:var(--color-whisper-sage); color:var(--color-bone); }

    /* ── ticker */
    .ticker-wrap {
      width:100%; overflow:hidden; position:relative;
      padding:clamp(48px,5vw,72px) 0 clamp(16px,1.6vw,24px); background:var(--bg);
    }
    .ticker-header {
      position:relative; text-align:center; margin-bottom:40px;
    }
    .ticker-field {
      display:flex; flex-wrap:wrap; justify-content:center; align-items:center;
      width:100%; max-width:1160px; margin:0 auto;
    }
    .ticker-field-item {
      display:flex; align-items:center; justify-content:center;
      flex:1 1 0; min-width:0; box-sizing:border-box; height:clamp(64px,9vw,112px); padding:0 clamp(6px,1.4vw,20px);
      opacity:0; will-change:opacity;
    }
    /* Logos are a share of their cell, so the whole row scales with the page and stays on one line */
    .ticker-logo { height:auto; width:88%; max-width:170px; display:block; }
    .ticker-logo[alt="Organic Pharmacy"] { width:72%; max-width:140px; }
    .ticker-logo[alt="Dorchester Collection"] { width:74%; max-width:143px; }

    /* ── section shared */
    section { padding:clamp(52px,5.8vw,88px) 52px; }
    .s-label { display:inline-flex; align-items:center; font-family:var(--A); font-weight:400; font-size:0.75rem; letter-spacing:.08em; text-transform:uppercase; color:var(--ink); border:1px solid var(--border); border-radius:100px; padding:8px 16px; margin-bottom:26px; }
    .s-title { font-family:var(--H); font-size:clamp(2.3rem,5.8vw,5rem); font-weight:500; line-height:1.02; letter-spacing:-.04em; color:var(--ink); text-wrap:balance; }
    .s-title em { font-style:normal; font-weight:500; color:var(--gold-lt); }

    /* ── work */
    #work { background:var(--bg); overflow-x: hidden; padding-top:clamp(40px,4.4vw,64px); }
    .work-hdr { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:48px; gap:24px; flex-wrap:wrap; }

    .work-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; }

    .wc {
      position:relative; width:100%; aspect-ratio:16/9;
      border-radius: 0; overflow:hidden; background:var(--surface);
    }
    .wc-in {
      height: 100%;
      position:relative; overflow:hidden;
    }
    /* Hover: the video inside its frame zooms very slightly (same feel as nilofilms.com — 1.02, 0.6s, ease-out) */
    .wc .lv, .vert-phone .lv { transition:transform .6s cubic-bezier(0,0,.2,1); }
    .wc:hover .lv, .vert-phone:hover .lv { transform:scale(1.02); }

    @media (max-width:760px) { .work-grid { grid-template-columns:1fr; } }

    /* ── photography: editorial spread (strict 12-col grid, two aligned rows) */
    #photography { background:var(--bg); }
    #specialisms { background:var(--bg); }
    .spec-inner { max-width:1240px; margin:0 auto; }
    .spec-cols { display:grid; grid-template-columns:1fr 1fr; gap:clamp(28px,5vw,80px); margin-top:clamp(36px,4.5vw,64px); }
    .spec-h { font-family:var(--A); font-size:.75rem; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); margin-bottom:10px; }
    .spec-link { display:flex; justify-content:space-between; align-items:baseline; gap:24px; padding:20px 0; border-top:1px solid var(--border); text-decoration:none; color:var(--ink); transition:padding .4s cubic-bezier(0,0,.2,1); }
    .spec-link:last-child { border-bottom:1px solid var(--border); }
    .spec-link:hover { padding-left:10px; }
    .spec-name { font-family:var(--H); font-size:clamp(1.25rem,2vw,1.7rem); font-weight:500; letter-spacing:-.02em; }
    .spec-desc { font-family:var(--A); font-size:.92rem; color:var(--muted); line-height:1.5; max-width:30ch; text-align:right; }
    .spec-more { margin-top:clamp(28px,3.5vw,44px); }
    @media (max-width:760px) { .spec-cols { grid-template-columns:1fr; } .spec-link { flex-direction:column; gap:6px; } .spec-desc { text-align:left; max-width:none; } }
    .spread {
      display:grid; grid-template-columns:repeat(12,1fr); column-gap:24px; row-gap:24px;
      align-items:start;
    }
    .spread-hdr { margin:0 0 48px; }
    .spread figure { margin:0; }
    .spread figure.sp-a { grid-column:span 3; }
    .spread figure.sp-b { grid-column:span 4; }
    .spread-img { aspect-ratio:var(--ratio); overflow:hidden; border-radius: 0; background:var(--surface); }
    .spread-img img { width:100%; height:100%; object-fit:cover; object-position:var(--pos,50% 50%); display:block; }
    .spread figcaption { display:flex; flex-direction:column; gap:6px; margin-top:16px; }
    .pc-meta { display:flex; align-items:baseline; gap:12px; font-family:var(--A); font-weight:400; font-size:0.72rem; letter-spacing:.08em; text-transform:uppercase; }
    .pc-num { color:var(--gold); }
    .pc-tag { color:var(--ink); }
    .pc-desc { font-family:var(--A); font-size:.92rem; letter-spacing:.01em; line-height:1.55; color:var(--muted); font-weight:400; max-width:34ch; }
    @media (max-width:760px) {
      .spread { grid-template-columns:repeat(2,1fr); column-gap:12px; row-gap:28px; }
      .spread figure.sp-a, .spread figure.sp-b { grid-column:auto; }
      .spread figure:last-child { grid-column:1 / -1; }
      .spread-img { aspect-ratio:4 / 5; }
      .spread figure:last-child .spread-img { aspect-ratio:3 / 2; }
      .spread figcaption { margin-top:10px; }
      .pc-desc { display:none; }
    }

    /* ── services: full-bleed video background, steps in a row */
    #services {
      position:relative; overflow:hidden; display:flex;
      padding:clamp(56px,6vw,88px) 52px;
      background:var(--color-bg-inverted); color:var(--color-text-inverted);
    }
    .srv-video { position:absolute; inset:0; z-index:0; container-type:size; pointer-events:none; }
    .srv-video iframe {
      position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); border:0;
      width:100%; height:100%;
      width:max(100cqw,177.78cqh); height:max(100cqh,56.25cqw);
      filter:saturate(.6) contrast(1.05) brightness(.62);
    }
    .srv-video .lv { filter:saturate(.6) contrast(1.05) brightness(.62); }
    .srv-overlay {
      position:absolute; inset:0; z-index:1;
      background:linear-gradient(to bottom, rgba(58,52,44,.82) 0%, rgba(58,52,44,.3) 42%, rgba(58,52,44,.86) 100%);
    }
    .srv-inner {
      position:relative; z-index:2; width:100%; max-width:1360px; margin:0 auto;
      display:flex; flex-direction:column; justify-content:flex-start; gap:clamp(36px,4vw,56px);
    }
    #services .s-label { color:var(--color-bone); border-color:rgba(241,236,227,.3); }
    #services .s-title { color:var(--color-bone); }
    #services .s-title em { color:var(--color-whisper-sage); }
    .srv-list { display:grid; grid-template-columns:repeat(5,1fr); gap:clamp(20px,2.4vw,36px); }
    .srv-item {
      border-top:1px solid rgba(241,236,227,.3); padding-top:26px;
      display:flex; flex-direction:column; gap:16px;
      transition:border-color .3s;
    }
    .srv-item:hover { border-top-color:var(--color-whisper-sage); }
    .srv-num  { font-family:var(--A); font-weight:400; font-size:0.8rem; color:var(--color-whisper-sage); letter-spacing:.08em; }
    .srv-br { display:none; }
    @media (min-width:1101px) { .srv-br { display:inline; } }
    .srv-name { font-family:var(--H); font-size:clamp(1.4rem,1.9vw,1.95rem); font-weight:500; line-height:1.12; letter-spacing:-.025em; color:var(--color-bone); margin-bottom:10px; }
    .srv-desc { font-family:var(--T); font-size:clamp(1rem,1.2vw,1.18rem); color:rgba(241,236,227,.8); line-height:1.65; font-weight:400; }
    @media (max-width:1100px) { .srv-list { grid-template-columns:repeat(3,1fr); row-gap:44px; } .srv-name { font-size:1.6rem; } }
    @media (max-width:700px) { #services { padding:64px 24px; } .srv-list { grid-template-columns:1fr; gap:32px; } }

    /* ── vertical / social content */
    #social { background:var(--bg); }
    /* Split layout: copy and button on the left, the three vertical clips filling the right */
    .vert-layout { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,2.1fr); gap:clamp(32px,5vw,80px); align-items:stretch; }
    .vert-intro { display:flex; flex-direction:column; justify-content:space-between; align-items:flex-start; gap:36px; }
    .vert-copy { max-width:none; }
    #social .s-title { font-size:clamp(2.3rem,4.4vw,4.2rem); }
    .vert-sub { max-width:34ch; font-family:var(--T); font-size:1.1rem; color:var(--muted); line-height:1.75; margin-top:18px; font-weight:400; }
    .vert-row { display:grid; grid-template-columns:repeat(var(--cols,3),minmax(0,1fr)); gap:24px; }
    .vert-phone {
      position:relative; width:100%; aspect-ratio:9/16;
      border-radius: 0; overflow:hidden; background:var(--surface);
    }
    .vert-phone img, .vert-phone iframe {
      position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:none; pointer-events:none;
    }
    /* ── short looping clips (LoopVideo): still frame first, video fades in over it */
    .lv { position:absolute; inset:0; overflow:hidden; pointer-events:none; }
    .lv img, .lv video, .lv iframe { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:none; display:block; }
    .lv video, .lv iframe { opacity:0; transition:opacity .9s ease; }
    .lv video.live, .lv iframe.live { opacity:1; }
    .vert-tag {
      position:absolute; top:14px; left:14px; z-index:2;
      font-family:var(--A); font-weight:400; font-size:0.72rem; letter-spacing:.08em; text-transform:uppercase;
      color:#fff; background:rgba(16,12,6,.4); backdrop-filter:blur(6px);
      padding:6px 12px; border-radius:100px;
    }
    .vert-cap {
      position:absolute; bottom:16px; left:16px; right:16px; z-index:2;
      font-family:var(--A); font-size:.85rem; letter-spacing:.01em; color:rgba(241,236,227,.96); font-weight:400;
      text-shadow:0 1px 3px rgba(16,12,6,.55), 0 0 14px rgba(16,12,6,.35);
    }
    @media (max-width:900px) {
      .vert-layout { grid-template-columns:1fr; gap:36px; }
      .vert-intro { flex-direction:row; align-items:flex-end; justify-content:space-between; flex-wrap:wrap; }
    }
    /* Phones: swipeable row of clips */
    @media (max-width:600px) {
      .vert-row { display:flex; overflow-x:auto; scroll-snap-type:x mandatory; scroll-padding:0 24px; gap:12px; margin:0 -24px; padding:0 24px; scrollbar-width:none; }
      .vert-row::-webkit-scrollbar { display:none; }
      .vert-phone { flex:0 0 64%; scroll-snap-align:start; }
    }

    /* ── about */
    #about { background:var(--bg); }
    .abt-layout { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:clamp(32px,5vw,88px); align-items:start; margin-top:64px; }
    .abt-left { position:relative; }
    .abt-img { aspect-ratio:3/4; background:var(--surface); position:relative; overflow:hidden; border-radius: 0; }
    .abt-img-in {
      position:absolute; inset:0;
      background:linear-gradient(160deg,#d8ccb0 0%,#bfae8a 100%);
      display:flex; align-items:center; justify-content:center;
    }
    .abt-img-lbl { font-family:var(--T); font-weight:500; font-size:.72rem; letter-spacing:var(--label-letter-spacing); color:var(--gold); text-transform:uppercase; opacity:.65; }
    .abt-team { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
    .abt-team-photo { aspect-ratio:3/4; overflow:hidden; border-radius: 0; position:relative; background:var(--surface); }
    .abt-team-role { color:var(--muted); }
    .abt-team-photo img { width:100%; height:100%; object-fit:cover; display:block; }
    .abt-team-name { margin-top:14px; font-family:var(--A); font-weight:400; font-size:0.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--ink); text-align:center; }
    .abt-body p { font-family:var(--T); font-size:clamp(1.05rem,1.4vw,1.4rem); color:var(--muted); line-height:1.65; margin-bottom:1.1em; font-weight:400; }
    .abt-body p strong { color:var(--ink); font-weight:500; }
    .abt-bio { margin-top:clamp(28px,3vw,40px); padding-top:clamp(24px,2.6vw,34px); border-top:1px solid var(--border); }
    .abt-bio + .abt-bio { margin-top:clamp(20px,2.2vw,28px); }
    .abt-body .abt-bio p { font-size:clamp(.85rem,.95vw,.95rem); line-height:1.6; }
    .abt-body .abt-bio .abt-bio-name { font-family:var(--A); font-weight:400; font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--ink); margin-bottom:12px; }

    /* ── contact */
    #contact { background:var(--bg-alt); text-align:center; }
    .cnt-inner { max-width:680px; margin:0 auto; }
    .cnt-inner .s-title { margin:14px 0 22px; }
    .cnt-sub { font-family:var(--T); font-size:1.1rem; color:var(--muted); line-height:1.85; margin-bottom:52px; font-weight:400; }
    .cnt-actions { display:flex; flex-wrap:wrap; gap:14px; justify-content:center; margin-bottom:28px; }
    .cnt-actions .btn-primary, .cnt-copy { display:inline-flex; align-items:center; justify-content:center; text-decoration:none; }
    .cnt-copy { font-family:var(--T); font-weight:500; font-size:.78rem; letter-spacing:.17em; text-transform:uppercase; color:var(--ink); background:transparent; border:1px solid var(--color-border); border-radius:100px; padding:16px 34px; cursor:pointer; transition:background .3s, border-color .3s; }
    .cnt-copy:hover { background:var(--bg); border-color:var(--ink); }
    .cnt-email { display:block; font-family:var(--A); font-size:1rem; letter-spacing:.04em; color:var(--muted); margin-bottom:52px; }
    .cnt-email a { color:var(--ink); text-decoration:underline; text-underline-offset:4px; text-decoration-color:var(--border); transition:text-decoration-color .3s; }
    .cnt-email a:hover { text-decoration-color:var(--ink); }
    .cnt-div { width:1px; height:72px; background:linear-gradient(to bottom,transparent,var(--border),transparent); margin:0 auto 40px; }
    .cnt-links { display:flex; gap:32px; justify-content:center; }
    .cnt-links a { font-family:var(--A); font-weight:400; font-size:0.85rem; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); text-decoration:none; transition:color .3s; }
    .cnt-links a:hover { color:var(--gold); }

    /* ── footer */
    footer { background:var(--color-bg-inverted); color:var(--color-text-inverted); padding:clamp(56px,6vw,88px) 52px 30px; display:flex; flex-direction:column; gap:clamp(44px,5.5vw,76px); }
    .footer-grid { display:grid; grid-template-columns:minmax(0,1.25fr) repeat(4,minmax(0,1fr)); gap:clamp(24px,3vw,48px); align-items:start; max-width:1400px; width:100%; margin:0 auto; }
    /* The logo is a share of its column (capped), so it shrinks with the page and never runs into the link columns */
    .footer-logo { display:block; width:min(100%,220px); height:auto; }
    .footer-address { font-style:normal; font-family:var(--T); font-size:.92rem; line-height:1.65; color:var(--color-bone); opacity:.72; margin-top:26px; }
    .footer-social { display:flex; gap:24px; margin-top:22px; }
    .footer-social a { font-family:var(--T); font-size:.95rem; color:var(--color-bone); text-decoration:none; opacity:.88; transition:opacity .3s, color .3s; }
    .footer-social a:hover { opacity:1; color:var(--color-whisper-sage); }
    .footer-col .footer-h { margin-bottom:14px; color:var(--color-sage); }
    .footer-col a { display:block; padding:6px 0; font-family:var(--T); font-size:.92rem; letter-spacing:.005em; color:var(--color-bone); text-decoration:none; opacity:.88; transition:opacity .3s, color .3s; }
    .footer-col a:hover { opacity:1; color:var(--color-whisper-sage); }
    @media (max-width:1210px) { .footer-grid { grid-template-columns:repeat(4,minmax(0,1fr)); row-gap:36px; } .footer-brand { grid-column:1 / -1; } }
    .footer-bar { display:flex; justify-content:space-between; align-items:center; gap:12px 32px; flex-wrap:wrap; border-top:1px solid rgba(169,174,157,.28); padding-top:24px; max-width:1400px; width:100%; margin:0 auto; }
    footer p { font-family:var(--A); font-weight:400; font-size:0.72rem; letter-spacing:.08em; text-transform:uppercase; color:var(--color-sage); margin:0; }
    footer p span { color:var(--color-bone); }

    /* ── animations */
    @keyframes fadeUp  { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }

    /* ── responsive */
    @media (max-width:1100px) { .nav-links { display:none; } .burger { display:flex; } }
    @media (max-width:960px) {
      nav { padding:22px 24px; }
      nav.scrolled { top:10px; left:12px; right:12px; padding:14px 14px 14px 24px; box-shadow:0 0 24px rgba(58,52,44,.22), 0 6px 22px rgba(58,52,44,.22); }
      .nav-logo-img { height:62px; }
      nav.scrolled .nav-logo-img { height:38px; }
      nav.menu-open .nav-logo-img { height:56px; }
      .nav-links { display:none; }
      .burger { display:flex; }
      section { padding:56px 24px; }
      .hero-content { padding:0 24px 64px; }
      .abt-layout { grid-template-columns:1fr; }
      .abt-left, .abt-body { max-width:720px; }
      .abt-img { aspect-ratio:4/3; max-width:480px; }
      footer { padding:52px 24px 26px; }
      .footer-grid { grid-template-columns:1fr 1fr; row-gap:36px; }
      .footer-brand { grid-column:1 / -1; }
    }
    @media (max-width:520px) {
      .ticker-field { padding:0 12px; box-sizing:border-box; }
      .ticker-field-item { flex:0 0 33.333%; height:76px; }
      .ticker-logo { width:78%; }
    }
    @media (max-width:600px) {
      .work-grid { gap:8px; }
      .ticker-wrap { padding: 48px 0 16px; }
    }
  ` }} />
);

/* ─────────────────────────────────────────── LOGO COMPONENTS */
const ClientLogo = ({ src, alt, invert, customFilter, style }) => (
  <img
    src={src}
    alt={alt}
    className="ticker-logo"
    style={{
      filter: customFilter
        ? customFilter === 'none' ? 'none' : customFilter
        : invert
          ? "invert(1) grayscale(1) brightness(1.2) contrast(1.8)"
          : "grayscale(1) brightness(1.2) contrast(1.8)",
      ...style
    }}
  />
);

const CheckIconLarge = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

/* ─────────────────────────────────────────── CLIENT DATA (SELECTOR) */
const CLIENT_DATA = {
  skincare: {
    label: 'Skincare Brand',
    foundation: {
      desc: 'A focused shoot that gives you a polished hero film, a run of social snippets and a set of final images, all made together and delivered within 10 working days.',
      ideal: 'New or early-stage skincare and health brands that need a professional hero film and a core library of content, without managing a production themselves.'
    },
    series: {
      desc: 'More range from a second shoot day: two hero films and a larger set of snippets and images across your products, routines and people.',
      ideal: 'Established brands with a range to cover, ready to build a recognisable look across their website, social channels and paid media.'
    },
    campaign: {
      desc: 'The fullest package, for a launch or a larger range: four hero films, 14 snippets and 40 final images, enough to run organic and paid campaigns side by side.',
      ideal: 'Brands launching hero products or entering new markets, who need the volume to support a full campaign.'
    },
    bespoke: {
      desc: 'A project scoped around your brief. It might be a bigger campaign than our standard packages cover, or a short, simple shoot for a single film or a handful of images. We plan it with you and quote it to fit.',
      ideal: 'Brands with a larger launch or a wider range to cover, and brands that only need one film or a small set of images.'
    }
  },
  clinic: {
    label: 'Medical Clinic',
    foundation: {
      desc: 'A focused shoot to show your clinic, your team and your treatments clearly and professionally.',
      ideal: 'Private, aesthetic and wellness clinics building patient trust online, with content that shows your expertise without the complexity of managing a production team.'
    },
    series: {
      desc: 'More range from a second shoot day, so you can cover more treatments and more of your team.',
      ideal: 'Growing clinics ready to invest in authority-led content across their website, Instagram, TikTok and paid media.'
    },
    campaign: {
      desc: 'The fullest package for clinics with several treatments, practitioners or locations, with enough volume to run campaigns across every channel.',
      ideal: 'Established clinics scaling patient enquiries, who need a complete library that covers every treatment and every platform.'
    },
    bespoke: {
      desc: 'A project scoped around your brief. It might be a bigger campaign than our standard packages cover, or a short, simple shoot for a single film or a handful of images. We plan it with you and quote it to fit.',
      ideal: 'Clinics with several sites, treatments or practitioners to cover, and clinics that need one clear film or a simple set of images.'
    }
  },
  practitioner: {
    label: 'Practitioner',
    foundation: {
      desc: 'A focused shoot to show your practice, your expertise and the way you work.',
      ideal: 'Independent practitioners, including doctors, dermatologists, facialists and aestheticians, who want professional content that reflects their expertise and builds patient confidence.'
    },
    series: {
      desc: 'More range from a second shoot day, so your expertise, your treatments and your approach each get room to breathe.',
      ideal: 'Practitioners ready to grow their personal brand and patient base with authority-led content that sets them apart in their field.'
    },
    campaign: {
      desc: 'The fullest package for practitioners building a premium personal brand, with enough volume for paid acquisition and organic authority-building together.',
      ideal: 'High-profile or multi-location practitioners scaling their practice, who want a content library that positions them as the name in their speciality.'
    },
    bespoke: {
      desc: 'A project scoped around your brief. It might be a bigger campaign than our standard packages cover, or a short, simple shoot for a single film or a handful of images. We plan it with you and quote it to fit.',
      ideal: 'Practitioners building a wider body of work, and practitioners who just need a short, simple shoot.'
    }
  },
  spa: {
    label: 'Spa',
    foundation: {
      desc: 'A focused shoot to capture the atmosphere of your spa and the treatments you offer.',
      ideal: 'Luxury and wellness spas building their online presence, with professional content that captures the feel of your space and drives treatment bookings.'
    },
    series: {
      desc: 'More range from a second shoot day, so you can show more rooms, rituals and treatments.',
      ideal: 'Established spas ready to invest in content that communicates the full guest experience across organic and paid channels.'
    },
    campaign: {
      desc: 'The fullest package for destination or multi-site spas, with enough volume to run campaigns that fill the treatment diary.',
      ideal: 'Premium or destination spas scaling their brand, who want a content library that does justice to the level of experience on offer.'
    },
    bespoke: {
      desc: 'A project scoped around your brief. It might be a bigger campaign than our standard packages cover, or a short, simple shoot for a single film or a handful of images. We plan it with you and quote it to fit.',
      ideal: 'Spas and groups with several venues or a seasonal campaign, and spas that need one short film or a few images.'
    }
  },
  other: {
    label: 'Other',
    foundation: {
      desc: 'A focused shoot that gives you a polished hero film, a run of social snippets and a set of final images.',
      ideal: 'New or early-stage brands that need professional content and a core library to publish from, without managing a production themselves.'
    },
    series: {
      desc: 'More range from a second shoot day: two hero films and a larger set of snippets and images.',
      ideal: 'Established brands ready to build a recognisable look across their website, social channels and paid media.'
    },
    campaign: {
      desc: 'The fullest package, for a launch or a larger range, with enough volume to run organic and paid campaigns side by side.',
      ideal: 'Brands launching products or entering new markets, who need the volume to support a full campaign.'
    },
    bespoke: {
      desc: 'A project scoped around your brief. It might be a bigger campaign than our standard packages cover, or a short, simple shoot for a single film or a handful of images. We plan it with you and quote it to fit.',
      ideal: 'Teams with a larger project in mind, and teams that only need something short and simple.'
    }
  }
};

const SELECTOR_TILES = [
  { id: 'skincare', name: 'Skincare Brand', desc: 'Product-led, retail or DTC',  img: './packages/skincare.jpg' },
  { id: 'clinic', name: 'Medical Clinic', desc: 'Private, aesthetic or wellness clinic',  img: './packages/clinic.jpg' },
  { id: 'practitioner', name: 'Practitioner', desc: 'Doctor or independent specialist',    img: './packages/practitioner.jpg' },
  { id: 'spa', name: 'Spa', desc: 'Luxury or wellness spa',                    img: './packages/spa.jpg' },
  { id: 'other', name: 'Other', desc: 'General or lifestyle',                  img: './packages/other.jpg' }
];

/* ─────────────────────────────────────────── DATA */
const WORKS = [
  { id:1, title:"Ads",               tag:"Ads",        caption:"Campaign ads for skincare brands", clip:"ads", vimeoId: "1228515977", vimeoHash: "126823ccdd", g:"linear-gradient(145deg,#c8b98a,#a8956a)" },
  { id:2, title:"Interviews",        tag:"Interviews", caption:"Founder-led brand story",         clip:"interviews", vimeoId: "1168509806", vimeoHash: "95ecf084c6", g:"linear-gradient(165deg,#b2c2b4,#8aa292)" },
  { id:3, title:"Store Highlights",  tag:"Store Highlights", caption:"In-store tours and product highlights",  clip:"store", vimeoId: "1228547469", vimeoHash: "444326e488", g:"linear-gradient(145deg,#c8a898,#a07868)" },
  { id:5, title:"Treatments",        tag:"Treatments", caption:"Clinic and spa treatments", clip:"treatments", vimeoId: "1228552596", vimeoHash: "ec2aecbc0d", g:"linear-gradient(145deg,#a2bac2,#809098)" },
];

// Editorial spread: row 1 = four 4:5 portraits (3 cols each), row 2 = three 3:2 landscapes (4 cols each).
// `pos` = crop focal point.
const PHOTO_ITEMS = [
  { id:1, src:"./thumbs/portrait_01.jpg",  tag:"Portrait",  caption:"Client portrait, editorial lighting",   span:"a", ratio:"4 / 5", pos:"56% 40%" },
  { id:2, src:"./thumbs/spa_01.jpg",       tag:"Interiors", caption:"Spa interiors, architectural detail",   span:"a", ratio:"4 / 5", pos:"42% 50%" },
  { id:3, src:"./thumbs/device_01.jpg",    tag:"Product",   caption:"In-clinic device photography",          span:"a", ratio:"4 / 5", pos:"30% 50%" },
  { id:4, src:"./thumbs/product_09.jpg",   tag:"Product",   caption:"Skincare range, still life",            span:"a", ratio:"4 / 5", pos:"72% 50%" },
  { id:5, src:"./thumbs/treatment_01.jpg", tag:"Editorial", caption:"Treatment room, documentary style",     span:"b", ratio:"3 / 2", pos:"50% 50%" },
  { id:6, src:"./thumbs/practice_01.jpg",  tag:"Practice",  caption:"Independent practitioner, in session",  span:"b", ratio:"3 / 2", pos:"50% 55%" },
  { id:7, src:"./thumbs/device_03.jpg",    tag:"Product",   caption:"Product detail, studio lighting",       span:"b", ratio:"3 / 2", pos:"60% 50%" },
];

const SERVICES = [
  { title:"Discover & Diagnose",           desc:"Understanding your brand's core identity, audience, and objectives to build a solid foundation." },
  { title:"Content & Video Strategy",      desc:"Developing a tailored approach to ensure your visual content reaches and resonates with the right people." },
  { title:"Pre‑Production & Creative",     desc:"Crafting compelling concepts, storyboarding, and planning every detail before we roll the cameras." },
  { title:"Shoot & |Capture",              desc:"Executing the vision with precision, using high-end cinematography and expert direction." },
  { title:"Edit & optimise for socials",   desc:"Refining the narrative through editing and colour grading, creating tailored deliverables for maximum impact across platforms." },
];

const VERTICAL_ITEMS = [
  { id:1, type:'video', clip:"paid", vimeoId:"1169905394", vimeoHash:"4436d542ff", tag:"Paid", caption:"Skincare routine, cut for paid social" },
  { id:2, type:'video', clip:"experts", vimeoId:"1229947985", vimeoHash:"65e3d16178", tag:"Experts", caption:"Expert-led content, cut for social" },
  { id:3, type:'video', clip:"events", vimeoId:"1232970645", vimeoHash:"261306da29", tag:"Events", caption:"Event coverage, cut for social" },
];

const NAV_ITEMS = [
  { label:"Videos",      id:"work" },
  { label:"Social content", id:"social" },
  { label:"Photography", id:"photography" },
  { label:"About",       id:"about" },
  { label:"Contact",     id:"contact" },
];

const CLIENTS = [
  { id: 'az',  Logo: () => <ClientLogo src="./aroma-zone.svg" alt="Aroma-Zone" invert={false} /> },
  { id: 'lor', Logo: () => <ClientLogo src="./l'oreal.png" alt="L'Oreal" invert={false} /> },
  { id: 'mfk', Logo: () => <ClientLogo src="./francis-kurkdjian.png" alt="Maison Francis Kurkdjian" invert={false} customFilter="brightness(0)" /> },
  { id: 'top', Logo: () => <ClientLogo src="./the-organic-pharmacy.png" alt="Organic Pharmacy" invert={false} customFilter="brightness(0)" /> },
  { id: 'dor', Logo: () => <ClientLogo src="./dorchester-collection.svg" alt="Dorchester Collection" invert={false} /> },
];

/* ─────────────────────────────────────────── PACKAGE DATA */
const PACKAGE_DATA = [
  {
    id: 'foundation',
    num: '01',
    name: 'Foundation',
    meta: ['1 shoot day', '1.5 editing days', '10 working day delivery'],
    deliverablesLabel: 'What you get',
    deliverables: [
      '<strong>1 × 60-second hero video</strong><br/>The lead film of the shoot, for your website, paid ads, events and screens in your space.',
      '<strong>4 × 15-second snippets</strong><br/>Quick cuts in landscape and portrait, for social, email and web.',
      '<strong>10 final images</strong><br/>Edited photography for your site, social, press and retailers.',
      '<strong>10 working day delivery</strong><br/>Your films and images delivered within 10 working days.'
    ]
  },
  {
    id: 'series',
    num: '02',
    name: 'Series',
    badge: 'Most popular',
    meta: ['2 shoot days', '3 editing days', '10 working day delivery'],
    deliverablesLabel: 'What you get',
    deliverables: [
      '<strong>2 × 60-second hero videos</strong><br/>The lead films of the shoot, for your website, paid ads, events and screens in your space.',
      '<strong>10 × 15-second snippets</strong><br/>Quick cuts in landscape and portrait, for social, email and web.',
      '<strong>25 final images</strong><br/>Edited photography for your site, social, press and retailers.',
      '<strong>10 working day delivery</strong><br/>Your films and images delivered within 10 working days.'
    ]
  },
  {
    id: 'campaign',
    num: '03',
    name: 'Campaign',
    meta: ['3 shoot days', '4 editing days', '10 working day delivery'],
    deliverablesLabel: 'What you get',
    deliverables: [
      '<strong>4 × 60-second hero videos</strong><br/>The lead films of the shoot, for your website, paid ads, events and screens in your space.',
      '<strong>14 × 15-second snippets</strong><br/>Quick cuts in landscape and portrait, for social, email and web.',
      '<strong>40 final images</strong><br/>Edited photography for your site, social, press and retailers.',
      '<strong>10 working day delivery</strong><br/>Your films and images delivered within 10 working days.'
    ]
  },
  {
    id: 'bespoke',
    num: '04',
    name: 'Bespoke',
    meta: ['Scoped to your brief', 'Larger or smaller projects'],
    deliverablesLabel: 'How it works',
    deliverables: [
      '<strong>A bigger project</strong><br/>More shoot days, more films or a larger set of images, for a launch, a wider range or several locations.',
      '<strong>A shorter, simpler project</strong><br/>One film or a small set of images, when a full package is more than you need.',
      '<strong>Your formats</strong><br/>Hero videos, 15-second snippets and final images, in the mix that suits your brief.',
      '<strong>Quoted to your brief</strong><br/>We plan the scope and delivery time with you, then send a clear quote.'
    ]
  }
];

const SUMMARY_ROWS = [
  { label: 'Shoot days', foundation: '1', series: '2', campaign: '3' },
  { label: 'Editing days', foundation: '1.5', series: '3', campaign: '4' },
  { label: '60-second hero videos', foundation: '1', series: '2', campaign: '4' },
  { label: '15-second snippets', foundation: '4', series: '10', campaign: '14' },
  { label: 'Final images', foundation: '10', series: '25', campaign: '40' },
  { label: 'Total assets', foundation: '15', series: '37', campaign: '58' },
  { label: 'Delivery', foundation: '10 working days', series: '10 working days', campaign: '10 working days' },
];

/* ─────────────────────────────────────────── HOOKS */

/* ─────────────────────────────────────────── COMPONENTS */

function Nav({ open, setOpen }) {
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <nav className={[sc ? "scrolled" : "", open ? "menu-open" : ""].join(" ").trim()}>
        <a href="#" className="nav-logo" aria-label="Shotwell — visual content for skincare, healthcare and wellness">
          <img className="nav-logo-img nav-logo-img--bone" src={logoBone} alt="" />
          <img className="nav-logo-img nav-logo-img--ink" src={logoInk} alt="" />
          <img className="nav-logo-img nav-logo-img--word" src={logoWordBone} alt="" />
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(l => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}
        </ul>
        <button className="burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span style={open ? {transform:"rotate(45deg) translate(4px,4px)"} : {}} />
          <span style={open ? {opacity:0} : {}} />
          <span style={open ? {transform:"rotate(-45deg) translate(4px,-4px)"} : {}} />
        </button>
      </nav>
      <div className={`mob-menu ${open ? "open" : ""}`}>
        {NAV_ITEMS.map(l => <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>)}
      </div>
    </>
  );
}

function Hero() {
  // Plays our own small MP4 (public/shotwell-hero.mp4). If it can't load, falls back to the Vimeo player.
  const [live, setLive] = useState(false);
  const [useVimeo, setUseVimeo] = useState(false);
  const [vimeoLive, setVimeoLive] = useState(false);
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const vimeoSrc = `https://player.vimeo.com/video/${VIMEO_ID}?h=${VIMEO_HASH}&autoplay=1&muted=1&loop=1&background=1&quality=auto`;

  // Some browsers ignore the autoplay attribute until the element is muted in script; also catch a stalled start.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => { const r = v.play(); if (r && r.catch) r.catch(() => {}); };
    tryPlay();
    const stalled = setTimeout(() => { if (v.paused && v.readyState < 2) setUseVimeo(true); }, 8000);
    return () => clearTimeout(stalled);
  }, []);

  // Fallback only: reveal the Vimeo player once it is ready.
  useEffect(() => {
    if (!useVimeo) return;
    const onMessage = (e) => {
      if (e.origin !== "https://player.vimeo.com") return;
      try {
        const d = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (d && d.event === "ready") setTimeout(() => setVimeoLive(true), 1200);
      } catch { /* not a player message */ }
    };
    window.addEventListener("message", onMessage);
    const fallback = setTimeout(() => setVimeoLive(true), 5000);
    return () => { window.removeEventListener("message", onMessage); clearTimeout(fallback); };
  }, [useVimeo]);

  return (
    <section className="hero" id="home">
      <div className="yt-wrap">
        <img className="hero-poster" src="./hero-poster.jpg" alt="" fetchpriority="high" decoding="async" />
        <video
          ref={videoRef}
          className={`hero-video${live ? " live" : ""}`}
          src="./shotwell-hero.mp4"
          poster="./hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          onPlaying={() => { setLive(true); window.__heroReady = true; window.dispatchEvent(new Event("shotwell-hero-ready")); }}
          onError={() => setUseVimeo(true)}
        />
        {useVimeo && (
          <iframe
            ref={frameRef}
            className={vimeoLive ? "live" : ""}
            src={vimeoSrc}
            title="Shotwell Reel"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen={false}
          />
        )}
      </div>

      <div className="hero-tint" />
      <div className="hero-grain" />

      <svg className="hero-corner" width="70" height="70" viewBox="0 0 70 70" fill="none">
        <path d="M70 0 L0 0 L0 70" stroke="rgba(169,174,157,.55)" strokeWidth="1"/>
      </svg>

      <div className="hero-content">
        <p className="hero-eyebrow">Video production studio · London</p>
        <h1 className="hero-title">
          We create <em><span className="nw">results-driven,</span> <span className="nw">high-end</span> content</em> for brands and experts in skincare, healthcare and wellness.
        </h1>
        <div className="hero-cta-row">
          <a href="#work" className="btn-hero">See Our Work</a>
        </div>
      </div>

    </section>
  );
}

function Ticker() {
  const fieldRef = useRef(null);

  // Scroll-linked fade only: each logo's opacity follows its position in the viewport
  // (in on the way up, out as it leaves the top). No transform, so nothing moves.
  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    const items = [...field.children];
    const clamp = (v) => Math.min(1, Math.max(0, v));
    let rafId;

    const update = () => {
      const vh = window.innerHeight;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      items.forEach((el, i) => {
        if (reduce) { el.style.opacity = 1; return; }
        const r = el.getBoundingClientRect();
        const y = (r.top + r.height / 2) / vh;                 // 0 = top of screen, 1 = bottom
        const fadeIn  = clamp((0.98 - y - i * 0.03) / 0.30);   // 0 below ~98%, 1 by ~68%
        const fadeOut = clamp((y - 0.10) / 0.20);              // 1 above ~30%, 0 at ~10%
        el.style.opacity = Math.min(fadeIn, fadeOut).toFixed(3);
      });
    };
    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="ticker-wrap">
      <div className="ticker-header fade-in">
        <h2 className="s-title">We're trusted by <em>amazing</em> brands.</h2>
      </div>
      <div className="ticker-field" ref={fieldRef}>
        {CLIENTS.map((client) => {
          const Logo = client.Logo;
          return (
            <div
              key={client.id}
              className="ticker-field-item"
              style={{ mixBlendMode: client.blend || "multiply" }}
            >
              <Logo />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// A short silent looping clip served from our own site (public/video/<name>.mp4 + <name>.jpg).
// - Starts loading well before it scrolls into view (once the hero is playing, so the hero gets the bandwidth first).
// - Shows the video's first frame as soon as it is ready, so the still image is never seen under a playing clip.
// - Plays only while on screen, pauses off screen.
// - Falls back to the Vimeo player if the file can't load.
function LoopVideo({ name, vimeoId, vimeoHash, title }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useRef(false);
  const [near, setNear] = useState(false);
  const [live, setLive] = useState(false);
  const [failed, setFailed] = useState(false);
  const [vimeoLive, setVimeoLive] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (v && v.paused) { const r = v.play(); if (r && r.catch) r.catch(() => {}); }
  };

  // 1. Start loading early: within ~2 screens of the viewport, and only after the hero has started.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") { setNear(true); return; }
    let heroReady = !!window.__heroReady, close = false;
    const go = () => { if (heroReady && close) setNear(true); };
    const onHero = () => { heroReady = true; go(); };
    window.addEventListener("shotwell-hero-ready", onHero);
    const heroTimeout = setTimeout(onHero, 4000);   // never wait on the hero for long
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { close = true; go(); } }, { rootMargin: "1100px 300px" });
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(heroTimeout); window.removeEventListener("shotwell-hero-ready", onHero); };
  }, []);

  // 2. Play only while actually on screen.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") { inView.current = true; return; }
    const obs = new IntersectionObserver(([e]) => {
      inView.current = e.isIntersecting;
      const v = videoRef.current;
      if (e.isIntersecting) play();
      else if (v && !v.paused) v.pause();
    }, { rootMargin: "80px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!failed) return;
    const t = setTimeout(() => setVimeoLive(true), 2500);
    return () => clearTimeout(t);
  }, [failed]);

  return (
    <div className="lv" ref={wrapRef} aria-hidden="true">
      <img src={`./video/${name}.jpg`} alt="" loading="lazy" decoding="async" />
      {near && !failed && (
        <video
          ref={videoRef}
          className={live ? "live" : ""}
          src={`./video/${name}.mp4`}
          poster={`./video/${name}.jpg`}
          muted loop playsInline preload="auto" disablePictureInPicture
          onLoadedData={() => { setLive(true); if (inView.current) play(); }}
          onCanPlay={() => { if (inView.current) play(); }}
          onError={() => setFailed(true)}
        />
      )}
      {failed && vimeoId && (
        <iframe
          className={vimeoLive ? "live" : ""}
          src={`https://player.vimeo.com/video/${vimeoId}?h=${vimeoHash}&autoplay=1&muted=1&loop=1&background=1&quality=auto`}
          allow="autoplay; fullscreen; picture-in-picture"
          title={title}
          tabIndex={-1}
        />
      )}
    </div>
  );
}

function WorkTile({ w }) {
  return (
    <div className="wc" data-h>
      <span className="vert-tag">{w.tag}</span>
      <div className="wc-in" style={{background:w.g}}>
        <LoopVideo name={w.clip} vimeoId={w.vimeoId} vimeoHash={w.vimeoHash} title={w.title} />
      </div>
      <span className="vert-cap">{w.caption}</span>
    </div>
  );
}

function Work() {
  return (
    <section id="work">
      <div className="work-hdr fade-in">
        <div><p className="s-label">Videos</p><h2 className="s-title">Our <em>videos</em></h2></div>
        <a href="#contact" className="btn-primary">Get in touch</a>
      </div>
      <div className="work-grid">
        {WORKS.map(w => <WorkTile key={w.id} w={w} />)}
      </div>
    </section>
  );
}

function Photography() {
  return (
    <section id="photography">
      <div className="spread-hdr fade-in">
        <p className="s-label">Photography</p>
        <h2 className="s-title">Stills that <em>stay</em></h2>
      </div>
      <div className="spread">
        {PHOTO_ITEMS.map((p, i) => (
          <figure
            key={p.id}
            className={"fade-in sp-" + p.span}
            style={{ "--ratio":p.ratio, "--pos":p.pos, transitionDelay:`${(i % 4) * 0.08}s` }}
          >
            <div className="spread-img">
              <img src={p.src} alt={p.caption} loading="lazy" decoding="async" />
            </div>
            <figcaption>
              <span className="pc-meta"><span className="pc-num">{String(i + 1).padStart(2, "0")}</span><span className="pc-tag">{p.tag}</span></span>
              <span className="pc-desc">{p.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function VerticalContent() {
  return (
    <section id="social">
      <div className="vert-layout">
      <div className="vert-intro fade-in">
        <div className="vert-copy">
          <p className="s-label">Social content</p>
          <h2 className="s-title">Built for the <em>feed</em></h2>
          <p className="vert-sub">Every project shot natively in vertical, ready to post — edited for Reels, TikTok and Stories.</p>
        </div>
        <a href="#contact" className="btn-primary">Get in touch</a>
      </div>
      <div className="vert-row fade-in" style={{ "--cols": VERTICAL_ITEMS.length }}>
        {VERTICAL_ITEMS.map(v => (
          <div className="vert-phone" key={v.id} data-h>
            <span className="vert-tag">{v.tag}</span>
            {v.type === 'video' ? (
              <LoopVideo name={v.clip} vimeoId={v.vimeoId} vimeoHash={v.vimeoHash} title={v.caption} />
            ) : (
              <img src={v.src} alt={v.caption} />
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

function Specialisms() {
  const col = (title, items) => (
    <div>
      <p className="spec-h">{title}</p>
      {items.map(i => (
        <a key={i.slug} href={`/${i.slug}/`} className="spec-link" data-h>
          <span className="spec-name">{i.name}</span>
          <span className="spec-desc">{i.desc}</span>
        </a>
      ))}
    </div>
  );
  return (
    <section id="specialisms">
      <div className="spec-inner">
        <div className="fade-in">
          <p className="s-label">Specialisms</p>
          <h2 className="s-title">Made for <em>healthcare</em> and skincare</h2>
          <p className="vert-sub">One London studio for video and photography, for private clinics, hospitals, doctors, medical device companies, skincare brands and spas.</p>
        </div>
        <div className="spec-cols fade-in">
          {col("Who we work with", SPECIALISMS.who)}
          {col("What we make", SPECIALISMS.what)}
        </div>
        <div className="spec-more fade-in"><a href="/video-photography-packages/" className="btn-primary">See our packages</a></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="srv-video" aria-hidden="true">
        <LoopVideo name="process" vimeoId="1228811947" vimeoHash="b6ec1b691e" title="Shotwell behind the scenes" />
      </div>
      <div className="srv-overlay" />
      <div className="srv-inner">
        <div className="fade-in"><p className="s-label">How we work</p><h2 className="s-title">Our <em>process</em></h2></div>
        <div className="srv-list fade-in">
          {SERVICES.map((s,i) => (
            <div className="srv-item" key={s.title} data-h>
              <div className="srv-num">0{i+1}</div>
              <div><div className="srv-name">{s.title.split("|").map((part, k) => k ? <React.Fragment key={k}><br className="srv-br" />{part}</React.Fragment> : part)}</div><div className="srv-desc">{s.desc}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PACKAGES + SELECTOR */
function Packages() {
  const [step, setStep] = useState('selector');
  const [activePkgId, setActivePkgId] = useState('series');

  // Selector State
  const [clientType, setClientType] = useState('skincare');

  // Email CTA State
  const [sentEmail, setSentEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleReveal = (id) => {
    if (id) setClientType(id);
    setStep('packages');
    setSentEmail("");
    setSubmitError("");
    setTimeout(() => {
      document.getElementById('packages-start')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBackToSelector = () => {
    setStep('selector');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Quote request — ${CLIENT_DATA[clientType].label} — ${activePkgId}`,
          email,
          message: `New quote request from the site.\n\nClient type: ${CLIENT_DATA[clientType].label}\nPackage viewed: ${activePkgId}\nRequester email: ${email}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSentEmail(email);
      } else {
        setSubmitError("Something went wrong sending your request. Please try again or email us directly.");
      }
    } catch {
      setSubmitError("Something went wrong sending your request. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  // Dynamic Content Merge
  const basePkg = PACKAGE_DATA.find(p => p.id === activePkgId);
  const activePkg = {
    ...basePkg,
    desc: CLIENT_DATA[clientType]?.[activePkgId]?.desc || basePkg.desc,
    idealFor: CLIENT_DATA[clientType]?.[activePkgId]?.ideal || 'Loading...',
  };

  return (
    <section id="packages" style={{ background: 'var(--bg)', minHeight: '80vh', padding: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .pkg-wrap { padding: clamp(52px,5.8vw,88px) 52px; max-width: 1400px; margin: 0 auto; width: 100%; }
        .auto-fade { animation: fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .fade-swap { animation: fadeSwap 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes fadeSwap { 0% { opacity: 0; transform: translateY(15px); } 100% { opacity: 1; transform: translateY(0); } }

        /* Selector Grid */
        .sel-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin: 40px 0 0; }
        .sel-tile { position: relative; overflow: hidden; isolation: isolate; padding: 24px; min-height: 380px; background: var(--color-taupe-ink); display: flex; flex-direction: column; justify-content: space-between; gap: 16px; border-radius: 0; cursor: pointer; color: var(--color-bone); }
        .sel-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; transition: transform 0.6s cubic-bezier(0,0,.2,1); }
        .sel-tile::after { content: ''; position: absolute; inset: 0; z-index: -1; background: linear-gradient(to top, rgba(26,22,16,.82) 0%, rgba(26,22,16,.38) 38%, rgba(26,22,16,0) 62%), linear-gradient(to bottom, rgba(26,22,16,.32) 0%, rgba(26,22,16,0) 22%); }
        .sel-tile:hover .sel-img { transform: scale(1.02); }
        .sel-top { display: flex; justify-content: space-between; align-items: center; }
        .sel-num { font-family:var(--A); font-weight:400; font-size:0.75rem; letter-spacing: var(--label-letter-spacing); color: var(--color-bone); }
        .sel-arrow { width: 36px; height: 36px; border: 1px solid rgba(241,236,227,.55); border-radius: 100px; display: inline-flex; align-items: center; justify-content: center; font-size: .9rem; color: var(--color-bone); background: rgba(26,22,16,.18); backdrop-filter: blur(6px); transition: background .3s, color .3s, border-color .3s; }
        .sel-tile:hover .sel-arrow { background: var(--color-bone); color: var(--color-taupe-ink); border-color: var(--color-bone); }
        .sel-name { font-family:var(--H); font-size: 1.45rem; font-weight: 500; color: var(--color-bone); }
        .sel-desc { font-family: var(--T); font-size: 1.05rem; color: rgba(241,236,227,.82); line-height: 1.6; }

        /* Package Header */
        .pkg-hdr-wrap { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px; margin-bottom: 64px; }
        .btn-back { display: inline-flex; align-items: center; gap: 8px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 100px; padding: 14px 28px; font-family: var(--T); font-weight: 500; font-size: 0.78rem; letter-spacing: var(--label-letter-spacing); text-transform: uppercase; color: var(--color-taupe-ink); transition: border-color 0.3s, background 0.3s; }
        .btn-back:hover { border-color: var(--color-taupe-ink); background: var(--color-surface); }

        /* Elegant Editorial Tabs */
        .pkg-tab-nav { display: flex; gap: 48px; border-bottom: 1px solid var(--border); margin-bottom: 64px; position: relative; overflow-x: auto; padding-bottom: 16px; }
        .pkg-tab-btn { background: none; border: none; padding: 0 0 16px; text-align: left; position: relative; color: var(--muted); transition: color 0.3s; min-width: 140px; }
        .pkg-tab-btn.active { color: var(--ink); }
        .pkg-tab-btn::after {
          content: ''; position: absolute; bottom: -17px; left: 0; width: 100%; height: 2px;
          background: var(--gold); transform: scaleX(0); transform-origin: left; transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .pkg-tab-btn.active::after { transform: scaleX(1); }

        .pkg-tab-num { font-family:var(--A); font-weight:400; font-size:0.75rem; display: block; margin-bottom: 12px; letter-spacing:.08em; text-transform: uppercase; color: var(--gold); opacity: 0.6; transition: opacity 0.3s; }
        .pkg-tab-btn.active .pkg-tab-num { opacity: 1; }
        .pkg-tab-name { font-family:var(--H); font-size: 2.5rem; font-weight: 500; line-height: 1; }

        /* Composite Rectangle for Package Details */
        .pkg-box { border: 1px solid var(--border); background: var(--bg-alt); border-radius: 0; margin-bottom: 80px; overflow: hidden; }
        .pkg-box-top { border-bottom: 1px solid var(--border); }

        .pkg-box-overview { padding: 64px 56px; }
        .pkg-box-bottom { padding: 56px; }

        .pkg-lbl { font-family:var(--A); font-weight:400; font-size:0.75rem; color: var(--muted); letter-spacing:.08em; text-transform: uppercase; margin-bottom: 24px; }

        .pkg-overview-text { font-family: var(--T); font-size: 1.15rem; color: var(--muted); line-height: 1.7; font-weight:400; margin-bottom: 40px; }
        .pkg-ideal-text { font-family:var(--H); font-size: 2rem; font-weight: 500; color: var(--ink); line-height: 1.3; }

        .pkg-deliv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; }
        .pkg-deliv-item { display: flex; align-items: flex-start; gap: 16px; font-family: var(--T); font-size: 1.05rem; color: var(--ink); line-height: 1.6; padding: 20px 0; border-bottom: 1px solid rgba(60,45,20,0.06); font-weight:400; }
        .pkg-deliv-item:last-child { border-bottom: none; }
        .pkg-deliv-item .marker { font-family: var(--T); font-size: 1.4rem; color: var(--muted); line-height: 1; flex-shrink: 0; margin-top: -2px; font-weight: 400; }
        .pkg-deliv-item em { font-style: normal; color: var(--ink); font-weight: 500; }
        .pkg-deliv-item strong { font-weight: 500; color: var(--ink); }

        .pkg-special-note { margin-top: 40px; padding: 32px 40px; background: rgba(139,146,128,0.04); border: 1px solid rgba(139,146,128,0.15); border-radius: 0; }

        .pkg-meta-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .pkg-meta-tag { font-family: var(--A); font-size: 0.82rem; letter-spacing: .02em; color: var(--ink); background: var(--bg); padding: 8px 16px; border: 1px solid var(--border); border-radius: 100px; }

        /* Flat Sections below */
        .flat-section { padding-top: 100px; margin-top: 20px; border-top: 1px solid var(--border); }
        .section-title { font-family:var(--H); font-size: 2.6rem; color: var(--ink); margin-bottom: 64px; font-weight: 500; line-height: 1.1; }

        /* Add-ons & Licensing */
        .al-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .al-grid.two { grid-template-columns: repeat(2, 1fr); }
        .pkg-travel { margin-top: 28px; font-family: var(--A); font-size: 0.82rem; letter-spacing: .02em; color: var(--ink); opacity: .7; }
        .pkg-commit { margin-top: 32px; font-size: 1rem; line-height: 1.6; color: var(--ink); opacity: .75; max-width: 640px; }
        .al-card { border: 1px solid var(--border); background: var(--bg-alt); padding: 48px 40px; transition: border-color 0.3s; display: flex; flex-direction: column; border-radius: 0; }
        .al-card:hover { border-color: rgba(139,146,128,0.4); }
        .al-card.highlight { border-color: var(--gold); background: rgba(139,146,128,0.03); }
        .al-type { font-family:var(--A); font-weight:400; font-size:0.75rem; color: var(--muted); letter-spacing:.08em; text-transform: uppercase; margin-bottom: 20px; }
        .al-card.highlight .al-type { color: var(--gold); }
        .al-name { font-family:var(--H); font-size: 2rem; font-weight: 500; color: var(--ink); margin-bottom: 24px; line-height: 1.1; }
        .al-desc { font-family: var(--T); font-size: 1rem; color: var(--muted); line-height: 1.6; margin-bottom: 32px; flex-grow: 1; }

        .al-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
        .al-tag { font-family:var(--A); font-weight:400; font-size: 0.78rem; color: var(--ink); background: var(--bg); padding: 8px 12px; border: 1px solid var(--border); border-radius: 2px; }

        .al-list { display: flex; flex-direction: column; margin-top: auto; }
        .al-list-item { display: flex; align-items: flex-start; gap: 12px; font-family: var(--T); font-size: 1.05rem; color: var(--ink); line-height: 1.5; padding: 16px 0; border-top: 1px solid rgba(60,45,20,0.08); font-weight:400; }
        .al-list-item .marker { color: var(--muted); flex-shrink: 0; font-family: var(--T); font-size: 1.2rem; margin-top: -2px; font-weight: 400; }

        /* Summary Table */
        .sum-table-wrap { overflow-x: auto; background: var(--bg-alt); border: 1px solid var(--border); border-radius: 0; }
        .sum-table { width: 100%; min-width: 640px; border-collapse: collapse; text-align: left; font-family: var(--T); }
        .sum-table th { font-family:var(--A); font-weight:400; font-size:0.75rem; color: var(--muted); letter-spacing:.08em; text-transform: uppercase; padding: 16px 24px; border-bottom: 1px solid var(--border); }
        .sum-table td { font-size: 1rem; color: var(--ink); padding: 12px 24px; border-bottom: 1px solid var(--border); }
        .sum-table tr:hover td { background: rgba(30,26,18,0.02); }
        .sum-table tr:last-child td { border-bottom: none; }
        .sum-table td:first-child { color: var(--muted); width: 35%; font-size: 0.95rem; }
        .sum-table th.active-col { color: var(--gold); background: rgba(139,146,128,0.03); }
        .sum-table td.active-col { background: rgba(139,146,128,0.03); font-weight: 500; }

        /* Email Gate Inline Form at Bottom */
        .email-gate-wrap { margin-top: 100px; padding: 80px 0; border-top: 1px solid var(--border); }
        .email-gate-inner { max-width: 720px; margin: 0 auto; text-align: center; }
        .email-gate-title { font-family:var(--H); font-size: 2.5rem; color: var(--ink); margin-bottom: 24px; font-weight: 500; line-height: 1.1; }
        .email-gate-desc { font-family: var(--T); font-size: 1.15rem; color: var(--ink); font-weight:400; line-height: 1.6; margin-bottom: 40px; }
        .email-form { display: flex; gap: 16px; justify-content: center; }
        .email-input { flex: 1; max-width: 400px; padding: 18px 24px; background: var(--bg-alt); border: 1px solid var(--border); font-family: var(--T); font-size: 1rem; color: var(--ink); outline: none; transition: border-color 0.3s; border-radius: 2px; }
        .email-input:focus { border-color: var(--gold); }
        .success-box { display: inline-block; text-align: left; padding: 48px; border: 1px solid var(--gold); background: rgba(139,146,128,0.03); margin-top: 24px; border-radius: 0; }

        @media (max-width: 1200px) {
          .sel-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 960px) {
          .pkg-wrap { padding: 56px 24px; }
          .sel-grid, .al-grid, .al-grid.two { grid-template-columns: 1fr; gap: 40px; }
          .sel-grid { gap: 16px; }
          .sel-tile { min-height: 320px; }
          .flat-section { margin-top: 64px; padding-top: 48px; }
          .pkg-tab-nav { gap: 24px; }
          .pkg-tab-name { font-size: 2rem; }

          .pkg-block { padding: 48px 32px; }
          .pkg-ideal-text { font-size: 1.8rem; }
          .deliv-grid { grid-template-columns: 1fr; }

          .email-form { flex-direction: column; }
          .email-input { max-width: 100%; }
          .success-box { padding: 32px 24px; }
        }
      ` }} />

      <div className="pkg-wrap">
        {step === 'selector' && (
           <div className="auto-fade">
             <p className="s-label">Packages</p>
             <h2 className="s-title">Our <em>packages</em></h2>
             <p className="cnt-sub" style={{ margin: '24px 0 0', maxWidth: 600 }}>
               We offer tailored packages to suit your needs.
             </p>

             <div className="sel-grid">
               {SELECTOR_TILES.map(t => (
                 <div key={t.id} className="sel-tile" onClick={() => handleReveal(t.id)} data-h>
                   <img className="sel-img" src={t.img} alt="" loading="lazy" decoding="async" />
                   <div className="sel-top"><span className="sel-num">{String(SELECTOR_TILES.indexOf(t) + 1).padStart(2, "0")}</span><span className="sel-arrow" aria-hidden="true">↗</span></div>
                   <div>
                     <div className="sel-name">{t.name}</div>
                     <div className="sel-desc">{t.desc}</div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        )}

        {step === 'packages' && (
           <div id="packages-start" className="auto-fade">
             <div className="pkg-hdr-wrap">
               <div>
                 <p className="s-label">Packages for {CLIENT_DATA[clientType].label}</p>
                 <h2 className="s-title">Your <em>approach</em></h2>
               </div>
               <button className="btn-back" onClick={handleBackToSelector} data-h>
                 ← Back to Selector
               </button>
             </div>

             {/* Elegant Tab Navigation */}
             <div className="pkg-tab-nav">
               {PACKAGE_DATA.map(pkg => (
                 <button
                   key={pkg.id}
                   className={`pkg-tab-btn ${activePkgId === pkg.id ? 'active' : ''}`}
                   onClick={() => setActivePkgId(pkg.id)}
                   data-h
                 >
                   <span className="pkg-tab-num">Package {pkg.num}</span>
                   <span className="pkg-tab-name">{pkg.name}</span>
                 </button>
               ))}
             </div>

             {/* Full Width Composite Block */}
             <div className="fade-swap" key={activePkgId}>
                <div style={{ marginBottom: 40 }}>
                  <p className="pkg-lbl">Ideal For</p>
                  <div className="pkg-ideal-text">{activePkg.idealFor}</div>
                </div>

                <div className="pkg-box">
                  <div className="pkg-box-top">
                    <div className="pkg-box-overview">
                      <p className="pkg-lbl">Overview</p>
                      <div className="pkg-overview-text">{activePkg.desc}</div>
                      <div className="pkg-meta-tags">
                        {activePkg.meta.map(m => <span key={m} className="pkg-meta-tag">{m}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="pkg-box-bottom">
                    <p className="pkg-lbl" style={{ marginBottom: 32 }}>{activePkg.deliverablesLabel}</p>

                    <div className="pkg-deliv-grid">
                      {activePkg.deliverables.map((item, i) => (
                        <div key={i} className="pkg-deliv-item">
                          <span className="marker">+</span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      ))}
                    </div>

                    <p className="pkg-travel">Travel is not included.</p>

                    {activePkg.specialNote && (
                      <div className="pkg-special-note">
                        <p className="pkg-lbl" style={{ marginBottom: 16 }}>{activePkg.specialNote.title}</p>
                        <div className="pkg-deliv-item" style={{ border: 'none', padding: 0 }}>
                          <span className="marker">+</span>
                          <span dangerouslySetInnerHTML={{ __html: activePkg.specialNote.text }} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
             </div>

             {/* ─────────────────────────────────────────── */}
             {/* Add-ons First */}
             <div className="flat-section auto-fade">
               <div className="pkg-hdr-wrap" style={{ marginBottom: 56 }}>
                 <div>
                   <p className="s-label">Optional Upgrades</p>
                   <h3 className="section-title" style={{ margin: 0 }}>Explore Add-ons</h3>
                 </div>
               </div>

               <div className="al-grid two">
                 <div className="al-card" data-h>
                   <p className="al-type">Add-on</p>
                   <h4 className="al-name">UGC Creator Video</h4>
                   <p className="al-desc">A video made by a creator in a natural, personal style, matched to your customer. Works for social posts, paid ads and product pages.</p>
                   <div className="al-list">
                     <div className="al-list-item"><span className="marker">+</span>Creator matched to your customer</div>
                     <div className="al-list-item"><span className="marker">+</span>Natural, personal style</div>
                     <div className="al-list-item"><span className="marker">+</span>Priced per video</div>
                   </div>
                 </div>
                 <div className="al-card" data-h>
                   <p className="al-type">Add-on</p>
                   <h4 className="al-name">3D Assets</h4>
                   <p className="al-desc">Three-dimensional visuals, such as a product or ingredient visualisation, to show how something works or looks. Used in ads, on your website and in presentations.</p>
                   <div className="al-list">
                     <div className="al-list-item"><span className="marker">+</span>Product or ingredient visuals</div>
                     <div className="al-list-item"><span className="marker">+</span>For ads, web and presentations</div>
                     <div className="al-list-item"><span className="marker">+</span>Scoped to the asset</div>
                   </div>
                 </div>
                 <div className="al-card" data-h>
                   <p className="al-type">Social Media Management</p>
                   <h4 className="al-name">Fully Managed Channels</h4>
                   <p className="al-desc">End-to-end management of your social channels, ensuring your brand's narrative remains consistent and engaging.</p>
                   <div className="al-list">
                     <div className="al-list-item"><span className="marker">+</span>Scheduling & posting</div>
                     <div className="al-list-item"><span className="marker">+</span>Caption writing & strategy</div>
                     <div className="al-list-item"><span className="marker">+</span>Community management</div>
                   </div>
                 </div>
                 <div className="al-card" data-h>
                   <p className="al-type">Podcast Production</p>
                   <h4 className="al-name">Video-First Content</h4>
                   <p className="al-desc">High-fidelity dual-camera production, completely edited and repurposed into short-form content.</p>
                   <div className="al-list">
                     <div className="al-list-item"><span className="marker">+</span>Dual-camera video edit</div>
                     <div className="al-list-item"><span className="marker">+</span>Full audio mixing</div>
                     <div className="al-list-item"><span className="marker">+</span>Short-form social clips</div>
                   </div>
                 </div>
               </div>
               <p className="pkg-commit">Planning a regular run of shoots? We offer commitment discounts for 3, 6 and 12 month agreements. Ask us when you request your quote.</p>
             </div>

             {/* Summary Table Third */}
             <div className="flat-section auto-fade">
               <div className="pkg-hdr-wrap" style={{ marginBottom: 28 }}>
                 <div>
                   <p className="s-label">Comparison</p>
                   <h3 className="section-title" style={{ margin: 0 }}>Content Output Summary</h3>
                 </div>
               </div>

               <div className="sum-table-wrap">
                 <table className="sum-table">
                   <thead>
                     <tr>
                       <th></th>
                       <th className={activePkgId === 'foundation' ? 'active-col' : ''}>Foundation</th>
                       <th className={activePkgId === 'series' ? 'active-col' : ''}>Series</th>
                       <th className={activePkgId === 'campaign' ? 'active-col' : ''}>Campaign</th>
                     </tr>
                   </thead>
                   <tbody>
                     {SUMMARY_ROWS.map((row, i) => (
                       <tr key={i} data-h>
                         <td>{row.label}</td>
                         <td className={activePkgId === 'foundation' ? 'active-col' : ''}>{row.foundation}</td>
                         <td className={activePkgId === 'series' ? 'active-col' : ''}>{row.series}</td>
                         <td className={activePkgId === 'campaign' ? 'active-col' : ''}>{row.campaign}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>

             {/* Request a quote block */}
             <div className="email-gate-wrap auto-fade">
               <div className="email-gate-inner">
                 {!sentEmail ? (
                   <>
                     <h3 className="email-gate-title">Request a quote</h3>
                     <p className="email-gate-desc">
                       Leave your email and someone from Shotwell will get back to you personally with a quote for {CLIENT_DATA[clientType].label}s, built around what you need.
                     </p>
                     <form className="email-form" onSubmit={handleEmailSubmit}>
                       <input type="email" name="email" placeholder="Your work email address" required className="email-input" disabled={submitting} />
                       <button type="submit" className="btn-primary" data-h disabled={submitting} style={{ opacity: submitting ? 0.6 : 1, pointerEvents: submitting ? 'none' : 'auto' }}>
                         {submitting ? 'Sending...' : 'Request a quote'}
                       </button>
                     </form>
                     <p className="email-gate-desc" style={{ marginTop: 16, marginBottom: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>
                       We'll only use your email to follow up on your enquiry.
                     </p>
                     {submitError && (
                       <p className="email-gate-desc" style={{ color: 'var(--gold)', marginTop: 16, marginBottom: 0, fontSize: '0.9rem' }}>
                         {submitError}
                       </p>
                     )}
                   </>
                 ) : (
                   <div className="success-box">
                     <div style={{ color: 'var(--gold)', marginBottom: 20 }}><CheckIconLarge /></div>
                     <h4 className="email-gate-title" style={{ color: 'var(--gold)', fontSize: '2.2rem', marginBottom: 16 }}>Request received!</h4>
                     <p className="email-gate-desc" style={{ color: 'var(--ink)', marginBottom: 20 }}>
                       Thanks — we've received your quote request for the <strong>{CLIENT_DATA[clientType].label}</strong> package from:<br/>
                       <span style={{ fontWeight: 500, display: 'inline-block', marginTop: 8 }}>{sentEmail}</span>
                     </p>
                     <p className="email-gate-desc" style={{ marginBottom: 0, fontSize: '0.95rem' }}>
                       Someone from Shotwell will follow up personally within one business day.
                     </p>
                   </div>
                 )}
               </div>
             </div>

           </div>
        )}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="fade-in"><p className="s-label">Studio</p><h2 className="s-title">Who we <em>are</em></h2></div>
      <div className="abt-layout">
        <div className="abt-left fade-in">
          <div className="abt-team">
            <div>
              <div className="abt-team-photo"><img src="./mark01.jpg" alt="Mark Weeks" /></div>
              <p className="abt-team-name">Mark Weeks <span className="abt-team-role">— Co-founder</span></p>
            </div>
            <div>
              <div className="abt-team-photo"><img src="./louis01.jpg" alt="Louis Mas" /></div>
              <p className="abt-team-name">Louis Mas <span className="abt-team-role">— Co-founder</span></p>
            </div>
          </div>
        </div>
        <div className="abt-body fade-in">
          <p><strong>Shotwell</strong> is an independent production company rooted in the belief that every story deserves to be told with precision, intention, and beauty.</p>
          <p>From our Bloomsbury office in the heart of London, we work with <strong>healthcare and skincare brands, clinics, hospitals, doctors and spas</strong> across the globe — bringing a cinematic sensibility to everything from short form videos to large-scale commercial campaigns.</p>
          <p>Our team of directors, filmmakers, editors and photographers are united to create the most impactful visuals to convey your identity and make your brand stand out.</p>
          <div className="abt-bio">
            <p className="abt-bio-name">Mark Weeks <span className="abt-team-role">— Co-founder</span></p>
            <p>Mark co-founded Shotwell. He has been a commercial photographer for over twenty years, and he started out in the corporate world before going independent in 2003, with Microsoft as his first paying client. Those years on the inside taught him what big companies need from the people they hire, and he still works that way. He leads photography at Shotwell from London, and what he wants hasn’t changed: photos that do real work for the businesses that commission them.</p>
          </div>
          <div className="abt-bio">
            <p className="abt-bio-name">Louis Mas <span className="abt-team-role">— Co-founder</span></p>
            <p>Louis is a filmmaker with a BA in Cinematography and over ten years in film. He started out as a camera assistant on feature films, TV series and commercials in Paris and London, which is where he learnt how high-end productions really run. It shows in everything he makes, from a brand film in a single location to a project spread across several. He leads video at Shotwell, with a good instinct for technology and a knack for solving problems when the pressure is on.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  // Assembled at runtime so the address is real, selectable text (never an image) without sitting in the HTML for scrapers.
  const addr = ["contact", "shotwell.co.uk"].join("@");
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2200); };
    if (navigator.clipboard) navigator.clipboard.writeText(addr).then(done, () => {});
  };
  return (
    <section id="contact">
      <div className="cnt-inner fade-in">
        <p className="s-label">Contact</p>
        <h2 className="s-title">Let's make<br/><em>something</em></h2>
        <p className="cnt-sub">Whether you have a brief in hand or just an idea — we'd love to hear from you. Great films begin with great conversations.</p>
        <div className="cnt-actions">
          <a href={`mailto:${addr}?subject=${encodeURIComponent("Enquiry from the Shotwell website")}`} className="btn-primary" data-h>Email us</a>
          <button type="button" className="cnt-copy" onClick={copy} data-h>{copied ? "Copied" : "Copy email address"}</button>
        </div>
        <p className="cnt-email">or write to <a href={`mailto:${addr}`}>{addr}</a></p>
        <div className="cnt-div"/>
        <div className="cnt-links">
          {[
            { name:"Instagram", href:"https://www.instagram.com/weareshotwell/" },
            { name:"LinkedIn",  href:"https://www.linkedin.com/company/shotwell-london" },
          ].map(l => (
            <a href={l.href} key={l.name} data-h {...(l.href.startsWith("http") ? { target:"_blank", rel:"noopener noreferrer" } : {})}>{l.name}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

const FOOTER_SOCIAL = [
  { href: "https://www.instagram.com/weareshotwell/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/shotwell-london", label: "LinkedIn" },
];

// Crawlable links to the landing pages: the columns come from scripts/seo/nav.mjs, shared with the static pages.
function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={logoBone} alt="Shotwell — visual content for skincare, healthcare and wellness" />
          <address className="footer-address">11-13 Bayley Street<br />Bloomsbury, London<br />WC1B 3HD</address>
          <div className="footer-social">
            {FOOTER_SOCIAL.map(l => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
          </div>
        </div>
        {FOOTER_COLUMNS.map(c => (
          <div className="footer-col" key={c.title}>
            <p className="footer-h">{c.title}</p>
            {c.links.map(l => <a key={l.label} href={l.slug ? `/${l.slug}/` : `#${l.anchor}`}>{l.label}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bar">
        <p>© {new Date().getFullYear()} <span>Shotwell Studios Ltd trading as Shotwell</span></p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────── APP */
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FontsAndStyles/>
      <Nav open={open} setOpen={setOpen}/>
      <main>
        <Hero/>
        <Ticker/>
        <Work/>
        <VerticalContent/>
        <Photography/>
        <Specialisms/>
        <Services/>
        <Packages/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
