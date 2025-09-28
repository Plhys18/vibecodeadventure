import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider, useApp } from './contexts/AppContext'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Login from './components/Login'
import AdminConsole from './components/AdminConsole'
import Footer from './components/Footer'
import './App.css'

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useApp()
  return isAdmin ? children : <Navigate to="/login" />
}

function AppContent() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminConsole />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
