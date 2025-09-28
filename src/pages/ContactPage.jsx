import { useApp } from '../contexts/AppContext'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  const { content } = useApp()

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Kontaktujte nás</h1>
          <p>Jsme tu pro vás - rádi zodpovíme vaše otázky a projednáme možnosti spolupráce</p>
        </div>
      </section>

      <section className="contact-detail">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Kontaktní údaje</h2>

              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div>
                  <h3>Název společnosti</h3>
                  <p>{content.companyName}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Adresa</h3>
                  <p>{content.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🆔</div>
                <div>
                  <h3>IČ</h3>
                  <p>{content.companyId}</p>
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

            <div className="contact-form-section">
              <h2>Napište nám</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage