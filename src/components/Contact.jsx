import React from 'react'

import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
function Contact() {
  return (
    <div className='bg-[#151414] text-[#FEFEFF]  '>
      <div className=' bg-[#151414]  text-[#FEFEFF]'>
        <div className='flex justify-center'>
        
          <h1 className='lg:text-7xl text-4xl md:mb-0 mb-6 lg:leading-normal font-semibold py-20   flex justify-center
          '><MdOutlineHorizontalRule className='lg:text-8xl  ' style={{ marginTop: '2px', marginBottom:'2px' }} />
          <span className='text-teal-400 pr-4'>GET </span>  IN TOUCH
          
          <MdOutlineHorizontalRule className='lg:text-8xl' lg:style={{ marginTop: '16px' }}/>
          </h1>
        </div>
      

        <div className='lg:flex  justify-around'>
          <div className=''>
              {/* <h1 className='lg:text-4xl text-2xl md:mb-4 mb-4 lg:leading-normal flex justify-center lg:pl-8 pl-12 '>
                If you have any queries or wanna join us, feel free to contact us

              </h1>
              <h1 className='lg:text-4xl text-3xl md:mb-4 mb-4 lg:leading-normal flex justify-center  '>
                feel free to contact us 

              </h1> */}
              <div className='flex justify-center'>

                <div>
                  <form className="mt-4 flex flex-col gap-4"> {/* Adjusted spacing */}
                    <label className="flex flex-col">
                      <span className="text-white font-medium mb-1">Name</span> {/* Adjusted spacing */}
                      <input
                        type="text"
                        name="name"
                        
                        placeholder="Enter your name"
                        
                        className="pic-bg py-3 lg:w-[450px] sm:w-[450px] w-[300px] px-4 placeholder:text-secondary text-black rounded-lg outline-none border border-white focus:border-primary focus:ring focus:ring-primary font-medium "
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-white font-medium mb-1">Email</span> {/* Adjusted spacing */}
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email id"
                      
                        className="pic-bg py-3 px-4 placeholder:text-secondary text-black rounded-lg outline-none border border-white focus:border-primary focus:ring focus:ring-primary font-medium"
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-white font-medium mb-1">Message</span> {/* Adjusted spacing */}
                      <textarea
                        rows={7}
                        name="message"
                        placeholder="Enter your Message"
                        className="pic-bg py-3 px-4 placeholder:text-secondary text-black rounded-lg outline-none border border-white focus:border-primary focus:ring focus:ring-primary font-medium"
                      />
                    </label>
                    <div className='flex justify-center'>
                    <button
                      type="submit"
                      className="bg-teal-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary border border-black hover:bg-teal-500 active:bg-[#FEFEFE] mb-2"
                    >
                      {"Send"}
                    </button>
                    </div>

                  </form>

                
                </div>
              </div>
            </div>
            <div className='All flex-col items-start'>
            <div className=' lg:pl-8 pl-5 md:  py-8 lg:text-right '>
              <h1 className=' lg:text-4xl text-3xl font-bold text-teal-600 flex lg:justify-start justify-center lg:pr-8 lg:mb-6'>
                Contact Information
              </h1>
              <div className='flex justify-center pl-5 py-2 lg:justify-start'>
                <MdOutlineMailOutline className='text-white text-2xl '/>
                <h1 className='px-2 ' >acesdypcoe@gmail.com</h1>

              </div>
              <div className=' lg:pl-6 flex justify-center  py-2 lg:justify-start mb-16'>
                <MdLocalPhone className='text-white text-2xl '/>
                <h1 className='px-2 ' >+91 9876543210</h1>
              </div>
              <div className='contact lg:justify-start flex-col items-start'>
                <p className='flex justify-center lg:flex lg:justify-start lg:pl-2 text-teal-600 mt-10 font-bold text-2xl'>
                  Socials
                </p>
                <div className='flex py-2 pr-8 lg:flex lg:justify-start justify-center lg:pl-8 pl-8'>
                  <a href='https://www.instagram.com/acesdypcoe?igsh=cnQxeTJ4YTVkYzJv' target='_blank' rel='noopener noreferrer'className='flex'>
                  <FaInstagram className='text-2xl' />
                  <h1 className='px-2 text-1xl hover:uppercase'>Instagram</h1>
                  </a>
                </div>
                <div className='flex py-2 hover:uppercase pr-8 lg:flex lg:justify-start justify-center lg:pl-8 pl-6'>
                  <a href='https://www.linkedin.com/company/aces-dypcoe/' target='_blank' rel='noopener noreferrer 'className='flex'>
                    <FaLinkedin className='text-2xl' />
                    <h1 className='px-2 text-1xl '>LinkedIn</h1>
                  </a>
                </div>
                <div className='flex py-2 pr-8 lg:flex lg:justify-start justify-center lg:pl-8 pl-9'>
                  <a href='https://whatsapp.com/channel/0029VaB0xUFDeON63L7s2C10' target='_blank' rel='noopener noreferrer 'className='flex'>
                  <FaWhatsapp className='text-2xl' />
                  <h1 className='px-2 text-1xl hover:uppercase '>Whatsapp</h1>
                  </a>
                
                </div>


              </div>
              </div>
            
        </div>
          
        </div>
         
        
      </div>
     
    </div>
    
    
   
  )
} 

export default Contact