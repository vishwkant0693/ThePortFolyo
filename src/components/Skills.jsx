import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { transition1 } from './transition';
import { CursorContext } from './context/CursorContext'


function Skills({ data }) {
  const { mouseEnter, mouseExit } = useContext(CursorContext);
  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition1} className="text-gray-400 bg-gray-900 body-font pt-10">
        <div className="container px-5 py-32 mx-auto">
          <motion.div initial={{ opacity: 0, x: '50%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '-50%' }} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="flex flex-wrap w-full mb-10 flex-col">
            <h1 className="text-4xl font-medium title-font mb-2 text-white">What I'm Good At</h1>
          </motion.div>
          <div className="flex flex-wrap -m-4">
            {data.map((skill, index) => (
              <div className="p-4 sm:w-1/2 lg:w-1/3 w-full" key={index}>
                <motion.div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '50%' }} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-full flex md:items-center rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-col" >
                    <div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-50%' }} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                      <img src={skill.image.url} alt={skill.name} />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-white text-lg title-font font-medium mb-1">{skill.name}</h2>
                      <p className="leading-relaxed text-base mb-1">{skill.percentage} %</p>

                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width:`${skill.percentage}%`}}></div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Skills