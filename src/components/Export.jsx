import { useState } from 'react'
import { Link } from 'react-router-dom'

function Export() {
  const [exportFormat, setExportFormat] = useState('pdf')
  const [includeDetails, setIncludeDetails] = useState(true)
  const [includeRelated, setIncludeRelated] = useState(true)
  const [isExporting, setIsExporting] = useState(false)
  const [exportComplete, setExportComplete] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsExporting(false)
    setExportComplete(true)
  }

  if (exportComplete) {
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
                Export Complete
              </div>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Export Complete!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Your CivicPulse snippets have been successfully exported and are ready for download.
            </p>

            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Export Summary</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-medium">{exportFormat.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Items included:</span>
                  <span className="font-medium">5 agenda items</span>
                </div>
                <div className="flex justify-between">
                  <span>Related ordinances:</span>
                  <span className="font-medium">{includeRelated ? 'Included' : 'Excluded'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Detailed descriptions:</span>
                  <span className="font-medium">{includeDetails ? 'Included' : 'Excluded'}</span>
                </div>
                <div className="flex justify-between">
                  <span>File size:</span>
                  <span className="font-medium">2.3 MB</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📥 Download File
              </button>
              
              <div className="flex space-x-4">
                <Link 
                  to="/daily-workflow"
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg transition-colors"
                >
                  Back to Dashboard
                </Link>
                <button 
                  onClick={() => setExportComplete(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                >
                  Export Again
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
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
              Export Snippets
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Export Your Snippets
          </h1>
          <p className="text-lg text-gray-600">
            Generate a comprehensive report of your tracked agenda items
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8">
          <form onSubmit={(e) => { e.preventDefault(); handleExport(); }} className="space-y-6">
            {/* Export Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Export Format
              </label>
              <div className="space-y-2">
                {[
                  { value: 'pdf', label: 'PDF Document', description: 'Best for sharing and printing' },
                  { value: 'docx', label: 'Word Document', description: 'Editable format for further editing' },
                  { value: 'txt', label: 'Plain Text', description: 'Simple text format' }
                ].map(format => (
                  <label key={format.value} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      value={format.value}
                      checked={exportFormat === format.value}
                      onChange={(e) => setExportFormat(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{format.label}</div>
                      <div className="text-xs text-gray-500">{format.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Content Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Content to Include
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDetails}
                    onChange={(e) => setIncludeDetails(e.target.checked)}
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Detailed Descriptions</div>
                    <div className="text-xs text-gray-500">Include full meeting details and context</div>
                  </div>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeRelated}
                    onChange={(e) => setIncludeRelated(e.target.checked)}
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Related Ordinances</div>
                    <div className="text-xs text-gray-500">Include similar legislation from other jurisdictions</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Export Preview</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• 5 agenda items from your dashboard</div>
                <div>• {includeDetails ? 'Full descriptions and context' : 'Summary information only'}</div>
                <div>• {includeRelated ? 'Related ordinances and precedents' : 'No related ordinances'}</div>
                <div>• Estimated file size: {exportFormat === 'pdf' ? '2.3 MB' : exportFormat === 'docx' ? '1.8 MB' : '0.5 MB'}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Link 
                to="/daily-workflow" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Dashboard
              </Link>
              <button
                type="submit"
                disabled={isExporting}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  isExporting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {isExporting ? 'Exporting...' : 'Export Snippets'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Export
