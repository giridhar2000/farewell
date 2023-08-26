import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [days, setDays] = useState(0)

  useEffect(()=>{
    const targetdate = new Date("1 oct 2023");
    const currentdate = new Date();
    const totalSeconds = (targetdate - currentdate) / 1000

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)))
  }, []);

  function formatTime(time){
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className='container'>
      <div className='title'>
          <h2>Trip to Wayanad</h2>
          <h3>Sept. 30<sup>th</sup>, 2023</h3>
          <h5>{days} Days to go!</h5>
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
