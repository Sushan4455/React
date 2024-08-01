import React, { useState, useContext } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(useContext)

const handleSubmit = (e) => {
    // prevent the page from refreshing

  e.preventDefault()
  setUser({username, setUsername})
}
  return (
    <div>
        <h1>Login</h1> 
        <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='User Name'
        />
        {" "}
        <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        />

        <button
        onClick={handleSubmit}>Log In</button>
        </div>
  )
}

export default Login