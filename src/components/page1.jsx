import React, {useState, useEffect, useRef } from "react";
import gsap from "gsap";
import FirstPageImg from "./FirstPageImg";
import Navbar from "./Navbar";

const Page1 = () => {
  const customTextStyle = {
    fontSize: 'calc(20vw)',
    lineHeight: '1',
    color: '#C4BCB3',
    backgroundColor: '#1c1c19',
    margin: '1rem',
    padding: '1rem',
  };

  const [animationTrigger, setAnimationTrigger] = useState(0);
  const page1 = useRef();
  const imageUrls = [
    'https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp',
    'https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp',
    'https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp',
  ];

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
    <div className='h-auto w-[100vw] overflow-hidden relative text-slate-200 bg-[#d3cad3]' ref={page1}>
      <div className='w-screen'>
        <div className='flex flex-col sm:flex-row justify-between items-center h-[100px] w-screen'>
          <h5 className='mb-2 sm:mb-0'>DYPCOE, Akurdi</h5>
          <h5 className='mx-1'>The ACES Times</h5>
          <i className='ri-menu-line'></i>
        </div>
        <div className='border-b border-black w-full'></div>
        <div className="flex items-center justify-center ">
          <Navbar />
        </div>
        <div className='flex flex-col sm:flex-row mt-4'>
          <FirstPageImg title='Avrco' imageUrl={imageUrls[0]} description='It is a long established fact...' />
          <FirstPageImg title='Avrco' imageUrl={imageUrls[1]} description='It is a long established fact...' />
        </div>
        <h1 style={customTextStyle} className='text-center'>
          ACES
        </h1>
        <div className='flex flex-col sm:flex-row mt-4'>
          <FirstPageImg title='Avrco' imageUrl={imageUrls[0]} description='It is a long established fact...' />
          <FirstPageImg title='Avrco' imageUrl={imageUrls[1]} description='It is a long established fact...' />
          <FirstPageImg title='Avrco' imageUrl={imageUrls[2]} description='It is a long established fact...' />
        </div>
      </div>
    </div>
  );
}

export default Page1;
