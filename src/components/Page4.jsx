import React from "react";

const Page4 = ( {key,title  ,imageUrl ,description,position} ) => {
  console.log("ImageUrl:", imageUrl);
  return (  
      <div className='h-auto w-full sm:w-[100%] flex flex-col sm:flex-row justify-center  ' id='page-4'>
      <div id='page-4-left' className='bg-[#ECE8E2] w-full sm:w-[60%] h-[100%] sm:h-auto px-4 sm:px-10 py-8'>
        <img className='h-full w-full object-cover' src= {imageUrl} alt='Left Image' />
      </div>
      <div id='page-4-right' className='bg-[#ECE8E2] w-full sm:w-[40%] h-auto px-4 sm:px-10 py-8 text-[25px] text-[#4b4b4b]'>
      <p style={{fontFamily: 'Merriweather'}} className=' text-[#2f2f2f] text-2xl mb-6'>{title}</p>
        <h2 style={{fontFamily: 'Libre Baskerville'}} className=' text-[#2f2f2f] text-sm'>{description}</h2>
        {/* Add your other content here */}
      </div>
    </div>
  );
}

export default Page4;
