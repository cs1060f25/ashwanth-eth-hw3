import { Link, useParams } from 'react-router-dom'

function DeepDive() {
  const { id } = useParams()
  
  // Mock detailed data for agenda items
  const agendaDetails = {
    1: {
      title: "Proposed Affordable Housing Development in Midtown",
      meeting: "City Planning Commission",
      date: "2024-01-15",
      time: "6:00 PM",
      location: "City Hall, Room 201",
      tags: ["Housing & Development", "Zoning"],
      priority: "high",
      summary: "Discussion of 150-unit affordable housing project near Troost Avenue",
      fullDescription: `The City Planning Commission will review a proposal for a new affordable housing development at 45th Street and Troost Avenue. The project, proposed by Midtown Housing Initiative, includes 150 units of mixed-income housing with 60% designated as affordable units for families earning 50-80% of the Area Median Income.

The development includes:
- 90 affordable units (1-3 bedrooms)
- 60 market-rate units
- Community center and playground
- Underground parking for 120 vehicles
- Green building certification (LEED Silver)

Estimated project cost: $45 million
Timeline: Construction to begin Q3 2024, completion Q4 2025`,
      relatedOrdinances: [
        {
          title: "Affordable Housing Incentive Program",
          jurisdiction: "Sedgwick County, KS",
          year: "2022",
          description: "Similar ordinance providing tax incentives for affordable housing developments"
        },
        {
          title: "Zoning Amendment for Mixed-Use Development",
          jurisdiction: "Johnson County, KS", 
          year: "2023",
          description: "Recent zoning changes allowing higher density residential development"
        }
      ],
      keyDocuments: [
        "Project Environmental Impact Assessment",
        "Traffic Study Report",
        "Community Impact Analysis",
        "Financial Feasibility Study"
      ],
      stakeholders: [
        "Midtown Housing Initiative (Developer)",
        "Kansas City Housing Authority",
        "Midtown Neighborhood Association",
        "Affordable Housing Coalition"
      ]
    },
    2: {
      title: "Police Department Budget Review",
      meeting: "Public Safety Committee",
      date: "2024-01-16",
      time: "2:00 PM",
      location: "Police Headquarters",
      tags: ["Public Safety", "Budget & Finance"],
      priority: "medium",
      summary: "Quarterly budget review and equipment funding requests",
      fullDescription: `The Public Safety Committee will conduct a comprehensive review of the Police Department's Q4 2023 budget performance and discuss funding requests for 2024 equipment upgrades.

Key agenda items:
- Review of overtime expenditures ($2.3M vs $1.8M budgeted)
- Equipment replacement requests ($1.2M for body cameras, radios)
- Staffing analysis and recruitment challenges
- Community policing program budget allocation
- Technology upgrades for dispatch system

The department is requesting additional $500K for body camera replacement program and $300K for upgraded radio communication systems.`,
      relatedOrdinances: [
        {
          title: "Police Reform and Accountability Act",
          jurisdiction: "Jackson County, MO",
          year: "2021",
          description: "Comprehensive police reform legislation including body camera requirements"
        }
      ],
      keyDocuments: [
        "Q4 Budget Performance Report",
        "Equipment Replacement Schedule",
        "Staffing Analysis Report",
        "Community Policing Impact Assessment"
      ],
      stakeholders: [
        "Kansas City Police Department",
        "Police Officers Association",
        "Community Police Review Board",
        "City Budget Office"
      ]
    }
  }

  const item = agendaDetails[id] || agendaDetails[1]

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
              Deep Dive Analysis
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/daily-workflow" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Daily Workflow
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-900 flex-1">
              {item.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              item.priority === 'high' ? 'bg-red-100 text-red-800' :
              item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {item.priority} priority
            </span>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-gray-600">
              <span className="font-medium">{item.meeting}</span>
              <span className="mx-2">•</span>
              <span>{item.date} at {item.time}</span>
            </div>
            <div className="text-gray-600">
              📍 {item.location}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Meeting Details</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.fullDescription}
                </p>
              </div>
            </div>

            {/* Key Documents */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Documents</h2>
              <ul className="space-y-2">
                {item.keyDocuments.map((doc, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-2">📄</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stakeholders */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Stakeholders</h2>
              <ul className="space-y-2">
                {item.stakeholders.map((stakeholder, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-2">👥</span>
                    {stakeholder}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Ordinances */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Ordinances</h3>
              <div className="space-y-4">
                {item.relatedOrdinances.map((ordinance, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">{ordinance.title}</h4>
                    <p className="text-sm text-gray-600">{ordinance.jurisdiction}, {ordinance.year}</p>
                    <p className="text-sm text-gray-700 mt-1">{ordinance.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Add to Watchlist
                </button>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-colors">
                  Set Reminder
                </button>
                <Link 
                  to="/export"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                >
                  Export Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DeepDive
