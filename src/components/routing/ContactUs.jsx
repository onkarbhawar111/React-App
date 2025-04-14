import React from 'react'
import { Outlet } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
      <Outlet />
      <div>Contact US Page</div>
    </>
  )
}

export default ContactUs