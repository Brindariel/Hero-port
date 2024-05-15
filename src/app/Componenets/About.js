"use client";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);;
  return (
    <div className="p-4 border-2
     border-gray-300
      md:border-gray-400
       lg:border-gray-500
        xl:border-gray-600 
         w-full md:w-3/4 
         lg:w-2/3 xl:w-1/2 mx-auto mt-40" data-aos="fade-up">
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
      </p>
    </div>
  )
}

export default About