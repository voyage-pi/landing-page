// This file provides a non-React alternative for navbar scrolling behavior
// Use this if React hooks aren't working properly with your build system

export function initNavbarScroll(): void {
  const navbar = document.querySelector('header');
  if (!navbar) return;

  // TypeScript non-null assertion after the check
  const headerElement = navbar as HTMLElement;

  function handleScroll(): void {
    if (window.scrollY > 10) {
      headerElement.classList.add('bg-slate-900/95', 'backdrop-blur-sm', 'shadow-lg');
      headerElement.classList.remove('bg-transparent');
    } else {
      headerElement.classList.add('bg-transparent');
      headerElement.classList.remove('bg-slate-900/95', 'backdrop-blur-sm', 'shadow-lg');
    }
  }

  // Initial check
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
}

// Define global React DevTools hook for TypeScript
declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: {
      renderers: {
        size: number;
      };
    };
  }
}

// Auto-initialize if this script is loaded directly
if (typeof window !== 'undefined') {
  window.addEventListener('load', initNavbarScroll);
} 