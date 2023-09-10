import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from "../../Assets/img/img1.jpeg"
import img2 from "../../Assets/img/img2.jpeg"
import img3 from "../../Assets/img/img3.jpeg"
import img4 from "../../Assets/img/img4.jpeg"
import img5 from "../../Assets/img/img5.jpeg"
import img6 from "../../Assets/img/img6.jpeg"
import img7 from "../../Assets/img/img7.jpeg"
import img8 from "../../Assets/img/img8.jpeg"
import img9 from "../../Assets/img/img9.jpeg"
import img10 from "../../Assets/img/img10.jpeg"
import "../Home/Home.css"

export default function Home() {
  return (
    <div style={{ width: "100%" }}>

      <div className='marquees'>
        <Marquee>
          <div>
            <img src={img1} alt='img' />
          </div>
          <div>
            <img src={img2} alt='img' />
          </div>
          <div>
            <img src={img3} alt='img' />
          </div>
          <div>
            <img src={img4} alt='img' />
          </div>
          <div>
            <img src={img5} alt='img' />
          </div>
        </Marquee>
      </div>
      <div>
        <Marquee className='marquees'>
          <div>
            <img src={img6} alt='img' />
          </div>
          <div>
            <img src={img7} alt='img' />
          </div>
          <div>
            <img src={img8} alt='img' />
          </div>
          <div>
            <img src={img9} alt='img' />
          </div>
          <div>
            <img src={img10} alt='img' />
          </div>

        </Marquee>
      </div>
    </div>
  )
}
