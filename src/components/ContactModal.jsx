import React from 'react'
export default function ContactModal({ contact, onClose }) {
  if (!contact) return null
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <header>
          <strong style={{display:'flex', alignItems:'center', gap:8}}>
            <span className="badge">Contact</span> {contact.name} <small className="dim">(@{contact.username})</small>
          </strong>
          <button className="close" aria-label="Close" onClick={onClose}>×</button>
        </header>
        <div className="content">
          <div className="kv"><div className="k">Email</div><div className="v"><a className="link" href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
          <div className="kv"><div className="k">Phone</div><div className="v"><a className="link" href={`tel:${contact.phone}`}>{contact.phone}</a></div></div>
          <div className="kv"><div className="k">Company</div><div className="v">{contact.company?.name} <small className="dim">— {contact.company?.catchPhrase}</small></div></div>
          <div className="kv"><div className="k">Address</div><div className="v">{contact.address?.suite}, {contact.address?.street}, {contact.address?.city} {contact.address?.zipcode}</div></div>
          <div className="kv"><div className="k">Geo</div><div className="v">lat {contact.address?.geo?.lat}, lng {contact.address?.geo?.lng}</div></div>
          <div className="kv"><div className="k">Website</div><div className="v"><a className="link" href={`https://${contact.website}`} target="_blank" rel="noreferrer">{contact.website}</a></div></div>
          <div className="footer-note">Data source: jsonplaceholder.typicode.com/users</div>
        </div>
      </div>
    </div>
  )
}
