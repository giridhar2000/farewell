import React from 'react'

export default function Navbar() {
  return (
    <div className='container'>
      <div className='title'>
          <h2>CSE-A 2022 FAIRWELL</h2>
          <h3>July 16<sup>th</sup>, 2022</h3>
          <h5>18 Days to go!</h5>
      </div>
    <div className='navbar'>
      <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/story">Our Story</a></li>
          <li><a href="/photos">Photos</a></li>
          <li><a href="/travel">Travel</a></li>
      </ul>
      </div>
    </div>
  )
}
