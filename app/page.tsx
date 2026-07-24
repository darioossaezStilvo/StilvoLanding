"use client";

import { useState } from "react";

export default function Home() {
  const [heroEmail, setHeroEmail] = useState("");
  const [bottomEmail, setBottomEmail] = useState("");
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [bottomSuccess, setBottomSuccess] = useState(false);
  const [count, setCount] = useState(340);

  async function handleSubmit(
    e: React.FormEvent,
    email: string,
    setSuccess: (v: boolean) => void,
    setEmail: (v: string) => void
  ) {
    e.preventDefault();

    try {
      await fetch("https://formspree.io/f/mbdnagdl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (_) {}

    setSuccess(true);
    setEmail("");
    setCount((c) => c + 1);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&family=Playfair+Display:wght@700;800&display=swap');

        :root {
          --dark:    #1C1008;
          --primary: #3B1F0A;
          --accent:  #C47B3A;
          --cream:   #FAF6F1;
          --latte:   #E8DDD0;
          --text:    #2A1505;
          --muted:   #7A6050;
          --radius:  12px;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--cream);
          color: var(--text);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(250,246,241,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 0.5px solid var(--latte);
        }
        .nav-logo {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--primary);
          text-decoration: none;
        }
        .nav-logo span { font-weight: 300; color: var(--accent); }
        .nav-cta {
          background: var(--primary);
          color: var(--cream);
          border: none;
          padding: 0.55rem 1.25rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
        }
        .nav-cta:hover { background: var(--accent); }

        .hero-split {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 45fr 55fr;
  align-items: center;
  gap: 2rem;
  padding: 8rem 5vw 5rem;
  max-width: 1200px;
  margin: 0 auto;
}
 
.hero-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
 
.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--primary);
  margin-bottom: 1.25rem;
}
.hero-title em { font-style: normal; color: var(--accent); }
 
.hero-left .hero-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(196,123,58,0.1);
  padding: 0.35rem 1rem;
  border-radius: 99px;
  margin-bottom: 1.75rem;
}
 
.hero-left .hero-sub {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: var(--muted);
  max-width: 440px;
  margin: 0 0 2rem;
  line-height: 1.7;
}
 
.hero-left .form-wrap {
  margin: 0 0 0.5rem;
  justify-content: flex-start;
}
 
.hero-left .form-note {
  text-align: left;
}
 
.hero-left .counter {
  margin-top: 2rem;
  justify-content: flex-start;
}
 
/* â”€â”€ App preview flotante â”€â”€ */
.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
 
.app-preview-wrapper {
  position: relative;
  width: 100%;
  max-width: 540px;
  animation: previewFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
}
 
@keyframes previewFadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
 
.app-preview-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    ellipse at 50% 60%,
    rgba(196, 123, 58, 0.12) 0%,
    transparent 70%
  );
  border-radius: 32px;
  pointer-events: none;
  z-index: 0;
}
 
.app-preview-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 24px;
  overflow: hidden;
  border: 0.5px solid rgba(196, 123, 58, 0.2);
  box-shadow:
    0 2px 4px rgba(59, 31, 10, 0.04),
    0 8px 24px rgba(59, 31, 10, 0.08),
    0 32px 64px rgba(59, 31, 10, 0.12);
}
 
/* â”€â”€ Responsive â”€â”€ */
@media (max-width: 900px) {
  .hero-split {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 7rem 1.5rem 4rem;
    gap: 3rem;
  }
  .hero-left {
    align-items: center;
  }
  .hero-left .hero-sub {
    margin: 0 auto 2rem;
  }
  .hero-left .form-wrap {
    justify-content: center;
  }
  .hero-left .form-note {
    text-align: center;
  }
  .hero-left .counter {
    justify-content: center;
  }
  .app-preview-wrapper {
    max-width: 320px;
  }
}
 
@media (max-width: 480px) {
  .app-preview-wrapper {
    max-width: 260px;
  }
}


        @media (max-width: 600px) {
          .nav { padding: 1rem 1.25rem; }
          .hero { padding: 7rem 1.25rem 4rem; }
          .form-wrap { flex-direction: column; align-items: stretch; }
          .form-input, .btn-primary { width: 100%; border-radius: var(--radius); }
          .benefits, .social-proof { padding: 4rem 1.25rem; }
          .how { padding: 4rem 1.25rem; }
          .cta-final { padding: 4rem 1.25rem; }
        }
          .hero-split .hero-eyebrow {
  margin-left: 0;
}
.hero-split h1 {
  text-align: left;
}
      `}</style>

      {/* Nav */}
      <nav className="nav">
        <a href="#" className="nav-logo">stil<span>vo</span></a>
        <a href="#waitlist" className="nav-cta">Unirse a la lista</a>
      </nav>

      {/* Hero */}
        <section className="hero-split">
        <div className="hero-left">
          <div className="hero-eyebrow">PrÃ³ximamente Â· Ãšnete a la lista de espera</div>
          <h1 className="hero-title">
            Tu estilo.<br />
            Gente <em>real.</em><br />
            Un solo lugar.
          </h1>
          <p className="hero-sub">
            Cansado de buscar inspiraciÃ³n entre anuncios e influencers inalcanzables.
            Stilvo es la red social donde personas reales comparten sus outfits
            y la IA te ayuda a encontrar las prendas exactas que ves.
          </p>
 
          <div id="waitlist">
            {!heroSuccess ? (
              <form
                className="form-wrap"
                onSubmit={(e) => handleSubmit(e, heroEmail, setHeroSuccess, setHeroEmail)}
              >
                <input
                  className="form-input"
                  type="email"
                  placeholder="tu@email.com"
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  required
                  aria-label="Tu correo electrÃ³nico"
                />
                <button type="submit" className="btn-primary">Quiero acceso â†’</button>
              </form>
            ) : (
              <div className="success-msg">
                Â¡Ya estÃ¡s dentro ðŸŽ‰ Te avisamos en cuanto abramos acceso.
              </div>
            )}
            <p className="form-note">Sin spam. Solo te avisamos cuando lancemos.</p>
          </div>
 
          <div className="counter">
            <div className="counter-avatars">
              <span style={{ background: "#8B6355" }}>A</span>
              <span style={{ background: "#5C7A6B" }}>M</span>
              <span style={{ background: "#7B6890" }}>L</span>
              <span style={{ background: "#A07040" }}>J</span>
            </div>
            <p className="counter-text">
              <strong>+{count} personas</strong> ya en lista de espera
            </p>
          </div>
        </div>
 
        <div className="hero-right">
          <div className="app-preview-wrapper">
            <div className="app-preview-glow" />
            <div className="app-preview-frame">
              <iframe
                src="/stilvo-demo/demo.html"
                title="Stilvo app preview"
                scrolling="no"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits">
        <p className="section-label">Por quÃ© Stilvo</p>
        <h2 className="section-title">Todo lo que necesitas para<br />encontrar tu estilo</h2>
        <div className="benefits-grid">
          {[
            { icon: "ðŸ‘•", title: "Outfits de gente como tu", desc: "Sin influencers de millones de seguidores ni ropa de pasarela. Solo personas con tu mismo estilo de vida y presupuesto compartiendo sus looks del dÃa a dÃa." },
            { icon: "ðŸ”", title: "Encuentra cualquier prenda al instante", desc: "Toca cualquier prenda en cualquier outfit y la IA te dice exactamente quÃ© es, dÃ³nde encontrarla y cuÃ¡nto cuesta. Con alternativas similares en distintos rangos de precio." },
            { icon: "âœ¨", title: "Descubre tu estilo propio", desc: "Cuanto mÃ¡s exploras, mÃ¡s aprende la IA sobre tus gustos. Tu feed se convierte en un espejo de tu identidad, no en una colecciÃ³n aleatoria de tendencias virales." },
          ].map((b) => (
            <div className="benefit-card" key={b.title}>
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CÃ³mo funciona */}
      <section className="how">
        <div className="how-inner">
          <p className="section-label">CÃ³mo funciona</p>
          <h2 className="section-title">Simple de usar,<br />potente por dentro</h2>
          <div className="steps">
            {[
              { num: "01", title: "Publica tu outfit", desc: "Sube una foto, la IA etiqueta las prendas automÃ¡ticamente. Elige tu estilo y comparte con la comunidad en menos de un minuto." },
              { num: "02", title: "Explora e inspÃrate", desc: "Filtra por estilo, prenda o tendencia. Descubre outfits de personas reales que se adaptan a tu gusto y presupuesto." },
              { num: "03", title: "Identifica cualquier prenda", desc: "Toca lo que te gusta. La IA lo encuentra, te dice dÃ³nde comprarlo y te sugiere alternativas mÃ¡s asequibles." },
            ].map((s) => (
              <div className="step" key={s.num}>
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prueba social */}
      <section className="social-proof">
        <div className="divider" />
        <p className="section-label" style={{ textAlign: "center" }}>Lo que dicen nuestros primeros testers</p>
        <h2 className="section-title">Ya estÃ¡n esperando el lanzamiento</h2>
        <div className="quotes-grid">
          {[
            { initials: "AL", color: "#8B6355", name: "Alba L.", location: "Madrid", text: "Por fin una app donde la inspiraciÃ³n viene de gente normal. En Instagram todo parece sacado de una revista de lujo, aquÃ es diferente." },
            { initials: "MR", color: "#5C7A6B", name: "Marc R.", location: "Barcelona", text: "Lo de tocar una prenda y encontrar dÃ³nde comprarla o algo similar mÃ¡s barato es exactamente lo que llevaba aÃ±os buscando." },
            { initials: "LG", color: "#7B6890", name: "Laura G.", location: "Valencia", text: "Me ayudÃ³ a darme cuenta de que mi estilo tiene nombre. Ahora tengo mi feed lleno de referencias reales de quiet luxury." },
          ].map((q) => (
            <div className="quote-card" key={q.name}>
              <div className="quote-stars">â˜…â˜…â˜…â˜…â˜…</div>
              <p className="quote-text">&ldquo;{q.text}&rdquo;</p>
              <div className="quote-author">
                <div className="quote-avatar" style={{ background: q.color }}>{q.initials}</div>
                <div>
                  <p className="quote-name">{q.name}</p>
                  <p className="quote-handle">Tester Â· {q.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-final">
        <h2>Â¿Listo para encontrar<br />tu estilo?</h2>
        <p>SÃ© de los primeros en acceder cuando lancemos. Lista de espera gratuita.</p>
        {!bottomSuccess ? (
          <form
            className="form-wrap"
            style={{ justifyContent: "center" }}
            onSubmit={(e) => handleSubmit(e, bottomEmail, setBottomSuccess, setBottomEmail)}
          >
            <input
              className="form-input"
              type="email"
              placeholder="tu@email.com"
              value={bottomEmail}
              onChange={(e) => setBottomEmail(e.target.value)}
              required
              aria-label="Tu correo electrÃ³nico"
            />
            <button type="submit" className="btn-primary">Unirme a la lista â†’</button>
          </form>
        ) : (
          <div className="success-msg" style={{ maxWidth: 480, margin: "0 auto" }}>
            Â¡Ya estÃ¡s dentro ðŸŽ‰ Te avisamos en cuanto abramos acceso.
          </div>
        )}
        <p className="form-note" style={{ marginTop: "0.75rem" }}>Sin spam. Solo te avisamos cuando lancemos.</p>
      </section>

      {/* Footer */}
      <footer>
        <span className="footer-logo">stil<span>vo</span></span>
        <p>Â© 2026 Stilvo. Todos los derechos reservados.</p>
        <p style={{ marginTop: "0.5rem" }}>Tu estilo. Gente real. Un solo lugar.</p>
      </footer>
    </>
  );
}