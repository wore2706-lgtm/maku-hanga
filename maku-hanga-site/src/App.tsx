import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="grain relative overflow-x-hidden">
      {/* ============ NAV ============ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-maku-cream/80 backdrop-blur-lg border-b border-maku-orange/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Maku Hanga" className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform duration-300" />
            <span className="font-display font-bold text-lg tracking-tight text-maku-charcoal">maku hanga</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#agentur" className="hover:text-maku-orange transition-colors">Agentur</a>
            <a href="#wohnen" className="hover:text-maku-orange transition-colors">Wohnen</a>
            <a href="#projekte" className="hover:text-maku-orange transition-colors">Projekte</a>
            <a href="#kontakt" className="px-5 py-2.5 bg-maku-charcoal text-white rounded-full hover:bg-maku-orange transition-all duration-300 hover:scale-105">Kontakt</a>
          </div>
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu')
              menu?.classList.toggle('hidden')
            }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden px-6 pb-4 space-y-3">
          <a href="#agentur" className="block text-sm font-medium hover:text-maku-orange">Agentur</a>
          <a href="#wohnen" className="block text-sm font-medium hover:text-maku-orange">Wohnen</a>
          <a href="#projekte" className="block text-sm font-medium hover:text-maku-orange">Projekte</a>
          <a href="#kontakt" className="block text-sm font-medium text-maku-orange">Kontakt →</a>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
        {/* Background: scattered geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-maku-orange/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-maku-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-maku-orange rounded-full animate-pulse-slow" />
          <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-maku-gold rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-maku-ember rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
          {/* Diagonal decorative line */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="70%" y1="0" x2="30%" y2="100%" stroke="#d28b2f" strokeWidth="0.5" opacity="0.1" />
            <line x1="80%" y1="0" x2="40%" y2="100%" stroke="#d28b2f" strokeWidth="0.3" opacity="0.07" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="relative z-10">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-1.5 bg-maku-orange/10 text-maku-orange text-sm font-semibold rounded-full mb-6 tracking-wide">
                🔥 Let's do it!
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight animate-slide-up-delay opacity-0">
              Wir machen
              <br />
              <span className="text-maku-orange brush-underline">das Unmögliche</span>
              <br />
              möglich.
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-maku-warm/70 max-w-lg leading-relaxed animate-slide-up-delay-2 opacity-0">
              Promotion · Recruiting · Sponsoring · KI-Content
              <br />
              <span className="font-handwritten text-2xl text-maku-orange">— und Studentenwohnungen in Klagenfurt.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-slide-up-delay-2 opacity-0">
              <a href="#kontakt" className="group px-8 py-4 bg-maku-charcoal text-white rounded-full text-sm font-semibold hover:bg-maku-orange transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-maku-orange/20">
                Projekt besprechen
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#agentur" className="px-8 py-4 border-2 border-maku-charcoal/15 rounded-full text-sm font-semibold hover:border-maku-orange hover:text-maku-orange transition-all duration-300">
                Was wir tun
              </a>
            </div>
          </div>

          {/* Right: Logo composition */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 -m-8 animate-spin-slow">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path id="textPath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
                  </defs>
                  <text className="fill-maku-orange/20 text-[10px] font-display uppercase tracking-[0.3em]">
                    <textPath href="#textPath">
                      maku hanga · wir schaffen es · let's do it · promotion · recruiting · sponsoring · 
                    </textPath>
                  </text>
                </svg>
              </div>
              <img
                src="/logo.png"
                alt="Maku Hanga — Let's do it!"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-2xl shadow-maku-orange/20 hover:shadow-maku-orange/40 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
          <span className="text-xs text-maku-warm/40 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-maku-orange to-transparent" />
        </div>
      </section>

      {/* ============ INFINITE MARQUEE ============ */}
      <div className="py-6 bg-maku-charcoal overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-white/60 text-sm font-display tracking-widest uppercase px-4">
              <span>Promotion</span>
              <span className="text-maku-orange">✦</span>
              <span>Recruiting</span>
              <span className="text-maku-orange">✦</span>
              <span>Sponsoring</span>
              <span className="text-maku-orange">✦</span>
              <span>KI-Content</span>
              <span className="text-maku-orange">✦</span>
              <span>Studentenwohnungen</span>
              <span className="text-maku-orange">✦</span>
              <span>Kärnten</span>
              <span className="text-maku-orange">✦</span>
              <span>Klagenfurt</span>
              <span className="text-maku-orange">✦</span>
              <span>Let's do it</span>
              <span className="text-maku-orange">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ AGENTUR ============ */}
      <section id="agentur" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal">
            <span className="text-maku-orange font-handwritten text-2xl">Was wir tun</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 leading-tight">
              Ihre Agentur für
              <br />
              <span className="text-maku-orange">alles außer gewöhnlich.</span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📣',
                title: 'Promotion',
                desc: 'Kampagnen, die auffallen — nicht untergehen. Kreatives Marketing, das Ihre Marke in den Köpfen verankert.',
                accent: 'group-hover:bg-maku-orange',
              },
              {
                icon: '🎯',
                title: 'Recruiting',
                desc: 'Die richtigen Menschen finden. Zielgerichtet, persönlich, ohne Bewerbungs-Massenware.',
                accent: 'group-hover:bg-maku-gold',
              },
              {
                icon: '🤝',
                title: 'Sponsoring',
                desc: 'Strategische Partnerschaften aufbauen, die beiden Seiten Mehrwert bringen — nicht nur Logos.',
                accent: 'group-hover:bg-maku-ember',
              },
              {
                icon: '🤖',
                title: 'KI-Content',
                desc: 'Professionelle Videos, Texte und visuelle Inhalte — mit KI-Unterstützung für maximale Effizienz.',
                accent: 'group-hover:bg-maku-charcoal',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="reveal group relative p-8 rounded-2xl border border-maku-charcoal/5 bg-white hover:bg-maku-charcoal hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-maku-orange/10 ${service.accent} flex items-center justify-center text-2xl mb-6 transition-colors duration-500`}>
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-90">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ÜBER UNS — Diagonal break ============ */}
      <section className="diagonal-top bg-maku-charcoal text-white py-32 lg:py-40 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-maku-orange font-handwritten text-2xl">Über uns</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 leading-tight">
              Maku Hanga heißt
              <br />
              <span className="font-handwritten text-maku-gold text-5xl sm:text-6xl">"Wir schaffen es!"</span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              Aus der Maori-Sprache. Weil wir daran glauben, dass jedes Projekt, 
              jede Idee und jedes Ziel erreichbar ist — wenn man den Mut hat, anzufangen.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Wir sind eine Agentur aus Kärnten, die zwei Dinge besonders gut kann: 
              Unternehmen sichtbar machen — und Studierenden ein Zuhause geben. 
              Klingt ungewöhnlich? Ist es auch. Genau das macht uns aus.
            </p>
          </div>
          <div className="reveal flex flex-col gap-6">
            {[
              { number: '10+', label: 'Jahre Erfahrung', sublabel: 'in Business & Consulting' },
              { number: '16+', label: 'Studentenzimmer', sublabel: 'in Klagenfurt' },
              { number: '∞', label: 'Ideen pro Minute', sublabel: '(mindestens gefühlt)' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6 p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <span className="font-display text-4xl font-bold text-maku-orange min-w-[80px]">{stat.number}</span>
                <div>
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-sm text-white/40">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FLATS / WOHNEN ============ */}
      <section id="wohnen" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-maku-sand/50 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="reveal lg:max-w-2xl">
            <span className="text-maku-orange font-handwritten text-2xl">Wohnen in Klagenfurt</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 leading-tight">
              Skandinavischer Stil.
              <br />
              <span className="text-maku-orange">Kärntner Gemütlichkeit.</span>
            </h2>
            <p className="mt-6 text-maku-warm/60 text-lg leading-relaxed">
              Stilvolle WG-Zimmer für Studierende — hell, modern, all-inclusive. 
              Vom Rothauer Hochhaus mit Blick auf die Karawanken bis zu 
              gemütlichen Wohnungen in Uninähe.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: '🏠',
                title: 'All-Inclusive Warmmiete',
                desc: 'Strom, Heizung, Wasser, Müll — alles drin. Keine versteckten Nebenkosten. Du zahlst einen Preis, fertig.',
              },
              {
                emoji: '🛋️',
                title: 'Voll möbliert',
                desc: 'Einziehen und wohlfühlen. Skandi-Stil Möblierung mit allem, was du brauchst — vom Bett bis zum Geschirrspüler.',
              },
              {
                emoji: '📍',
                title: 'Beste Lage',
                desc: 'Innenstadt, Uninähe, entlang des Lendkanals. Mit dem Rad oder den Öffis schnell überall. Alles fußläufig.',
              },
              {
                emoji: '🔑',
                title: 'Flexible Mietdauer',
                desc: 'Kein starres Studienjahr. Individuelle Vertragslaufzeiten, die zu deinem Leben passen.',
              },
              {
                emoji: '🏔️',
                title: 'Karawanken-Blick',
                desc: 'Südostbalkon im Rothauer Hochhaus. Dreifachverglasung = ruhig trotz Stadt. Energetisch saniert.',
              },
              {
                emoji: '👥',
                title: 'Wachsende Community',
                desc: '16+ Zimmer und es werden mehr. Für Studierende, Schüler, FH — alle, die ein Zuhause suchen.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="reveal p-6 rounded-2xl bg-white border border-maku-orange/5 hover:border-maku-orange/20 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-3xl">{feature.emoji}</span>
                <h3 className="font-display text-lg font-bold mt-4 mb-2">{feature.title}</h3>
                <p className="text-sm text-maku-warm/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 reveal text-center">
            <a
              href="https://flats.maku-hanga.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-maku-orange text-white rounded-full font-semibold hover:bg-maku-ember transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-maku-orange/30"
            >
              🏠 Zimmer ansehen auf flats.maku-hanga.com
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============ PROJEKTE / SHOWCASE ============ */}
      <section id="projekte" className="py-24 lg:py-32 bg-maku-charcoal text-white diagonal-top">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-3xl mx-auto">
            <span className="text-maku-orange font-handwritten text-2xl">Showcase</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2">
              Was wir gerade bauen.
            </h2>
            <p className="mt-4 text-white/50">Unsere Projekte sind Experimente — öffentlich, transparent, ohne Schönfärberei.</p>
          </div>

          <div className="mt-16 reveal">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-maku-orange/20 via-maku-gold/10 to-transparent border border-white/10 p-8 sm:p-12 lg:p-16 hover:border-maku-orange/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-maku-orange/5 to-transparent pointer-events-none" />
              <div className="relative z-10 lg:max-w-2xl">
                <span className="inline-block px-4 py-1 bg-maku-orange/20 text-maku-orange text-xs font-bold rounded-full tracking-wider uppercase mb-6">
                  Live Experiment
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-bold">
                  Lizzy AI Solutions
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed text-lg">
                  Kann man mit KI-Avataren und unter 50 €/Monat Budget ein Online-Business aufbauen? 
                  Lizzy, Robert und Klaus zeigen die echten Zahlen — transparent, ehrlich, ohne Hype.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['KI-Avatare', 'YouTube', 'Affiliate', 'DACH-Markt'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40">{tag}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://youtube.com/@LizzyAISolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-maku-charcoal rounded-full text-sm font-semibold hover:bg-maku-orange hover:text-white transition-all duration-300"
                  >
                    📺 YouTube Kanal
                  </a>
                  <a
                    href="https://wore2706-lgtm.github.io/lizzy-experiment-dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-white/20 rounded-full text-sm font-semibold hover:border-maku-orange hover:text-maku-orange transition-all duration-300"
                  >
                    📊 Live Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ KONTAKT ============ */}
      <section id="kontakt" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal">
              <span className="text-maku-orange font-handwritten text-2xl">Kontakt</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 leading-tight">
                Lust auf was
                <br />
                <span className="text-maku-orange">Außergewöhnliches?</span>
              </h2>
              <p className="mt-6 text-maku-warm/60 text-lg">
                Erzählen Sie uns von Ihrem Projekt. Oder schreiben Sie einfach "Hallo" — 
                wir beißen nicht.
              </p>
              <div className="mt-10 space-y-4">
                <a href="mailto:office@maku-hanga.com" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-maku-charcoal/5 hover:border-maku-orange/30 hover:shadow-md transition-all duration-300 group">
                  <span className="w-10 h-10 bg-maku-orange/10 rounded-lg flex items-center justify-center group-hover:bg-maku-orange group-hover:text-white transition-all">✉️</span>
                  <div>
                    <div className="text-sm text-maku-warm/40">E-Mail</div>
                    <div className="font-semibold">office@maku-hanga.com</div>
                  </div>
                </a>
                <a href="tel:+4369010401004" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-maku-charcoal/5 hover:border-maku-orange/30 hover:shadow-md transition-all duration-300 group">
                  <span className="w-10 h-10 bg-maku-orange/10 rounded-lg flex items-center justify-center group-hover:bg-maku-orange group-hover:text-white transition-all">📞</span>
                  <div>
                    <div className="text-sm text-maku-warm/40">Telefon</div>
                    <div className="font-semibold">+43 690 104 010 04</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-maku-charcoal/5">
                  <span className="w-10 h-10 bg-maku-orange/10 rounded-lg flex items-center justify-center">📍</span>
                  <div>
                    <div className="text-sm text-maku-warm/40">Standort</div>
                    <div className="font-semibold">Kärnten, Österreich</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <form
                action="mailto:office@maku-hanga.com"
                method="POST"
                encType="text/plain"
                className="space-y-5 bg-white rounded-3xl p-8 border border-maku-charcoal/5 shadow-sm"
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-maku-warm/70">Ihr Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-maku-charcoal/10 bg-maku-cream focus:outline-none focus:ring-2 focus:ring-maku-orange/30 focus:border-maku-orange transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-maku-warm/70">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-maku-charcoal/10 bg-maku-cream focus:outline-none focus:ring-2 focus:ring-maku-orange/30 focus:border-maku-orange transition-all"
                    placeholder="max@beispiel.at"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-maku-warm/70">Interesse an</label>
                  <select
                    name="interesse"
                    className="w-full px-4 py-3 rounded-xl border border-maku-charcoal/10 bg-maku-cream focus:outline-none focus:ring-2 focus:ring-maku-orange/30 focus:border-maku-orange transition-all"
                  >
                    <option>Promotion & Marketing</option>
                    <option>Recruiting</option>
                    <option>Sponsoring</option>
                    <option>KI-Content Produktion</option>
                    <option>Studentenzimmer in Klagenfurt</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-maku-warm/70">Nachricht</label>
                  <textarea
                    name="nachricht"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-maku-charcoal/10 bg-maku-cream focus:outline-none focus:ring-2 focus:ring-maku-orange/30 focus:border-maku-orange transition-all resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Vorhaben..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-maku-charcoal text-white rounded-xl font-semibold hover:bg-maku-orange transition-all duration-300 hover:shadow-lg hover:shadow-maku-orange/20"
                >
                  Nachricht senden →
                </button>
                <p className="text-xs text-maku-warm/30 text-center">
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-maku-charcoal text-white">
        {/* Pre-footer CTA */}
        <div className="max-w-7xl mx-auto px-6 py-16 text-center border-b border-white/5">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Bereit, etwas <span className="text-maku-orange">Außergewöhnliches</span> zu starten?
          </h2>
          <a href="#kontakt" className="inline-block mt-6 px-8 py-4 bg-maku-orange text-white rounded-full font-semibold hover:bg-maku-gold transition-all duration-300 hover:scale-105">
            Let's do it! 🔥
          </a>
        </div>

        {/* Footer content */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white/40">
          <div>
            <img src="/logo.png" alt="Maku Hanga" className="w-12 h-12 rounded-full mb-4" />
            <p className="leading-relaxed">
              Maku Hanga — Agentur für Promotion, Recruiting & Sponsoring. 
              Aus Kärnten, für den DACH-Raum.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Leistungen</h4>
            <ul className="space-y-2">
              <li><a href="#agentur" className="hover:text-maku-orange transition-colors">Promotion</a></li>
              <li><a href="#agentur" className="hover:text-maku-orange transition-colors">Recruiting</a></li>
              <li><a href="#agentur" className="hover:text-maku-orange transition-colors">Sponsoring</a></li>
              <li><a href="#agentur" className="hover:text-maku-orange transition-colors">KI-Content</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Projekte</h4>
            <ul className="space-y-2">
              <li><a href="https://flats.maku-hanga.com" className="hover:text-maku-orange transition-colors">Flats Klagenfurt</a></li>
              <li><a href="https://youtube.com/@LizzyAISolutions" className="hover:text-maku-orange transition-colors">Lizzy AI Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#impressum" className="hover:text-maku-orange transition-colors">Impressum</a></li>
              <li><a href="#datenschutz" className="hover:text-maku-orange transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        {/* Impressum */}
        <div id="impressum" className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 text-xs text-white/30 space-y-2">
          <h4 className="text-white/60 font-semibold text-sm mb-3">Impressum gemäß § 5 ECG</h4>
          <p>
            <strong className="text-white/50">Maku Hanga</strong> — Agentur für Promotion, Recruiting & Sponsoring<br />
            Elisabeth Reiner-Kovarik (EPU — Einzelpersonenunternehmen)<br />
            Dürrenmoos 11a, 9111 Völkermarkt, Österreich<br />
            UID: ATU82604326
          </p>
          <p>
            Tel.: <a href="tel:+4369010401004" className="hover:text-maku-orange">+43 690 104 010 04</a> · 
            E-Mail: <a href="mailto:office@maku-hanga.com" className="hover:text-maku-orange">office@maku-hanga.com</a>
          </p>
          <p>
            Unternehmensgegenstand: Werbung und Marketing · Mitglied der WKO Kärnten<br />
            Aufsichtsbehörde: Bezirkshauptmannschaft Völkermarkt
          </p>
        </div>

        {/* Datenschutz */}
        <div id="datenschutz" className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 text-xs text-white/30 space-y-2">
          <h4 className="text-white/60 font-semibold text-sm mb-3">Datenschutzerklärung</h4>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden 
            auf dieser Website nur im technisch notwendigen Umfang erhoben. Die Datenverarbeitung 
            erfolgt auf Grundlage der DSGVO (Art. 6 Abs. 1 lit. a, b, f).
          </p>
          <p>
            Diese Website verwendet keine Cookies und keine externen Tracking-Tools. 
            Es werden keine personenbezogenen Daten an Dritte weitergegeben.
          </p>
          <p>
            Bei Anfragen über das Kontaktformular werden Ihre Angaben zur Bearbeitung der Anfrage 
            bei uns gespeichert. Eine Weitergabe an Dritte findet nicht statt. 
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten.
          </p>
          <p>
            Kontakt für Datenschutzanfragen: <a href="mailto:office@maku-hanga.com" className="hover:text-maku-orange">office@maku-hanga.com</a>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <span>© 2026 Maku Hanga · Alle Rechte vorbehalten</span>
          <span>
            Gebaut mit{' '}
            <span className="text-maku-orange">♥</span>
            {' '}in Kärnten
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
