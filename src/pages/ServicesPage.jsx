const ServicesPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Naše služby</h1>
          <p>Komplexní řešení pro vaše projekty v oblasti inženýrství a výstavby</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛣️</div>
              <h3>Projektování dopravní infrastruktury</h3>
              <p>Komplexní projektování cest, obchvatů, křižovatek a dopravních řešení. Zabýváme se návrhy silnic všech tříd, od místních komunikací až po dálniční úseky.</p>
              <ul>
                <li>Silnice I., II. a III. třídy</li>
                <li>Místní komunikace</li>
                <li>Křižovatky a obchvaty</li>
                <li>Dopravní značení</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Projektování osvětlení</h3>
              <p>Návrhy veřejného osvětlení, průmyslového a architektonického osvětlení. Moderní LED technologie a energeticky úsporná řešení.</p>
              <ul>
                <li>Veřejné osvětlení</li>
                <li>Průmyslové osvětlení</li>
                <li>Architektonické osvětlení</li>
                <li>Sportovní osvětlení</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3>Inženýrská činnost</h3>
              <p>Inženýrská činnost v investiční výstavbě a technické poradenství. Komplexní služby od přípravy až po realizaci projektů.</p>
              <ul>
                <li>Technické poradenství</li>
                <li>Investiční příprava</li>
                <li>Autorský dozor</li>
                <li>Koordinace projektů</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Realizace staveb</h3>
              <p>Provádění staveb, jejich změn a odstraňování dle projektové dokumentace. Kvalitní realizace s důrazem na termíny a kvalitu.</p>
              <ul>
                <li>Realizace dopravních staveb</li>
                <li>Instalace osvětlení</li>
                <li>Rekonstrukce komunikací</li>
                <li>Technický dozor</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Ekonomické poradenství</h3>
              <p>Podnikatelské, finanční, organizační a ekonomické poradenství pro vaše projekty a investiční záměry.</p>
              <ul>
                <li>Finanční analýzy</li>
                <li>Investiční poradenství</li>
                <li>Ekonomické studie</li>
                <li>Projektové financování</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3>Komplexní projektová činnost</h3>
              <p>Kompletní projektová činnost ve výstavbě od návrhu po realizaci. Zajišťujeme všechny fáze projektu.</p>
              <ul>
                <li>Studie proveditelnosti</li>
                <li>Projektová dokumentace</li>
                <li>Stavební řízení</li>
                <li>Realizace a dozor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage