import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CursorContext } from './context/CursorContext'
import { transition1 } from './transition'

function Hero({data}) {
  const {mouseEnter, mouseExit } = useContext(CursorContext);
  return (
    <>
      <motion.section initial={{ opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={transition1} className="text-gray-400 bg-gray-900 body-font pt-10">
        <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
          <motion.div initial={{ opacity:0, y:'-50%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'-50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className='text-2xl lg:text-4xl mb-5'>Hello I'm</p>
            <h1 className="text-4xl lg:text-8xl mb-10 font-medium">{data.about.name}
            </h1>
            <p className="text-2xl lg:text-4xl mb-5 italic">{data.about.title}</p>
            <p className=' text-xl lg:text-3xl mb-10'>{data.about.subTitle}.</p>
            <div className="flex justify-center">
              <Link className="btn bg-gray-800 text-gray-500 my-4" to={'/'}>Hire me</Link>
            </div>
          </motion.div>
          <motion.div initial={{ scale:0}} animate={{scale:1}} exit={{scale:0}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="lg:max-w-lg lg:w-full md:w-1/2">
            <img className="object-cover object-center" alt="hero" src={data.about.avatar.url} />
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Hero