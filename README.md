# CivicPulse Prototype

A React + Tailwind web application prototype for CivicPulse, focused on the reporter persona journey.

**Tagline:** "Find local trends before they break nationally."

## Project Details

- **Student Name:** [Your Name]
- **GitHub Username:** [Your GitHub Username]
- **Deployed URL:** https://ashwanth-eth-hw3-main-dyd7p454h.vercel.app
- **PRD URL:** [Your PRD URL]

## Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Deployment:** Vercel (Static Site)

## Features

- Landing page with CivicPulse branding and tagline
- "Enter Prototype" button routing to reporter journey
- Reporter dashboard placeholder (John's journey)
- Responsive design with modern UI

## Local Development

```bash
npm install
npm run dev
```

## Deployment

The app is configured for Vercel deployment with static export. Changes pushed to the main branch will trigger automatic deployments.

## Project Structure

```
src/
├── components/
│   ├── LandingPage.jsx    # Main landing page
│   └── ReporterJourney.jsx # Reporter dashboard
├── App.jsx               # Main app with routing
└── index.css            # Tailwind CSS imports
```