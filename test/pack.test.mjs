import test from 'node:test';
import assert from 'node:assert/strict';
import { applyPackPull, choosePackMeme, forgePack, meltDuplicate, rollRarity } from '../public/lib/pack.mjs';
import { normalizePack, PACK_MS } from '../public/lib/state.mjs';

const meme = (id) => ({ id });

test('rollRarity maps random values to the expected bands', () => {
  assert.equal(rollRarity(() => 0.01), 'legendary');
  assert.equal(rollRarity(() => 0.1), 'rare');
  assert.equal(rollRarity(() => 0.9), 'common');
});

test('choosePackMeme prefers unseen memes when lucky', () => {
  const pool = [meme('seen'), meme('new')];
  const values = [0.1, 0.9];
  const selected = choosePackMeme(pool, { seen: 1 }, new Set(['seen']), () => values.shift());
  assert.equal(selected.id, 'new');
});

test('choosePackMeme falls back to the full pool when needed', () => {
  const pool = [meme('a'), meme('b')];
  const values = [0.9, 0.9];
  const selected = choosePackMeme(pool, { a: 1 }, new Set(['a']), () => values.shift());
  assert.equal(selected.id, 'b');
});

test('applyPackPull updates haul, streak, and pull metadata', () => {
  const now = 2_000_000;
  const pack = normalizePack({ lastOpened: now - 1000, streak: 3, best: 3, haul: { a: 1 } }, now);
  const next = applyPackPull(pack, meme('a'), { now, random: () => 0.01 });
  assert.equal(next.haul.a, 2);
  assert.equal(next.streak, 4);
  assert.equal(next.best, 4);
  assert.equal(next.lastOpened, now);
  assert.deepEqual(next.lastPull, { id: 'a', rarity: 'legendary', shiny: true, at: now, bonus: false });
});

test('bonus pulls do not consume the daily cooldown or streak', () => {
  const now = 2_000_000;
  const pack = normalizePack({ lastOpened: now - 1, streak: 3, best: 4 }, now);
  const next = applyPackPull(pack, meme('new'), { now, bonus: true, random: () => 0.9 });
  assert.equal(next.lastOpened, pack.lastOpened);
  assert.equal(next.streak, pack.streak);
  assert.equal(next.lastPull.bonus, true);
});

test('meltDuplicate and forgePack enforce resource rules', () => {
  const original = normalizePack({ haul: { a: 2 }, scrap: 2 });
  const melted = meltDuplicate(original, 'a');
  assert.equal(melted.melted, true);
  assert.equal(melted.pack.haul.a, 1);
  assert.equal(melted.pack.scrap, 3);
  assert.equal(meltDuplicate(original, 'a').melted, true);
  assert.equal(meltDuplicate(original, 'missing').melted, false);
  const forged = forgePack(melted.pack);
  assert.equal(forged.forged, true);
  assert.equal(forged.pack.scrap, 0);
  assert.equal(forgePack({ ...melted.pack, scrap: 2 }).forged, false);
});

test('pack streak resets after a missed interval', () => {
  const now = 2 * PACK_MS + 1000;
  const pack = normalizePack({ lastOpened: now - 2 * PACK_MS - 1, streak: 8, best: 8 }, now);
  const next = applyPackPull(pack, meme('a'), { now, random: () => 0.9 });
  assert.equal(next.streak, 1);
  assert.equal(next.best, 8);
});
