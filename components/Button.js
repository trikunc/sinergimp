import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }

const Button = ({ imp, text, link, value }) => {
  // const { height, width } = useWindowDimensions();
  // const value = height < width ? height : width;
  return (
    <div className={styles.button}>
      <a
        href={link}
        style={{
          fontSize: value * 0.02,
        }}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
