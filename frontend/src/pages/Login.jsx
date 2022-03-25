import React from 'react'

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Login</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">Email</label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
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
