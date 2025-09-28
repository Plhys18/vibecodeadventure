import { useApp } from '../contexts/AppContext'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { content } = useApp()

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{content.heroTitle}</h1>
            <p>{content.heroDescription}</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Naše služby</Link>
              <Link to="/contact" className="btn btn-secondary">Kontaktujte nás</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="services-preview">
        <div className="container">
          <h2>Naše hlavní služby</h2>
          <p>Specializujeme se na komplexní služby v oblasti inženýrství a projektování</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛣️</div>
              <h3>Projektování dopravní infrastruktury</h3>
              <p>Komplexní projektování cest, obchvatů a křižovatek s moderními technologiemi.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Projektování osvětlení</h3>
              <p>Návrhy veřejného a průmyslového osvětlení s důrazem na energetickou úspornost.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3>Inženýrská činnost</h3>
              <p>Technické poradenství a komplexní služby v investiční výstavbě.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage