import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Service1 from '../components/Service1'
import CurvedLoop from '../components/CurvedLoop'
import Services2 from '../components/Services2'
import Gallary from '../components/Gallary'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>

{/* <CurvedLoop marqueeText="Welcome to React Bits ✦" /> */}
{/* 
<CurvedLoop 
  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
  speed={3}
  curveAmount={0}
  direction="right"
  interactive={true}
  className="custom-text-style text-black bg-red-500 absolute z-20"
/> */}
{/* 
<CurvedLoop 
  marqueeText="Smooth Curved Animation"
  speed={1}
  curveAmount={300}
  interactive={false}
/> */}
      <About/>
      <Services/>
      {/* <Service1/> */}
      <Services2/>
      {/* <Gallary/> */}
      {/* <ContactUs/> */}
      <Footer/>
    </div>
  )
}

export default Home