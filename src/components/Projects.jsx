import React from 'react'
import Toggle from '../components/Toggle'
import {  motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="portfolio" className=" dark:bg-gray-900 my-8">
      <motion.h2 
       whileInView={{ opacity:1,y:0,x:0}}
       initial={{ opacity:0,y:-50 ,x:100}}
       transition={{ duration:1.5,delay:0.5 }}
      className="text-4xl font-extrabold text-blue_text text-center underline underline-offset-3 decoration-8 decoration-text-blue_text">
      Our work
      </motion.h2>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-20">

        <motion.div 
        whileInView={{ opacity:1,x:0}}
        initial={{ opacity:0,x:-100}}
        transition={{ duration:1.5,delay:0.5 }}
        className='text-center'>
          <Toggle/>
        </motion.div>
        
     
      </div>
    </section>
  )
}

export default Projects