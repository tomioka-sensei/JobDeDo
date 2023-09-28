import React from 'react'
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='flex flex-row'>
       {/* logo component */}
        <div className=''>
            <img src = {logo} alt='reload' />
            <h1 className='text-blue-700'>UdyogSetu</h1>
        </div>


    </div>
  )
}

export default Navbar