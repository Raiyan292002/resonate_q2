import React from 'react'
export default function ContactCard({ contact, onOpen }) {
  const initials = contact.name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase()
  return (
    <article className="card" role="button" onClick={() => onOpen(contact)}>
      <div className="row">
        <div className="avatar" aria-hidden>{initials || '?'}</div>
        <div style={{display:'grid', gap:4}}>
          <div className="name">{contact.name}</div>
          <div className="meta">@{contact.username} • <span className="badge">{contact.address?.city}</span></div>
        </div>
      </div>
      <div className="contact-lines">
        <div className="line"><svg className="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.2c1.2 2.3 3 4.2 5.3 5.3l1.8-1.8c.3-.3.8-.3 1.2-.2c1 .3 2 .5 3 .5c.5 0 .9.4.9.9V18c0 .5-.4.9-.9.9C10.1 18.9 5.1 13.9 5.1 7.8c0-.5.4-.9.9-.9h3.1c.5 0 .9.4.9.9c0 1 .2 2 .5 3c.1.4.1.8-.2 1.2l-1.7 1.7Z"/></svg>
          <a className="link" href={`tel:${contact.phone}`} onClick={e=>e.stopPropagation()}>{contact.phone}</a></div>
        <div className="line"><svg className="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4l-8 5L4 8V6l8 5l8-5z"/></svg>
          <a className="link" href={`mailto:${contact.email}`} onClick={e=>e.stopPropagation()}>{contact.email}</a></div>
        <div className="line"><svg className="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9m0 16.2A7.2 7.2 0 0 1 4.8 12c0-.66.09-1.29.26-1.89l3.01 3.01A3.6 3.6 0 0 0 12 15.6v3.6m5.63-2.63A7.17 7.17 0 0 1 12 19.2V15.6a3.6 3.6 0 0 0 3.6-3.6c0-.54-.12-1.06-.33-1.52l3.1-3.1a7.16 7.16 0 0 1 .33 2.22a7.2 7.2 0 0 1-1.07 3.77M12 6.6a3.6 3.6 0 0 0-3.6 3.6c0 .54.12 1.06.33 1.52L5.63 14.5A7.2 7.2 0 0 1 4.8 12A7.2 7.2 0 0 1 12 4.8c1.54 0 2.96.46 4.15 1.25l-2.55 2.55c-.46-.21-.98-.33-1.6-.33Z"/></svg>
          <a className="link" href={`https://${contact.website}`} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>{contact.website}</a></div>
      </div>
    </article>
  )
}
