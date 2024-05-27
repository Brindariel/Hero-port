"use client";

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

function HeroSection() {
  
  return (
    <section >
      <div className=" 
        grid 
        grid-cols-1
        sm:grid-cols-30"
        >
          <div className="
              col-span-7 
              place-self-center 
              text-center 
              sm:text-center ">
                 
              <motion.div className=" rounded-full  w-[200px] h-[200px] 
                 lg:w-[200px] lg:h-[200px] relative items-center sm:items-center 
                  ml-auto mr-auto border-white"
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              
                 >
                    <Image
                        src="/images/Hero-picture.jpg"
                        alt="Hero Image"
                        className=" rounded-full w-[200px] h-[200px] 
                        lg:w-[200px] lg:h-[200px] relative place-self-center"
                        width={300}
                        height={300}
                        border/>
               </motion.div>
               <h1 className=' text-white  mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
                 <motion.span initial ="hidden" animate = "visible" variants={{
                  hidden:{
                    scale: 8,
                    opacity: 0
                  },
                  visible:{
                    scale: 1,
                    opacity: 1,
                    transition:{
                      delay: .4
                    }
                  },
                 }} className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 '>
                  Dariel Brin</motion.span>
                  <br></br>
                  <TypeAnimation className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 ' 
                       sequence={[
                        'SQL DEV',
                        1000,
                        'FRONTEND DEV',
                        1000,
                        'DOTNET DEV',
                        1000,
                        'BACKEND DEV',
                        1000
                       ]}
                       wrapper="span"
                       speed={40}
                       repeat={Infinity}  // infinity  animation text 
                  />
               </h1>
               <div>
               <Link href="https://www.linkedin.com/in/dariel-laguador-253aa0195/" passHref>
                   <motion.button className="
                          px-6 py-3 
                          w-full
                          sm:w-fit
                          rounded-full mr-4
                          bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                          hover:bg-slate-200
                          text-white
                        "
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }} // animation for button
                        >
                          Hire Me
                        </motion.button>
                      </Link>
                      <a href="/Expired.pdf" download>
                      <motion.button className=" 
                          px-6 py-3 
                          w-full
                          sm:w-fit
                          rounded-full mr-4
                          bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                          hover:bg-slate-200
                          text-white
                          mt-2
                        "
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}// animation for button
                        >
                          Download CV
                        </motion.button>
                    </a>
                      <div className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-25'>
                        <h3 className='font-bold font-serif '>
                          Welcome To My Protfolio
                        </h3>
                        <p className='text-base lg:text-lg mb-32 font-serif'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptuous.
                        </p>
                      </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default HeroSection