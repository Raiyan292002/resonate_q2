import React, { useMemo, useState } from 'react'
import ContactCard from './components/ContactCard.jsx'
import ContactModal from './components/ContactModal.jsx'
import { useContacts, useFiltered } from './hooks/useContacts.js'

export default function App() {
  const { contacts, loading, error, refetch } = useContacts()
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')
  const [active, setActive] = useState(null)

  const allCities = useMemo(() => {
    const s = new Set(contacts.map(c => c.address?.city).filter(Boolean))
    return ['', ...Array.from(s).sort()]
  }, [contacts])

  const visible = useFiltered(contacts, query, city)

  return (
    <div className="container">
      <div className="header">
        <div className="brand">
          <div className="brand-badge">CT</div>
          <div>
            <h1>Contacts</h1>
            <div className="hint">Browse users from jsonplaceholder (React, Vite)</div>
          </div>
        </div>

        <div className="toolbar">
          <input
            className="input"
            placeholder="Search name, email, company, city…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search contacts"
          />
          <select className="select" value={city} onChange={e => setCity(e.target.value)} aria-label="Filter by city">
            {allCities.map(c => <option value={c} key={c || 'all'}>{c || 'All cities'}</option>)}
          </select>
        </div>
      </div>

      {loading && (
        <div className="grid" role="status" aria-live="polite">
          {Array.from({length:8}).map((_,i)=>(<div className="skeleton" key={i}/>))}
        </div>
      )}

      {!loading && error && (
        <div className="error">
          <strong>Error:</strong> {error} <button className="btn" onClick={refetch} style={{marginLeft:8}}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div style={{margin: '0 0 10px 4px', color:'var(--muted)'}}>
            Showing <strong>{visible.length}</strong> of {contacts.length} contacts
          </div>
          <section className="grid">
            {visible.map(c => <ContactCard key={c.id} contact={c} onOpen={setActive} />)}
          </section>
        </>
      )}

      <ContactModal contact={active} onClose={()=>setActive(null)} />
    </div>
  )
}
