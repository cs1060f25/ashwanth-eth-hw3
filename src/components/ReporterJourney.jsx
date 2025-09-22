import { Link } from 'react-router-dom'

function ReporterJourney() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl font-bold text-gray-900">
              CivicPulse
            </Link>
            <div className="text-sm text-gray-500">
              Reporter Dashboard
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, John
          </h1>
          <p className="text-lg text-gray-600">
            Your local news discovery dashboard
          </p>
        </div>

        {/* Welcome to John's Journey */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Welcome to Your CivicPulse Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Let's set up your personalized news discovery experience and explore the complete reporter workflow.
          </p>
          <div className="space-x-4">
            <Link 
              to="/account-setup"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Start Setup →
            </Link>
            <Link 
              to="/daily-workflow"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-colors"
            >
              Skip to Dashboard
            </Link>
          </div>
        </div>

        {/* Back to landing */}
        <div className="mt-8">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

export default ReporterJourney
