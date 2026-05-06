---
name: vibemind-design
description: Use this skill to generate well-branded interfaces and assets for Vibemind, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** Vibemind — a 6-piece cover band from the Snoqualmie Valley, WA. Spinoff trio: Vibetrip.
- **Mascot:** Vibey — black alien with a rainbow chakra V of dots on the forehead.
- **Voice:** warm, local, party-band. "We" + "you", never "I". Section headers in `THE ___` form (THE BAND, THE GIGS, THE MUSIC).
- **Colors:** ink (`#0E0E12`) + paper (`#FAF6EE`) + a full ROYGBIV rainbow + marquee yellow (`#F5B921`) and brick red (`#B83A1F`).
- **Type:** Bowlby One SC (display, marquee-block, ALL CAPS) + Inter (body). Both Google Fonts substitutes — flagged for replacement.
- **Tokens:** `colors_and_type.css` — import this and use the CSS vars.
- **Components:** `ui_kits/website/components.jsx` — Header, Footer, Hero, MemberCard, GigRow, etc.

Always copy assets from `assets/` into the output (logos, band photos, posters). Never redraw the alien — use `assets/alien-bud.jpg` (single head) or `assets/logo-vibey-art.png` (six-head wreath).
