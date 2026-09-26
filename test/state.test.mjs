import test from 'node:test';
import assert from 'node:assert/strict';
import { asIds, canForge, canOpenPack, haulSize, normalizePack, packCountdown, safeInt, validMeme, validRarity, PACK_MS } from '../public/lib/state.mjs';

test('asIds accepts only string arrays', () => {
  assert.deepEqual([...asIds(['a', 1, 'b', null])], ['a', 'b']);
  assert.equal(asIds(null).size, 0);
});

test('safeInt rejects unsafe and invalid values', () => {
  assert.equal(safeInt(12), 12);
  assert.equal(safeInt(-1, 4), 4);
  assert.equal(safeInt(1.5, 4), 4);
  assert.equal(safeInt(Number.MAX_SAFE_INTEGER + 1, 4), 4);
});

test('normalizePack removes malformed persisted values', () => {
  const pack = normalizePack({ lastOpened: 10, streak: -2, best: '4', haul: { a: 2, bad: -1 }, lastPull: { id: 'a', rarity: '<bad>', at: 'nope' }, scrap: 1.5 }, 1000);
  assert.equal(pack.lastOpened, 10);
  assert.equal(pack.streak, 0);
  assert.equal(pack.best, 0);
  assert.equal(pack.haul.a, 2);
  assert.equal(pack.haul.bad, undefined);
  assert.equal(pack.lastPull, null);
  assert.equal(pack.scrap, 0);
});

test('pack cooldown uses the full timestamp safely', () => {
  const now = 1_800_000_000_000;
  const pack = normalizePack({ lastOpened: now - PACK_MS }, now);
  assert.equal(canOpenPack(pack, now), true);
  assert.equal(canOpenPack(pack, now - 1), false);
  assert.equal(packCountdown(pack, now - 1), '0h 00m 00s');
});

test('haul and forge helpers use safe counts', () => {
  const pack = normalizePack({ haul: { a: 2, b: 1 }, scrap: 2 });
  assert.equal(haulSize(pack.haul), 3);
  assert.equal(canForge(pack), false);
  assert.equal(canForge({ ...pack, scrap: 3 }), true);
});

test('validRarity and validMeme constrain persisted records', () => {
  assert.equal(validRarity('rare'), 'rare');
  assert.equal(validRarity('mythic'), null);
  assert.equal(validMeme({ id: 'a', title: 'A', template: 'T', image: '/a.jpg', category: 'creation', mood: 'chaos', tags: ['x'], kind: 'creation' }), true);
  assert.equal(validMeme({ id: 'a', title: 'A', template: 'T', image: '/a.jpg', category: 'creation', mood: 'chaos', tags: [1], kind: 'creation' }), false);
});
