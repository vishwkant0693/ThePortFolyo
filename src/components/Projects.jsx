import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { transition1 } from './transition';
import { CursorContext } from './context/CursorContext'


function Projects({ data }) {
  const {mouseEnter, mouseExit } = useContext(CursorContext);
  return (
    <>
      <motion.section initial={{ opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={transition1}   className="text-gray-400 bg-gray-900 body-font pt-10">
        <div className="container px-5 py-32 mx-auto">
          <motion.div initial={{ opacity:0, x:'50%'}} animate={{opacity:1,x:0}} exit={{opacity:0,x:'-50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="flex flex-wrap w-full mb-10 flex-col">
            <h1 className="text-4xl font-medium title-font mb-2 text-white">Projects</h1>
          </motion.div>
          <div className="flex flex-wrap -m-4">
            {data.map((project, index) => (
              <div className="p-4 lg:w-1/2 w-full" key={index}>
                <motion.div initial={{ opacity:0, y:'-50%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit}  className="flex relative">
                  <img alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center" src={project.image.url} />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-bg-gray-500 bg-gray-900 opacity-0 hover:opacity-95">
                    <h2 className="tracking-widest text-xl title-font font-semibold text-gray-500 mb-1">{project.title}</h2>
                    <h1 className="title-font text-lg text-white mb-3">{project.description}</h1>
                    <p className="text-md text-white">{project.techStack}</p>
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

export default Projects