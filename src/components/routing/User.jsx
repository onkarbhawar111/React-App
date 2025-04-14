import React from 'react'
import { Navigate } from 'react-router-dom'

const User = () => {

  const isLogin = true;
  return (
    <>
      <div>User Page</div>
      <div>{isLogin ? <div>You are Logged in</div> : <Navigate to='/' />}</div>
    </>
  )
}

export default User