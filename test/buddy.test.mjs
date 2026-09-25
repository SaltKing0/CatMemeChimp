import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clamp, limitToViewport, defaultSpot, approach, velocityFrom, stepPhysics,
  airRatio, choosePerch, pickWeighted, pickQuipLine, GRAVITY,
} from '../public/lib/buddy.mjs';

test('clamp keeps a value inside its bounds', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(50, 0, 10), 10);
});

test('limitToViewport keeps her whole body on screen', () => {
  const vw = 1000, vh = 700, size = 76;
  assert.deepEqual(limitToViewport(-400, -400, vw, vh, size), { x: 46, y: 84 });
  assert.deepEqual(limitToViewport(5000, 5000, vw, vh, size), { x: 954, y: 692 });
  const inside = limitToViewport(500, 600, vw, vh, size);
  assert.deepEqual(inside, { x: 500, y: 600 });
});

test('limitToViewport survives a viewport smaller than her', () => {
  const tiny = limitToViewport(50, 50, 40, 40, 76);
  assert.ok(Number.isFinite(tiny.x) && Number.isFinite(tiny.y));
  assert.ok(tiny.x >= 46 && tiny.y >= 84);
});

test('defaultSpot anchors her to the bottom-right corner', () => {
  assert.deepEqual(defaultSpot(1000, 700, 76, 18), { x: 944, y: 682 });
});

test('approach eases toward the target and snaps when close', () => {
  assert.equal(approach(0, 100, 16, 0.005), 8);
  assert.equal(approach(99.9, 100, 1000, 0.005), 100);
  assert.equal(approach(50, 50, 16, 0.005), 50);
  assert.equal(approach(0, 100, 100000, 0.005), 100);
});

test('velocityFrom converts pointer samples into capped throw velocity', () => {
  const none = velocityFrom([]);
  assert.deepEqual(none, { vx: 0, vy: 0 });
  const samples = [{ x: 0, y: 0, t: 0 }, { x: 400, y: -200, t: 100 }];
  const v = velocityFrom(samples);
  assert.ok(v.vx > 0 && v.vy < 0);
  assert.ok(v.vx <= 2.4 && v.vy >= -2.4);
});

test('velocityFrom ignores absurd gaps and never returns NaN', () => {
  const v = velocityFrom([{ x: 0, y: 0, t: 0 }, { x: 10, y: 10, t: 1 }]);
  assert.ok(Number.isFinite(v.vx) && Number.isFinite(v.vy));
  assert.ok(Math.abs(v.vx) <= 2.4);
});

test('stepPhysics accelerates her downward while she is airborne', () => {
  const s = { x: 0, y: -60, vx: 0, vy: 0, vspin: 0, face: 1, grounded: true };
  const r = stepPhysics(s, 16, 0);
  assert.equal(r.landed, false);
  assert.equal(s.grounded, false);
  assert.ok(s.y > -60);
  assert.ok(s.vy > 0);
});

test('stepPhysics lands exactly on the floor and kills vertical speed', () => {
  const s = { x: 0, y: -2, vx: 0.4, vy: 0.6, vspin: 0.2, face: 1, grounded: false };
  const r = stepPhysics(s, 16, 0);
  assert.equal(r.landed, true);
  assert.equal(s.y, 0);
  assert.equal(s.vy, 0);
  assert.equal(s.grounded, true);
  assert.ok(r.impact > 0);
  assert.ok(Math.abs(s.vx) < 0.4);
});

test('stepPhysics faces the direction of travel', () => {
  const left = { x: 0, y: 0, vx: -0.5, vy: -1, vspin: 0, face: 1, grounded: false };
  stepPhysics(left, 16, 500);
  assert.equal(left.face, -1);
  const right = { x: 0, y: 0, vx: 0.5, vy: -1, vspin: 0, face: -1, grounded: false };
  stepPhysics(right, 16, 500);
  assert.equal(right.face, 1);
});

test('a hop rises and falls back to the floor', () => {
  const s = { x: 0, y: 0, vx: 0, vy: -0.33, vspin: 0, face: 1, grounded: false };
  const floorY = 0;
  s.y = floorY;
  let peak = s.y, frames = 0;
  let result = { landed: false };
  while (frames++ < 200) {
    result = stepPhysics(s, 16, floorY);
    peak = Math.min(peak, s.y);
    if (result.landed) break;
  }
  assert.ok(peak < -15, `expected a real hop, peaked at ${peak}`);
  assert.equal(result.landed, true);
  assert.equal(s.y, floorY);
});

test('gravity matches the tuned jump height', () => {
  const apex = (0.33 * 0.33) / (2 * GRAVITY);
  assert.ok(apex > 18 && apex < 24, `apex ${apex}`);
});

test('airRatio reports how far she is from the ground', () => {
  assert.equal(airRatio(0, 0), 0);
  assert.equal(airRatio(-90, 0), 1);
  assert.equal(airRatio(-45, 0), 0.5);
  assert.equal(airRatio(30, 0), 0);
});

test('choosePerch avoids the spot she is already on', () => {
  const perches = [{ x: 0, y: 0 }, { x: 300, y: 0 }, { x: 600, y: 0 }];
  const current = { x: 300, y: 0 };
  for (let i = 0; i < 20; i++) {
    const pick = choosePerch(perches, current, () => i / 20);
    assert.notDeepEqual(pick, current);
  }
});

test('choosePerch returns null when there is nowhere to go', () => {
  assert.equal(choosePerch([], { x: 0, y: 0 }), null);
  assert.equal(choosePerch([null, undefined], { x: 0, y: 0 }), null);
});

test('choosePerch falls back to the only candidate when everything is near', () => {
  const only = { x: 10, y: 10 };
  assert.equal(choosePerch([only], { x: 11, y: 10 }), only);
});

test('pickWeighted respects weights and never returns null for a valid list', () => {
  const items = [{ id: 'a', w: 0 }, { id: 'b', w: 1 }, { id: 'c', w: 3 }];
  for (let i = 0; i < 50; i++) {
    const pick = pickWeighted(items, () => i / 50);
    assert.notEqual(pick.id, 'a', 'zero-weight entries must never be picked');
    assert.ok(['b', 'c'].includes(pick.id));
  }
  assert.equal(pickWeighted([{ id: 'b', w: 1 }, { id: 'c', w: 3 }], () => 0).id, 'b');
  assert.equal(pickWeighted([{ id: 'b', w: 1 }, { id: 'c', w: 3 }], () => 0.99).id, 'c');
  assert.equal(pickWeighted([], () => 0.5), null);
  assert.equal(pickWeighted([{ w: 0 }], () => 0.5), null);
});

test('pickQuipLine never repeats the previous line', () => {
  const lines = ['one', 'two', 'three'];
  for (let i = 0; i < 40; i++) {
    const last = i % 3;
    const { text, index } = pickQuipLine(lines, last, 0, () => (i % 7) / 7);
    assert.notEqual(index, last);
    assert.ok(lines.includes(text));
  }
});

test('pickQuipLine hides lines above the trust level', () => {
  const lines = ['free', { min: 60, t: 'earned' }];
  assert.equal(pickQuipLine(lines, 0, 0, () => 0.9).text, 'free');
  assert.equal(pickQuipLine(['free', { min: 60, t: 'earned' }], 1, 0, () => 0.1).text, 'free');
  assert.equal(pickQuipLine(lines, 0, 90, () => 0.9).text, 'earned');
});

test('pickQuipLine copes with a single line and with nothing', () => {
  const one = pickQuipLine(['only'], 0, 0, () => 0.5);
  assert.equal(one.text, 'only');
  assert.equal(pickQuipLine([], 0, 0, () => 0.5), null);
  assert.equal(pickQuipLine(null, 0, 0, () => 0.5), null);
});
