import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">
            CivicPulse
          </h1>
          <p className="text-2xl text-slate-700 font-medium mb-8">
            Find local trends before they break nationally.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover emerging stories and patterns in your community before they become national headlines. 
            CivicPulse helps reporters and journalists stay ahead of the curve.
          </p>
        </div>

        <div className="space-y-6">
          <Link 
            to="/reporter" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
          >
            Enter Prototype
          </Link>
          
          <div className="text-sm text-slate-500">
            Experience the reporter's journey
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
