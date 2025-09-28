import { useApp } from '../contexts/AppContext'

const Footer = () => {
  const { content, themes, currentTheme } = useApp()
  const theme = themes[currentTheme]

  const styles = {
    '--primary-color': theme.colors.primary,
    '--secondary-color': theme.colors.secondary,
    '--accent-color': theme.colors.accent
  }

  return (
    <footer className="footer" style={styles}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{content.companyName}</h3>
            <p>{content.subtitle}</p>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>{content.address}</p>
            <p>Tel: {content.phone}</p>
            <p>Email: {content.email}</p>
          </div>
          <div className="footer-section">
            <h4>Služby</h4>
            <p>Projektování • Inženýrství • Poradenství</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 {content.companyName}. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer