import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ createSecret }) {
    const logout = async() => {
        await localStorage.removeItem('user')
        window.location.reload()
    }

  return (
    <>
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="" onClick={createSecret}>Create Secret</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="" onClick={logout}>Logout</Link>
        </li>
    </ul>
    </>
  )
}
