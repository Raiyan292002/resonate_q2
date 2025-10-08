import { useEffect, useMemo, useState } from 'react'
const API = 'https://jsonplaceholder.typicode.com/users'

export function useContacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cached = sessionStorage.getItem('contacts-cache')
    if (cached) {
      try {
        const { data, ts } = JSON.parse(cached)
        if (Date.now() - ts < 1000 * 60 * 60) {
          setContacts(data); setLoading(false); return
        }
      } catch {}
    }
    fetch(API)
      .then(r => { if (!r.ok) throw new Error('Failed to fetch contacts'); return r.json() })
      .then(data => { setContacts(data); sessionStorage.setItem('contacts-cache', JSON.stringify({ data, ts: Date.now() })) })
      .catch(e => setError(e.message || 'Unknown error'))
      .finally(() => setLoading(false))
  }, [])

  return { contacts, loading, error, refetch: () => {
    setLoading(true); setError(null);
    fetch(API).then(r=>r.json()).then(setContacts).catch(e=>setError(e.message)).finally(()=>setLoading(false))
  }}
}

export function useFiltered(contacts, query, city) {
  const q = query.trim().toLowerCase()
  return useMemo(() => {
    const base = q
      ? contacts.filter(c =>
          c.name.toLowerCase().includes(q) ||
          c.username.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.phone.toLowerCase().includes(q) ||
          c.company?.name?.toLowerCase().includes(q) ||
          c.website?.toLowerCase().includes(q) ||
          c.address?.city?.toLowerCase().includes(q)
        )
      : contacts
    return city ? base.filter(c => (c.address?.city || '') === city) : base
  }, [contacts, q, city])
}
