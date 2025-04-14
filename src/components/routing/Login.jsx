import React from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
    const params = useParams()
  return (
    <div>
        <h1>Hello {params.username}</h1>
    </div>
  )
}

export default Login