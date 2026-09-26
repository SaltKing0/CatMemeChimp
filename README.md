<div align="center">

# MEMECHIMP

### Good memes. Questionable behavior.

A local-first meme archive with a very serious color palette and one small cat who has opinions.

`140 memes` · `51 templates` · `0 runtime dependencies` · `offline-ready`

</div>

---

## What is this?

MEMECHIMP is a private, desktop-friendly meme playground:

- browse a curated archive by mood, search, sort, or shuffle
- save favorites and build personal sets
- rip a daily pack, chase streaks, and fill the meme dex
- remix templates or upload your own image in the Studio
- watch memes on Meme TV, including personal clips
- let **Biscuit**, the animated companion, judge your browsing habits

No account. No feed algorithm. No analytics. Your archive stays on your machine.

---

## Start here

Requires **Node.js 22+**. There is no install step.

```bash
npm start
```

Open [http://127.0.0.1:8197/](http://127.0.0.1:8197/) in a browser.

On Windows, use the included launcher instead:

```text
start.vbs
```

It starts the local server and opens MEMECHIMP in a dedicated Chrome/Edge app window.

### Verify everything

```bash
npm run check
```

This runs syntax checks, the unit tests, and the asset/content smoke test.

---

## The archive

| | |
|---|---|
| **140** | curated caption remixes |
| **60** | cat memes |
| **80** | general memes |
| **51** | unique image templates |
| **6** | mood filters |
| **0** | required runtime packages |

The archive includes individual source links for every meme. Uploaded GIFs become still images. Your own creations stay in browser storage until you download them.

### The good stuff

- **Discover** — search, mood filters, curated/trending/A–Z/unseen sorting, shuffle, and compact or comfortable grids.
- **Daily Drop** — one sealed pack every 24 hours, rarity pulls, duplicates, scrap, bonus forges, and streaks.
- **Meme Dex** — track every discovered meme and fill the 140-tile archive.
- **Studio** — remix built-in templates, upload an image, add captions, choose a style, and export PNG or animated WebM.
- **Sets** — save favorites, build collections, and import or export your own sets.
- **Meme TV** — autoplay channels, sleep timer, volume and speed controls, bundled clips, and your own clips.

---

## Meet Biscuit

Biscuit is the small animated cat in the corner. She is not a mascot wallpaper; she is a tiny desktop personality.

### She can

- lean toward your cursor as you move it
- blink, breathe, sway, and bounce
- react with curious, smug, judging, grumpy, excited, happy, and sleepy expressions
- bounce, wave, shake, and throw off stars, hearts, crumbs, and paw prints
- speak in contextual quips that never repeat back to back
- react to saves, rare pulls, streaks, creations, achievements, and late-night browsing
- react to what you are actually looking at — chaotic, wholesome, sleepy, or unhinged memes each get their own verdict
- notice when you re-open the same meme, or stare at one for too long
- hold a different expression on every page
- be poked, belly-rubbed, fed, carried, dropped, and released into a tiny bounce
- be flicked across the screen — she keeps your throw velocity, tumbles, and lands dizzy with stars orbiting her head
- lean into your scrolling, squint and startle when you click too fast, and glance at whatever card your pointer is on
- be dragged anywhere on screen and **stay there**, even after a reload
- leap onto the sidebar, a nav item, or the top of a meme card, and drop back to the floor whenever the page re-renders underneath her
- wander to a new perch now and then, and grumble about it
- walk along a surface to reach it, turning to face where she is going, with a soft footstep every step
- scratch, yawn, stretch, wash her face, flick her tail, sprawl out, and stare at you when she has nothing better to do
- bolt after a fast-moving cursor, change her mind, and grumble about it
- hold still whenever you are typing, tabbing through the page, reading something, resizing the window, or scrolling — she is a companion, not a distraction
- purr with her eyes closed, chew a treat, knead, and go cross-eyed with delight
- shrink away while you scroll, then quietly return

### Biscuit’s trust

Biscuit keeps a trust score from 0 to 100. Poke her, save memes, rip packs, belly-rub her (double-click, or `B`), and feed her (`T`) to raise it. Trust only ever goes up and unlocks extra quips. Hover her to see where you stand; she has no buttons, no meters, and no menus about it.

Treats are the exception: she starts with two, one refills every twenty minutes, and she tops out at five. When she is out, she says so.

`G` brings her back to her corner. Long-press her, or press `V`, to mute her. “Reset Biscuit’s trust” in the shortcuts dialog wipes her memory, position, and treats. Everything is stored in your browser.

| Where | What |
|---|---|
| `localStorage` (`mmc-buddy`) | trust, treats, mute, resting position |
| Nothing | leaves your browser |

### How she is drawn

Biscuit is one painted sprite, [`public/assets/biscuit.png`](public/assets/biscuit.png), drawn to a canvas each frame. Her expressions are layered on top of it rather than redrawn: heart eyes, squinting lids, closed-eye arcs, dizzy spirals, a question mark, an anger mark, chewing crumbs, and motion arcs when she waves. The engine positions the sprite and everything else is an overlay, so swapping the artwork means updating the handful of coordinates in `BUDDY_ART`.

Walking and idle behaviours are a small state machine: a weighted behaviour is picked every 25–60 seconds, at most three per five minutes, and never while you are mid-gesture. The physics, particles, ground shadow, and the CSS tilt and glow are all still procedural. If the artwork ever fails to load she falls back to a drawn shape rather than disappearing.

She is also considerate: with `prefers-reduced-motion` she draws one still frame per expression and never animates, and she stops drawing entirely when nothing is happening.

---

## Shortcuts

| Key | Action |
|---|---|
| `/` | Search |
| `R` | Random meme |
| `?` | Show shortcuts |
| `←` / `→` | Browse in the viewer |
| `S` | Save the current meme |
| `Space` | Toggle autoplay |
| `B` | Belly rub Biscuit (or double-click her) |
| `T` | Give Biscuit a treat |
| `G` | Bring Biscuit back to her corner |
| `V` | Mute / unmute Biscuit |
| `Esc` | Close a dialog |

Autoplay pauses when the tab is hidden.

---

## Your data

MEMECHIMP is designed to stay local.

- Favorites, seen state, preferences, and Biscuit’s trust, treats, mute, and resting spot use `localStorage`.
- Creations and uploaded TV clips use `IndexedDB`.
- Nothing is uploaded by the app.
- Clearing browser data removes local favorites and creations.
- Download your creations if you want an independent copy.

The local server binds to `127.0.0.1` on port `8197` by default. Override it with `PORT` for development.

---

## Design direction

MEMECHIMP uses a warm archive palette:

```text
olive       #4A412A
deep olive  #332E20
periwinkle  #B9C5F3
blue        #424F82
cream       #F7F5EE
paper       #FFFEF9
```

The Chimp identity is based on the canonical 4275-cell Chimp facekit and is shipped as SVG, PNG, and ICO assets. The browser palette is a screen approximation, not a print color specification.

---

## Content and licensing

The MEMECHIMP captions were written for this project. The bundled meme images are third-party community templates sourced from Imgflip; each record in [`public/library.json`](public/library.json) retains its source page.

No ownership or license of third-party source imagery is asserted by this project. Review [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) before redistributing media or fonts.

The original source code and MEMECHIMP branding are MIT licensed. Third-party templates and fonts retain their own terms.

---

## Contributing

Issues and pull requests are welcome.

Please keep:

- the runtime dependency-free
- keyboard and mobile behavior intact
- Biscuit charming but not obnoxious
- source and rights information attached to new media

Run the full check before opening a pull request:

```bash
npm run check
```

<div align="center">

**A little less doom. A little more meme.**

</div>
