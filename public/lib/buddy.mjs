export const GRAVITY = 0.0026;
export const FRICTION = 0.86;
export const TOSS_SCALE = 0.35;
export const MAX_SPEED = 2.4;
export const MAX_HOPS = 16;

export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export const limitToViewport = (x, y, vw, vh, size, margin = 8) => ({
  x: clamp(x, size / 2 + margin, Math.max(size / 2 + margin, vw - size / 2 - margin)),
  y: clamp(y, size + margin, Math.max(size + margin, vh - margin)),
});

export const defaultSpot = (vw, vh, size, inset = 18) => ({ x: vw - inset - size / 2, y: vh - inset });

export const approach = (current, target, dt, rate) => {
  const next = current + (target - current) * Math.min(1, dt * rate);
  return Math.abs(target - next) < 0.5 ? target : next;
};

export const velocityFrom = (samples, scale = TOSS_SCALE) => {
  if (!Array.isArray(samples) || samples.length < 2) return { vx: 0, vy: 0 };
  const a = samples[samples.length - 2];
  const b = samples[samples.length - 1];
  const dt = Math.max(8, b.t - a.t);
  return {
    vx: clamp(((b.x - a.x) / dt) * scale, -MAX_SPEED, MAX_SPEED),
    vy: clamp(((b.y - a.y) / dt) * scale, -MAX_SPEED, MAX_SPEED),
  };
};

export const stepPhysics = (s, dt, floorY) => {
  s.vy += GRAVITY * dt;
  s.x += s.vx * dt;
  s.y += s.vy * dt;
  s.spin += s.vspin * dt;
  s.face = s.vx < -0.01 ? -1 : s.vx > 0.01 ? 1 : s.face;
  if (s.y >= floorY) {
    const impact = s.vy;
    s.y = floorY;
    s.vy = 0;
    s.vx *= FRICTION;
    s.vspin *= FRICTION;
    s.grounded = true;
    return { landed: true, impact, spin: s.spin };
  }
  s.grounded = false;
  return { landed: false, impact: 0, spin: s.spin };
};

export const airRatio = (y, floorY, span = 90) => clamp((floorY - y) / span, 0, 1);

export const DIZZY_IMPACT = 0.85;

export const isDizzy = (impact, threshold = DIZZY_IMPACT) => Number.isFinite(impact) && impact >= threshold;

export const clickStreak = (times, now, span = 700, count = 3) =>
  Array.isArray(times) && times.filter((t) => now - t <= span).length >= count;

export const glanceVector = (fromX, fromY, toX, toY, span = 220) => ({
  lx: clamp((toX - fromX) / span, -1, 1),
  ly: clamp((toY - fromY) / span, -1, 1),
});

export const leanFrom = (delta, span = 40) => clamp(delta / span, -1, 1);

export const choosePerch = (perches, current, rng = Math.random, minDistance = 90) => {
  const far = perches.filter((p) => p && (!current || Math.hypot(p.x - current.x, p.y - current.y) >= minDistance));
  const pool = far.length ? far : perches.filter(Boolean);
  if (!pool.length) return null;
  return pool[Math.floor(rng() * pool.length) % pool.length];
};

export const pickWeighted = (items, rng = Math.random) => {
  const live = items.filter((item) => item.w > 0);
  const total = live.reduce((sum, item) => sum + item.w, 0);
  if (total <= 0) return null;
  let roll = rng() * total;
  for (const item of live) {
    if (roll < item.w) return item;
    roll -= item.w;
  }
  return live[live.length - 1];
};

export const pickQuipLine = (lines, last = 0, bond = 0, rng = Math.random) => {
  if (!Array.isArray(lines) || !lines.length) return null;
  const eligible = (entry) => (typeof entry === 'string' ? 0 : entry.min || 0) <= bond;
  const marked = lines.map((entry, i) => ({ entry, i }));
  let pool = marked.filter(({ entry, i }) => i !== last && eligible(entry));
  if (!pool.length) pool = marked.filter(({ entry }) => eligible(entry));
  if (!pool.length) pool = marked.filter(({ i }) => i !== last);
  if (!pool.length) pool = marked;
  const pick = pool[Math.min(pool.length - 1, Math.floor(rng() * pool.length))];
  return { text: typeof pick.entry === 'string' ? pick.entry : pick.entry.t, index: pick.i };
};
