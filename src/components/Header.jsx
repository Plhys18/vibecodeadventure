import { Link } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const { content, themes, currentTheme, isAdmin, adminLogout } = useApp()
  const theme = themes[currentTheme]

  const styles = {
    '--primary-color': theme.colors.primary,
    '--secondary-color': theme.colors.secondary,
    '--accent-color': theme.colors.accent
  }

  return (
    <header className="header" style={styles}>
      <div className="container">
        <Link to="/" className="logo">
          <h1>{content.companyName}</h1>
          <p>{content.subtitle}</p>
        </Link>
        <nav className="nav">
          <a href="#home">Domů</a>
          <a href="#services">Služby</a>
          <a href="#about">O nás</a>
          <a href="#contact">Kontakt</a>
          <ThemeSwitcher />
          {isAdmin && (
            <>
              <Link to="/admin" className="admin-link">Admin</Link>
              <button onClick={adminLogout} className="logout-btn">Odhlásit</button>
            </>
          )}
          {!isAdmin && (
            <Link to="/login" className="login-link">Přihlášení</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header