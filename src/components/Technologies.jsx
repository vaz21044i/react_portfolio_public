import React from 'react'

import { FaReact,FaLaravel,FaHtml5 } from "react-icons/fa";
import { MdOutlinePhp } from "react-icons/md";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import {  motion } from "framer-motion";

const animateList = (duration) =>({
  initial:{y:-10},
  animate:
  {
    y:[10,-10],
    transition:
    {
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse",
    }
  }
});


const Technologies = () => {
  return (
 
    <section className=" my-8 ">
      
    <motion.h2 
    whileInView={{ opacity:1,y:0 }}
    initial={{ opacity:0,y:-50 }}
    transition={{ duration:1.5 ,delay:0.5}}
    className="text-4xl font-extrabold text-blue_text text-center underline underline-offset-3 decoration-8 decoration-text-blue_text">
      Technologies
    </motion.h2>

    <motion.div 
      whileInView={{ opacity:1,x:0 }}
      initial={{ opacity:0,x:-160 }}
      transition={{ duration:3 }}
     className=" max-w-screen-xl px-4 py-20 mx-auto ">
           

        <ul className="flex w-full justify-between text-sm font-medium text-gray-900  max-sm:items-center max-sm:flex-col ">
            <motion.li variants={animateList(2.5)} initial="initial" animate="animate" className=" text-blue_text px-4 py-2 "><FaReact size={60}  /></motion.li>
            <motion.li variants={animateList(3)} initial="initial" animate="animate" className=" text-blue_text px-4 py-2 "><FaLaravel size={60} /></motion.li>
            <motion.li variants={animateList(4)} initial="initial" animate="animate"  className=" text-blue_text px-4 py-2 "><MdOutlinePhp size={60} /></motion.li>
            <motion.li variants={animateList(2)} initial="initial" animate="animate" className=" text-blue_text  px-4 py-2 "><FaHtml5 size={60} /></motion.li>
            <motion.li variants={animateList(6)} initial="initial" animate="animate" className=" text-blue_text px-4 py-2 "><FaCss3Alt size={60} /></motion.li>
            <motion.li variants={animateList(2.5)} initial="initial" animate="animate" className=" text-blue_text px-4 py-2 "><IoLogoJavascript size={60} /></motion.li>
            <motion.li variants={animateList(5)} initial="initial" animate="animate" className=" text-blue_text px-4 py-2 "><SiMysql size={60} /></motion.li>
        </ul>
    
    </motion.div>
  </section>
  
  )
}

export default Technologies