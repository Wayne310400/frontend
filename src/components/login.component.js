import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login(){
    const navigate = useNavigate()
    const [body, setBody] = useState({ id: '', password: '' })

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        axios.post('http://localhost:7001/login', body)
        .then(({data}) => {
            localStorage.setItem('auth', 'yes')
            navigate('/home')
            console.log(data)
        })
        .catch(({response}) => {
            console.log(response)
        })
    }

    return (
        <div>
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Health/Doctor card ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter card ID"
            autoComplete="username"
            value={body.id}
            onChange={inputChange}
            name='id'
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            autoComplete="current-password"
            value={body.password}
            onChange={inputChange}
            name='password'
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
        <div>
        <p className="forgot-password text-right">
          Don't have an account? <a href="/sign-up">Sign Up!</a>
        </p>
        </div>
      </form>
      </div>
    )

}