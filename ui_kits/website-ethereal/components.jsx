/* eslint-disable */
/* Vibemind Ethereal — psychedelic / funk / blues / soul direction */

const { useState, useEffect, useRef } = React;

// ---------- Brand marks ----------
function VibeyMark({ size = 36, glow = false }) {
  return (
    <img src="../../assets/alien-bud.jpg" alt="Vibey"
         style={{ width: size, height: size, objectFit: 'contain', borderRadius: 8,
                  filter: glow ? 'drop-shadow(0 0 18px rgba(230,59,149,0.6))' : 'none' }} />
  );
}
function Wordmark({ height = 44, variant = 'mind', invert = true }) {
  const src = variant === 'trip'
    ? '../../assets/logo-vibetrip-full.png'
    : '../../assets/logo-vibemind-full.png';
  return (
    <img src={src} alt={variant === 'trip' ? 'Vibetrip' : 'Vibemind'}
         style={{ height, width: 'auto', objectFit: 'contain', filter: invert ? 'invert(1)' : 'none' }} />
  );
}
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
      background: 'rgba(7,6,12,0.55)',
      backdropFilter: 'blur(18px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
      borderBottom: '1px solid rgba(250,246,238,0.08)',
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
               cursor: 'pointer', fontSize: 12, letterSpacing: '0.22em', fontWeight: 700,
               textTransform: 'uppercase',
               color: active === it.id ? 'var(--marquee)' : 'rgba(250,246,238,0.78)',
               transition: 'color .2s, text-shadow .2s',
               textShadow: active === it.id ? '0 0 14px rgba(245,185,33,0.6)' : 'none',
             }}
             onMouseEnter={e => { e.currentTarget.style.color = 'var(--marquee)'; e.currentTarget.style.textShadow = '0 0 14px rgba(245,185,33,0.5)'; }}
             onMouseLeave={e => { if (active !== it.id) { e.currentTarget.style.color = 'rgba(250,246,238,0.78)'; e.currentTarget.style.textShadow = 'none'; } }}>
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
    <footer style={{ padding: '60px 32px 30px', borderTop: '1px solid rgba(250,246,238,0.08)', position: 'relative' }}>
      <RainbowBar height={3} style={{ marginBottom: 28, opacity: 0.85, filter: 'blur(0.4px)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Wordmark height={44} />
          <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55, paddingLeft: 14, borderLeft: '1px solid rgba(250,246,238,0.15)' }}>
            Snoqualmie Valley · Tuned&nbsp;In
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <SocialDot color="#1877F2" letter="f" />
          <SocialDot color="#E4405F" letter="◉" />
        </div>
        <div style={{ fontSize: 11, opacity: 0.55, letterSpacing: '0.06em' }}>© 2021 by Vibemind · Tip your bartender</div>
      </div>
    </footer>
  );
}
function SocialDot({ color, letter }) {
  return (
    <a style={{
      width: 36, height: 36, borderRadius: 999, background: color, color: 'white',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 800, fontSize: 16, cursor: 'pointer',
      boxShadow: `0 0 20px ${color}55`,
    }}>{letter}</a>
  );
}

// ---------- Hero — full ethereal blowout ----------
function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '88vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '80px 32px 100px', color: 'var(--paper)', overflow: 'hidden',
    }}>
      {/* Heather pointing — B&W background, full bleed */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(../../assets/band3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        filter: 'grayscale(1) contrast(1.15) brightness(0.55)',
        mixBlendMode: 'luminosity',
        opacity: 0.85,
      }} />
      {/* Vignette + readable scrim */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(7,6,12,0.55) 0%, rgba(7,6,12,0.25) 35%, rgba(7,6,12,0.85) 100%), radial-gradient(ellipse at 70% 50%, transparent 0%, rgba(7,6,12,0.55) 70%)',
      }} />
      {/* Concentric kaleidoscope ring — slimmer, layered over the photo */}
      <div aria-hidden style={{
        position: 'absolute', right: '-8%', top: '50%', transform: 'translateY(-50%)',
        width: 560, height: 560, borderRadius: '50%',
        background: 'conic-gradient(from 0deg, #E63B95, #F2811D, #F5C518, #36B249, #1AB6CF, #2D6FE0, #7A3AB8, #E63B95)',
        filter: 'blur(50px) saturate(1.4)',
        opacity: 0.5,
        animation: 'spin 60s linear infinite',
        mixBlendMode: 'screen',
      }} />
      <style>{`@keyframes spin { to { transform: translateY(-50%) rotate(360deg); } }`}</style>

      <div style={{ position: 'relative', maxWidth: 940 }}>
        <div className="vm-eyebrow" style={{
          color: 'var(--marquee)', marginBottom: 22,
          textShadow: '0 0 18px rgba(245,185,33,0.5)',
        }}>
          ✺ &nbsp; A Snoqualmie Valley Sound Trip &nbsp; ✺
        </div>
        <h1 className="vm-display" style={{ fontSize: 'clamp(64px, 9vw, 138px)', margin: 0 }}>
          <span style={{
            backgroundImage: 'linear-gradient(120deg, #ffd9a8 0%, #E63B95 35%, #7A3AB8 70%, #2D6FE0 100%)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Music as</span><br />
          a place you<br />
          <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif', textTransform: 'none', letterSpacing: '-0.02em' }}>go</span>.
        </h1>
        <p style={{
          fontSize: 22, lineHeight: 1.5, color: 'rgba(250,246,238,0.85)',
          maxWidth: 580, margin: '32px 0 12px', fontWeight: 300,
        }}>
          Six locals who play <em>Hendrix</em> like a prayer, <em>Stevie Wonder</em> like a
          birthday, and <em>Mazzy Star</em> like the last slow dance at closing time.
        </p>
        <p style={{ fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--marquee)', opacity: 0.9 }}>
          Rock · Funk · Blues · Soul · Pop · 1965 → Now
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <button className="vm-btn vm-btn-marquee">See the Gigs</button>
          <button className="vm-btn vm-btn-ghost-light">Join the List</button>
        </div>
      </div>
    </section>
  );
}

// ---------- Music page — vinyl-side setlist ----------
const VIBE_TAGS = {
  psych: ['Pink Floyd','The Doors','Jimi Hendrix','Cream','Mazzy Star','Santana','David Bowie','Janis Joplin','The Youngbloods','Talking Heads','Peter Gabriel','Daft Punk','Foo Fighters','Soundgarden','Audioslave','Blind Melon','Lenny Kravitz','Larkin Poe'],
  funk:  ['Stevie Wonder','Bill Withers','Lauryn Hill','Prince','Hall & Oates','Tina Turner','George Michael','Daft Punk','Lenny Kravitz','Grace Potter','Ella Fitzgerald'],
  blues: ['Eric Clapton','Janis Joplin','Cream','ZZ Top','Bad Company','Tom Petty','Van Morrison','Neil Young','Steve Miller Band','Stealers Wheel','Dire Straits'],
};
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
  const [filter, setFilter] = useState('all');
  const inFilter = (b) => filter === 'all' || (VIBE_TAGS[filter] && VIBE_TAGS[filter].includes(b));

  return (
    <section style={{ padding: '90px 32px', position: 'relative' }}>
      <div className="vm-eyebrow" style={{ color: 'var(--marquee)' }}>Side A · Side B · Side C…</div>
      <h2 className="vm-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: '12px 0 8px' }}>
        Our favorite<br />
        <span style={{
          backgroundImage: 'linear-gradient(90deg, #E63B95, #F5C518, #36B249, #2D6FE0, #7A3AB8)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>spirits to channel</span>…
      </h2>

      {/* vinyl filter */}
      <div style={{ display: 'flex', gap: 8, marginTop: 24, marginBottom: 36, flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: 'Everything', c: 'var(--paper)' },
          { id: 'psych', label: 'Psychedelic', c: '#7A3AB8' },
          { id: 'funk',  label: 'Funk & Soul', c: '#F2811D' },
          { id: 'blues', label: 'Blues',       c: '#2D6FE0' },
        ].map(t => (
          <button key={t.id} onClick={() => setFilter(t.id)}
            style={{
              padding: '10px 18px', borderRadius: 999, cursor: 'pointer',
              fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
              border: `1px solid ${filter === t.id ? t.c : 'rgba(250,246,238,0.2)'}`,
              background: filter === t.id ? t.c : 'transparent',
              color: filter === t.id ? '#0E0E12' : 'rgba(250,246,238,0.85)',
              boxShadow: filter === t.id ? `0 0 22px ${t.c}88` : 'none',
              transition: 'all .25s',
            }}>{t.label}</button>
        ))}
      </div>

      <div style={{ columnCount: 4, columnGap: 36, fontSize: 17, lineHeight: 2.2 }}>
        {COVER_BANDS.map(b => (
          <div key={b} style={{
            breakInside: 'avoid',
            color: inFilter(b) ? 'var(--paper)' : 'rgba(250,246,238,0.18)',
            fontWeight: inFilter(b) ? 500 : 300,
            transition: 'color .35s',
          }}>{b}</div>
        ))}
      </div>
    </section>
  );
}

// ---------- Band — orbiting glass cards ----------
const MEMBERS = [
  { id: 'heather', name: 'Heather Morris', nick: 'Heathercita', role: 'Lead vocals · acoustic guitar', color: '#E63B95', img: '../../assets/heather.jpg', spirit: 'Janis · Mazzy · Lauryn' },
  { id: 'nic', name: 'Nic Fillingham', nick: 'Nic-o-time', role: 'Bass · vocals', color: '#F2811D', img: '../../assets/nic.jpg', spirit: 'Bootsy · Flea · Pino' },
  { id: 'jim', name: 'Jim Martin', nick: 'Rigs', role: 'Guitar', color: '#F5C518', img: '../../assets/jim.jpg', spirit: 'Knopfler · Petty · Hendrix' },
  { id: 'boomer', name: 'Boomer Hess', nick: 'Boomer', role: 'Guitar · harmonica · vocals', color: '#36B249', img: '../../assets/boomer.jpg', spirit: 'Clapton · Dylan · Tom Petty' },
  { id: 'dane', name: 'Dane Estepa', nick: 'Ese', role: 'Drums', color: '#2D6FE0', img: '../../assets/dane.jpg', spirit: 'Bonham · Questlove · Carter' },
  { id: 'sally', name: 'Sally Mitchell', nick: 'Sally', role: 'Keys · percussion · vocals', color: '#7A3AB8', img: '../../assets/sally.jpg', spirit: 'Stevie · Aretha · Carole' },
];

function MemberCard({ m }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', borderRadius: 22, overflow: 'hidden',
        background: 'rgba(20,16,30,0.55)',
        backdropFilter: 'blur(18px) saturate(1.2)', WebkitBackdropFilter: 'blur(18px) saturate(1.2)',
        border: `1px solid ${hover ? m.color : 'rgba(250,246,238,0.08)'}`,
        boxShadow: hover ? `0 30px 60px -20px rgba(0,0,0,0.6), 0 0 60px -10px ${m.color}70` : '0 12px 30px -12px rgba(0,0,0,0.4)',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all .35s var(--ease-out)',
      }}>
      <div aria-hidden style={{
        position: 'absolute', inset: -2, borderRadius: 22,
        background: `radial-gradient(circle at 50% 0%, ${m.color}40, transparent 60%)`,
        opacity: hover ? 1 : 0.5, transition: 'opacity .35s',
        pointerEvents: 'none',
      }} />
      <div style={{
        aspectRatio: '4/5',
        backgroundImage: `url(${m.img})`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
        filter: hover ? 'grayscale(0%) saturate(1.1) contrast(1.05)' : 'grayscale(100%) contrast(1.05)',
        transition: 'filter .5s ease',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, transparent 50%, ${m.color}25 100%)`,
          mixBlendMode: 'screen',
        }} />
      </div>
      <div style={{ padding: 20, position: 'relative' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: m.color, marginBottom: 6, fontWeight: 700 }}>{m.role}</div>
        <h3 className="vm-display" style={{ fontSize: 26, color: 'var(--paper)', margin: '0 0 6px' }}>{m.name}</h3>
        <div style={{ fontSize: 13, color: 'rgba(250,246,238,0.65)', fontStyle: 'italic', marginBottom: 12 }}>"{m.nick}"</div>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(250,246,238,0.5)', borderTop: '1px solid rgba(250,246,238,0.1)', paddingTop: 10 }}>
          Channels: <span style={{ color: 'rgba(250,246,238,0.85)' }}>{m.spirit}</span>
        </div>
      </div>
    </article>
  );
}

function BandSection() {
  return (
    <section style={{ padding: '90px 32px', position: 'relative' }}>
      <div className="vm-eyebrow" style={{ color: '#E63B95' }}>The Band</div>
      <h2 className="vm-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: '12px 0 8px' }}>
        Six channels.<br />
        <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif', textTransform: 'none', letterSpacing: '-0.02em', opacity: 0.85 }}>One signal.</span>
      </h2>
      <p style={{ fontSize: 18, color: 'rgba(250,246,238,0.7)', maxWidth: 540, marginBottom: 40 }}>
        Everyone's a local. Everyone's got a nickname. Everyone leaves it on the floor.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {MEMBERS.map(m => <MemberCard key={m.id} m={m} />)}
      </div>
    </section>
  );
}

// ---------- Gigs ----------
// Real Heather-made posters live in /assets. Posterless rows still get the date block.
const GIGS = [
  { mo: 'Apr', day: '22', name: 'Earth Day Vibetrip', meta: '2:00 PM · Oxbow Farm & Conservation Center, Carnation · Free · All ages', tag: 'trip', poster: '../../assets/poster-earthday-vibetrip.png' },
  { mo: 'May', day: '03', name: 'Spring Festival', meta: '2:00 PM · Stillwater Lavender Farm', tag: 'trip' },
  { mo: 'May', day: '30', name: 'Sip, Rock, Roll. — Prohibition Cellars', meta: '7–9 PM · 19501 144th Ave NE, Woodinville', tag: 'mind', poster: '../../assets/poster-prohibition.png' },
  { mo: 'Jun', day: '05', name: 'Duvall Days REF Run', meta: '6:00 PM · McCormick Park · Free', tag: 'mind' },
  { mo: 'Jun', day: '06', name: 'Duvall Days', meta: '12:30 PM · Main St & Stella', tag: 'mind' },
  { mo: 'Jul', day: '19', name: 'Sandblast Festival', meta: '5:00 PM · McCormick Park, Duvall', tag: 'mind' },
  { mo: 'Aug', day: '01', name: 'Live Music at Remlinger Brewing', meta: '6–8 PM · 32610 NE 32nd St, Carnation · Free · All ages', tag: 'mind', poster: '../../assets/poster-remlinger-aug.png' },
  { mo: 'Aug', day: '15', name: 'Carnation Music Crawl', meta: '1:15 PM · Tolt Commons · Free', tag: 'mind' },
  { mo: 'Sep', day: '05', name: 'Summit West', meta: '3:30 PM · Snoqualmie Pass', tag: 'mind' },
];

// Logo lockup replaces the text pill — Vibetrip = 3 alien heads, Vibemind = 6 alien heads.
// Holographic laser sheen: a sweeping rainbow gradient masked to the logo's silhouette.
function GigTagLogo({ tag }) {
  const src = tag === 'trip' ? '../../assets/logo-vibetrip-full.png' : '../../assets/logo-vibemind-full.png';
  const label = tag === 'trip' ? 'Vibetrip' : 'Vibemind';
  const h = tag === 'trip' ? 48 : 38;
  return (
    <span className={`vm-laser-logo vm-laser-${tag}`} title={label}
          style={{ display: 'inline-block', position: 'relative', height: h, lineHeight: 0 }}>
      {/* Base: white silhouette of the logo */}
      <img src={src} alt={label}
           style={{ height: h, width: 'auto', objectFit: 'contain',
                    filter: 'invert(1) drop-shadow(0 0 10px rgba(245,185,33,0.25))', display: 'block' }} />
      {/* Holographic sheen — mask the rainbow to the logo silhouette */}
      <span aria-hidden className="vm-laser-sheen"
            style={{
              position: 'absolute', inset: 0,
              WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`,
              WebkitMaskSize: 'contain', maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center', maskPosition: 'center',
              backgroundImage: 'linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.0) 35%, rgba(230,59,149,0.85) 45%, rgba(245,185,33,0.95) 50%, rgba(54,178,73,0.85) 55%, rgba(45,111,224,0.85) 60%, rgba(122,58,184,0.85) 65%, transparent 75%)',
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
  const [hover, setHover] = useState(false);
  const accent = g.tag === 'trip' ? '#E63B95' : 'var(--marquee)';
  const hasPoster = !!g.poster;
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="vm-glass"
      style={{
        display: 'grid',
        gridTemplateColumns: hasPoster ? '160px 110px 1fr auto' : '110px 1fr auto',
        gap: 24, alignItems: 'center', padding: hasPoster ? '14px 26px 14px 14px' : '20px 26px',
        borderColor: hover ? accent : 'rgba(250,246,238,0.1)',
        boxShadow: hover ? `0 20px 40px -16px ${accent}70, 0 0 30px -10px ${accent}40` : 'none',
        transform: hover ? 'translateX(4px)' : 'translateX(0)',
        transition: 'all .25s var(--ease-out)',
      }}>
      {hasPoster && (
        <div style={{
          width: 160, height: 200, overflow: 'hidden', borderRadius: 4,
          border: `1px solid ${hover ? accent : 'rgba(250,246,238,0.18)'}`,
          boxShadow: hover ? `0 0 24px -6px ${accent}80` : '0 8px 24px -10px rgba(0,0,0,0.6)',
          transition: 'all .25s var(--ease-out)',
        }}>
          <img src={g.poster} alt={`${g.name} poster`}
               style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      )}
      <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', textAlign: 'center', lineHeight: 0.9 }}>
        <div style={{ fontSize: 14, letterSpacing: '0.16em', color: accent, marginBottom: 4 }}>{g.mo}</div>
        <div style={{ fontSize: 56, color: 'var(--paper)' }}>{g.day}</div>
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>
          <GigTagLogo tag={g.tag} />
        </div>
        <h3 className="vm-display" style={{ fontSize: 24, margin: '0 0 6px', color: 'var(--paper)', lineHeight: 1.05 }}>{g.name}</h3>
        <div style={{ fontSize: 14, color: 'rgba(250,246,238,0.7)' }}>{g.meta}</div>
      </div>
      <button className="vm-btn vm-btn-glow">Details</button>
    </article>
  );
}

function GigsSection() {
  return (
    <section style={{ padding: '90px 32px', position: 'relative' }}>
      <div className="vm-eyebrow" style={{ color: 'var(--marquee)' }}>The Gigs</div>
      <h2 className="vm-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: '12px 0 8px' }}>
        Catch us<br />
        <span style={{
          backgroundImage: 'linear-gradient(90deg, #F2811D, #E63B95, #7A3AB8)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>in the wild</span>.
      </h2>
      <p style={{ fontSize: 18, color: 'rgba(250,246,238,0.7)', margin: '0 0 40px', maxWidth: 640 }}>
        Come on out. Bring a friend. Tip your bartender. Heather paints a fresh poster for most shows.
      </p>
      <div style={{ display: 'grid', gap: 16, maxWidth: 920 }}>
        {GIGS.map((g, i) => <GigRow key={i} g={g} />)}
      </div>
    </section>
  );
}

// ---------- Tip Jar ----------
function TipJarSection() {
  return (
    <section style={{ padding: '100px 32px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', left: '50%', top: '50%', width: 800, height: 800,
        transform: 'translate(-50%,-50%)', borderRadius: '50%',
        background: 'conic-gradient(from 90deg, #F5B921, #F2811D, #E2382E, #E63B95, #7A3AB8, #F5B921)',
        filter: 'blur(80px)', opacity: 0.35, animation: 'spin 80s linear infinite',
      }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <div>
          <div className="vm-eyebrow" style={{ color: 'var(--marquee)' }}>Tip Jar</div>
          <h2 className="vm-display" style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: '12px 0 14px' }}>
            <span style={{
              backgroundImage: 'linear-gradient(120deg, #F5C518 0%, #F2811D 50%, #E2382E 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Toss us<br />a few bucks</span>
          </h2>
          <p style={{ fontSize: 18, maxWidth: 520, color: 'rgba(250,246,238,0.8)', margin: 0 }}>
            Strings break. Drum heads need replacing. Gas isn't free. If we made you smile, the jar is open.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button className="vm-btn vm-btn-marquee">Venmo</button>
          <button className="vm-btn vm-btn-glow">PayPal</button>
        </div>
      </div>
    </section>
  );
}

window.VM = {
  Header, Footer, Hero, MusicSection, BandSection, GigsSection, TipJarSection,
  RainbowBar, VibeyMark, Wordmark,
};
