"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const About =() => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []);;

 const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};
const value = 3.5;
  return (
    <div>
       <div className="p-4 border-2 border-transparent
         w-full md:w-3/4 
         lg:w-2/3 xl:w-1/2 mx-auto mt-25" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white">
        I am a full stack web developer with a 
        passion for creating interactive and responsive
         web applications. I have experience working with
          JavaScript, React, Redux, Node.js, Express, PostgreSQL, 
          Sequelize, HTML, CSS, and Git. I am a quick learner and 
          I am always looking to expand my knowledge and skill set. 
          I am a team player and I am excited to work with others to 
          create amazing applications.
      </p>
    </div>
    <div className=" flex flex-row gap-2 ">
      <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5, ease: "easeInOut" } }}>
        <Link href="https://github.com/Brindariel">
            <Image priority src="/Images/github-icon.svg" height={32} width={32} alt="Follow"/>
        </Link>
      </motion.div>
      <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5, ease: "easeInOut" } }}>
         <Link href="https://www.linkedin.com/in/dariel-laguador-253aa0195/">
            <Image priority src="/Images/linkedin-icon.svg" height={32} width={32} alt="Follow"/>
         </Link>
      </motion.div>
       <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5, ease: "easeInOut" } }}>
        <Link href="https://www.facebook.com/dariel.brindariel">
            <Image priority src="/Images/facebook-app-round-white-icon.svg" height={32} width={32} alt="Follow"/>
        </Link>
       </motion.div> 
      </div>
    </div>
   
  );
};

export default About;