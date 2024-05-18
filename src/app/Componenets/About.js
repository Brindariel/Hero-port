"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
function About() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []);;
  return (
    <div>
       <div className="p-4 border-2 border-transparent
         w-full md:w-3/4 
         lg:w-2/3 xl:w-1/2 mx-auto mt-30" data-aos="fade-up">
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
      </p>
      <div className='flex flex-row justify-start mt-8'>
          <h1>
            
          </h1>
      </div>
    </div>
    </div>
   
  )
}

export default About