import React from "react";
import rightImage from "../assets/about.jpg";
import {ABOUT_TEXT} from "../constants/index.js";
import {delay, motion } from "framer-motion";

const About = () => {
  return (
    <section className=" dark:bg-gray-900">
      <motion.h2 
      whileInView={{ opacity:1,y:0,x:0}}
      initial={{ opacity:0,y:-50 ,x:-150}}
      transition={{ duration:1.5,delay:0.5 }}
      className="text-4xl font-extrabold text-blue_text text-center underline underline-offset-3 decoration-8 decoration-text-blue_text ">
        About Me
      </motion.h2>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div 
        whileInView={{ opacity: 1 ,x:0}}
        initial={{ opacity: 0,x:100 }}
        transition={{ duration:1,delay:0.5 }}
        className=" lg:mt-0 lg:col-span-5 lg:flex">
        <img className="h-auto max-w-full rounded-lg " src={rightImage} alt="" />
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="ml-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue_text">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
           {ABOUT_TEXT}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
