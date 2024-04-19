import React from 'react';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <nav className='text-primary lg:hidden'>
        <div onClick={() => { setOpenMenu(true) }} className="text-3xl cursor-pointer">
          <CgMenuRight />
        </div>
        <motion.div variants={menuVariants} initial='hidden' animate={openMenu ? 'show' : ''} className="bg-gray-900 text-gray-500 shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen x-20">
          <div onClick={() => { setOpenMenu(false) }} className="text-4xl absolute z-30 right-5 top-5 text-primary cursor-pointer">
            <IoMdClose />
          </div>
          <ul className='h-full flex flex-col justify-center items-center gap-y-4 text-primary font-primary font-bold text-3xl'>
            <li><Link className="mr-5 hover:text-gray-700" to={"/"}>Home</Link></li>
            <li><Link className="mr-5 hover:text-gray-700" to={"/about"}>About</Link></li>
            <li><Link className="mr-5 hover:text-gray-700" to={"/skills"}>Skills</Link></li>
            <li><Link className="mr-5 hover:text-gray-700" to={"/projects"}>Projects</Link></li>
            <li><Link className="mr-5 hover:text-gray-700" to={"/timeline"}>Timeline</Link></li>
            <li><Link className="mr-5 hover:text-gray-700" to={"/testimonial"}>Testimonial</Link></li>
            <li><Link className="mr-5 hover:text-gray-700" to={"/services"}>Services</Link></li>
            <li><Link className="mr-5 hover:text-gray-700" to={"/contact"}>Contact</Link></li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default MobileNavbar;