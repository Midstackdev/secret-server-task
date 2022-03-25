import axios from 'axios'
import React, { useRef } from 'react'

export default function CreateSecretModal({ hide, setSecrets }) {
    const text = useRef()

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(text.current.value === '') {
            alert('You cant submit an empty post')
            hide()
            return
        }
        try {
            const { data } = await axios.post('secret', { text: text.current.value})
            setSecrets((prev) => [...prev, data])
            hide()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="modal show fade" style={modalStyle}>
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" onClick={hide} aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <label htmlFor="comment">Secret:</label>
            <textarea 
                className="form-control" 
                rows="5" 
                id="comment" 
                name="text"
                ref={text}
                required
            ></textarea>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hide}>Close</button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    </div>
    </div>
  )
}
