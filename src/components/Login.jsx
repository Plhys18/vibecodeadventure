import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'

const Login = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { adminLogin, themes, currentTheme } = useApp()
  const navigate = useNavigate()
  const theme = themes[currentTheme]

  const styles = {
    '--primary-color': theme.colors.primary,
    '--secondary-color': theme.colors.secondary,
    '--accent-color': theme.colors.accent,
    '--background-color': theme.colors.background,
    '--surface-color': theme.colors.surface,
    '--text-color': theme.colors.text
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (adminLogin(password)) {
      navigate('/admin')
    } else {
      setError('Neplatné heslo')
      setPassword('')
    }
  }

  return (
    <div className="login-page" style={styles}>
      <div className="login-container">
        <div className="login-form">
          <h2>Přihlášení do administrace</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">Heslo:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Zadejte heslo"
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="btn btn-primary">
              Přihlásit se
            </button>
          </form>
          <p className="login-note">
            Tato sekce je určena pouze pro administrátory webu.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login