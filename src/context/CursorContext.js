import React, { useState, useEffect, memo, useCallback, useMemo } from 'react';

// create context
export const CursorContext = React.createContext();

const CursorProvider = memo(({ children }) => {
  // cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  // cursor bg state
  const [cursorBG, setCursorBG] = useState('default');

  useEffect(() => {
    function move(e) {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    }
    window.addEventListener('mousemove', move);
    // remove event
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  // cursor variants
  const cursorVariants = useMemo(() => ({
    default: {
      x: cursorPos.x - 0,
      y: cursorPos.y - 0,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '15px',
      height: '15px',
      x: cursorPos.x - 0,
      y: cursorPos.y - 0,
      backgroundColor: '#fff',
      backgroundBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255, 1)',
    },
  }), [cursorPos]);

  // mouse enter handler
  const mouseEnterHandler = useCallback(() => {
    setCursorBG('text');
  }, []);
  // mouse leaver handler
  const mouseLeaveHandler = useCallback(() => {
    setCursorBG('default');
  }, []);

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
});

export default CursorProvider;
