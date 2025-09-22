import { Link } from 'react-router-dom'

function ReporterJourney() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Welcome, John
          </h1>
          <p className="text-lg text-slate-600">
            Your local news discovery dashboard
          </p>
        </div>

        {/* Welcome Card */}
        <div className="card p-8 text-center mb-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Welcome to Your CivicPulse Journey
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Let's set up your personalized news discovery experience and explore the complete reporter workflow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/account-setup"
              className="btn-primary px-8 py-3 text-lg"
            >
              Start Setup →
            </Link>
            <Link 
              to="/daily-workflow"
              className="btn-secondary px-8 py-3 text-lg"
            >
              Skip to Dashboard
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-sm text-slate-600">Agenda Items</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">3</div>
            <div className="text-sm text-slate-600">Topics Tracked</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-2xl font-bold text-slate-600 mb-2">12</div>
            <div className="text-sm text-slate-600">Keywords Monitored</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ReporterJourney
