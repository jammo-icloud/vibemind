# Vibemind Design System

A design system for **Vibemind** — a 6-piece cover band from the Snoqualmie Valley, WA. The brand is anchored by *Vibey*, a custom alien mascot whose forehead is a rainbow chakra of dots. Music spans 1960s through today: rock, funk, blues, and pop. There's also a 3-piece spinoff called **Vibetrip**.

The vibe: **fun, warm, party-band, locals-first**. Not corporate. Not overly polished. The visual language pairs a deep black/charcoal stage with a **full ROYGBIV rainbow** lifted directly from Vibey's forehead — and warm marquee yellow/red accents from old club signage.

---

## Sources

- **Live website:** https://www.vibemind.us (Wix-built — Heather is the editor)
  - `/music` — list of bands they cover
  - `/general-1` — Meet the Band
  - `/gigs` — Calendar (most important page per Heather)
  - `/media` — Vibemind Live! Media
  - `/tipjar` — Tip Jar
- **Social:**
  - Facebook: https://www.facebook.com/vibemindband
  - Instagram: https://www.instagram.com/vibemind_band/
- **Mascot:** *Vibey*, custom alien logo (rainbow dot pattern on black silhouette)
- **Spinoff act:** Vibetrip — 3-piece (subset of the 6)

No codebase or Figma was provided — this system is built from the live site's assets, photography, and content, plus brand context provided directly.

---

## The Band

| Member | Role |
|---|---|
| Heather "Heathercita" Morris | lead vocals + acoustic guitar |
| Nic "Nic-o-time" Fillingham | bass + vocals |
| Jim "Rigs" Martin | guitar |
| "Boomer" Hess | guitar + harmonica + vocals |
| Dane "Ese" Estepa | drums |
| Sally Mitchell | keys + percussions + vocals |

Everyone has a nickname. That's a brand fact.

**Vibetrip** — the 3-piece spinoff: **Heather**, **Boomer**, and **Jim**. Same alien, smaller footprint, same vibe.

---

## Index

| File | What's in it |
|---|---|
| `README.md` | This file — brand context, content, visuals, iconography |
| `colors_and_type.css` | CSS variables for color, type, spacing, radii, shadow |
| `SKILL.md` | Skill manifest (works as Agent Skill in Claude Code) |
| `assets/` | Logos, mascot art, band photos, posters |
| `fonts/` | Web fonts (or Google Fonts substitutes — see flag below) |
| `preview/` | Cards rendered in the Design System tab |
| `ui_kits/website/` | Recreation of vibemind.us — JSX components + index |

---

## Content Fundamentals

**Voice.** Conversational, casual, warm-hearted. Talks **to you, not at you**. First-person plural ("our favorite bands," "we play") for the band; second-person ("you") for the audience. Reads like a friendly text from a local.

**Tone words.** Upbeat. Uplifting. Local. Welcoming. Tongue-in-cheek. *Never* slick, corporate, or moody.

**Casing.** Section titles are **ALL CAPS** with spaced confidence: `THE VIBES`, `THE BAND`, `THE GIGS`, `THE MUSIC`, `TIP JAR`. Body copy is sentence case. The site uses "THE ___" as a recurring frame for nav — that's a system-level pattern worth keeping.

**Names with quotes.** Every band member has a nickname in double quotes between first and last: *Heather "Heathercita" Morris*, *Nic "Nic-o-time" Fillingham*, *Dane "Ese" Estepa*. Always render this format.

**Punctuation quirks.** Trailing ellipses on conversational headers ("Our favorite bands to cover…."). Em-dash & ampersand-friendly ("Rock, Funk, Blues & Pop"). Lists are vertically stacked, not comma-separated, when there's room — it feels like a setlist.

**I vs. you.** *We* (the band) and *you* (the listener). Never "I."

**Emoji.** Sparingly used in social/post copy. Not used on the website. **Default to no emoji** in the design system — the rainbow dots already do that job visually.

**Specific examples (verbatim from the site):**
- "Upbeat and Uplifting"
- "Covers from 1960s to NOW"
- "Rock, Funk, Blues & Pop"
- "Our favorite bands to cover…."
- "MEET THE BAND"
- "TIP JAR"
- "Vibemind Live! Media"

---

## Visual Foundations

**Color philosophy.** A black/near-black stage with a **rainbow accent palette** drawn directly from Vibey's forehead dots. The rainbow is *Vibemind's identity* — pink, orange, yellow, green, cyan, blue, purple — used as accents, dot patterns, divider gradients, and individual member colors. Warm marquee yellow + brick red are secondary supports for poster/event content.

| Role | Token | Hex | Notes |
|---|---|---|---|
| Stage | `--ink` | `#0E0E12` | The black of Vibey's silhouette |
| Off-stage | `--ink-2` | `#1A1A22` | Card backgrounds on dark |
| Paper | `--paper` | `#FAF6EE` | Warm off-white — think old gig poster |
| Marquee yellow | `--marquee` | `#F5B921` | Live-music sign yellow |
| Brick | `--brick` | `#B83A1F` | Marquee letter red, deeper than fire-engine |
| Rainbow stops | `--rb-1`…`--rb-7` | see CSS | Pink → red → orange → yellow → green → blue → purple |

**Type.** Three voices.
- **Wordmark:** the real `vibemind` / `vibetrip` lockup is a custom, chunky, **rounded lowercase** with **circumflex accents on the î's** — friendly, hand-drawn, almost groovy-70s. **Always use the actual logo PNG** (`assets/logo-vibemind-full.png` / `assets/logo-vibetrip-full.png`) — never re-set the wordmark in a system font.
- **Display:** *Bowlby One SC* — substitute for big section headers (THE BAND, THE GIGS) where we need a marquee-block all-caps look. NOT the wordmark.
- **Body:** *Inter* — neutral, legible, modern. Universal stand-in for Wix's body sans.
- See **Font substitution flag** below.

**Backgrounds.** Three modes:
1. **Black stage** — the default. `--ink`. Often with the rainbow-dot pattern as a subtle texture.
2. **Warm marquee** — yellow/red gradient or a sepia-toned photo as full-bleed hero.
3. **Paper** — `--paper` for content-heavy sections (calendar, song list).

Photography is **almost always black-and-white** with a warm grain — band performance shots taken at local Snoqualmie Valley venues. When color photography is used, it's warm/saturated/punchy — never cool or moody.

**Patterns.** The **rainbow-dot V** from Vibey's forehead is a reusable motif — the chakra triangle of dots can be deconstructed into a divider, a loader, a bullet system, or a confetti spray. Use it.

**Animation.** Light, friendly, never aggressive. Fades and gentle slides (200–300ms, ease-out). The rainbow dots can pulse/wave on hover. No spring bounces — this isn't a tech product. No Lottie-style flair.

**Hover states.** Cards lift slightly (translateY -2px) with a deeper shadow. Links shift through one rainbow stop on hover (e.g., text goes from paper → marquee yellow). Buttons fill from black → marquee yellow with text inverting.

**Press states.** Slight shrink (scale 0.97). No depressed-shadow trickery.

**Borders.** 1px hairlines on dark (`rgba(255,255,255,0.12)`), 1.5px on paper (`rgba(14,14,18,0.12)`). Cards on paper sometimes use a **2px solid black** border for a poster/zine feel.

**Shadows.**
- `--shadow-poster` — flat, hard, offset 4px 4px 0 0 black. For zine/poster cards.
- `--shadow-stage` — soft, diffuse, deep. For lifted cards on dark.
- No drop-shadows on text. No inner shadows.

**Corner radii.** Mostly **soft** (`--r-md: 10px`, `--r-lg: 18px`). Buttons can be **fully rounded** (pill, `--r-pill`) — particularly the "JOIN THE LIST" CTA. Posters are **square corners** (radius 0) — that's the zine/poster mode.

**Layout.** Center-stacked on desktop. Generous vertical breathing room. Calendar and gigs page is the most layout-dense and uses cards in a vertical list. Header is fixed, sticky, transparent-over-hero turning solid-on-scroll.

**Transparency / blur.** Used sparingly: the sticky header gets a `backdrop-filter: blur(12px)` over the hero image. Body content is opaque.

**Imagery vibe.** Warm, grainy, B&W or sepia for performance shots. Saturated marquee yellow/red for poster art. Avoid: cold blue tones, gradient meshes, AI-glossy product photography.

---

## Iconography

Vibemind doesn't use a formal icon system. The site is icon-light by design — content is the focus. Where icons appear:

- **Social icons** — Facebook + Instagram, simple flat solid-fill PNGs (white on transparent or color-on-white). Always together, always at the same size, always in the footer.
- **No emoji** in interface copy. (The rainbow dots already carry the emotional weight.)
- **No icon font** in current production.

**For this design system,** we standardize on **Lucide** (CDN, stroke-based, friendly) where icons *are* needed — for things like a calendar pin, a play button, a map marker. They're loaded from CDN as needed:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

This is a **substitution** — Vibemind's site uses platform-native Wix icons, which we can't reuse. Lucide's friendly stroke style is the closest match to the warm, hand-drawn-adjacent feel of the brand. **Flag:** if the band wants official icons, they should specify.

**The rainbow-dot motif** is itself the most-used "icon" in the system. Use it as a:
- bullet for lists
- divider between sections
- loading indicator
- favicon (`assets/logo-vibey-art.png`)

---

## Font substitution flag

⚠️ **Heads up, Heather:** I don't have the exact font files. Substitutes in use:

- **Wordmark:** No substitution — we always reference the official PNG (`logo-vibemind-full.png`, `logo-vibetrip-full.png`). The custom font with the circumflex î's is not commercially available; if you have the original vector / font file, drop it in `fonts/`.
- **Display headers:** *Bowlby One SC* (Google Fonts) — for ALL CAPS section labels.
- **Body:** *Inter* (Google Fonts) — universal modern sans.
