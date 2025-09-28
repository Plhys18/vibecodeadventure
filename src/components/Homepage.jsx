import { useApp } from '../contexts/AppContext'
import ContactForm from './ContactForm'

const Homepage = () => {
  const { content, themes, currentTheme } = useApp()
  const theme = themes[currentTheme]

  const styles = {
    '--primary-color': theme.colors.primary,
    '--secondary-color': theme.colors.secondary,
    '--accent-color': theme.colors.accent,
    '--hero-bg': theme.colors.hero,
    '--background-color': theme.colors.background,
    '--surface-color': theme.colors.surface,
    '--text-color': theme.colors.text,
    '--text-light-color': theme.colors.textLight
  }

  return (
    <div className="app" style={styles}>
      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h2>{content.heroTitle}</h2>
              <p>{content.heroDescription}</p>
              <div className="hero-buttons">
                <a href="#services" className="btn btn-primary">Naše služby</a>
                <a href="#contact" className="btn btn-secondary">Kontaktujte nás</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Naše služby</h2>
            <p>Komplexní řešení pro vaše projekty v oblasti inženýrství a výstavby</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🛣️</div>
                <h3>Projektování dopravní infrastruktury</h3>
                <p>Komplexní projektování cest, obchvatů, křižovatek a dopravních řešení.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💡</div>
                <h3>Projektování osvětlení</h3>
                <p>Návrhy veřejného osvětlení, průmyslového a architektonického osvětlení.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏗️</div>
                <h3>Inženýrská činnost</h3>
                <p>Inženýrská činnost v investiční výstavbě a technické poradenství.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📋</div>
                <h3>Realizace staveb</h3>
                <p>Provádění staveb, jejich změn a odstraňování dle projektové dokumentace.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Poradenství</h3>
                <p>Podnikatelské, finanční, organizační a ekonomické poradenství.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📐</div>
                <h3>Projektová činnost</h3>
                <p>Kompletní projektová činnost ve výstavbě od návrhu po realizaci.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Realizace</h2>
            <p>Ukázky našich úspěšně dokončených projektů</p>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">
                    <span>🚧</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>Rekonstrukce silnice I/11</h3>
                  <p>Kompletní rekonstrukce úseku silnice včetně nového osvětlení a odvodnění.</p>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">
                    <span>🌉</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>Most přes řeku Desnou</h3>
                  <p>Projektování a realizace nového mostního přechodu s moderním osvětlením.</p>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">
                    <span>🏗️</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>Průmyslová zona Šumperk</h3>
                  <p>Kompletní infrastruktura nové průmyslové zóny včetně komunikací a osvětlení.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>O společnosti</h2>
                <p>{content.aboutText}</p>
                <p>{content.aboutText2}</p>
                <div className="company-details">
                  <div className="detail">
                    <strong>IČ:</strong> {content.companyId}
                  </div>
                  <div className="detail">
                    <strong>Sídlo:</strong> {content.address}
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="placeholder-image">
                  <span>🏢</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Kontaktujte nás</h2>
            <p>Jsme tu pro vás - rádi zodpovíme vaše otázky a projednáme možnosti spolupráce</p>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Adresa</h3>
                    <p>{content.address}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h3>Telefon</h3>
                    <p><a href={`tel:${content.phone.replace(/\s/g, '')}`}>{content.phone}</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h3>Mobil</h3>
                    <p><a href={`tel:${content.mobile.replace(/\s/g, '')}`}>{content.mobile}</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h3>Email</h3>
                    <p><a href={`mailto:${content.email}`}>{content.email}</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div>
                    <h3>Web</h3>
                    <p><a href={`http://${content.website}`} target="_blank" rel="noopener noreferrer">{content.website}</a></p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Homepage