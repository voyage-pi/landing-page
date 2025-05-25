import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initNavbarScroll } from './components/navbar-scroll.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize navbar scroll as fallback if React component doesn't handle it
window.addEventListener('load', () => {
  // Small delay to ensure React has mounted
  setTimeout(() => {
    // Simplified check to avoid TypeScript errors
    initNavbarScroll();
  }, 100);
});
