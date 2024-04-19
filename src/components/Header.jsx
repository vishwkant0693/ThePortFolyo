import React from 'react'
import { Link } from 'react-router-dom'
import MobileNavbar from './MobieNavbar'

function Header() {
  return (
    <>
      <header className="fixed w-full px-[20px] md:px-[40px] z-30 h-[80px] flex items-center text-gray-400 bg-gray-950">
        <div className="flex md:flex-row md:items-center w-full justify-between">
          <Link className="title-font font-semibold text-gray-600" to={'/'}>
            <span className="ml-3 text-2xl">Vishwkant</span>
          </Link>
          <nav className="hidden lg:flex gap-x-4 font-semibold">
            <Link className="mr-5 hover:text-gray-700" to={"/"}>Home</Link>
            <Link className="mr-5 hover:text-gray-700" to={"/about"}>About</Link>
            <Link className="mr-5 hover:text-gray-700" to={"/skills"}>Skills</Link>
            <Link className="mr-5 hover:text-gray-700" to={"/projects"}>Projects</Link>
            <Link className="mr-5 hover:text-gray-700" to={"/timeline"}>Timeline</Link>
            <Link className="mr-5 hover:text-gray-700" to={"/testimonial"}>Testimonial</Link>
            <Link className="mr-5 hover:text-gray-700" to={"/services"}>Services</Link>
            <Link className="mr-5 hover:text-gray-700" to={"/contact"}>Contact</Link>
          </nav>
        </div>
        <MobileNavbar />
      </header>
    </>
  )
}

export default Header