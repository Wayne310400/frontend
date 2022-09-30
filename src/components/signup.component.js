import React, { useState } from 'react'

export default function SignUp() {
    const [idReg, setIdReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [identityReg, setIdentityReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Health/Doctor card ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter card ID"
            onChange={(e) => {setIdReg(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control" 
            placeholder="Enter username" 
            onChange={(e) => {setUsernameReg(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label>Identity</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter identity"
            onChange={(e) => {setIdentityReg(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {setPasswordReg(e.target.value)}}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )

}