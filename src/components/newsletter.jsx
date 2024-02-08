import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import gsap from 'gsap';

const Newsletter = () => {
  const customTextStyle = {
    fontSize: 'calc(20vw )',
    lineHeight: '1',
    color: '#C4BCB3',
    backgroundColor: '#1c1c19',
    margin: '1rem',
    padding: '1rem',
  };

  const scroll = {
    display : 'none',
  };

  const [animationTrigger, setAnimationTrigger] = useState(0);
  const page1 = useRef();

  useEffect(() => {
    var t1 = gsap.timeline();

    // Animation logic
    t1.to(page1.current, { y: '100vh', scale: 0.6, duration: 0 });
    t1.to(page1.current, { y: '20vh', duration: 1, delay: 1 });
    t1.to(page1.current, { y: '0vh', rotate: 360, scale: 1, duration: 0.8 });
  }, [animationTrigger]);

  return (
    <div className='bg-black m-0 p-0 overflow-hidden'>
      <div className='h-[100vh] w-[100vw] overflow-hidden relative bg-[#C4BCB3]' ref={page1}>
        <div className='w-screen'>
          <div className='flex flex-col sm:flex-row justify-between items-center h-[100px] w-screen'>
            <h5 className='mb-2 sm:mb-0'>DYPCOE, Akurdi</h5>
            <h5 className='mx-1'>The ACES Times</h5>
            <i className='ri-menu-line'></i>
          </div>
          <div className='border-b border-black w-full'></div>
          <div className='flex flex-col sm:flex-row'>
            <div className='text-center mb-4 sm:mb-0'>
              <h4>Avrco</h4>
              <img
                className='w-[80%] items-center'
                src='https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp'
                alt='image'
              />
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
            <div className='border-l-2 border-black text-center mb-4 sm:mb-0'>
              <h4>Avrco</h4>
              <img
                className='w-[80%] items-center'
                src='https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp'
                alt='image'
              />
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
            <div className='border-l-2 border-black text-center'>
              <h4>Avrco</h4>
              <img
                className='w-[80%] items-center'
                src='https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp'
                alt='image'
              />
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
          </div>
          <h1 style={customTextStyle} className='text-center'>
            ACES
          </h1>
        </div>
      </div>
      <div id="page-2" className='bg-[#C4BCB3] flex  justify-between py-24 px-14 h-[150vh]'>
          <div className="w-[30%] h-[50%] pr-10 border-r-2 border-r-black" id="left">
            <h2 className='text-[50px] text-center '>Interactive <span>Artists</span></h2>
            <img className="h-[60%] w-[100%] object-cover" src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg'/>
            <p className='text-[22px] ' >As a multidisciplinary freelancer, I'm passionate about creating iconic digital experiences through motion, typography, and creative coding for companies and agencies around the world.</p>
          </div>
          <div id= "right" className='h-[100%] w-[60%] mr-5 px-8 '> 
          <img className="w-[94%] mt-5 object-cover" src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg'/>
              <h2 className='text-[45px] '>DIGITAL ART DIRECTOR INTERACTIVEE DESIGNER CREATIVE DEVELOERP BASED AMSTERDAM, NL.</h2>
          </div>
        </div>
        <div id='page-3' className='bg-[#C4BCB3] flex h-50vh'>
          <h1 className='px-[20px] text-left w-fit h-fit font-thin tracking-tight text-[30vw] leading-none m-4 bg-[#1c1c19] text-[#C4BCB3]'>ACES</h1>
          <img className='w-[35%] h-[450px]' src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png'/>
        </div>
        <div className='h-[100vh] w-[100%] flex' id='page-4 '>
            <div id='page-4-left' className=' bg-[#C4BCB3] w-[60%] h-[100%] px-[60px] py-[80px]'>
              <img  className='h-[100%] w-[100%] object-cover' src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3-p-1080.jpeg'/>
            </div>
            <div id='page-4-right' className='bg-[#C4BCB3] w-[40%] h-px-[60px] py-[80px] text-[25px] text-[#4b4b4b]'>
              <p className='text-[30px] text-[#2f2f2f]'>dsfjafhajshdbamsdjbamjsdbamnbasmdda n dsmjbazmjdnamnnsdmanmjdabsmndbnasmnmb  hasdkjahdjandsam,ndajdsn,adn,sdn,adsfbmsamsna, mnmasndam,nadsdmndbamndbamsd</p>
              
              <div id="anda" className='flex overflow-hidden items-center justify-center flex-nowrap h-[200px] w-[60%] bg-[#CAC1B6] b-2 b-black rounded-[50%]'>
                <div className="group">
                  <img className="h-[60px] transition-transform translate-x-[-200%] duration-[4000ms] group-hover:translate-x-[0%] delay-[500ms] group-hover:duration-[4000ms]" src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg" alt=""/>
                  <h1 className=' flex items-center justify-center transition-transform duration-[4000ms] group-hover:translate-x-[200%] group-hover:scale-125 w-[100%] h-[100%]'>All Work</h1>
                </div>
              </div>
           </div>    
      <button className='bg-red-500' onClick={() => setAnimationTrigger((prev) => prev + 1)}></button>
        </div>
        <div id='page5' className='no-scrollbar' >
          <h1 className='inline-block text-5xl'>Let's Create Together <span className='bg-[#2f2f2f] text-[#C4BCB3] py-[10px] '>EMAIL ME</span> </h1>
          <h1 className='inline-block text-5xl'>Let's Create Together <span className='bg-[#2f2f2f] text-[#C4BCB3] py-[10px] '>EMAIL ME</span> </h1>
          <h1 className='inline-block text-5xl'>Let's Create Together <span className='bg-[#2f2f2f] text-[#C4BCB3] py-[10px] '>EMAIL ME</span> </h1>
        </div>
        <div id='page6' className='h-[100px] w-[100%] bg-[#C4BCB3]'>
        </div>
        {/* <Marquee directions="up" height="100px" >hello</Marquee> */}
    </div>
  );
};

export default Newsletter; 