import React from "react";
import { EXPERIENCES } from "../constants/index.js";
import {  motion } from "framer-motion";

const Experience = () => {
  return (
    <section className=" dark:bg-gray-900 my-8">
      <motion.h2 
      whileInView={{ opacity:1,y:0,x:0}}
      initial={{ opacity:0,y:-50 ,x:150}}
      transition={{ duration:1.5,delay:0.5 }}
      className="text-4xl font-extrabold text-blue_text text-center underline underline-offset-3 decoration-8 decoration-text-blue_text">
        Experience
      </motion.h2>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-20">
        <ul>
          {EXPERIENCES.map((exp, index) => (
            <li className="py-12 list-none" key={index}>
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <motion.dl
                    whileInView={{ opacity:1,x:0 }}
                    initial={{ opacity:0,x:-100 }}
                    transition={{ duration:1.5,delay:0.5 }}
                    >
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {exp.year}
                    </dd>
                  </motion.dl>
                  <motion.div
                  whileInView={{ opacity:1,x:0 }}
                  initial={{ opacity:0,x:100 }}
                  transition={{ duration:1.5,delay:0.5 }}
                   className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a
                            className="text-blue_text"
                            href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0"
                          >
                            {exp.role}
                          </a>
                        </h2>
                        <div className="flex flex-wrap">
                          {exp.technologies.map((tech, index) => (
                            <a
                              key={index}
                              className="mr-3 text-sm font-medium uppercase text-gray-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/next-js"
                            >
                              {tech}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {exp.description}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
