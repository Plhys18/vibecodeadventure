import { useState } from 'react'
import { useApp } from '../contexts/AppContext'

const AdminConsole = () => {
  const { content, updateContent, themes, currentTheme } = useApp()
  const [formData, setFormData] = useState(content)
  const [saved, setSaved] = useState(false)
  const theme = themes[currentTheme]

  const styles = {
    '--primary-color': theme.colors.primary,
    '--secondary-color': theme.colors.secondary,
    '--accent-color': theme.colors.accent,
    '--background-color': theme.colors.background,
    '--surface-color': theme.colors.surface,
    '--text-color': theme.colors.text
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateContent(formData)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleReset = () => {
    setFormData(content)
  }

  return (
    <div className="admin-console" style={styles}>
      <div className="admin-container">
        <div className="admin-header">
          <h1>Administrace webu</h1>
          <p>Zde můžete upravit veškerý obsah webu</p>
        </div>

        {saved && (
          <div className="success-message">
            ✅ Změny byly úspěšně uloženy!
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-section">
            <h3>Základní informace</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyName">Název společnosti:</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subtitle">Podtitul:</label>
                <input
                  type="text"
                  id="subtitle"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Hero sekce</h3>
            <div className="form-group">
              <label htmlFor="heroTitle">Hlavní nadpis:</label>
              <input
                type="text"
                id="heroTitle"
                name="heroTitle"
                value={formData.heroTitle}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="heroDescription">Popis:</label>
              <textarea
                id="heroDescription"
                name="heroDescription"
                value={formData.heroDescription}
                onChange={handleChange}
                rows="3"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>O společnosti</h3>
            <div className="form-group">
              <label htmlFor="aboutText">První odstavec:</label>
              <textarea
                id="aboutText"
                name="aboutText"
                value={formData.aboutText}
                onChange={handleChange}
                rows="3"
              />
            </div>
            <div className="form-group">
              <label htmlFor="aboutText2">Druhý odstavec:</label>
              <textarea
                id="aboutText2"
                name="aboutText2"
                value={formData.aboutText2}
                onChange={handleChange}
                rows="3"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Kontaktní údaje</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyId">IČ:</label>
                <input
                  type="text"
                  id="companyId"
                  name="companyId"
                  value={formData.companyId}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Adresa:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Telefon:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobil:</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="website">Web:</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleReset} className="btn btn-secondary">
              Zrušit změny
            </button>
            <button type="submit" className="btn btn-primary">
              Uložit změny
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminConsole