import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/star"}>star</Link></li>

        </ul>
    </div>
  )
}

export default Nav