import { useState } from 'react'
import { Link } from 'react-router-dom'

function AccountSetup() {
  const [selectedTopics, setSelectedTopics] = useState([])
  const [keywords, setKeywords] = useState('')
  const [location, setLocation] = useState('')

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl font-bold text-gray-900">
              CivicPulse
            </Link>
            <div className="text-sm text-gray-500">
              Account Setup
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to CivicPulse, John
          </h1>
          <p className="text-lg text-gray-600">
            Let's personalize your news discovery experience
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Coverage Area
              </label>
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Topics of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {topicOptions.map(topic => (
                  <label key={topic} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTopics.includes(topic)}
                      onChange={() => toggleTopic(topic)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{topic}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keywords to Monitor
              </label>
              <textarea
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Enter keywords separated by commas (e.g., affordable housing, police reform, budget cuts)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <p className="text-xs text-gray-500 mt-1">
                These keywords will help us surface relevant agenda items and documents
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link 
                to="/reporter" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Dashboard
              </Link>
              <Link
                to="/daily-workflow"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Complete Setup →
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default AccountSetup
