const Page3 = ({key,title1  ,imageUrl1 ,description1 ,title2, imageUrl2}) => {
  return (
    <div id="page-3" className='bg-[#ECE8E2] flex flex-col sm:flex-row justify-between py-24 px-14 h-auto'>
      <div className="w-full sm:w-[30%] mb-6 sm:mb-0 sm:order-1" id="left">
        <h2 style={{fontFamily : 'Merriweather'}} className='text-3xl  text-center '>Creativity at <span>It's Peak</span></h2>
        <img className="h-[60%] w-full object-cover" src= {imageUrl1} alt="Left Image"/>
        <p style={{fontFamily: 'Libre Baskerville'}} className='text-l mt-4'>{title1}</p>
      </div>
      <div id="right" className='w-full sm:w-[60%] md:h-[40%] md:w-[60%] sm:h-[40%] px-4 sm:px-8 sm:order-2'>
        <img className="w-full h-[50vh] object-cover mx-auto sm:mt-5" src={imageUrl2} alt="Right Image"/>
        <h2 style={{fontFamily : 'Merriweather'}} className='text-4xl mt-5 text-center sm:text-left'>{title2}</h2>
      </div>
      
    </div>
  );
}

export default Page3;
