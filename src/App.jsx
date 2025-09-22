import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ReporterJourney from './components/ReporterJourney'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reporter" element={<ReporterJourney />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App