# Website UI Kit — vibemind.us

A high-fidelity recreation of the Vibemind website, built as React/JSX components. The original site is on Wix; this kit re-implements the same layout and content patterns using the Vibemind design system (`/colors_and_type.css`).

## Files
- `index.html` — interactive recreation. Click the nav to switch between Home, Music, Band, Gigs, Tip Jar, Contact.
- `components.jsx` — all components (Header, Footer, Hero, BandSection, GigsSection, MusicSection, TipJarSection, MemberCard, GigRow…).

## What's included
- **Header** — sticky, blurred, transparent-over-hero. ALL CAPS nav with marquee-yellow hover. "Join the List" pill CTA.
- **Hero** — B&W band photo, full-bleed dark gradient, display headline + rainbow bar.
- **Band section** — 3×2 grid of member cards. Photo desaturates to color on hover. Each member tagged with a chakra rainbow color.
- **Gigs section** — calendar of poster-style gig cards with date block, badge (Vibemind / Vibetrip), and "Details" CTA. Hover lifts the card.
- **Music section** — the cover-band setlist as a 4-column list on warm paper.
- **Tip Jar** — full-bleed marquee yellow, brick-red display text, Venmo / PayPal CTAs.
- **Footer** — rainbow bar divider, social dots (Facebook + Instagram), copyright.

## What's intentionally simplified
- No real form submission, no real payment links — these are mocked.
- Calendar dates are sample/illustrative — not real upcoming gigs.
- Cover-band list is verbatim from the live site.

## Notes for the band
- The **calendar** is the most-used page on the live site, so the gig card design got the most attention here. Each card looks like a screen-printed gig poster.
- **Vibetrip vs Vibemind** is surfaced as a badge on each gig — clarifies which lineup is playing.
