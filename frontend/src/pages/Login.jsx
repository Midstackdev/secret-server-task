import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import MessageBox from '../components/MessageBox'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)
  const history = useHistory()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        const { data } = await axios.post('users/login', {email, password})
        setUser(data.accessToken)
        // console.log(data)
        await localStorage.setItem('user', JSON.stringify(data))
        await history.push('/')
        window.location.reload()
    } catch (error) {
      let message = error.response && error.response.data.message ?  error.response.data.message : error.response
      setErrorMessage(message)
    }
  }

  return (
    <div className="container">
      <div className='mt-4'>
        {
          errorMessage && <MessageBox variant="danger">{errorMessage}</MessageBox>
        }
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label htmlFor="remember" className="form-label">Remember Me</label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary text-light">Login</button>
                </div>
                <div className="row mt-4">
                    <p>Don't have an account? <a href="/register">Register Here</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
