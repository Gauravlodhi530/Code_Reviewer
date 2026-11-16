import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  return (
    <div className="layout">
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />}     />
        <Route path="/about"   element={<About />}    />
        <Route path="/privacy" element={<Privacy />}  />
        <Route path="/terms"   element={<Terms />}    />
        <Route path="*"        element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
