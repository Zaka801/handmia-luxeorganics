import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ensures the page scrolls to the top on every route change.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Instant scroll avoids a "stuck in the footer" feeling when navigating.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
