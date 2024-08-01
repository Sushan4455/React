import React, { useContext } from 'react'

function Pro() {
    const {user} = useContext(useContext)
    if(!user) return <h1>Not Loggedin</h1>
  return (
    <div>Profile : {user.username}</div>
  )
}

export default Pro