import React from 'react'
import h1 from '../assets/Hero/H1.jpg'
import hero1 from '../assets/phtos/hero1.jpg'
const Hero = () => {
  return (
    <div>
      <div className='h-[100vh] w-[100%] bg-green-400'>
       <img className='h-[100%] w-[100%] object-cover' src={h1} alt="" />
      </div>
    </div>
  )
}

export default Hero