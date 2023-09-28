import React from 'react'
import logo from "../assets/logo.svg" 


const Navbar = () => {
  return (
    <div className=" ">
       {/* logo component */}
        <div className=" ">
            <img src = {logo} alt='reload' className="w-15 h-10 object-contain" />
            <h1 className="text-violet-700">UdyogSetu</h1>
        </div>
        <div>

            <ul>
                <li className="text-red-900">Home</li>
                <li>Login/SignUp</li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar