
import React, { useMemo, useState } from 'react'
import { TEMPLATES } from './templates.js'

const stages = Array.from(new Set(TEMPLATES.map(t => t.stage)))
const tones = Array.from(new Set(TEMPLATES.map(t => t.tone)))

function replaceVars(text, values) {
  let out = text || ''
  Object.entries(values).forEach(([key, val]) => {
    const re = new RegExp(`{{\s*${key}\s*}}`, 'g')
    out = out.replace(re, val || `{{${key}}}`)
  })
  return out
}

export default function App() {
  const [query, setQuery] = useState('')
  const [stage, setStage] = useState('All')
  const [tone, setTone] = useState('All')
  const [lang, setLang] = useState('en')
  const [active, setActive] = useState(TEMPLATES[0])
  const [values, setValues] = useState({
    "Candidate Name": "Alex",
    "Position": "Marketing Manager",
    "Company Name": "Acme Co.",
    "Relevant Skill/Field": "digital marketing",
    "Date": "12 Nov 2025",
    "Time": "10:00 AM",
    "Venue or Meeting Link": "Google Meet",
    "reason": "a schedule change",
    "Start Date": "1 Dec 2025",
    "Location": "Head Office",
    "Deadline": "15 Nov 2025"
  })

  const filtered = useMemo(() => (
    TEMPLATES.filter(t =>
      (stage === 'All' || t.stage === stage) &&
      (tone === 'All' || t.tone === tone) &&
      (query.trim() === '' ||
        t.situation.toLowerCase().includes(query.toLowerCase()) ||
        (t.tags||[]).some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    )
  ), [query, stage, tone])

  const rendered = useMemo(() => replaceVars(active?.[lang], values), [active, lang, values])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rendered)
      alert('Copied to clipboard')
    } catch (e) {
      alert('Copy failed. Select and copy manually.')
    }
  }

  return (
    <div className="min-h-screen text-neutral-900 p-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <header className="lg:col-span-3">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Universal HR Email Template Library</h1>
              <p className="text-sm text-neutral-600 mt-1">Bilingual • Modern formal • Plug-and-send</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm">Language</label>
              <select value={lang} onChange={e => setLang(e.target.value)} className="border rounded-lg px-3 py-2">
                <option value="en">English</option>
                <option value="th">ไทย</option>
              </select>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              className="border rounded-xl px-4 py-3 md:col-span-2"
              placeholder="Search situations, e.g., no-show, interview, offer"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <select className="border rounded-xl px-4 py-3" value={stage} onChange={e => setStage(e.target.value)}>
              <option>All</option>
              {stages.map(s => <option key={s}>{s}</option>)}
            </select>
            <select className="border rounded-xl px-4 py-3" value={tone} onChange={e => setTone(e.target.value)}>
              <option>All</option>
              {tones.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </header>

        <aside className="lg:col-span-1 bg-white rounded-2xl shadow-sm border p-4">
          <h2 className="text-lg font-semibold mb-3">Templates</h2>
          <div className="space-y-2 max-h-[70vh] overflow-auto pr-1">
            {filtered.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t)}
                className={`w-full text-left p-3 rounded-xl border transition ${active?.id === t.id ? 'bg-neutral-100 border-neutral-300' : 'hover:bg-neutral-50'}`}
              >
                <div className="text-sm text-neutral-500">{t.stage}</div>
                <div className="font-medium">{t.situation}</div>
                <div className="text-xs text-neutral-500 mt-1">Tone: {t.tone}</div>
              </button>
            ))}
          </div>
        </aside>

        <main className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-4 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Preview</h2>
              <p className="text-sm text-neutral-600">Live-rendered with your variables</p>
            </div>
            <div className="flex gap-2">
              <button onClick={handleCopy} className="px-4 py-2 rounded-xl bg-black text-white">Copy</button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border rounded-xl p-4 bg-neutral-50 whitespace-pre-wrap text-sm">
              {rendered}
            </div>
            <div className="border rounded-xl p-4">
              <h3 className="font-medium mb-2">Variables</h3>
              <div className="grid grid-cols-1 gap-3">
                {(active?.variables || []).map(v => (
                  <div key={v} className="flex flex-col">
                    <label className="text-xs text-neutral-600 mb-1">{v}</label>
                    <input
                      className="border rounded-lg px-3 py-2"
                      value={values[v] || ''}
                      onChange={e => setValues(prev => ({ ...prev, [v]: e.target.value }))}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-neutral-600">Show raw template with placeholders</summary>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
              <textarea readOnly className="border rounded-xl p-3 h-56 text-sm" value={active?.en || ''} />
              <textarea readOnly className="border rounded-xl p-3 h-56 text-sm" value={active?.th || ''} />
            </div>
          </details>
        </main>
      </div>

      <footer className="max-w-7xl mx-auto mt-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Universal HR Templates • v1.0
      </footer>
    </div>
  )
}
