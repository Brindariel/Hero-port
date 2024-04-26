"use client";

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share';
import {
  GithubShareButton,
  GithubIcon,
} from 'next-share';
function HeroSection() {
  return (
    <section>
      <div className=" 
        grid 
        grid-cols-1
        sm:grid-cols-30">
          <div className="
              col-span-7 
              place-self-center 
              text-center 
              sm:text-center mt-10">
                 
              <div className="rounded-full  w-[200px] h-[200px] 
                 lg:w-[200px] lg:h-[200px] relative items-center sm:items-center mt-12 ml-auto mr-auto">
                    <Image
                        src="/images/Hero-picture.jpg"
                        alt="Hero Image"
                        className=" rounded-full w-[200px] h-[200px] 
                        lg:w-[200px] lg:h-[200px] relative place-self-center "
                        width={300}
                        height={300}
                        border/>
               </div>
               <h1 className=' text-white mt-8 mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
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
                  <TypeAnimation className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300' 
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
                       repeat={Infinity}
                  />
               </h1>
                  <div >
                   
                  </div>
            </div>
      </div>
    </section>
  );
};

export default HeroSection