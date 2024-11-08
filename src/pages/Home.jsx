import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'


const Home = () => {
  return (
    <>  
        
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default Home