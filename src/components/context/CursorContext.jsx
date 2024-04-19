import React, { createContext, useEffect, useState } from 'react';


export const CursorContext = createContext();


const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x:0,
    y:0,
  });

  const [cursorBG,setCursorBG] = useState('default');

  const mobileView = window.innerWidth < 1024;

  useEffect(()=>{
    if(!mobileView){
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener('mousemove', move);
      return () =>{
        window.removeEventListener('mousemove', move);
      };
    } else {
      setCursorBG('none')
    }
  });

  const cursorVariants = {
    default: {
      x: cursorPos.x - 10,
      y: cursorPos.y - 10,
      backgroundColor: '#0e1112'
    },
    text: {
      width: '120px',
      height: '120px',
      x: cursorPos.x - 52,
      y: cursorPos.y - 52,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width:0,
      height:0,
      backgroundColor: 'rgba(255,255,255, 1)',
    }
  }

  const mouseEnter = () => {
    setCursorBG('text');
  };

  const mouseExit = () => {
    setCursorBG('default');
  };


  return <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnter, mouseExit }}>
      {children}
    </CursorContext.Provider>
};

export default CursorProvider;
