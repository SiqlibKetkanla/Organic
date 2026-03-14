import React from 'react'
import barg from '../assets/barg.png'
import iktta from '../assets/two.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header className="w-full border-b border-gray-200">
              <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                
             
                <div className="flex items-center gap-2">
                  <img
                    src={barg}
                    alt="logo"
                    className="w-7 h-7"
                  />
                  <span className="text-[#274c5b] font-semibold text-lg">
                    Organick
                  </span>
                </div>
        
             
                <nav className="flex items-center gap-8 text-[#274c5b] font-medium text-sm">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/About"}>About</Link>
                  <Link to={""}>Pages</Link>
                  <a href="#" className="hover:text-green-600">Shop</a>
                  <a href="#" className="hover:text-green-600">Projects</a>
                  <a href="#" className="hover:text-green-600">News</a>
                </nav>
        
                <div className="flex items-center gap-4">
                
               <img src={iktta} alt="" />
        
               
        
                </div>
              </div>
            </header>
    </div>
  )
}

export default Header