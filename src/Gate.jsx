import { useState } from 'react'
import logoInk from './brand/logos/shotwell-logo-standard-ink.svg'
import { GATE_HASH } from './gate.js'

const STORE = 'shotwell-gate'

async function sha256(text) {
  const bytes = new TextEncoder().encode('shotwell:' + text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('')
}

function remembered() {
  try { return sessionStorage.getItem(STORE) === GATE_HASH } catch { return false }
}

export default function Gate({ children }) {
  const [open, setOpen] = useState(() => !GATE_HASH || remembered())
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (open) return children

  async function submit(e) {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    setError('')
    try {
      if ((await sha256(value.trim())) === GATE_HASH) {
        try { sessionStorage.setItem(STORE, GATE_HASH) } catch { /* private mode: just stay open for this visit */ }
        setOpen(true)
        return
      }
      setError('That password isn’t right.')
    } catch {
      setError('This page needs a secure connection (https) to check the password.')
    }
    setBusy(false)
  }

  return (
    <main className="gate">
      <style>{`
        .gate { min-height:100vh; min-height:100dvh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:44px; padding:32px 24px; background:var(--color-bg); color:var(--color-text); font-family:var(--font-body); }
        .gate img { width:min(300px, 72vw); height:auto; display:block; }
        .gate form { width:min(360px, 100%); display:flex; flex-direction:column; align-items:center; gap:14px; }
        .gate-label { font-family:var(--font-accent); font-size:.75rem; letter-spacing:.08em; text-transform:uppercase; color:var(--color-text-muted); }
        .gate input { width:100%; font-family:var(--font-body); font-size:16px; color:var(--color-text); background:transparent; border:1px solid var(--color-border); border-radius:100px; padding:16px 24px; text-align:center; outline:none; transition:border-color .3s; }
        .gate input:focus { border-color:var(--color-text); }
        .gate button { font-family:var(--font-body); font-weight:500; font-size:.78rem; letter-spacing:.17em; text-transform:uppercase; color:var(--color-text-inverted); background:var(--color-taupe-ink); border:0; border-radius:100px; padding:16px 38px; cursor:pointer; transition:opacity .3s; }
        .gate button:hover { opacity:.85; }
        .gate button:disabled { opacity:.5; cursor:default; }
        .gate-error { min-height:1.2em; font-family:var(--font-accent); font-size:.75rem; letter-spacing:.04em; color:var(--color-text); }
      `}</style>
      <img src={logoInk} alt="Shotwell — visual content for beauty, skincare and wellness" />
      <form onSubmit={submit}>
        <label className="gate-label" htmlFor="gate-pw">Private preview</label>
        <input
          id="gate-pw"
          type="password"
          autoComplete="current-password"
          autoFocus
          placeholder="Password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" disabled={busy || !value}>Enter</button>
        <p className="gate-error" role="alert">{error}</p>
      </form>
    </main>
  )
}
