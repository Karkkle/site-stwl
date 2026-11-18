import { StrictMode, lazy, Suspense } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './brand/tokens.css'
import './brand/heading-font.css'
import Gate from './Gate.jsx'

// The site itself is only loaded once the gate opens (see src/gate.js).
const App = lazy(() => import('./App.jsx'))

const tree = (
  <StrictMode>
    <Gate>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Gate>
  </StrictMode>
)

const root = document.getElementById('root')
// Launched builds ship the home page pre-rendered (so search engines see real HTML): take it over instead of redrawing it.
if (root.hasChildNodes()) hydrateRoot(root, tree)
else createRoot(root).render(tree)
