# Third-party notices

MEMECHIMP is open-source software. The MIT license in this repository covers the original application code, original MEMECHIMP captions, and MEMECHIMP branding. It does not grant rights to third-party photographs, meme templates, or font files.

## Meme template images

The 31 JPG files in `public/assets/memes/` are community meme templates obtained from Imgflip. Each cat item in `public/library.json` records the template name and its individual Imgflip source page. The application also exposes that source link in the focused viewer.

The 10 `gen-*.jpg` files in `public/assets/memes/` are photographs from Wikimedia Commons, each under its stated Creative Commons license (all allow reuse with attribution; none are NonCommercial/NoDerivatives). Each general item in `public/library.json` records its Commons source page, also linked in the viewer. They are expressly excluded from the repository's MIT license:

- `gen-01.jpg` — "Frustrated man at a desk (cropped)" by LaurMG, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Frustrated_man_at_a_desk_(cropped).jpg
- `gen-02.jpg` — "Man Feeling Stressed In The Workplace" by CIPHR Connect, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Man_Feeling_Stressed_In_The_Workplace.jpg
- `gen-03.jpg` — "Man Being Shouted At In The Office" by CIPHR Connect, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Man_Being_Shouted_At_In_The_Office.jpg
- `gen-04.jpg` — "Coffee cup in woman's hands (Unsplash)", CC0. Source: https://commons.wikimedia.org/wiki/File:Coffee_cup_in_woman%27s_hands_(Unsplash).jpg
- `gen-05.jpg` — "Hands-coffee-smartphone-technology (23698591814)", CC0. Source: https://commons.wikimedia.org/wiki/File:Hands-coffee-smartphone-technology_(23698591814).jpg
- `gen-06.jpg` — "The Empty Wallet", CC BY 4.0. Source: https://commons.wikimedia.org/wiki/File:The_Empty_Wallet.jpg
- `gen-07.jpg` — "Piggy-bank-968302", CC0. Source: https://commons.wikimedia.org/wiki/File:Piggy-bank-968302.jpg
- `gen-08.jpg` — "Driving Cars in a Traffic Jam", CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Driving_Cars_in_a_Traffic_Jam.jpg
- `gen-09.jpg` — "Colorful pile of dumbbells at the gym", CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Colorful_pile_of_dumbbells_at_the_gym.jpg
- `gen-10.jpg` — "Dirty Laundry in a Laundry Basket", CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Dirty_Laundry_in_a_Laundry_Basket.jpg

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
