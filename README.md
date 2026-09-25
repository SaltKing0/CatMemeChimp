# MEMECHIMP

Good memes. Questionable behavior. A complete local meme app, created with creative direction and code by GPT-6 Astra.

[MIT licensed](LICENSE) · zero runtime dependencies · private by design · works offline after download

Open the **MEMECHIMP** desktop shortcut, double-click **start.vbs**, or visit **http://127.0.0.1:8197/** while the server is running. The desktop launcher starts the server when needed and opens a dedicated Chrome/Edge app window. It keeps its own browser profile so favorites and creations persist independently of other apps.

## What is inside

- 100 curated caption remixes (60 cat + 40 general) using 31 community cat templates plus 10 classic general templates (Drake, Distracted Boyfriend, Two Buttons, Change My Mind, This Is Fine, Pikachu, Boromir, Roll Safe, Left Exit, Spider-Man), with individual source links. Entries carry `category: cat` or `general`.
- Six mood filters, multiword search, curated/A–Z/unseen sorting, shuffle, comfortable/compact grids, and incremental browsing.
- Saved favorites and three curated collections: office survival, low battery, and serotonin.
- A focused viewer: arrow keys, swipe navigation, save, remix, six-second autoplay, PNG download, and local deep links.
- A caption studio with live preview, template selection, personal image uploads (up to 12 MB), persistent creations, and PNG export.
- Responsive desktop, tablet, and phone layouts; reduced-motion support; keyboard focus and native accessible dialogs.
- No runtime package dependencies, paid APIs, analytics, remote fonts, or external image requests.

## Run and verify

Requires Node.js 22 or newer. No install step is needed.

    npm start
    npm run check

The server binds only to 127.0.0.1, port 8197. The PORT environment variable can override it for development; the desktop launcher uses 8197. A local URL is reachable on this computer, not automatically on another device.

Install or repair the shortcut: run **scripts/install-shortcut.ps1**.

## Identity and source provenance

Chimp body: canonical 4275-cell Chimp facekit, happy face, exact #4A412A body, locked opaque #FBF4EE face plate. The browser color is a screen approximation of Pantone 448 C, not a print color specification. Palette: olive #4A412A, deeper olive #332E20, periwinkle #B9C5F3, blue #424F82, cream #F7F5EE, plus muted mood tints. The mark is shipped as SVG, PNG, and ICO.

The 100 captions were written for MEMECHIMP. All images are community meme templates sourced from Imgflip; every record in **public/library.json** retains its source page. No license or ownership of third-party source imagery is asserted. Collection date: September 8, 2026; general set added September 25, 2026. This is a curated collection, not a live feed. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) before redistributing media.

Running the app needs no external internet connection. All final assets are bundled.

## Your data

Favorites, seen-state, and density preferences use localStorage. Creations (including resized uploaded images) use IndexedDB. Uploaded GIFs become still images. Browser data is local to the selected profile; clearing it removes favorites and creations. Download PNGs for independent copies. Nothing is uploaded to a server or published by this app.

Keyboard: `/` search, `R` random meme, `?` shortcuts, `←`/`→` browse in viewer, `S` save in viewer, `Space` toggle autoplay, `Esc` close. Autoplay pauses when the tab is hidden.

## Contributing

Issues and pull requests are welcome. Please keep the app dependency-free at runtime, preserve keyboard and mobile behavior, and include source/rights information for any proposed media. Run `npm run check` before opening a pull request.

The MIT license applies to the original source code and MEMECHIMP branding in this repository. It does not relicense third-party meme templates or fonts; see the third-party notices.
