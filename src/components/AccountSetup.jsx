import { useState } from 'react'
import { Link } from 'react-router-dom'
import PlaceholderDialog from './PlaceholderDialog'

function AccountSetup() {
  const [selectedTopics, setSelectedTopics] = useState([])
  const [keywords, setKeywords] = useState('')
  const [location, setLocation] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [dialogConfig, setDialogConfig] = useState({})

  const topicOptions = [
    'Housing & Development',
    'Public Safety',
    'Transportation',
    'Environment',
    'Education',
    'Healthcare',
    'Budget & Finance',
    'Infrastructure',
    'Zoning',
    'Community Services'
  ]

  const toggleTopic = (topic) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would save to backend
    console.log('Preferences saved:', { selectedTopics, keywords, location })
  }

  const showPlaceholderDialog = (title, message, type = 'info') => {
    setDialogConfig({ title, message, type })
    setShowDialog(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Welcome to CivicPulse, John
          </h1>
          <p className="text-lg text-slate-600">
            Let's personalize your news discovery experience
          </p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Primary Coverage Area
              </label>
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
                required
              >
                <option value="">Select your coverage area</option>
                <option value="kansas-city-mo">Kansas City, MO</option>
                <option value="kansas-city-ks">Kansas City, KS</option>
                <option value="overland-park-ks">Overland Park, KS</option>
                <option value="olathe-ks">Olathe, KS</option>
                <option value="shawnee-ks">Shawnee, KS</option>
                <option value="independence-mo">Independence, MO</option>
              </select>
            </div>

            {/* Topic Tags */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Topics of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {topicOptions.map(topic => (
                  <label key={topic} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedTopics.includes(topic)}
                      onChange={() => toggleTopic(topic)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-700">{topic}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Keywords to Monitor
              </label>
              <textarea
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Enter keywords separated by commas (e.g., affordable housing, police reform, budget cuts)"
                className="w-full"
                rows="3"
              />
              <p className="text-xs text-slate-500 mt-2">
                These keywords will help us surface relevant agenda items and documents
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center pt-6 border-t border-slate-200">
              <Link 
                to="/reporter" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Dashboard
              </Link>
              <div className="flex gap-3">
                <button
                  onClick={() => showPlaceholderDialog(
                    "Save Draft",
                    "This feature would save your preferences as a draft and allow you to return later to complete the setup. In the full version, drafts would be automatically saved and synced across devices.",
                    "info"
                  )}
                  className="btn-secondary px-6 py-2"
                >
                  Save Draft
                </button>
                <Link
                  to="/daily-workflow"
                  className="btn-primary px-6 py-2"
                >
                  Complete Setup →
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Placeholder Dialog */}
      <PlaceholderDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        title={dialogConfig.title}
        message={dialogConfig.message}
        type={dialogConfig.type}
      />
    </div>
  )
}

export default AccountSetup
