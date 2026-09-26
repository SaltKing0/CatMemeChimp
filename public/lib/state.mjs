export const PACK_MS = 24 * 60 * 60 * 1000;

export const asIds = (value) => new Set(Array.isArray(value) ? value.filter((item) => typeof item === 'string') : []);

export const safeInt = (value, fallback = 0, max = Number.MAX_SAFE_INTEGER) => Number.isSafeInteger(value) && value >= 0 && value <= max ? value : fallback;

export const validRarity = (value) => ['common', 'rare', 'legendary'].includes(value) ? value : null;

export const validMeme = (meme) => {
  if (!meme || typeof meme !== 'object' || Array.isArray(meme)) return false;
  if (typeof meme.id !== 'string' || !meme.id || typeof meme.title !== 'string' || typeof meme.template !== 'string' || typeof meme.image !== 'string') return false;
  if (!['cat', 'general', 'creation'].includes(meme.category) || !['relatable', 'chaos', 'wholesome', 'judgment', 'sleepy', 'snacks'].includes(meme.mood)) return false;
  if (!Array.isArray(meme.tags) || !meme.tags.every((tag) => typeof tag === 'string')) return false;
  if (meme.kind !== 'remix' && meme.kind !== 'creation') return false;
  if ((meme.top !== undefined && typeof meme.top !== 'string') || (meme.bottom !== undefined && typeof meme.bottom !== 'string')) return false;
  if (meme.source !== null && meme.source !== undefined && typeof meme.source !== 'string') return false;
  if (meme.sticker !== null && meme.sticker !== undefined && (!meme.sticker || typeof meme.sticker.emoji !== 'string' || !['tr', 'tl', 'br', 'bl'].includes(meme.sticker.corner))) return false;
  return true;
};

export function normalizePack(raw, now = Date.now()) {
  const source = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
  const haul = Object.create(null);
  if (source.haul && typeof source.haul === 'object' && !Array.isArray(source.haul)) {
    for (const [id, count] of Object.entries(source.haul)) {
      if (typeof id === 'string' && Number.isSafeInteger(count) && count > 0) haul[id] = Math.min(count, Number.MAX_SAFE_INTEGER);
    }
  }
  const pull = source.lastPull && typeof source.lastPull === 'object' && !Array.isArray(source.lastPull) && typeof source.lastPull.id === 'string' && validRarity(source.lastPull.rarity) && Number.isFinite(source.lastPull.at) && source.lastPull.at >= 0
    ? { id: source.lastPull.id, rarity: source.lastPull.rarity, shiny: source.lastPull.shiny === true, at: source.lastPull.at, bonus: source.lastPull.bonus === true }
    : null;
  return {
    lastOpened: safeInt(source.lastOpened, 0, now + PACK_MS),
    streak: safeInt(source.streak),
    best: safeInt(source.best),
    haul,
    lastPull: pull,
    scrap: safeInt(source.scrap),
  };
}

export const haulSize = (haul) => Object.values(haul).reduce((total, count) => total + safeInt(count), 0);
export const canOpenPack = (pack, now = Date.now()) => now - (pack.lastOpened || 0) >= PACK_MS;
export const canForge = (pack) => safeInt(pack.scrap) >= 3;

export function packCountdown(pack, now = Date.now()) {
  const left = PACK_MS - (now - (pack.lastOpened || 0));
  if (left <= 0) return 'Ready!';
  const hours = Math.floor(left / 3600000);
  const minutes = Math.floor((left % 3600000) / 60000);
  const seconds = Math.floor((left % 60000) / 1000);
  return `${hours}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}
