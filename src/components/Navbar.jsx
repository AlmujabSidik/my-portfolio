import React from 'react'

const Navbar = () => {
  return (
    <div className='inner-navbar flex justify-between items-center px-5 w-full h-16'>
        <div className='inner-brand '>
                <h1 className='font-logo text-white text-2xl'>Almujab Sidik.</h1>
        </div>
        <div className='inner-menu'>
                <ul className='flex'>
                        <li className='text-white font-menu font-medium leading-6 text-xl tracking-widest mr-5 lg:mr-10 '>Works</li>
                        <li className='text-white font-menu font-medium leading-6 text-xl tracking-widest '>Contact</li>
                </ul>
        </div>

    </div>
    
  )
}

export default Navbar