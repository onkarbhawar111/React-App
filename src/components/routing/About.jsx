import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  function handleClick(){
      navigate('/')
  }
  return (
    <>
    <div>About Page</div>
    <button onClick={handleClick}>Go to Home</button>
    </>
  )
}

export default About