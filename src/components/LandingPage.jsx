import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            CivicPulse
          </h1>
          <p className="text-2xl text-gray-700 font-medium">
            Find local trends before they break nationally.
          </p>
        </div>
        
        <div className="mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover emerging stories and patterns in your community before they become national headlines. 
            CivicPulse helps reporters and journalists stay ahead of the curve.
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            to="/reporter" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Enter Prototype
          </Link>
          
          <div className="text-sm text-gray-500">
            Experience the reporter's journey
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
