import React from "react";
import rightImage from "../assets/about.jpg";


import { delay, motion } from "framer-motion";

const container = (delay) =>({
    hidden:{x:-100,opacity:0},
    visible:{
       x:0, 
       opacity:1,
       transition:{ duration:0.5,delay:delay}
      },
});

const Hero = () => {
  return (
    <section className=" dark:bg-gray-900">
    
      

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
           
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue_text"
          >
            Payments tool for software companies
          </motion.h1>

          <motion.p 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </motion.p>
     
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <motion.img
            initial={{ x:100,opacity:0 }}
            animate ={{ x:0 ,opacity:1}}
            transition={{ delay:1.5 }}
            className="h-auto max-w-full rounded-lg"
            src={rightImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
