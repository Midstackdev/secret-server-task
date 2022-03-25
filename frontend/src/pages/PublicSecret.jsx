import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import JumboSecret from '../components/JumboSecret'
import MessageBox from '../components/MessageBox'

export default function PublicSecret() {
  const location = useLocation()
  const path = (location.pathname.split('/')[2])
  const [secret, setSecret] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
      const getPost = async () => {
        try {
          const { data } = await axios.get(`secret/share/${path}`)
          setSecret(data)
        } catch (error) {
          console.log(error.response.data.message)
          let message = error.response && error.response.data.message ?  error.response.data.message : error.response
          setErrorMessage(message)
        }
      }
      getPost()
  }, [path])

  return (
    <div className="container">
      <div className="mt-4">
        { errorMessage && <MessageBox>{errorMessage}</MessageBox>}
      </div>
      {secret && <JumboSecret secret={secret}/>}
    </div>
  )
}
