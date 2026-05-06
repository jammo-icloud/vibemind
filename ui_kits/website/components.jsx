/* eslint-disable */
/* Vibemind website — shared components */

const { useState } = React;

// ---------- Logo ----------
function VibeyMark({ size = 36 }) {
  return (
    <img src="assets/alien-bud.jpg" alt="Vibey"
         style={{ width: size, height: size, objectFit: 'contain', borderRadius: 6 }} />
  );
}

// Real wordmark — always image, never typeset. Pass variant="trip" for Vibetrip.
function Wordmark({ height = 44, variant = 'mind' }) {
  const src = variant === 'trip'
    ? 'assets/logo-vibetrip-full.png'
    : 'assets/logo-vibemind-full.png';
  // The vibemind lockup is wider (alien wreath + word), vibetrip is more vertical.
  return (
    <img src={src} alt={variant === 'trip' ? 'Vibetrip' : 'Vibemind'}
         style={{ height, width: 'auto', objectFit: 'contain', filter: 'invert(1)' }} />
  );
}

// ---------- Rainbow bar ----------
function RainbowBar({ height = 4, style = {} }) {
  return <div style={{ height, background: 'var(--rainbow)', borderRadius: 999, ...style }} />;
}

// ---------- Header ----------
function Header({ active, onNav }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'music', label: 'The Music' },
    { id: 'band', label: 'The Band' },
    { id: 'gigs', label: 'The Gigs' },
    { id: 'tipjar', label: 'Tip Jar' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(14,14,18,0.78)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--hairline-on-ink)',
      padding: '14px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      color: 'var(--paper)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
           onClick={() => onNav('home')}>
        <Wordmark height={48} />
      </div>
      <nav style={{ display: 'flex', gap: 22 }}>
        {items.map(it => (
          <a key={it.id} onClick={() => onNav(it.id)}
             style={{
               cursor: 'pointer',
               fontSize: 12, letterSpacing: '0.22em', fontWeight: 700,
               textTransform: 'uppercase',
               color: active === it.id ? 'var(--marquee)' : 'rgba(250,246,238,0.85)',
               transition: 'color .2s',
             }}
             onMouseEnter={e => e.currentTarget.style.color = 'var(--marquee)'}
             onMouseLeave={e => e.currentTarget.style.color = active === it.id ? 'var(--marquee)' : 'rgba(250,246,238,0.85)'}>
            {it.label}
          </a>
        ))}
      </nav>
      <button className="vm-btn vm-btn-marquee" onClick={() => onNav('contact')}>Join the List</button>
    </header>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)', color: 'var(--fg-on-ink-2)',
      padding: '40px 32px 24px',
      borderTop: '1px solid var(--hairline-on-ink)',
    }}>
      <RainbowBar height={3} style={{ marginBottom: 24 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Wordmark height={44} />
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6, paddingLeft: 14, borderLeft: '1px solid var(--hairline-on-ink)' }}>Snoqualmie Valley, WA</div>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <SocialDot color="#1877F2" letter="f" label="Facebook" />
          <SocialDot color="#E4405F" letter="i" label="Instagram" />
        </div>
        <div style={{ fontSize: 12, opacity: 0.6 }}>© 2021 by Vibemind</div>
      </div>
    </footer>
  );
}

function SocialDot({ color, letter, label }) {
  return (
    <a title={label} style={{
      width: 36, height: 36, borderRadius: 999,
      background: color, color: 'white',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 800, fontSize: 18, fontFamily: 'var(--font-body)',
      cursor: 'pointer',
    }}>{letter}</a>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 540,
      backgroundImage: 'linear-gradient(180deg, rgba(14,14,18,0.4) 0%, rgba(14,14,18,0.85) 100%), url(assets/band3.jpg)',
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', alignItems: 'flex-end',
      padding: '120px 32px 48px',
      color: 'var(--paper)',
    }}>
      <div style={{ maxWidth: 920 }}>
        <div className="vm-eyebrow" style={{ color: 'var(--marquee)', marginBottom: 18 }}>Snoqualmie Valley · Live</div>
        <h1 style={{
          fontFamily: 'var(--font-display)', textTransform: 'uppercase',
          fontSize: 'clamp(52px, 8vw, 110px)',
          lineHeight: 0.92, margin: 0, letterSpacing: '0.01em',
        }}>
          Upbeat<br />
          and Uplifting.
        </h1>
        <RainbowBar height={6} style={{ width: 320, margin: '24px 0' }} />
        <p style={{ fontSize: 20, maxWidth: 620, lineHeight: 1.5, color: 'rgba(250,246,238,0.85)', margin: 0 }}>
          Covers from the 1960s to NOW — rock, funk, blues &amp; pop. Six locals
          bringing the valley together one sweaty, joyful gig at a time.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          <button className="vm-btn vm-btn-marquee">See the Gigs</button>
          <button className="vm-btn vm-btn-ghost-light">Listen</button>
        </div>
      </div>
    </section>
  );
}

// ---------- Music page ----------
const COVER_BANDS = [
  'America','Audioslave','Bad Company','Bill Withers','Blind Melon','Cream',
  'Creedence Clearwater Revival','Daft Punk','David Bowie','Dire Straits',
  'Edie Brickell','Ella Fitzgerald','Eric Clapton','Fleetwood Mac','Foo Fighters',
  'Foreigner','Franz Ferdinand','George Michael','Grace Potter','Hall & Oates',
  'Heart','INXS','Janis Joplin','Jet','Jimi Hendrix','Larkin Poe','Lauryn Hill',
  'Led Zeppelin','Lenny Kravitz','Mazzy Star','Neil Young','Nirvana','Queen',
  'Pearl Jam','Peter Gabriel','Phil Collins','Pink Floyd','Pretenders','Prince',
  'Rolling Stones','Santana','Soundgarden','Stealers Wheel','Steve Miller Band',
  'Stevie Wonder','Sugarloaf','Talking Heads','The Beatles','The Cars','The Cure',
  'The Doobie Brothers','The Bangles','The Doors','The Eagles','The Kinks',
  'The Pretenders','The Police','The Turtles','The White Stripes','The Youngbloods',
  'Tina Turner','Tom Petty','Toto','U2','Van Morrison','Zombies','ZZ Top',
];

function MusicSection() {
  return (
    <section style={{ background: 'var(--paper)', padding: '72px 32px', color: 'var(--ink)' }}>
      <div className="vm-eyebrow" style={{ color: 'var(--brick)' }}>The Music</div>
      <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 1, margin: '12px 0 8px', letterSpacing: '0.02em' }}>
        Rock, Funk,<br/>Blues &amp; Pop
      </h2>
      <p style={{ fontSize: 18, color: 'var(--fg-on-paper-2)', maxWidth: 560 }}>
        Our favorite bands to cover….
      </p>
      <div style={{
        marginTop: 32,
        columnCount: 4, columnGap: 32,
        fontSize: 15, lineHeight: 2,
      }}>
        {COVER_BANDS.map(b => (
          <div key={b} style={{ breakInside: 'avoid' }}>{b}</div>
        ))}
      </div>
    </section>
  );
}

// ---------- Band ----------
const MEMBERS = [
  { id: 'heather', name: 'Heather Morris', nick: 'Heathercita', role: 'Lead vocals · acoustic guitar', color: '#E63B95', img: 'assets/heather.jpg' },
  { id: 'nic', name: 'Nic Fillingham', nick: 'Nic-o-time', role: 'Bass · vocals', color: '#F2811D', img: 'assets/nic.jpg' },
  { id: 'jim', name: 'Jim Martin', nick: 'Rigs', role: 'Guitar', color: '#F5C518', img: 'assets/jim.jpg' },
  { id: 'boomer', name: 'Boomer Hess', nick: 'Boomer', role: 'Guitar · harmonica · vocals', color: '#36B249', img: 'assets/boomer.jpg' },
  { id: 'dane', name: 'Dane Estepa', nick: 'Ese', role: 'Drums', color: '#2D6FE0', img: 'assets/dane.jpg' },
  { id: 'sally', name: 'Sally Mitchell', nick: 'Sally', role: 'Keys · percussion · vocals', color: '#7A3AB8', img: 'assets/sally.jpg' },
];

function MemberCard({ m }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--ink-2)', borderRadius: 18, overflow: 'hidden',
        border: '1px solid var(--hairline-on-ink)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? '0 18px 40px -12px rgba(0,0,0,0.6)' : '0 4px 12px -4px rgba(0,0,0,0.4)',
        transition: 'all .25s var(--ease-out)',
      }}>
      <div style={{
        aspectRatio: '4/5',
        backgroundImage: `url(${m.img})`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
        filter: hover ? 'grayscale(0%) contrast(1.05)' : 'grayscale(100%) contrast(1.05)',
        transition: 'filter .35s ease',
      }} />
      <div style={{ height: 4, background: m.color }} />
      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-on-ink-3)' }}>{m.role}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 24, margin: '8px 0 4px', lineHeight: 1, color: 'var(--paper)' }}>{m.name}</h3>
        <div style={{ fontSize: 13, color: 'var(--fg-on-ink-2)', fontStyle: 'italic' }}>"{m.nick}"</div>
      </div>
    </article>
  );
}

function BandSection() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '72px 32px' }}>
      <div className="vm-eyebrow" style={{ color: 'var(--marquee)' }}>The Band</div>
      <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 1, margin: '12px 0 32px', letterSpacing: '0.02em' }}>
        Meet the Band
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {MEMBERS.map(m => <MemberCard key={m.id} m={m} />)}
      </div>
    </section>
  );
}

// ---------- Gigs ----------
// Real Heather-made posters live in /assets. Posterless rows fall back to a date-block.
const GIGS = [
  { mo: 'Apr', day: '22', name: 'Earth Day Vibetrip', meta: '2:00 PM · Oxbow Farm & Conservation Center, Carnation · Free · All ages', tag: 'trip', poster: 'assets/poster-earthday-vibetrip.png' },
  { mo: 'May', day: '17', name: 'Snoqualmie Block Party', meta: '8:00 PM · Railroad Park, Snoqualmie · Free', tag: 'mind' },
  { mo: 'May', day: '30', name: 'Sip, Rock, Roll. — Prohibition Cellars', meta: '7–9 PM · 19501 144th Ave NE, Woodinville', tag: 'mind', poster: 'assets/poster-prohibition.png' },
  { mo: 'Jun', day: '07', name: 'Carnation Farmers Market', meta: '5:30 PM · Carnation, WA · All ages', tag: 'mind' },
  { mo: 'Jun', day: '21', name: 'Summer Solstice on the Snoqualmie', meta: '7:00 PM · Riverfront Park · Free', tag: 'mind' },
  { mo: 'Jul', day: '04', name: 'Fall City 4th of July', meta: '6:00 PM · Fall City · Free', tag: 'mind' },
  { mo: 'Jul', day: '19', name: 'Private Wedding', meta: '— · Snoqualmie Falls', tag: 'trip' },
  { mo: 'Aug', day: '01', name: 'Live Music at Remlinger Brewing', meta: '6–8 PM · 32610 NE 32nd St, Carnation · Free · All ages', tag: 'mind', poster: 'assets/poster-remlinger-aug.png' },
];

// Tiny logo lockup used in place of a text "tag" pill. Holographic laser sheen.
function GigTagLogo({ tag }) {
  const src = tag === 'trip' ? 'assets/logo-vibetrip-full.png' : 'assets/logo-vibemind-full.png';
  const label = tag === 'trip' ? 'Vibetrip' : 'Vibemind';
  const h = tag === 'trip' ? 44 : 36;
  return (
    <span title={label}
          style={{ display: 'inline-block', position: 'relative', height: h, lineHeight: 0 }}>
      <img src={src} alt={label}
           style={{ height: h, width: 'auto', objectFit: 'contain', display: 'block' }} />
      <span aria-hidden
            style={{
              position: 'absolute', inset: 0,
              WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`,
              WebkitMaskSize: 'contain', maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center', maskPosition: 'center',
              backgroundImage: 'linear-gradient(115deg, transparent 30%, rgba(230,59,149,0.9) 45%, rgba(245,185,33,1) 50%, rgba(54,178,73,0.9) 55%, rgba(45,111,224,0.9) 60%, rgba(122,58,184,0.9) 65%, transparent 75%)',
              backgroundSize: '300% 100%',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'screen',
              animation: 'vmLaserSweep 3.6s linear infinite',
              pointerEvents: 'none',
            }} />
    </span>
  );
}

function GigRow({ g }) {
  const hasPoster = !!g.poster;
  return (
    <article style={{
      display: 'grid',
      gridTemplateColumns: hasPoster ? '160px 110px 1fr auto' : '110px 1fr auto',
      gap: 24, alignItems: 'center',
      background: 'var(--paper-2)',
      border: '2px solid var(--ink)',
      padding: hasPoster ? '14px 22px 14px 14px' : '20px 22px',
      boxShadow: '6px 6px 0 0 var(--ink)',
      transition: 'transform .18s var(--ease-out), box-shadow .18s var(--ease-out)',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 0 var(--ink)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = '6px 6px 0 0 var(--ink)'; }}>
      {hasPoster && (
        <div style={{
          width: 160, height: 200, overflow: 'hidden',
          border: '2px solid var(--ink)',
          background: 'var(--paper)',
          boxShadow: '3px 3px 0 0 var(--ink)',
        }}>
          <img src={g.poster} alt={`${g.name} poster`}
               style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      )}
      <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', textAlign: 'center', lineHeight: 0.9 }}>
        <div style={{ fontSize: 16, letterSpacing: '0.1em', color: 'var(--brick)' }}>{g.mo}</div>
        <div style={{ fontSize: 56 }}>{g.day}</div>
      </div>
      <div>
        <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
          <GigTagLogo tag={g.tag} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 26, margin: '0 0 6px', lineHeight: 1.05, letterSpacing: '0.01em' }}>{g.name}</h3>
        <div style={{ fontSize: 14, color: 'var(--fg-on-paper-2)' }}>{g.meta}</div>
      </div>
      <button className="vm-btn vm-btn-primary" style={{ alignSelf: 'center' }}>Details</button>
    </article>
  );
}

function GigsSection() {
  return (
    <section style={{ background: 'var(--paper)', padding: '72px 32px', color: 'var(--ink)' }}>
      <div className="vm-eyebrow" style={{ color: 'var(--brick)' }}>The Gigs</div>
      <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 1, margin: '12px 0 8px', letterSpacing: '0.02em' }}>
        Calendar
      </h2>
      <p style={{ fontSize: 18, color: 'var(--fg-on-paper-2)', margin: '0 0 32px', maxWidth: 640 }}>
        Come on out. Bring a friend. Tip your bartender. Heather makes a fresh poster for most shows — click any gig for details.
      </p>
      <div style={{ display: 'grid', gap: 20, maxWidth: 920 }}>
        {GIGS.map((g, i) => <GigRow key={i} g={g} />)}
      </div>
    </section>
  );
}

// ---------- Tip Jar ----------
function TipJarSection() {
  return (
    <section style={{
      background: 'var(--marquee)', color: 'var(--ink)',
      padding: '72px 32px',
      backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(255,255,255,0.18) 0%, transparent 60%), linear-gradient(180deg, var(--marquee) 0%, var(--marquee-deep) 100%)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
        <div>
          <div className="vm-eyebrow" style={{ color: 'var(--brick-deep)' }}>Tip Jar</div>
          <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 1, margin: '12px 0 12px', letterSpacing: '0.02em', color: 'var(--brick)' }}>
            Toss us a few bucks
          </h2>
          <p style={{ fontSize: 18, maxWidth: 540, margin: 0 }}>
            Strings break. Drum heads need replacing. Gas isn't free. If we made you smile, the tip jar is open.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button className="vm-btn vm-btn-primary">Venmo</button>
          <button className="vm-btn vm-btn-primary">PayPal</button>
        </div>
      </div>
    </section>
  );
}

// ---------- Page registry ----------
window.VM = {
  Header, Footer, Hero, MusicSection, BandSection, GigsSection, TipJarSection,
  RainbowBar, VibeyMark, Wordmark,
};
