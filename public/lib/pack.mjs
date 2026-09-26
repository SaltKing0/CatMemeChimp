import { canForge, normalizePack, safeInt } from './state.mjs';

export const rollRarity = (random = Math.random) => {
  const value = random();
  return value < 0.08 ? 'legendary' : value < 0.3 ? 'rare' : 'common';
};

export function choosePackMeme(pool, haul, seen, random = Math.random) {
  if (!pool.length) return null;
  const unseen = pool.filter((meme) => !safeInt(haul[meme.id]) && !seen.has(meme.id));
  const candidates = random() < 0.7 && unseen.length ? unseen : pool;
  return candidates[Math.floor(random() * candidates.length)];
}

export function applyPackPull(pack, meme, { bonus = false, now = Date.now(), random = Math.random } = {}) {
  const next = normalizePack(pack, now);
  const wasOwned = safeInt(next.haul[meme.id]) > 0;
  next.haul[meme.id] = safeInt(next.haul[meme.id]) + 1;
  if (!bonus) {
    const gap = now - (next.lastOpened || 0);
    next.streak = next.lastOpened && gap < 2 * 24 * 60 * 60 * 1000 ? next.streak + 1 : 1;
    next.best = Math.max(next.best, next.streak);
    next.lastOpened = now;
  }
  next.lastPull = { id: meme.id, rarity: rollRarity(random), shiny: wasOwned, at: now, bonus };
  return next;
}

export function meltDuplicate(pack, id) {
  const next = normalizePack(pack);
  const count = safeInt(next.haul[id]);
  if (count < 2) return { pack: next, melted: false };
  next.haul[id] = count - 1;
  next.scrap = safeInt(next.scrap) + 1;
  return { pack: next, melted: true };
}

export function forgePack(pack) {
  const next = normalizePack(pack);
  if (!canForge(next)) return { pack: next, forged: false };
  next.scrap -= 3;
  return { pack: next, forged: true };
}

