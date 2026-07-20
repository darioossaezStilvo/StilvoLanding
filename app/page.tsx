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
      await fetch("https://tally.so/r/RG6PN4", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
        mode: "no-cors",
      });
    } catch (_) {
      // no-cors no lanza error aunque falle, el email llega igual a Tally
    }

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

        /* ── Nav ── */
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

        /* ── Hero ── */
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

        /* ── Form ── */
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

        /* ── Counter ── */
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

        /* ── Benefits ── */
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

        /* ── How ── */
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

        /* ── Social proof ── */
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

        /* ── CTA final ── */
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

        /* ── Footer ── */
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

        /* ── Responsive ── */
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
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Próximamente · Únete a la lista de espera</div>
          <h1>
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
      </section>

      {/* Beneficios */}
      <section className="benefits">
        <p className="section-label">Por qué Stilvo</p>
        <h2 className="section-title">Todo lo que necesitas para<br />encontrar tu estilo</h2>
        <div className="benefits-grid">
          {[
            { icon: "👕", title: "Outfits de gente real", desc: "Sin influencers de millones de seguidores ni ropa de pasarela. Solo personas con tu mismo estilo de vida y presupuesto compartiendo sus looks del día a día." },
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