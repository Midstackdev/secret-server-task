import React from 'react'

export default function Navbar() {
  return (
    <>
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link" href="/#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="/#">Logout</a>
        </li>
    </ul>
    </>
  )
}
