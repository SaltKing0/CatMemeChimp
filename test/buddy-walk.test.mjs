import test from 'node:test';
import assert from 'node:assert/strict';
import { walkTowards, behaviourBudget, pointerSpeed, settled, WALK_SPEED } from '../public/lib/buddy.mjs';

test('walkTowards moves toward the target and reports direction', () => {
  const right = walkTowards(0, 100, 0.28, 16);
  assert.ok(right.x > 0 && right.x < 100);
  assert.equal(right.done, false);
  assert.equal(right.dir, 1);
  const left = walkTowards(100, 0, 0.28, 16);
  assert.ok(left.x < 100);
  assert.equal(left.dir, -1);
  assert.ok(left.moved > 0);
});

test('walkTowards snaps and finishes when it is close enough', () => {
  const done = walkTowards(100, 100.5, 0.28, 16);
  assert.equal(done.done, true);
  assert.equal(done.x, 100.5);
  assert.equal(done.dir, 0);
  const same = walkTowards(50, 50, 0.28, 16);
  assert.equal(same.done, true);
  assert.equal(same.moved, 0);
});

test('walkTowards never overshoots the target', () => {
  for (const [x, t] of [[0, 1], [100, 99], [10, 10.4], [-50, -48]]) {
    const step = walkTowards(x, t, WALK_SPEED, 60);
    assert.ok(step.done || (Math.min(x, t) <= step.x && step.x <= Math.max(x, t)), `${x}->${t} gave ${step.x}`);
  }
});

test('behaviourBudget allows three starts per five minutes', () => {
  const now = 1000000;
  assert.equal(behaviourBudget([], now), true);
  assert.equal(behaviourBudget([now, now, now], now), false);
  assert.equal(behaviourBudget([now, now], now), true);
  assert.equal(behaviourBudget([now, now, now - 299000], now), false);
  assert.equal(behaviourBudget([now, now, now - 301000], now), true);
  assert.equal(behaviourBudget(null, now), true);
});

test('pointerSpeed needs two samples and never divides by zero', () => {
  assert.equal(pointerSpeed(null, { x: 1, y: 1, t: 2 }), 0);
  assert.equal(pointerSpeed({ x: 0, y: 0, t: 0 }, null), 0);
  assert.equal(pointerSpeed({ x: 0, y: 0, t: 0 }, { x: 0, y: 0, t: 0 }), 0);
  const fast = pointerSpeed({ x: 0, y: 0, t: 0 }, { x: 300, y: 0, t: 100 });
  assert.ok(Math.abs(fast - 3) < 1e-9);
});

test('settled keeps her still for the cooldown after any interaction', () => {
  assert.equal(settled(0, 4000, 8000), false);
  assert.equal(settled(0, 8000, 8000), true);
  assert.equal(settled(1000, 2000, 8000), false);
  assert.equal(settled(0, 9000), true);
});
