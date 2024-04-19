import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { transition1 } from './transition';
import { CursorContext } from './context/CursorContext'

function About({ data }) {
  const {mouseEnter, mouseExit } = useContext(CursorContext);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <motion.section initial={{ opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={transition1}  className="text-gray-400 bg-gray-900 body-font pt-10">
        <div className="container mx-auto flex flex-col lg:flex-row py-32">
          <motion.div initial={{ opacity:0, y:'-50%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'-50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="p-6 overflow-hidden object-center" style={{ height: "550px" }} >
            <img src={data.about.avatar.url} alt={name} />
          </motion.div>
          <motion.div initial={{ opacity:0, x:'50%'}} animate={{opacity:1,x:0}} exit={{opacity:0,x:'50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="text-xl flex flex-col justify-center lg:px-4 max-lg:p-10">
            <h1 className='text-5xl mb-3'>About Me</h1>
            <h1 className=' font-extrabold text-4xl'>{data.about.name} </h1>
            <span className='mb-2 font-medium italic py-2'>{data.about.title}</span>
            <h3>{data.about.subTitle}</h3>
            <p className='mb-3'>{data.about.description}</p>
            <p>Experience: {data.about.exp_year} years</p>
            <p>Address: {data.about.address}</p>
            <p>Phone: {data.about.phoneNumber}</p>
            <p>Email: {data.about.contactEmail}</p>
            <p>Quote: "{data.about.quote}"</p>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default About