import test from 'node:test';
import assert from 'node:assert/strict';
import { isDizzy, clickStreak, glanceVector, leanFrom, DIZZY_IMPACT } from '../public/lib/buddy.mjs';

test('a hard landing makes her dizzy, a soft one does not', () => {
  assert.equal(isDizzy(0.2), false);
  assert.equal(isDizzy(0.84), false);
  assert.equal(isDizzy(DIZZY_IMPACT), true);
  assert.equal(isDizzy(2), true);
  assert.equal(isDizzy(NaN), false);
  assert.equal(isDizzy(0.6, 0.5), true);
});

test('clickStreak counts recent clicks and forgets old ones', () => {
  assert.equal(clickStreak([0, 100, 200], 200), true);
  assert.equal(clickStreak([0, 100], 200), false);
  assert.equal(clickStreak([0, 100, 200], 5000), false);
  assert.equal(clickStreak([], 100), false);
  assert.equal(clickStreak(null, 100), false);
  assert.equal(clickStreak([0, 100, 200], 200, 700, 4), false);
});

test('glanceVector normalises a target into a look direction', () => {
  const right = glanceVector(100, 100, 400, 100);
  assert.equal(right.lx, 1);
  assert.equal(right.ly, 0);
  const near = glanceVector(100, 100, 110, 90);
  assert.ok(Math.abs(near.lx - 10 / 220) < 1e-9);
  assert.ok(Math.abs(near.ly + 10 / 220) < 1e-9);
  const far = glanceVector(0, 0, 9999, 9999);
  assert.equal(far.lx, 1);
  assert.equal(far.ly, 1);
  const clamped = glanceVector(0, 0, -9999, -9999);
  assert.equal(clamped.lx, -1);
  assert.equal(clamped.ly, -1);
});

test('leanFrom turns a scroll delta into a lean, capped both ways', () => {
  assert.equal(leanFrom(0), 0);
  assert.equal(leanFrom(40), 1);
  assert.equal(leanFrom(-40), -1);
  assert.equal(leanFrom(1000), 1);
  assert.equal(leanFrom(10), 0.25);
  assert.equal(leanFrom(NaN) || 0, 0);
});
