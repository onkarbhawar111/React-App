import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='bg-blue-900 text-white flex justify-between pb-3 '>
            <span className='text-2xl'>SofTech</span>
            <ul className='flex space-x-3 justify-end'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className='bg-amber-100 h-50'>One Solution of your Tech Problems</div>
    </div>
  )
}

export default NavBar