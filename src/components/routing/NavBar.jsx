import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <ul>
                {/* <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact-us"><li>Contact Us</li></a>
                <a href="/user"><li>User</li></a> */}

                {/* <Link to='/'><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact-us"><li>Contact US</li></Link>
                <Link to="/user"><li>User</li></Link> */}

                <NavLink className={(e)=> e.isActive ? 'red' : ''} to='/'><li>Home</li></NavLink>
                <NavLink className={(e)=> e.isActive ? 'red' : ''} to='/about'><li>About</li></NavLink>
                <NavLink className={(e)=> e.isActive ? 'red' : ''} to='/contact-us'><li>Contact US</li></NavLink>
                <NavLink className={(e)=> e.isActive ? 'red' : ''} to='/user'><li>User</li></NavLink>
            </ul>
        </div>
    )
}

export default NavBar