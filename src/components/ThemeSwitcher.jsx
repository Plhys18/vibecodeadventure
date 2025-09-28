import { useApp } from '../contexts/AppContext'

const ThemeSwitcher = () => {
  const { currentTheme, themes, changeTheme } = useApp()

  return (
    <div className="theme-switcher">
      <select
        value={currentTheme}
        onChange={(e) => changeTheme(e.target.value)}
        className="theme-select"
      >
        {Object.entries(themes).map(([key, theme]) => (
          <option key={key} value={key}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ThemeSwitcher