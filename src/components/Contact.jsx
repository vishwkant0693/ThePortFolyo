import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { transition1 } from './transition';
import { CursorContext } from './context/CursorContext'
import { Link } from 'react-router-dom'

function Contact({ data , email }) {
  const { mouseEnter, mouseExit } = useContext(CursorContext);
  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition1} className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-32 mx-auto">
          <motion.div initial={{ opacity: 0, x: '50%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '-50%' }} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="flex flex-wrap w-full mb-10 flex-col">
            <h1 className="text-4xl font-medium title-font mb-2 text-white text-center">Contact</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '50%' }} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-600 text-center">
                <a className="text-gray-400">{email.email}</a>
                <p className="leading-normal my-5">49 Smith St.
                </p>
                <span className="inline-flex gap-x-4">
                  {data.map((handle, index) => (
                    <Link className="flex flex-col" to={'/'}>
                      <a className="ml-4 text-gray-500" key={index}>
                        <img src={handle.image.url} alt={handle.platform} width={40} />
                      </a>
                      <p>{handle.platform}</p>
                    </Link>
                  ))}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact