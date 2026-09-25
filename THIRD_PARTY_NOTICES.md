# Third-party notices

MEMECHIMP is open-source software. The MIT license in this repository covers the original application code, original MEMECHIMP captions, and MEMECHIMP branding. It does not grant rights to third-party photographs, meme templates, or font files.

## Meme template images

The 31 JPG files in `public/assets/memes/` are community meme templates obtained from Imgflip. Each cat item in `public/library.json` records the template name and its individual Imgflip source page. The application also exposes that source link in the focused viewer.

The 10 `gen-*.jpg` files in `public/assets/memes/` are blank classic meme templates obtained from Imgflip (same provenance as the cat templates): Drake Hotline Bling, Distracted Boyfriend, Two Buttons, Change My Mind, This Is Fine, Surprised Pikachu, One Does Not Simply, Roll Safe, Left Exit 12 Off Ramp, and Spider-Man Pointing. Each general item in `public/library.json` records its Imgflip meme page, also linked in the viewer. Second batch: Bernie Asks, Grim Reaper Knocks, Is This a Pigeon, Spider-Man Triple, and Skeptical Kid. Third batch: UNO Draw 25, Trade Offer, Hide the Pain Harold, Panik Kalm Panik, and Expanding Brain.

Imgflip is a user-generated-content platform and may not own every image uploaded to it. The inclusion of a source link is attribution and provenance, not a claim that Imgflip or this project can relicense the underlying image. These images are bundled to support the project's caption remixes and offline experience. They are expressly excluded from the repository's MIT license.

Before using or redistributing an image separately, determine whether your use is permitted by the rights holder and the laws that apply to you. If you own rights to an included image and want it removed or credited differently, open a GitHub issue identifying the image and evidence of ownership; maintainers should handle the request promptly.

- Imgflip terms: https://imgflip.com/terms
- Imgflip cat-template search: https://imgflip.com/memesearch?q=cat

## TV bumper clips

The MP4 files in `public/assets/clips/` are short, muted excerpts transcoded locally with ffmpeg for size. They are bundled under their original Creative Commons licenses, which are not replaced by this repository's MIT license:

- `calico.mp4` — excerpt of "Calico kitten playing" by باسم, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Calico_kitten_playing.webm
- `tokyo.mp4` — excerpt of "Kitten playing - Tokyo - Jan 7 2020" by Nesnad, CC BY 4.0. Source: https://commons.wikimedia.org/wiki/File:Kitten_playing_-_Tokyo_-_Jan_7_2020.webm
- `gatos.mp4` — excerpt of "Gatos hmnos" by EEIM, CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Gatos_hmnos.webm

## Fonts

The WOFF2 files in `public/assets/fonts/` are DM Sans and Fraunces files downloaded through Google Fonts. Both families are distributed under the SIL Open Font License 1.1. Their license applies to the font files; the application's MIT license does not replace it.

- DM Sans: https://github.com/google/fonts/tree/main/ofl/dmsans
- Fraunces: https://github.com/google/fonts/tree/main/ofl/fraunces
- SIL Open Font License 1.1: https://openfontlicense.org/open-font-license-official-text/

## Pantone reference

"Pantone" is a trademark of Pantone LLC. The color `#4A412A` is used as a screen approximation commonly associated with Pantone 448 C. This project is not affiliated with or endorsed by Pantone LLC, and hexadecimal color values are not official printed-color specifications.
