import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      // EmailJS konfigurace - v produkci by tyto klíče měly být v environment variables
      const serviceId = 'service_default' // Nahradit skutečným service ID
      const templateId = 'template_default' // Nahradit skutečným template ID
      const publicKey = 'your_public_key' // Nahradit skutečným public key

      // Pro demo účely - vytvoří mailto link
      const subject = encodeURIComponent(`Zpráva z webu: ${formData.subject}`)
      const body = encodeURIComponent(`
Jméno: ${formData.name}
Email: ${formData.email}
Předmět: ${formData.subject}

Zpráva:
${formData.message}
      `)

      const mailtoLink = `mailto:info@cekrcz.eu?subject=${subject}&body=${body}`

      // Otevře emailového klienta
      window.location.href = mailtoLink

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Alternativně - pro skutečné EmailJS odesílání:
      /*
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      */

    } catch (error) {
      console.error('Chyba při odesílání:', error)
      setStatus('error')
    }

    setIsLoading(false)
  }

  return (
    <div className="contact-form">
      <h3>Napište nám</h3>

      {status === 'success' && (
        <div className="success-message">
          ✅ Děkujeme za zprávu! Otevřel se vám emailový klient pro odeslání.
        </div>
      )}

      {status === 'error' && (
        <div className="error-message">
          ❌ Nastala chyba. Zkuste to prosím znovu nebo nás kontaktujte přímo na info@cekrcz.eu
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Vaše jméno"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Předmět"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Vaše zpráva"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Odesílání...' : 'Odeslat zprávu'}
        </button>
      </form>

      <div className="contact-note">
        <p><small>
          Zpráva bude odeslána na <strong>info@cekrcz.eu</strong> prostřednictvím vašeho emailového klienta.
        </small></p>
      </div>
    </div>
  )
}

export default ContactForm