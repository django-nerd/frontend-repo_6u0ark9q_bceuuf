import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Membership from './pages/Membership'
import Aircraft from './pages/Aircraft'
import Experience from './pages/Experience'
import Accessibility from './pages/Accessibility'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Style from './pages/Style'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/style" element={<Style />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
