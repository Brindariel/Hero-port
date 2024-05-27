"use client";

import React, { useEffect ,useTransition, useState} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA =[
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 font-serif">
        <li className="flex flex-row font-serif">Node.js
          <Image className="ml-2" priority alt=" " src="/Images/node-js-svgrepo-com.svg" height={32} width={32}/>
        </li>
        <li className="flex flex-row font-serif">JavaScript
        <Image className="ml-2" priority alt=" " src="/Images/javascript-svgrepo-com.svg" height={30} width={30}/>
        </li>
        <li className="flex flex-row font-serif">React
        <Image className="ml-2" priority alt=" " src="/Images/reactjs-svgrepo-com.svg" height={32} width={32}/>
        </li>
        <li className="flex flex-row font-serif">PHP
        <Image className="ml-2" priority alt=" " src="/Images/php-svgrepo-com.svg" height={32} width={32}/>
        </li>
        <li className="flex flex-row font-serif">HTML
        <Image className="ml-2" priority alt=" " src="/Images/html-5-svgrepo-com.svg" height={32} width={32}/>
        </li>
        <li className="flex flex-row font-serif">NEXT.JS
        <Image className="ml-2" priority alt=" " src="/Images/nextjs-icon-svgrepo-com.svg" height={32} width={32}/>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 font-serif">
        <li>Bulacan State University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 font-serif">
        <li>digital models of IP Networks and IoT Systems using Cisco Packet Tracer.</li>
      </ul>
    ),
  },
];


const About =() => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, []);;



  return (
    <section id="About" className="text-white">
        <div className="p-4 border-2 border-transparent
          w-full md:w-3/4 
          lg:w-2/3 xl:w-1/2 mx-auto mt-25" data-aos="fade-up">
            <h1 className="text-5xl font-serif text-white mb-3">About Me</h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white font-serif">
              I am a full stack web developer with a 
              passion for creating interactive and responsive
              web applications. I have experience working with
                JavaScript, React, Redux, Node.js, Express, PostgreSQL, 
                Sequelize, HTML, CSS, and Git. I am a quick learner and 
                I am always looking to expand my knowledge and skill set. 
                I am a team player and I am excited to work with others to 
                create amazing applications.
            </p>
            <div className=" flex flex-row gap-2 mb-10 mt-3">
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
              <motion.div initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
                        whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5, ease: "easeInOut" } }}>
                <Link href="https://www.facebook.com/dariel.brindariel">
                    <Image priority src="/Images/instagram-1-svgrepo-com.svg" height={32} width={32} alt="Follow"/>
                </Link>
              </motion.div> 
              </div>
          </div>
          <div data-aos="fade-right" className="mx-auto md:grid md:grid-cols-2 gap-8 items-center ml-5 py-8 px-4 xl:gap-16 sm:py-16">
              <Image alt="Skills  Images" className="mx-auto"src="/images/Dev-hero.gif" width={500} height={500} />
              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-5xl font-serif text-white mb-4"> Skills</h2>
                  <div className="flex flex-row justify-start mt-8">
                  <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                      >
                        Skills
                    </TabButton>
                    <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
              </div>
              <div className="mt-2 ">
                  {TAB_DATA.find((t) => t.id === tab).content}
               </div>
            </div>
          </div>
    </section>
  );
};

export default About;