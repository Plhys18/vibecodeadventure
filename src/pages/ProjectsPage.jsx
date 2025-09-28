const ProjectsPage = () => {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Realizace</h1>
          <p>Ukázky našich úspěšně dokončených projektů a referenční stavby</p>
        </div>
      </section>

      <section className="projects-detail">
        <div className="container">
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">
                  <span>🚧</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Rekonstrukce silnice I/11</h3>
                <p>Kompletní rekonstrukce úseku silnice I/11 v délce 8,5 km včetně nového osvětlení, odvodnění a bezpečnostních prvků.</p>
                <div className="project-details">
                  <span><strong>Rok:</strong> 2023</span>
                  <span><strong>Délka:</strong> 8,5 km</span>
                  <span><strong>Investice:</strong> 45 mil. Kč</span>
                </div>
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
                <p>Projektování a realizace nového mostního přechodu s moderním LED osvětlením a chodníky pro pěší.</p>
                <div className="project-details">
                  <span><strong>Rok:</strong> 2022</span>
                  <span><strong>Délka:</strong> 120 m</span>
                  <span><strong>Investice:</strong> 28 mil. Kč</span>
                </div>
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
                <p>Kompletní infrastruktura nové průmyslové zóny včetně komunikací, osvětlení, kanalizace a energetických rozvodů.</p>
                <div className="project-details">
                  <span><strong>Rok:</strong> 2023</span>
                  <span><strong>Plocha:</strong> 15 ha</span>
                  <span><strong>Investice:</strong> 72 mil. Kč</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">
                  <span>🔄</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Okružní křižovatka Vikýřovice</h3>
                <p>Náhrada semaforizované křižovatky moderní okružní křižovatkou s integrovaným LED osvětlením.</p>
                <div className="project-details">
                  <span><strong>Rok:</strong> 2022</span>
                  <span><strong>Průměr:</strong> 35 m</span>
                  <span><strong>Investice:</strong> 12 mil. Kč</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">
                  <span>🏪</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Nákupní centrum Šumperk</h3>
                <p>Kompletní osvětlení vnějších ploch a parkovišť nákupního centra s využitím úsporných LED technologií.</p>
                <div className="project-details">
                  <span><strong>Rok:</strong> 2021</span>
                  <span><strong>Plocha:</strong> 8 ha</span>
                  <span><strong>Svítidla:</strong> 180 ks</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">
                  <span>🏘️</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Místní komunikace Zábřeh</h3>
                <p>Nové místní komunikace v rezidenční zástavbě včetně chodníků, veřejného osvětlení a zeleně.</p>
                <div className="project-details">
                  <span><strong>Rok:</strong> 2023</span>
                  <span><strong>Délka:</strong> 2,8 km</span>
                  <span><strong>Investice:</strong> 18 mil. Kč</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage