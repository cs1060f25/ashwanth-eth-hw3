import { Link } from 'react-router-dom'

function DailyWorkflow() {
  // Mock agenda data
  const agendaItems = [
    {
      id: 1,
      title: "Proposed Affordable Housing Development in Midtown",
      meeting: "City Planning Commission",
      date: "2024-01-15",
      time: "6:00 PM",
      location: "City Hall, Room 201",
      tags: ["Housing & Development", "Zoning"],
      keywords: ["affordable housing", "development"],
      priority: "high",
      summary: "Discussion of 150-unit affordable housing project near Troost Avenue"
    },
    {
      id: 2,
      title: "Police Department Budget Review",
      meeting: "Public Safety Committee",
      date: "2024-01-16",
      time: "2:00 PM",
      location: "Police Headquarters",
      tags: ["Public Safety", "Budget & Finance"],
      keywords: ["police", "budget"],
      priority: "medium",
      summary: "Quarterly budget review and equipment funding requests"
    },
    {
      id: 3,
      title: "Transit Route Expansion Study",
      meeting: "Transportation Committee",
      date: "2024-01-17",
      time: "4:00 PM",
      location: "City Hall, Room 105",
      tags: ["Transportation", "Infrastructure"],
      keywords: ["transit", "routes"],
      priority: "low",
      summary: "Presentation of feasibility study for new bus routes"
    },
    {
      id: 4,
      title: "Environmental Impact Assessment - Riverfront Development",
      meeting: "Environmental Advisory Board",
      date: "2024-01-18",
      time: "7:00 PM",
      location: "Community Center",
      tags: ["Environment", "Development"],
      keywords: ["environmental", "riverfront"],
      priority: "high",
      summary: "Review of environmental impact for proposed riverfront park"
    },
    {
      id: 5,
      title: "School District Funding Allocation",
      meeting: "Education Committee",
      date: "2024-01-19",
      time: "3:00 PM",
      location: "School Board Office",
      tags: ["Education", "Budget & Finance"],
      keywords: ["school", "funding"],
      priority: "medium",
      summary: "Discussion of state funding distribution to local schools"
    }
  ]

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
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
              Daily Workflow - John's Dashboard
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Today's Agenda Feed
          </h1>
          <p className="text-lg text-gray-600">
            Personalized agenda items based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agenda Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Meetings</h2>
                <p className="text-sm text-gray-600 mt-1">5 items matching your interests</p>
              </div>
              <div className="divide-y">
                {agendaItems.map(item => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium text-gray-900 flex-1">
                        <Link 
                          to={`/deep-dive/${item.id}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-medium">{item.meeting}</span>
                        <span className="mx-2">•</span>
                        <span>{item.date} at {item.time}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        📍 {item.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3">{item.summary}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heatmap Sidebar */}
          <div className="space-y-6">
            {/* Activity Heatmap */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Heatmap</h3>
              <div className="space-y-3">
                <div className="text-sm text-gray-600 mb-3">Meeting activity by topic (last 30 days)</div>
                <div className="space-y-2">
                  {[
                    { topic: 'Housing & Development', count: 12, intensity: 'high' },
                    { topic: 'Public Safety', count: 8, intensity: 'medium' },
                    { topic: 'Transportation', count: 6, intensity: 'medium' },
                    { topic: 'Environment', count: 4, intensity: 'low' },
                    { topic: 'Education', count: 3, intensity: 'low' }
                  ].map(item => (
                    <div key={item.topic} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{item.topic}</span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded ${
                          item.intensity === 'high' ? 'bg-red-500' :
                          item.intensity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}></div>
                        <span className="text-xs text-gray-500">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/export"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                >
                  Export Snippets
                </Link>
                <Link 
                  to="/account-setup"
                  className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg transition-colors"
                >
                  Update Preferences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DailyWorkflow
