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

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 5rem;
          text-align: center;
        }
        .hero-inner { max-width: 760px; margin: 0 auto; }
        .hero-eyebrow {
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
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .hero h1 em { font-style: normal; color: var(--accent); }
        .hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: var(--muted);
          max-width: 520px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
        }

        .form-wrap {
          display: flex;
          gap: 0.6rem;
          max-width: 480px;
          margin: 0 auto 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .form-input {
          flex: 1;
          min-width: 220px;
          padding: 0.85rem 1.25rem;
          border: 1.5px solid var(--latte);
          border-radius: 99px;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          background: #fff;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: var(--accent); }
        .form-input::placeholder { color: #b0a090; }
        .btn-primary {
          padding: 0.85rem 1.75rem;
          background: var(--primary);
          color: var(--cream);
          border: none;
          border-radius: 99px;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .btn-primary:hover { background: var(--accent); transform: translateY(-1px); }
        .form-note { font-size: 0.78rem; color: var(--muted); margin-top: 0.5rem; }
        .success-msg {
          background: rgba(196,123,58,0.12);
          border: 1px solid var(--accent);
          color: var(--primary);
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius);
          font-size: 0.95rem;
          font-weight: 500;
          max-width: 480px;
          margin: 0 auto;
        }

        .counter {
          margin-top: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .counter-avatars { display: flex; }
        .counter-avatars span {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 2px solid var(--cream);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 600;
          color: #fff;
          margin-left: -8px;
        }
        .counter-avatars span:first-child { margin-left: 0; }
        .counter-text { font-size: 0.85rem; color: var(--muted); }
        .counter-text strong { color: var(--primary); font-weight: 600; }

        .benefits {
          padding: 6rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        .section-title {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4rem;
          line-height: 1.2;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .benefit-card {
          background: #fff;
          border: 0.5px solid var(--latte);
          border-radius: var(--radius);
          padding: 2rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(59,31,10,0.08);
        }
        .benefit-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(196,123,58,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          font-size: 1.4rem;
        }
        .benefit-card h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.6rem;
        }
        .benefit-card p { font-size: 0.92rem; color: var(--muted); line-height: 1.65; }

        .how {
          background: var(--primary);
          color: var(--cream);
          padding: 6rem 2rem;
        }
        .how-inner { max-width: 1100px; margin: 0 auto; }
        .how .section-label { color: var(--accent); }
        .how .section-title { color: var(--cream); margin-bottom: 3.5rem; }
        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .step { display: flex; flex-direction: column; gap: 1rem; }
        .step-num {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          opacity: 0.6;
        }
        .step h3 { font-size: 1.05rem; font-weight: 600; color: var(--cream); }
        .step p { font-size: 0.9rem; color: rgba(250,246,241,0.65); line-height: 1.65; }

        .social-proof {
          padding: 6rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .divider {
          width: 48px; height: 2px;
          background: var(--accent);
          margin: 0 auto 1.5rem;
          border-radius: 99px;
        }
        .quotes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3.5rem;
        }
        .quote-card {
          background: #fff;
          border: 0.5px solid var(--latte);
          border-radius: var(--radius);
          padding: 1.75rem;
        }
        .quote-stars { color: var(--accent); font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 1rem; }
        .quote-text { font-size: 0.95rem; color: var(--text); line-height: 1.7; margin-bottom: 1.25rem; font-style: italic; }
        .quote-author { display: flex; align-items: center; gap: 0.75rem; }
        .quote-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .quote-name { font-size: 0.85rem; font-weight: 600; color: var(--primary); }
        .quote-handle { font-size: 0.78rem; color: var(--muted); }

        .cta-final {
          background: var(--latte);
          padding: 6rem 2rem;
          text-align: center;
        }
        .cta-final h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .cta-final > p { font-size: 1rem; color: var(--muted); margin-bottom: 2.5rem; }

        footer {
          background: var(--dark);
          color: rgba(250,246,241,0.5);
          text-align: center;
          padding: 2rem;
          font-size: 0.8rem;
        }
        .footer-logo {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--cream);
          margin-bottom: 0.5rem;
          display: block;
        }
        .footer-logo span { font-weight: 300; color: var(--accent); }
        hero-split {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 45fr 55fr;
  align-items: center;
  gap: 3rem;
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
 
.hero-left .hero-eyebrow {
  margin-bottom: 1.5rem;
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
 
.hero-title em {
  font-style: normal;
  color: var(--accent);
}
 
.hero-left .hero-sub {
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: var(--muted);
  max-width: 440px;
  margin: 0 0 2rem;
  line-height: 1.7;
}
 
.hero-left .form-wrap {
  margin: 0 0 1rem;
  justify-content: flex-start;
}
 
.hero-left .counter {
  margin-top: 2rem;
  justify-content: flex-start;
}
 
/* ── iPhone wrapper ── */
.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
 
.iphone-wrapper {
  animation: iphoneFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
}
 
@keyframes iphoneFadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
 
.iphone-frame {
  position: relative;
  width: min(280px, 42vw);
  aspect-ratio: 9 / 19.5;
  background: linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%);
  border-radius: 52px;
  box-shadow:
    0 0 0 1.5px #3a3a3a,
    0 0 0 3px #1a1a1a,
    0 40px 80px rgba(0,0,0,0.45),
    0 20px 40px rgba(0,0,0,0.3),
    inset 0 1px 0 rgba(255,255,255,0.08);
  padding: 14px;
}
 
.iphone-island {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 28px;
  background: #000;
  border-radius: 20px;
  z-index: 10;
}
 
.iphone-screen {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  background: #000;
  position: relative;
}
 
/* Botones laterales derechos */
.iphone-btn-right {
  position: absolute;
  right: -3px;
  width: 3px;
  background: #2a2a2a;
  border-radius: 0 2px 2px 0;
}
.iphone-btn-right-1 {
  top: 28%;
  height: 14%;
}
.iphone-btn-right-2 {
  top: 46%;
  height: 20%;
}
 
/* Botones laterales izquierdos */
.iphone-btn-left {
  position: absolute;
  left: -3px;
  width: 3px;
  background: #2a2a2a;
  border-radius: 2px 0 0 2px;
}
.iphone-btn-left-1 {
  top: 20%;
  height: 6%;
}
.iphone-btn-left-2 {
  top: 30%;
  height: 10%;
}
.iphone-btn-left-3 {
  top: 44%;
  height: 10%;
}
 
/* Efecto cristal */
.iphone-glass {
  position: absolute;
  inset: 14px;
  border-radius: 40px;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.06) 0%,
    rgba(255,255,255,0.01) 40%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 20;
}
 
/* ── Responsive ── */
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
  .hero-left .counter {
    justify-content: center;
  }
  .iphone-frame {
    width: min(220px, 55vw);
  }
}
 
@media (max-width: 480px) {
  .iphone-frame {
    width: min(180px, 60vw);
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
      `}</style>

      {/* Nav */}
      <nav className="nav">
        <a href="#" className="nav-logo">stil<span>vo</span></a>
        <a href="#waitlist" className="nav-cta">Unirse a la lista</a>
      </nav>

      {/* Hero */}
       <section className="hero-split">
        <div className="hero-left">
          <div className="hero-eyebrow">Próximamente · Únete a la lista de espera</div>
          <h1 className="hero-title">
            Tu estilo.<br />
            Gente <em>real.</em><br />
            Un solo lugar.
          </h1>
          <p className="hero-sub">
            Cansado de buscar inspiración entre anuncios e influencers inalcanzables.
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
                  aria-label="Tu correo electrónico"
                />
                <button type="submit" className="btn-primary">Quiero acceso →</button>
              </form>
            ) : (
              <div className="success-msg">
                ¡Ya estás dentro 🎉 Te avisamos en cuanto abramos acceso.
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
 
        {/* iPhone */}
        <div className="hero-right">
          <div className="iphone-wrapper">
            <div className="iphone-frame">
              {/* Isla dinámica */}
              <div className="iphone-island" />
              {/* Pantalla con la animación */}
              <div className="iphone-screen">
                <iframe
                  src="/stilvo-demo/demo.html"
                  title="Stilvo app preview"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "38px",
                    display: "block",
                  }}
                />
              </div>
              {/* Botón lateral derecho */}
              <div className="iphone-btn-right iphone-btn-right-1" />
              <div className="iphone-btn-right iphone-btn-right-2" />
              {/* Botones izquierda */}
              <div className="iphone-btn-left iphone-btn-left-1" />
              <div className="iphone-btn-left iphone-btn-left-2" />
              <div className="iphone-btn-left iphone-btn-left-3" />
              {/* Reflejo de cristal */}
              <div className="iphone-glass" />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits">
        <p className="section-label">Por qué Stilvo</p>
        <h2 className="section-title">Todo lo que necesitas para<br />encontrar tu estilo</h2>
        <div className="benefits-grid">
          {[
            { icon: "👕", title: "Outfits de gente como tu", desc: "Sin influencers de millones de seguidores ni ropa de pasarela. Solo personas con tu mismo estilo de vida y presupuesto compartiendo sus looks del día a día." },
            { icon: "🔍", title: "Encuentra cualquier prenda al instante", desc: "Toca cualquier prenda en cualquier outfit y la IA te dice exactamente qué es, dónde encontrarla y cuánto cuesta. Con alternativas similares en distintos rangos de precio." },
            { icon: "✨", title: "Descubre tu estilo propio", desc: "Cuanto más exploras, más aprende la IA sobre tus gustos. Tu feed se convierte en un espejo de tu identidad, no en una colección aleatoria de tendencias virales." },
          ].map((b) => (
            <div className="benefit-card" key={b.title}>
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="how">
        <div className="how-inner">
          <p className="section-label">Cómo funciona</p>
          <h2 className="section-title">Simple de usar,<br />potente por dentro</h2>
          <div className="steps">
            {[
              { num: "01", title: "Publica tu outfit", desc: "Sube una foto, la IA etiqueta las prendas automáticamente. Elige tu estilo y comparte con la comunidad en menos de un minuto." },
              { num: "02", title: "Explora e inspírate", desc: "Filtra por estilo, prenda o tendencia. Descubre outfits de personas reales que se adaptan a tu gusto y presupuesto." },
              { num: "03", title: "Identifica cualquier prenda", desc: "Toca lo que te gusta. La IA lo encuentra, te dice dónde comprarlo y te sugiere alternativas más asequibles." },
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
        <h2 className="section-title">Ya están esperando el lanzamiento</h2>
        <div className="quotes-grid">
          {[
            { initials: "AL", color: "#8B6355", name: "Alba L.", location: "Madrid", text: "Por fin una app donde la inspiración viene de gente normal. En Instagram todo parece sacado de una revista de lujo, aquí es diferente." },
            { initials: "MR", color: "#5C7A6B", name: "Marc R.", location: "Barcelona", text: "Lo de tocar una prenda y encontrar dónde comprarla o algo similar más barato es exactamente lo que llevaba años buscando." },
            { initials: "LG", color: "#7B6890", name: "Laura G.", location: "Valencia", text: "Me ayudó a darme cuenta de que mi estilo tiene nombre. Ahora tengo mi feed lleno de referencias reales de quiet luxury." },
          ].map((q) => (
            <div className="quote-card" key={q.name}>
              <div className="quote-stars">★★★★★</div>
              <p className="quote-text">&ldquo;{q.text}&rdquo;</p>
              <div className="quote-author">
                <div className="quote-avatar" style={{ background: q.color }}>{q.initials}</div>
                <div>
                  <p className="quote-name">{q.name}</p>
                  <p className="quote-handle">Tester · {q.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-final">
        <h2>¿Listo para encontrar<br />tu estilo?</h2>
        <p>Sé de los primeros en acceder cuando lancemos. Lista de espera gratuita.</p>
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
              aria-label="Tu correo electrónico"
            />
            <button type="submit" className="btn-primary">Unirme a la lista →</button>
          </form>
        ) : (
          <div className="success-msg" style={{ maxWidth: 480, margin: "0 auto" }}>
            ¡Ya estás dentro 🎉 Te avisamos en cuanto abramos acceso.
          </div>
        )}
        <p className="form-note" style={{ marginTop: "0.75rem" }}>Sin spam. Solo te avisamos cuando lancemos.</p>
      </section>

      {/* Footer */}
      <footer>
        <span className="footer-logo">stil<span>vo</span></span>
        <p>© 2026 Stilvo. Todos los derechos reservados.</p>
        <p style={{ marginTop: "0.5rem" }}>Tu estilo. Gente real. Un solo lugar.</p>
      </footer>
    </>
  );
}