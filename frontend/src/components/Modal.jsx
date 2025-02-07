import React from 'react'

export default function Modal({ hide }) {
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }
  return (
    <div className="modal show fade" style={modalStyle}>
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hide}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>
  )
}
