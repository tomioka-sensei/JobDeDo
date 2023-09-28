import React from 'react'
import logo from "../assets/job-logo-transformed.jpeg" 
import { AiFillHome } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className="flex flex-row justify-between ">
       {/* logo component */}
        <div className="flex flex-row text-center  ">
            <img src = {logo} alt='reload' className="w-15 h-20 object-contain" />
            <h1 className="text-center my-3 font-semibold text-4xl text-purple-500">UdyogSetu</h1>
        </div>
        <div >

            <ul className='flex gap-3 flex-rows my-4 text-center mx-7 justify-between '>
                <li className="text-red-900 flex text-center font-semibold text-xl gap-2"><AiFillHome/>Home</li>
                <li className='flex text-center font-semibold text-xl gap-2'><RiAccountCircleFill/>Login/SignUp</li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar