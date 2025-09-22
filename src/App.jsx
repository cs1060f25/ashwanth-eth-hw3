import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ReporterJourney from './components/ReporterJourney'
import AccountSetup from './components/AccountSetup'
import DailyWorkflow from './components/DailyWorkflow'
import DeepDive from './components/DeepDive'
import Export from './components/Export'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reporter" element={<ReporterJourney />} />
          <Route path="/account-setup" element={<AccountSetup />} />
          <Route path="/daily-workflow" element={<DailyWorkflow />} />
          <Route path="/deep-dive/:id" element={<DeepDive />} />
          <Route path="/export" element={<Export />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App