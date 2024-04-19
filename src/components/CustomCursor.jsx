import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { CursorContext } from './context/CursorContext'

function CustomCursor() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className=" w-[28px] h-[28px] bg-primary fixed top-0 left-0 pointer-events-none z-20 rounded-full"></motion.div>
    </>
  )
}

export default CustomCursor