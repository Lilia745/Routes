import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header