import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }
  return (
    <>
    <div>NotFound Page</div>
    <button onClick={handleClick}>Go to Home</button>
    </>
  )
}

export default NotFound