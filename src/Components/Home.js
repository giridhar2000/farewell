import React from 'react'
import photo from '../img/photo.jpeg'

export default function Home() {
  return (
    <div>
        <div className='photo'>
                <img src={photo} alt='GroupPhoto'/>
        </div>
    </div>
  )
}
