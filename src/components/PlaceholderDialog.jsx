import { useState } from 'react'

function PlaceholderDialog({ isOpen, onClose, title, message, type = 'info' }) {
  if (!isOpen) return null

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return (
          <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        )
      case 'success':
        return (
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        )
      default:
        return (
          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
    }
  }

  const getBgColor = () => {
    switch (type) {
      case 'warning': return 'bg-yellow-50'
      case 'success': return 'bg-green-50'
      default: return 'bg-blue-50'
    }
  }

  const getBorderColor = () => {
    switch (type) {
      case 'warning': return 'border-yellow-200'
      case 'success': return 'border-green-200'
      default: return 'border-blue-200'
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg shadow-xl border ${getBorderColor()} max-w-md w-full mx-4`}>
        <div className={`p-6 ${getBgColor()} rounded-t-lg`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {getIcon()}
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">
                {title}
              </h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            {message}
          </p>
          
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceholderDialog
