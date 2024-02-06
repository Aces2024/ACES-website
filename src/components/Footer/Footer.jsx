import React from 'react'

function Footer() {
    const data =["Home", "Events", "Teams", "Newsletter"]
  return (
    <>
    <div className='h-1/5 bg-[#151414] pt-10 pb-10  flex justify-around items-start'>
        <div className='text-white'>
            <h1 className='mb-3'>
            Navigation
            </h1>
            {
                 data.map(item => (
                    <div className='h-[40px]  font-normal text-4xl   overflow-hidden '>
                <h1 className='ease-in hover:text-white text-zinc-400 duration-500 hover:-translate-y-[50%]'>{item} <br />{item}</h1>
            </div>
                    ))
            }
           
            
         
            </div>
        <div className='w-1/4 text-white'>
        <h1 className='mb-3'>
            Contact
            </h1>
        <p className='font-normal text-zinc-400 text-xl mb-1'>aces24@gmail.com</p>
        <p className='font-normal text-zinc-400 text-xl'> D. Y. Patil College of Engineering, D. Y. Patil Educational Complex, Sector 29, Nigdi Pradhikaran, Akurdi, Pune 411044</p>
        </div>
        <div className='text-white'>
        <h1 className='mb-3'>
            Social
            </h1>

            <div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer