import React from "react";
const FirstPageImg = ({ title, imageUrl, description }) => (
    
    <div className=' border-black text-center mx-2 mb-4 sm:mb-0 '>
      <h4 style={{fontFamily : 'Merriweather'}} className="items-center">{title}</h4>
      <img className='w-80 items-center mx-24 h-44 object-cover' src={imageUrl} alt='image' />
      <p style={{fontFamily: 'Libre Baskerville'}} className="text-s items-center">{description}</p>
    </div>
 );
export default FirstPageImg;
  