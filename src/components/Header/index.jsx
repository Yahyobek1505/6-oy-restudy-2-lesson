import React from 'react'
import './index.css'
function Header() {
  return (
    <>
      <div className="nav">
      <h1>BookNomy.uz</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Authors</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
      <div className="link">
      <button className='login'>Login</button>
      <button className='sign'>Sign Up</button>
      </div>
      </div>
    </>
  )
}

export default Header

