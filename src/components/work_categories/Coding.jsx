import React from 'react'
import { PROJECTS } from '../../constants';


const Coding = () => {
  return (
    <div>
       <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      
    {PROJECTS.map((pro, index) => (
        <div className="space-y-4" key={index}>
        
        <h3 className="text-2xl font-bold leading-tight text-blue_text">
          {pro.title}
        </h3>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          {pro.description}
        </p>
        <div>
            
        {pro.technologies.map((tech, index) => (
                            <a
                              key={index}
                              className="mr-3 text-sm font-medium uppercase text-gray-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href="/tags/next-js"
                            >
                              [{tech}]
                            </a>
                          ))}
            
        </div>
        
      </div>
    ))}
      

      

      
    </div>
     </div>
    </div>
  )
}

export default Coding