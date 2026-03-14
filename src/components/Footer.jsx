import React from 'react'
import bgImg from "../assets/orange-bg.png";
const Footer = () => {
  return (
    <div>
        
        
            <footer className="px-6 lg:px-16 py-16 bg-gray-50">
        
        
        <div
          className="rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-white"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold max-w-md">
            Subscribe to our Newsletter
          </h2>
        
          <div className="flex w-full lg:w-auto gap-3 bg-white rounded-2xl">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-5 py-3 rounded-xl text-gray-700 w-full lg:w-72 outline-none"
            />
        
            <button className="bg-slate-700 px-6  py-3 rounded-xl font-medium hover:bg-slate-800 transition">
              Subscribe
            </button>
          </div>
        </div>
        
        
        <div className="grid md:grid-cols-3 gap-10 mt-16 text-slate-700">
        
        
          <div className="text-center md:text-left border-r md:pr-10">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
        
            <p className="font-semibold">Email</p>
            <p className="text-gray-500 mb-3">needhelp@Organia.com</p>
        
            <p className="font-semibold">Phone</p>
            <p className="text-gray-500 mb-3">666 888 888</p>
        
            <p className="font-semibold">Address</p>
            <p className="text-gray-500">88 road, brooklyn street, USA</p>
          </div>
        
          
          <div className="text-center border-r md:px-10">
            <h2 className="text-2xl font-bold mb-3">Organick</h2>
        
            <p className="text-gray-500 mb-6">
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum simply dummy text of the printing
            </p>
        
            <div className="flex justify-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                🌐
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                📘
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                🐦
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                📌
              </div>
            </div>
          </div>
        
        
          <div className="text-center md:text-left md:pl-10">
            <h3 className="font-bold text-lg mb-4">Utility Pages</h3>
        
            <ul className="space-y-2 text-gray-500">
              <li>Style Guide</li>
              <li>404 Not Found</li>
              <li>Password Protected</li>
              <li>Licences</li>
              <li>Changelog</li>
            </ul>
          </div>
        
        </div>
        
        
        <div className="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
          Copyright © <span className="font-semibold">Organick</span>
        </div>
        
        </footer>
        
    </div>
  )
}

export default Footer