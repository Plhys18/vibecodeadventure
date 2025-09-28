import { useApp } from '../contexts/AppContext'

const AboutPage = () => {
  const { content } = useApp()

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>O společnosti</h1>
          <p>Seznamte se s naší historií a týmem profesionálů</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Kdo jsme</h2>
              <p>{content.aboutText}</p>
              <p>{content.aboutText2}</p>

              <h3>Naše hodnoty</h3>
              <ul>
                <li>Profesionalita a kvalita</li>
                <li>Technická excelence</li>
                <li>Spolehlivost a důvěryhodnost</li>
                <li>Inovace a moderní přístupy</li>
              </ul>

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
    </main>
  )
}

export default AboutPage