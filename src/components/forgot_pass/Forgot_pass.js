import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    // TODO: Implement password reset logic, for now, just simulate a reset sent
    setResetSent(true);
  };

  return (
    <>
      <div className="bg-light min-vh-100 d-flex align-items-center" style={{ backgroundColor: '#4CAF50' }}>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="text-center">Forgot Password</h3>
                </div>
                <div className="card-body">
                  {!resetSent ? (
                    <form onSubmit={handleResetPassword}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Reset Password</button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center">
                      <p>An email with password reset instructions has been sent to {email}.</p>
                    </div>
                  )}
                  <div className="text-center mt-3">
                    <Link to="/" className="link-secondary">Back to Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
