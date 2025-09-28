import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('professional')
  const [isAdmin, setIsAdmin] = useState(false)
  const [content, setContent] = useState({
    companyName: 'Cekr CZ s.r.o',
    subtitle: 'Projektová kancelář',
    heroTitle: 'Profesionální projektové služby v Šumperku',
    heroDescription: 'Specializujeme se na inženýrskou činnost, projektování infrastruktury a komplexní služby ve výstavbě.',
    aboutText: 'Cekr CZ s.r.o je etablovaná projektová kancelář se sídlem v Šumperku, která se specializuje na komplexní služby v oblasti inženýrství a výstavby.',
    aboutText2: 'Naše dlouholeté zkušenosti v oboru nám umožňují poskytovat kvalitní služby od prvotního návrhu až po finální realizaci projektů.',
    companyId: '278 21 251',
    address: 'Mazalova 57/2, 787 01 Šumperk',
    phone: '588 517 980',
    mobile: '777 550 647',
    email: 'info@cekrcz.eu',
    website: 'www.cekrcz.eu'
  })

  const themes = {
    professional: {
      name: 'Profesionální',
      colors: {
        primary: '#2c3e50',
        secondary: '#34495e',
        accent: '#3498db',
        hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        background: '#ffffff',
        surface: '#f8f9fa',
        text: '#333333',
        textLight: '#666666'
      }
    },
    engineering: {
      name: 'Inženýrské',
      colors: {
        primary: '#1a365d',
        secondary: '#2d3748',
        accent: '#0694a2',
        hero: 'linear-gradient(135deg, #0f4c75 0%, #3282b8 100%)',
        background: '#ffffff',
        surface: '#edf2f7',
        text: '#2d3748',
        textLight: '#4a5568'
      }
    },
    modern: {
      name: 'Moderní',
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#ed8936',
        hero: 'linear-gradient(135deg, #1a202c 0%, #4a5568 100%)',
        background: '#ffffff',
        surface: '#f7fafc',
        text: '#1a202c',
        textLight: '#718096'
      }
    }
  }

  // Load saved data from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedContent = localStorage.getItem('content')
    const savedAdmin = localStorage.getItem('isAdmin')

    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent))
      } catch (e) {
        console.error('Error parsing saved content:', e)
      }
    }
    if (savedAdmin === 'true') {
      setIsAdmin(true)
    }
  }, [])

  // Save theme to localStorage
  const changeTheme = (themeName) => {
    setCurrentTheme(themeName)
    localStorage.setItem('theme', themeName)
  }

  // Save content to localStorage
  const updateContent = (newContent) => {
    setContent(newContent)
    localStorage.setItem('content', JSON.stringify(newContent))
  }

  // Admin login
  const adminLogin = (password) => {
    if (password === 'admin2024') {
      setIsAdmin(true)
      localStorage.setItem('isAdmin', 'true')
      return true
    }
    return false
  }

  // Admin logout
  const adminLogout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
  }

  const value = {
    currentTheme,
    themes,
    changeTheme,
    content,
    updateContent,
    isAdmin,
    adminLogin,
    adminLogout
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}