import React from 'react'
import "../Header/Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className='btngrp'>
            <button className='login'>Login</button>
            <button className='signup'>Signup</button>
        </div>
    </div>
  )
}
