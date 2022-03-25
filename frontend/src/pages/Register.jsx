import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import MessageBox from '../components/MessageBox'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        await axios.post('users/register', {name, email, password})
        await history.push('/login')
        window.location.reload()
    } catch (error) {
        console.log(error.response.data.message)
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
              <h2 className="p-3">Register</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Fullname</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">Email</label>
                  <input 
                    type="text" 
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
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary text-light">Register</button>
                </div>
                <div className="row mt-4">
						      <p>Have an account? <a href="/login">Login Here</a></p>
					      </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
