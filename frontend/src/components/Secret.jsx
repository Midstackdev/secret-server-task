import React from 'react'
import { Link } from 'react-router-dom'

export default function Secret({ getData, value, secret, remove, share }) {
  return (
    <>
        <div className="col">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Secret no. {value}</h5>
                <p className="card-text">{secret.text}</p>
                <p>{new Date(secret.createdAt).toDateString()}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/secret/${secret._id}`} className="card-link">View</Link>
                    {/* <a href="/#" className="card-link" onClick={getData}>Edit</a> */}
                    <Link to="" className="card-link" onClick={share}>Sahre</Link>
                    <Link to="" className="card-link" onClick={remove}>Delete</Link>
                </div>
            </div>
        </div>
    </>
  )
}
