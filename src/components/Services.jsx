import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import { transition1 } from './transition';
import { CursorContext } from './context/CursorContext'
import { Link } from 'react-router-dom';

function Services({ data }) {
  const { mouseEnter, mouseExit } = useContext(CursorContext);
  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition1} className="text-gray-400 bg-gray-900 body-font pt-10">
        <div className="container px-5 py-32 mx-auto">
          <motion.div initial={{ opacity: 0, x: '50%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '-50%' }} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="flex flex-wrap w-full mb-10 flex-col">
            <h1 className="text-4xl font-medium title-font mb-2 text-white">Services</h1>
          </motion.div>
          <div className="flex flex-wrap -m-4">
            {data.map((service, index) => (
              <motion.div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '50%' }} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="p-4 md:w-1/3 w-full flex flex-col text-center items-center border  gap-2" key={index}>
                <div className="w-20 h-20 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 m-4 flex-shrink-0">
                  <img src={service.image.url} alt={service.name} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg title-font font-medium mb-3">{service.name}</h2>
                  <p className="leading-relaxed text-base">{service.desc}</p>
                  <Link className="mt-3 text-indigo-500 inline-flex items-center" to={'/'}>{service.charge}</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Services