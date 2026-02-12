import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#19202e] w-full h-18 flex justify-between items-center px-8'>
        <div className='text-white'>
            <img src="" alt="" />
            <h1 className='font-bold text-xl'>TrustCart</h1>
        </div>
        <div className='flex gap-4 text-gray-500 cursor-pointer '>
            <p className='hover:text-white'>How it Works</p>
            <p className='hover:text-white'>Products</p>
            <p className='hover:text-white'>Trust & Safety</p>
        </div>
        <div className='flex gap-4'>
            <button className='text-gray-500 hover:bg-yellow-400 px-3 hover:text-white py-2 rounded-lg cursor-pointer'>Login</button>
            <button className='bg-[#29A37A] text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-[#33C090] transition-colors duration-200'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar