import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import { transition1 } from './transition';
import { CursorContext } from './context/CursorContext'

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

function Timeline({ data }) {
  const {mouseEnter, mouseExit } = useContext(CursorContext);
  const [showEducation, setShowEducation] = useState(false);

  const filteredJobData = showEducation
    ? data.timeline.filter(job => job.forEducation)
    : data.timeline.filter(job => !job.forEducation);

  const handleEducationClick = () => {
    setShowEducation(true);
  };

  const handleExperienceClick = () => {
    setShowEducation(false);
  };
  return (
    <>

      <motion.section initial={{ opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={transition1} className="text-gray-400 bg-gray-900 body-font pt-10">
        <div className='container px-5 pt-32 mx-auto'>
          <motion.div initial={{ opacity:0, x:'50%'}} animate={{opacity:1,x:0}} exit={{opacity:0,x:'-50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit}  className="flex flex-wrap w-full mb-5 flex-col">
            <h1 className="text-4xl font-medium mb-2 text-white">Timeline</h1>
          </motion.div>
          <motion.div initial={{ opacity:0, y:'-50%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit}  className="flex items-center justify-center gap-5 mb-5">
            <button className='btn bg-gray-800 text-gray-500 hover:text-gray-100' onClick={handleEducationClick}>Education</button>
            <button className='btn bg-gray-800 text-gray-500 hover:text-gray-100' onClick={handleExperienceClick}>Experience</button>
          </motion.div>
          <motion.div initial={{ opacity:0, y:'-50%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className='text-3xl font-semibold'>
            {showEducation ? 'Experience' : 'Education'}
          </motion.div>
        </div>
        <div className="container px-5 mx-auto">
          <div className=" divide-y-2 divide-gray-100">
            {filteredJobData.map((job, index) => (
              <motion.div initial={{ opacity:0, y:'-50%'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'50%'}} transition={transition1} onMouseEnter={mouseEnter} onMouseLeave={mouseExit} className="py-8 flex flex-wrap md:flex-nowrap" key={index} >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="mt-1 text-gray-500 text-sm">{formatDate(job.startDate)} - <br /> {formatDate(job.endDate)}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-500 title-font mb-2">{job.company_name}</h2>
                  <h2 className="text-xl font-light text-gray-100  mb-2">{job.jobTitle}</h2>
                  <h2 className="text-xl font-thin text-white mb-2">{job.jobLocation}</h2>
                  <p className="leading-relaxed">{job.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>
    </>
  )
}

export default Timeline