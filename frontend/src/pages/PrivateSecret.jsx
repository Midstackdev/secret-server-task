import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import JumboSecret from '../components/JumboSecret'
import Navbar from '../components/Navbar'

export default function PrivateSecret() {
  const location = useLocation()
  const path = (location.pathname.split('/')[2])
  const [secret, setSecret] = useState(null)
  const params = useParams()
  const { id } = params;

  useEffect(() => {
      const getPost = async () => {
          const { data } = await axios.get(`secret/${path}`)
          setSecret(data)
      }
      getPost()
  }, [path])

  return (
    <div className="container">
      <Navbar />
      {secret && <JumboSecret secret={secret} isPrivate={path === id}/>}
    </div>
  )
}
