import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function JumboSecret({ secret, isPrivate }) {
  const history = useHistory()

  return (
    <div className="mt-4 p-5 bg-white rounded">
        <h1>Secret code: {secret._id}</h1>
        <p>{secret.text}</p>
        <p>Posted on: {new Date(secret.createdAt).toDateString()}</p>
        <p>
        { isPrivate &&
          <Link className="btn btn-lg btn-primary" to="" onClick={() => history.goBack()}>&laquo; Go Back</Link>
        }
        </p>
    </div>
  )
}
