<<<<<<< HEAD
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const pageLoader = document.getElementById('pageLoader');
const loaderRing = document.getElementById('loaderRing');

const RING_CIRCUMFERENCE = 289.027;
const MIN_HOLD_MS = 600;

function setRingProgress(pct) {
  if (!loaderRing) return;
  const clamped = Math.max(0, Math.min(100, pct));
  const offset = RING_CIRCUMFERENCE * (1 - clamped / 100);
  loaderRing.style.strokeDashoffset = offset;
}

function dismissLoader() {
  if (!pageLoader) return;
  setRingProgress(100);
  setTimeout(() => {
    pageLoader.classList.add('hidden');
    setTimeout(() => pageLoader.remove(), 900);
  }, 400);
}

if (pageLoader) {
  // Simulated progress while assets load (visual feedback before window.load).
  let progress = 8;
  setRingProgress(progress);
  const tick = setInterval(() => {
    // Ease toward 90% while waiting for the real load event.
    progress += (90 - progress) * 0.08;
    setRingProgress(progress);
    if (progress > 89) clearInterval(tick);
  }, 120);

  const start = performance.now();
  const finish = () => {
    clearInterval(tick);
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_HOLD_MS - elapsed);
    setTimeout(dismissLoader, wait);
  };

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish, { once: true });
    // Safety net: never let the loader hang indefinitely.
    setTimeout(finish, 8000);
  }
}

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
=======
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const pageLoader = document.getElementById('pageLoader');
const loaderRing = document.getElementById('loaderRing');

const RING_CIRCUMFERENCE = 289.027;
const MIN_HOLD_MS = 600;

function setRingProgress(pct) {
  if (!loaderRing) return;
  const clamped = Math.max(0, Math.min(100, pct));
  const offset = RING_CIRCUMFERENCE * (1 - clamped / 100);
  loaderRing.style.strokeDashoffset = offset;
}

function dismissLoader() {
  if (!pageLoader) return;
  setRingProgress(100);
  setTimeout(() => {
    pageLoader.classList.add('hidden');
    setTimeout(() => pageLoader.remove(), 900);
  }, 400);
}

if (pageLoader) {
  // Simulated progress while assets load (visual feedback before window.load).
  let progress = 8;
  setRingProgress(progress);
  const tick = setInterval(() => {
    // Ease toward 90% while waiting for the real load event.
    progress += (90 - progress) * 0.08;
    setRingProgress(progress);
    if (progress > 89) clearInterval(tick);
  }, 120);

  const start = performance.now();
  const finish = () => {
    clearInterval(tick);
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_HOLD_MS - elapsed);
    setTimeout(dismissLoader, wait);
  };

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish, { once: true });
    // Safety net: never let the loader hang indefinitely.
    setTimeout(finish, 8000);
  }
}

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
>>>>>>> f79369f (Initial commit with portfolio updates)
