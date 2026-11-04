import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './brand/tokens.css'
import './brand/heading-font.css'
import Gate from './Gate.jsx'

// The site itself is only loaded once the gate opens (see src/gate.js).
const App = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gate>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Gate>
  </StrictMode>,
)
