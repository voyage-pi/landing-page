import React from 'react'
import './App.css'
import './index.css'

// Import dummy components to solve import issues
import { Image, Link, ChevronRight } from './components/next-shim'
import { Button } from './components/ui/button'

// Import the actual page component
import HomePage from './app/page'

function App() {
  return <HomePage />
}

export default App
