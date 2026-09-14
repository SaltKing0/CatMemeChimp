import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const failures = [];
const fail = (msg) => failures.push(msg);

const lib = JSON.parse(readFileSync(join(pub, 'library.json'), 'utf8'));
if (!Array.isArray(lib) || !lib.length) fail('library.json must be a non-empty array');

const moods = new Set(['relatable', 'chaos', 'wholesome', 'judgment', 'sleepy', 'snacks']);
const seen = new Set();
for (const [i, m] of lib.entries()) {
  const where = `library[${i}] (${m.id || 'no-id'})`;
  for (const f of ['id', 'title', 'mood', 'tags', 'image', 'template', 'kind', 'added']) {
    if (m[f] === undefined || m[f] === null || m[f] === '') fail(`${where} missing ${f}`);
  }
  if (seen.has(m.id)) fail(`duplicate id ${m.id}`);
  seen.add(m.id);
  if (!moods.has(m.mood)) fail(`${where} bad mood ${m.mood}`);
  if (!Array.isArray(m.tags) || !m.tags.length) fail(`${where} tags must be non-empty`);
  if (typeof m.image !== 'string' || !m.image.startsWith('/assets/memes/')) fail(`${where} bad image path`);
  else if (!existsSync(join(pub, m.image.slice(1)))) fail(`${where} missing file ${m.image}`);
  if (m.source !== null && m.source !== undefined && !String(m.source).startsWith('https://')) fail(`${where} bad source`);
}

const html = readFileSync(join(pub, 'index.html'), 'utf8');
const count = html.match(/id="all-count">(\d+)/);
if (!count) fail('index.html missing #all-count');
else if (Number(count[1]) !== lib.length) fail(`#all-count is ${count[1]} but library has ${lib.length}`);
for (const id of ['arena', 'battle-grid', 'arena-stats', 'leaderboard', 'last-crowned', 'arena-skip', 'arena-reset', 'meme-grid', 'viewer', 'editor']) {
  if (!html.includes(`id="${id}"`)) fail(`index.html missing #${id}`);
}

if (failures.length) {
  console.error(`smoke: ${failures.length} problem(s)\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`smoke: OK — ${lib.length} memes, ${new Set(lib.map((m) => m.image)).size} templates, all assets present`);
