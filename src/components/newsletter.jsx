import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import gsap from 'gsap';
import FirstPageImg from './FirstPageImg';
import Page2 from './page2';
import Page3 from './Page3';
import Page4 from './Page4.jsx';
import Footer from './Footer';
import page2 from '../constants/Array1.jsx';
import Array2 from '../constants/Array2.jsx';
import Array4 from '../constants/Array4.jsx';
import Array3 from '../constants/Array3.jsx';

const Newsletter = () => {
  const customTextStyle = {
    fontSize: 'calc(20vw)',
    fontFamily: 'Playfair',
    lineHeight: '1',
    color: '#ECE8E2',
    backgroundColor: '#1c1c19',
    margin: '1rem',
    padding: '1rem',
    height : '100%',
  };

  const [animationTrigger, setAnimationTrigger] = useState(0);
  const page1 = useRef();
 
  
  useEffect(() => {
    const isReloading = sessionStorage.getItem('isReloading');

    if (isReloading) {
      sessionStorage.removeItem('isReloading');
      setAnimationTrigger((prev) => prev + 1);
    }

    const body = document.body;
    body.style.overflow = 'hidden';
    var t1 = gsap.timeline();

   

    // Animation logic
    t1.to(page1.current, { y: '100vh', scale: 0.6, duration: 0, onComplete: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    } });
    t1.to(page1.current, { y: '20vh', duration: 1, delay: 1 });
    t1.to(page1.current, { y: '0vh', rotate: 360, scale: 1, duration: 0.8, onComplete:()=>{
      body.style.overflow = 'visible'; // Re-enable scrolling after animation
    } });
  }, [animationTrigger]);

  
  

  return (
    <div className='bg-black m-0 p-0 overflow-hidden'>
      <div className='min-h-screen sm:h-[80vh] w-[100vw] overflow-hidden relative bg-[#ECE8E2]' ref={page1}>
        <div className='w-screen'>
          <div className='flex flex-col sm:flex-row justify-between items-center h-[100px] w-screen'>
            <h5 style={{fontFamily : 'Playfair'}} className='mb-2 sm:mb-0 ml-4 font-bold'>DYPCOE, Akurdi</h5>
            <h5 style={{fontFamily : 'Playfair'}} className='mx-1 font-bold text-4xl'>The ACES Times</h5>
            <i className='ri-menu-line'></i>
          </div>
          <div className='border-b border-black w-full'></div>
          {/* <div className='flex items-center justify-center'>
          <Navbar/>
          </div> */}
          <div className='flex flex-col sm:flex-row justify-center items-center'>
            {page2.map((image, index) => (
                <FirstPageImg
                  key={index}
                  title={image.title}
                  imageUrl={image.imageUrl}
                  description={image.description}
                />
              ))}
          </div>
         
          <h1  style={customTextStyle} className='text-center md:mt-3 sm:mt-3'>
            ACES
          </h1>
        </div>
      </div>
      <div className=''>
      {Array2.map((image, index) => {
          console.log(image.imageUrl1); // Move the console.log() statement outside the JSX expression
          return (
            <Page2
              key={index}
              title1={image.title1}
              imageUrl1={image.imageUrl1}
              description1 =  {image.description1}
              
              title2={image.title2}
              imageUrl2={image.imageUrl2}
              description2={image.description2}

              title3={image.title3}
              imageUrl3 ={image.imageUrl3}
              description3 = {image.description3}
            />
          );
        })}

      </div>
     
      {Array3.map((image, index) => {
          console.log(image.imageUrl); // Move the console.log() statement outside the JSX expression
          return (
            <Page3
              key={index}
              title1={image.title1}
              imageUrl1={image.imageUrl1}
              description1={image.description1}
              title2={image.title2}
              imageUrl2 ={image.imageUrl2}
            />
          );
        })}
     
      
      {/* <div className='bg-[#ECE8E2] flex h-50vh'>
          <h1 className='m-4 sm:m-4 px-[20px] text-left w-fit h-fit font-thin tracking-tight text-[30vw] leading-none  bg-[#1c1c19] text-[#fefefe]'>ACES</h1>  
      </div> */}
        
      {Array4.map((image, index) => {
          console.log(image.imageUrl); // Move the console.log() statement outside the JSX expression
          return (
            <Page4
              key={index}
              title={image.title}
              imageUrl={image.imageUrl}
              description={image.description}
              position={image.position}
            />
          );
        })}


              <Footer/>
        
        <div id='page6' className='h-[100px] w-[100%] bg-[#ECE8E2]'>
        </div>
        {/* <Marquee directions="up" height="100px" >hello</Marquee> */}
    </div>
  );
};

export default Newsletter; 