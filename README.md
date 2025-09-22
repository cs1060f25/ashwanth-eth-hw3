# CivicPulse Prototype

A comprehensive React web application prototype for CivicPulse, demonstrating a complete reporter workflow for discovering local government trends before they become national headlines.

**Tagline:** "Find local trends before they break nationally."

## Project Details

- **Student Name:** [INSERT]
- **GitHub Username:** [INSERT]
- **Deployed URL:** https://ashwanth-eth-hw3-main-8dh74jgbl.vercel.app
- **PRD URL:** [INSERT]

## Overview

CivicPulse is a prototype news discovery platform designed for reporters and journalists to stay ahead of emerging local stories. The application demonstrates a complete user journey from account setup through daily workflow management, deep-dive analysis, and content export.

## Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** Custom CSS (Tailwind-inspired design system)
- **Routing:** React Router DOM (HashRouter for static deployment)
- **Deployment:** Vercel (Static Site)
- **State Management:** React useState hooks
- **UI Components:** Custom components with modern design

## Features

### 🏠 Landing Page
- Clean hero section with CivicPulse branding
- Professional tagline and value proposition
- "Enter Prototype" call-to-action button
- Modern gradient background design

### 👤 Account Setup
- **Location Selection:** Choose primary coverage area (Kansas City region)
- **Topic Preferences:** Select from 10 realistic categories (Housing, Public Safety, Transportation, etc.)
- **Keyword Monitoring:** Input custom keywords for personalized content discovery
- **Interactive Form:** Hover states, validation, and placeholder dialogs for unimplemented features

### 📊 Daily Workflow Dashboard
- **Personalized Agenda Feed:** 5 realistic meeting items with priority indicators
- **Activity Heatmap:** Visual representation of meeting frequency by topic
- **Quick Actions Sidebar:** Export, preferences, reminders, and sharing options
- **Priority System:** Color-coded high/medium/low priority items
- **Clickable Items:** Navigate to detailed deep-dive pages

### 🔍 Deep Dive Analysis
- **Detailed Meeting Information:** Full context and background for agenda items
- **Related Ordinances:** Similar legislation from other jurisdictions (Sedgwick County 2022, etc.)
- **Key Documents:** Lists of relevant reports and studies
- **Stakeholder Information:** Key players and organizations involved
- **Quick Actions:** Watchlist, reminders, document requests, and export options

### 📤 Export Functionality
- **Format Selection:** PDF, Word, or plain text export options
- **Content Customization:** Choose to include detailed descriptions and related ordinances
- **Export Preview:** File size estimates and content summary
- **Success Confirmation:** Download confirmation with export summary
- **Realistic Simulation:** 2-second loading animation for export process

### 🎨 Modern UI/UX Design
- **Clean Design System:** Slate/blue/white color palette
- **Professional Navbar:** Logo, navigation links, and active state indicators
- **Card-Based Layouts:** Consistent white cards with subtle shadows
- **Responsive Design:** Mobile-friendly layouts and interactions
- **Consistent Typography:** Proper font weights, sizes, and spacing
- **Smooth Interactions:** Hover states, transitions, and focus management

### 🔧 Placeholder Dialog System
- **Professional Modals:** Clean dialog boxes for unimplemented features
- **Informative Messages:** Detailed explanations of what features would do
- **Multiple Types:** Info, warning, and success dialog variants
- **Consistent UX:** No broken functionality, always informative feedback

## User Journey Flow

1. **Landing Page** → Enter Prototype
2. **Dashboard** → Start Setup or Skip to Workflow
3. **Account Setup** → Configure preferences and location
4. **Daily Workflow** → Browse personalized agenda feed
5. **Deep Dive** → Click agenda items for detailed analysis
6. **Export** → Generate reports and download content

## Mock Data

The prototype includes realistic synthetic data:
- **5 Agenda Items:** Housing development, police budget, transit routes, environmental impact, school funding
- **Related Ordinances:** References to similar legislation in other jurisdictions
- **Stakeholder Lists:** Realistic organizations and key players
- **Activity Metrics:** Meeting frequency and topic distribution data

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The application is configured for Vercel deployment with:
- **Static Export:** Vite build process optimized for static hosting
- **Automatic Deployments:** GitHub integration triggers deployments on main branch pushes
- **HashRouter:** Client-side routing compatible with static hosting
- **Environment Configuration:** Production-ready build settings

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation component
│   ├── LandingPage.jsx         # Hero landing page
│   ├── ReporterJourney.jsx     # Dashboard with stats
│   ├── AccountSetup.jsx         # Preferences form
│   ├── DailyWorkflow.jsx       # Agenda feed and heatmap
│   ├── DeepDive.jsx           # Detailed agenda analysis
│   ├── Export.jsx             # Export functionality
│   └── PlaceholderDialog.jsx  # Modal system for unimplemented features
├── App.jsx                    # Main app with routing
└── index.css                  # Custom design system
```

## Key Technical Decisions

- **HashRouter:** Ensures compatibility with static hosting
- **Custom CSS:** Lightweight design system instead of full Tailwind
- **Component Architecture:** Modular, reusable components
- **State Management:** React hooks for local state
- **Responsive Design:** Mobile-first approach with breakpoints
- **Accessibility:** Proper focus management and keyboard navigation

## Future Enhancements

The prototype demonstrates the foundation for features like:
- Real-time agenda monitoring
- Automated document fetching
- Advanced search and filtering
- Collaboration tools for newsrooms
- Integration with government APIs
- Machine learning for trend detection

## Demo Instructions

1. Visit the deployed URL
2. Click "Enter Prototype" to start the journey
3. Complete the account setup form
4. Explore the daily workflow dashboard
5. Click on agenda items for detailed analysis
6. Try the export functionality
7. Test placeholder dialogs by clicking unimplemented features

This prototype successfully demonstrates a complete, realistic reporter workflow with professional UI/UX design and comprehensive feature coverage.