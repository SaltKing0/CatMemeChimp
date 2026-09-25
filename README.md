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

- follow your cursor with her eyes
- blink, breathe, wag her tail, and twitch her ears
- react with curious, smug, judging, grumpy, excited, happy, and sleepy expressions
- bounce, wave, shake, and throw off stars and hearts
- speak in contextual quips
- react to saves, rare pulls, streaks, creations, and late-night browsing
- be poked, dragged, and released into a tiny bounce
- shrink away while you scroll, then quietly return

Long-press Biscuit to mute her. The setting persists locally.

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
| `Esc` | Close a dialog |

Autoplay pauses when the tab is hidden.

---

## Your data

MEMECHIMP is designed to stay local.

- Favorites, seen state, preferences, and Biscuit’s mute setting use `localStorage`.
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
