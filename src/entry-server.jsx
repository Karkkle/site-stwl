// Used only at build time to pre-render the home page to static HTML (see scripts/build-pages.mjs).
// The tree must match src/main.jsx so the browser can take the page over without redrawing it.
import { Suspense } from 'react'
import { renderToString } from 'react-dom/server'
import Gate from './Gate.jsx'
import App from './App.jsx'

export function render() {
  return renderToString(
    <Gate>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Gate>,
  )
}
