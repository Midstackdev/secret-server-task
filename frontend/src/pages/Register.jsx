import React from 'react'

const Register = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Register</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">Fullname</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">Email</label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
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
