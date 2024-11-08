import React, { useState } from "react";
import Coding from "./work_categories/Coding";
import Graphic from "./work_categories/Graphic";

const Toggle = () => {
  // Stav pre aktívnu sekciu
  const [activeSection, setActiveSection] = useState('');

  const pages = [
    {
      id : 1,
      section: "coding",
      components: <Coding/>,
    },
    {
      id:2,
      section: "graphic",
      components: <Graphic/>,
    },
  ];

  // Funkcia na prepinanie sekcií
  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="text-white">
     
   

      
      <div className="obal flex flex-row justify-center">

        {pages.map((page, index) => (
          <div className="cover" key={page.id}>
          <button className="text-white bg-button_bg focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800" key={index} onClick={() => toggleSection(page.section)}>{page.section}</button>
          </div>
        ))}
      </div>

      {
          activeSection === '' && (
            <div>
               {<Coding/>}
            </div>
          )
        }

      {
      pages.map((page, index) => (
        <div key={index}>

        {
          activeSection === page.section ? (page.components) : ('')
        }
        
        
     


        </div>
      ))}

     
    </div>
  );
};

export default Toggle;
