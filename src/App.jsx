import React, { useState, useEffect } from 'react';

import './App.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { animate, motion, useViewportScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


import profile from "./assets/Profile.jpg"
import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"
import project3 from "./assets/project3.png"
import project4 from "./assets/project4.png"
import project5 from "./assets/project5.png"

import { Opacity, Scale } from '@mui/icons-material';
import { duration } from '@mui/material';



function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }
};



function App() {
  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        ease: "easeInOut",
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };




  return (

    < >

      <header href="#header">
        <motion.div transition={{
          type: "spring",
          stiffness: "150",
          delay: 0.6,
          duration: 0.5,
        }} initial={{
          y: -250,

        }} animate={{
          y: 0
        }} className='container m-auto px-4 py-6 '>
          <div className='flex justify-between items-center '>
            <div>
              <h1 variants={typingAnimation}
                initial="hidden"
                animate="visible" className='font-bold text-xl' >Prakash Portfolio </h1>
            </div>
            <div>
              <ul className='flex flex-col md:flex-row gap-6 ' >
                <li>
                  <a href="#projects" className='text-gray-400   hover:text-white cursor-pointer    '> projects </a>
                </li>
                <li>
                  <a href="#Technologies" className='text-gray-400 hover:text-white cursor-pointer  '> Technologies </a>
                </li>
                <li>
                  <a href="#About me" className='text-gray-400 hover:text-white cursor-pointer  '> About me </a>
                </li>
                <li>
                  <a href="#Contact me" className='text-gray-400 hover:text-white cursor-pointer  '> contact me </a>
                </li>
              </ul>
            </div>
          </div>

        </motion.div>
      </header>
      <main>
        <section>
          < motion.div initial={{ x: "100vw" }} animate={{ x: "0" }} transition={{
            delay: 0.5, type: "spring"
          }} className='container m-auto px-4  py-10 flex flex-col sm:flex-row  gap-6 sticky'>
            <div >

              <h1 className='text-bold text-4xl'> Hello,I'm Siva Prakash </h1>
              <h1 className='font-semibold text-4xl mt-2  gradiant-text running-text '> Front-end-Developer.... </h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ ease: "easeOut", duration: 2, delay: 2 }} className='mt-6 text-bold text-2xl text-gray-400'>Passionate and detail-oriented Frontend Developer, equipped with foundational knowledge in Front-end Technologies</motion.p>
              {/* <button className=' mt-12 p-3 px-4 py-2 bg-gradient-to-t from-blue-800 to-cyan-500 rounded-full  hover:from-blue-700 hover:to-cyan-700 '> Download Resume</button>
                <button className=' mt-12 p-3 px-4 py-2 bg-gradient-to-t from-blue-800 to-cyan-500 rounded-full  hover:from-blue-700 hover:to-cyan-700 '> Download Resume</button> */}
              <div className='flex  sm:flex-row gap-4'>
                <div class="flex flex-col sm:flex-row gap-7 space-x-4 mt-20">
                  <motion.a whileHover={{
                    scale: 1.2,
                    originx: 0, textShadow: "0px 0px 8px rgb(255,255,255)"
                  }} transition={{ type: "spring", stiffness: 130 }} href="mailto:prakashorton6@gmail.com" class="inline-block px-6 py-2 rounded-3xl bg-purple-900 text-white hover:bg-blue-600" target="_blank">
                    <FaWhatsapp style={{ fontSize: '25px', color: 'white' }} /> contact with
                  </motion.a>

                  <motion.a whileHover={{
                    scale: 1.2, originx: 0, textShadow: "0px 0px 8px rgb(255,255,255)"
                  }} transition={{ type: "spring", stiffness: 130 }} href="https://www.linkedin.com/in/siva-prakash-a62572282/" class="inline-block px-6 py-2 rounded-3xl bg-purple-900 text-white hover:bg-blue-600" target="linkedin">
                    <FaLinkedin style={{ fontSize: '25px', color: 'white' }} /> connect with
                  </motion.a>

                  { <motion.a whileHover={{ scale: 1.2, originx: 0, textShadow: "0px 0px 8px rgb(255,255,255)" }} transition={{ type: "spring", stiffness: 130 }} href="https://drive.google.com/file/d/1oeRC8KQpY8gt4oB8KuPkxwi35moqJT3A/view" class="inline-block px-6 py-2 rounded-3xl bg-purple-900 text-white font-semibold hover:bg-blue-600" target="_blank">
                    <IoMdCloudDownload style={{ fontSize: '25px', color: 'white' }} /> Download CV
                  </motion.a> }
                </div>


              </div>


            </div>
            <div >
              <div className='img '><img src={profile} width={300} className="Profile"  ></img> </div>
            </div>
          </motion.div>
        </section>







        {/* project */}
        <section id='projects flex flex-col sm:flex-row md:flex-row gap-4" '>
          <section id='projects' class="flex flex-col gap-4">
            <motion.div initial={{ y: "100vw" }} animate={{ y: "0" }} transition={{ delay: 0.5, type: "spring" }} className="container mx-auto px-4 py-12 ">
              <h2 className='font-bold text-2xl'>Projects</h2>
              <div className="flex flex-col sm:flex-row gap-5 mt-16">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className='border rounded-md p-5'>
                  <img src={project1} alt="Project 1" />
                  <h3 className='text-2xl font-semibold mt-5'>Description</h3>
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ ease: "easeOut", duration: 2, delay: 2 }} className='text-gray-400 text-sm mt-2'>
                    The Project Title is CHATBOT FOR COLLEGE ENQUIRY. This project aims to guide students who have completed school and provide information about the college. Used Technologies: HTML, CSS, BOOTSTRAP, PYTHON, FLASK, JAVASCRIPT, JSON.
                  </motion.p>
                  <div className='flex justify-evenly'>
                    <button className='p-3 px-4 py-2 bg-gradient-to-t from-blue-800 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                    <button className='p-3 px-4 py-2 border rounded-full hover:border-blue-700'>Check out GitHub</button>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className='border rounded-md p-5'>
                  <img src={project2} alt="Project 2" />
                  <h3 className='text-2xl font-semibold mt-5'>Description</h3>
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ ease: "easeOut", duration: 2, delay: 2 }} className='text-gray-400 text-sm mt-2'>
                    Project Title is USERCARD. It's a React project used to know the user count and user details. Used Technologies: HTML, CSS, REACTJS.
                  </motion.p>
                  <div className='flex justify-evenly'>
                    <button className='p-3 px-4 py-2 bg-gradient-to-t from-blue-800 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                    <button className='p-3 px-4 py-2 border rounded-full hover:border-blue-700'>Check out GitHub</button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="container mx-auto px-4 py-12 flex flex-col sm:flex-row gap-5 mt-16">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className='border rounded-md p-5'>
                <img src={project3} alt="Project 3" />
                <h3 className='text-2xl font-semibold mt-5'>Description</h3>
                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ ease: "easeOut", duration: 2, delay: 2 }} className='text-gray-400 text-sm mt-2'>
                  Project Title is Website for ISRO. It's a website for ISRO using only HTML and CSS.
                </motion.p>
                <div className='flex justify-evenly'>
                  <button className='p-3 px-4 py-2 bg-gradient-to-t from-blue-800 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live Preview</button>
                  <button className='p-3 px-4 py-2 border rounded-full hover:border-blue-700'>Check out GitHub</button>
                </div>
              </motion.div>
               
              <motion.div whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }} className='border rounded-md p-5'>
                <img src={project5} />
                <h3 className='text-2xl font-semibold mt-5'>Discription </h3>
                <motion.p initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ ease: "easeOut", duration: 2, delay: 2 }} className='text-gray-400 text-sm mt-2'>The project Title is Portfolio its aims to updated my self to next step on my career it was easy way to show up my self and the requter team.Used Technology:HTML,CSS,TAILWINDCSS,REACT JS,FRAMMER MOTION </motion.p>
                <div className='flex justify-evenly '>
                  <button className='p-3 px-4 py-2 bg-gradient-to-t from-blue-800 to-cyan-500 rounded-full  hover:from-blue-700 hover:to-cyan-700 '> Live Preview</button>
                  <button className='p-3 px-4 py-2 border rounded-full hover:border-blue-700 '> check out github</button>
                </div>
              </motion.div>

            </div>
          </section>






          {/* Technologies */}

          <section id='Technologies' className='mt-12 flex flex-col sm:flex-row '>
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center" className="container m-auto px-4  py-10   ">
              <h2 className='font-bold text-2xl  '>Technologies</h2>

              <div className='mt-14'>
                <div className='flex justify-between'>
                  <h2 className='font-semibold text-lg'>HTML</h2>
                  <p className='text-gray-500'> Advanced</p>

                </div>
                <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />

                <div className='mt-6'>
                  <div className='flex justify-between'>
                    <h2 className='font-semibold text-lg'>CSS</h2>
                    <p className='text-gray-500'> Advanced</p>

                  </div>
                  <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />
                </div>
                <div className='mt-6'>
                  <div className='flex justify-between'>
                    <h2 className='font-semibold text-lg'>JavaScript</h2>
                    <p className='text-gray-500'> Advanced</p>

                  </div>
                  <span className='w-80 h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />
                </div >
                <div className='mt-6'>
                  <div className='flex justify-between'>
                    <h2 className='font-semibold text-lg'>Bootstrap,Tailwind CSS,Material UI</h2>
                    <p className='text-gray-500'> Advanced</p>

                  </div>
                  <span className='w-[80%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />
                </div>
                <div className='mt-6'>
                  <div className='flex justify-between'>
                    <h2 className='font-semibold text-lg'>React js</h2>
                    <p className='text-gray-500'> Beginer</p>

                  </div>
                  <span className='w-[60%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />
                  <div className='mt-6'>
                    <div className='flex justify-between'>
                      <h2 className='font-semibold text-lg'>JQuery</h2>
                      <p className='text-gray-500'> Beginer</p>

                    </div>
                    <span className='w-[50%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />

                  </div>
                  <div className='mt-6'>
                    <div className='flex justify-between'>
                      <h2 className='font-semibold text-lg'>Python</h2>
                      <p className='text-gray-500'> Bassics(OOPS)</p>

                    </div>
                    <span className='w-[70%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />

                  </div>
                  <div className='mt-6'>
                    <div className='flex justify-between'>
                      <h2 className='font-semibold text-lg'>Java</h2>
                      <p className='text-gray-500'> OOPS</p>

                    </div>
                    <span className='w-[60%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />

                  </div>
                  <div className='mt-6'>
                    <div className='flex justify-between'>
                      <h2 className='font-semibold text-lg'>UI-Development</h2>
                      <p className='text-gray-500'> Basics</p>

                    </div>
                    <span className='w-[65%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />

                  </div>
                  <div className='mt-6'>
                    <div className='flex justify-between'>
                      <h2 className='font-semibold text-lg'>MySql</h2>
                      <p className='text-gray-500'> Basics</p>

                    </div>
                    <span className='w-[55%] h-2 bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600 block rounded-md' />

                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Addtional Technologies */}
          <section className='flex flex-col sm:flex-row '>
            <div data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"

              data-aos-anchor-placement="top-center" className="container m-auto px-4  py-10  ">
              <h2 className='font-bold text-2xl  '>AditionalTechnologies & Skills </h2>
              <div className='flex justify-between'>
                <div>
                  <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5'>Git</p>
                </div>
                <div>
                  <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5'>wordpress</p>
                </div>
                <div>
                  <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5'> Quick Learning</p>
                </div>
                <div>
                  <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-5'>Team work</p>
                </div>
              </div>
            </div>
          </section>


          {/* About me */}
          <section id='About me' className='py-8 col-flex '>
            <div  className="container m-auto px-4   ">
              <h2 className='font-bold text-2xl  '>About me </h2>
              <div className='relative before:absolute before:top-0 before:left-4 before:bottom-0 before:w-1 before:bg-white'>
                <div className='mt-12 ml-9'>
                  <p>Completed My masters in Information Technology in Bishop Heber College 2022-2024 with 7.35 CGPA</p>
                </div>
                <div className='pt-10 ml-9'>
                  <p>Completed My Bachelor Degree in Information Technology in National  College 2019-2022 with 8.23 CGPA</p>
                </div>
                <div className='pt-10 ml-9'>
                  <p>Completed My HSC in St james Hr.sec.school palakurichy 2018-2019 with 60%</p>
                </div>
                <div className='pt-10 ml-9'>
                  <p>Completed My SSLC in St james Hr.sec.school palakurichy 2015-2016 with 82% </p>
                </div>

                


              </div>
            </div>
          </section>
          {/* Contact me */}

          <section class="py-8" id="Contact me">
          <div data-aos="fade-left"
     data-aos-anchor="Contact me-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
     data-aos-easing="ease-in" class="container mx-auto px-4">
              <h2 class="font-bold text-2xl mb-4">Get in touch</h2>
              <form action="https://api.web3forms.com/submit" method="POST" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
              
                <div class="mb-4">
                <input type="hidden" name="access_key" value="7a7a511a-2f55-4c46-9c21-b7276897eb67"/>
                  <label class="block text-white-700 text-sm font-bold mb-2" name="name">Name:</label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-white-700 text-sm font-bold mb-2" name="mail">E-mail:</label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="mail"
                    type="email"
                    placeholder="Your E-mail"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-white-700 text-sm font-bold mb-2" name="PhoneNo">Mobile No:</label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="PhoneNo"
                    type="tel"
                    placeholder="Your Mobile No"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-white-700 text-sm font-bold mb-2" name="message">Message:</label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>


          <section>
            <footer>

            </footer>
          </section>
          <button id="to-top-button"
            onclick="goToTop()"
            title="Go To Top"
            class="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">
            &uarr;
          </button>




        </section>


      </main>
    </>
  )
}

export default App
