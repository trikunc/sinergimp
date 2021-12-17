import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Page.module.css';

import ProfService_svg from '../../public/img/Professional Service.svg';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const BusinessPlatform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const size = useWindowSize();
  const { height, width } = size;
  const value = height < width ? height : width;
  const valueSize = height < width ? height : width;

  return (
    <div className={styles._container}>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        valueSize={valueSize}
      />
      {isMenuOpen && <Menu valueSize={valueSize} />}
      <div className={styles._card}>
        <div className={styles._picture}>
          <div className={styles._picture_container}>
            <div
              style={{
                width: 'calc(35vw - (20px * 2))',
                marginBottom: '3vh',
                cursor: 'pointer',
              }}
            >
              <Image src={ProfService_svg} alt="image2" />
            </div>
          </div>
          <div className={styles.text_bottom}>
            <p style={{ fontSize: valueSize * 0.025 }}>
              We want to hear more from you and are willing to help you.
            </p>
            <Link style={{ textDecoration: 'none' }} href="/contact-us">
              <button
                className={styles._button}
                style={{ fontSize: valueSize * 0.025 }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className={styles._text}>
          <h3 style={{ fontSize: valueSize * 0.04 }}>
            With our experience and abilities, we are ready to help you.
          </h3>
          <p style={{ fontSize: valueSize * 0.025 }}>
            We are experienced in developing systems and software, and securing
            them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlatform;

// export const BusinessPlatform2 = ({ value }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { height, width } = useWindowDimensions();
//   const value = height > width ? width : width;

//   const handleValue = () => {
//     if (width >= 1220) {
//       return width * 0.2 - 30 * 2;
//     }
//     if (width >= 992 && width < 1220) {
//       return width * 0.25 - 30 * 2;
//     }
//     // Ipad
//     if (width >= 768 && width < 992) {
//       return width * 0.25 - 20 * 2;
//     }
//     if (width >= 375 && width < 768) {
//       return width * 0.2;
//     }
//     if (width >= 320 && width < 375) {
//       return width * 0.19;
//     }
//   };

//   const handleWrap = () => {
//     console.log('Wrap:', width);
//     if (width >= 1220) {
//       console.log('>1220');
//       return value * 0.5;
//     }
//     if (width >= 992 && width < 1220) {
//       console.log('992-1220');
//       return value * 0.5;
//     }
//     // Ipad
//     if (width >= 768 && width < 992) {
//       console.log('768-992');
//       return value * 0.5;
//     }
//     if (width >= 375 && width < 768) {
//       console.log('375-768');
//       return value * 0.5;
//     }
//     if (width >= 320 && width < 375) {
//       console.log('320-375');

//       return value * 0.5;
//     }
//   };
//   return (
//     <div className="_container">
//       <Header
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         valueSize={valueSize}
//       />
//       {isMenuOpen && <Menu valueSize={valueSize} />}
//       <div className="_card">
//         <div className="_text">
//           <h3  style={{ fontSize: valueSize * 0.04 }}>
//             We will make it easy for you to use the "Internet of Things" to be
//             integrated each other, and provide flexibility in its management.
//           </h3>
//           <p  style={{ fontSize: valueSize * 0.025 }}>
//             Whatever IoT device / appliance you own and use, find it easy to
//             manage with our solutions.
//           </p>
//         </div>
//         <div  className="_picture">
//           <div className="_picture_4container" style={{ width: handleWrap() }}>
//             <div
//               className="text_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//               }}
//             >
//               <img src={middlewareIcon} alt="" style={{ width: width * 0.2 }} />
//             </div>
//             <div
//               className="text_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//               }}
//             >
//               <img src={dashboardIcon} alt="" style={{ width: width * 0.2 }} />
//             </div>
//             <div
//               className="text_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//               }}
//             >
//               <img src={reportIcon} alt="" style={{ width: width * 0.2 }} />
//             </div>
//             <div
//               className="text_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//               }}
//             >
//               <img src={assetIcon} alt="" style={{ width: width * 0.2 }} />
//             </div>
//           </div>
//           <div className="text_bottom">
//             <p style={{ fontSize: valueSize * 0.02 }}>
//               We want to hear more from you and are willing to help you.
//             </p>
//             <Link style={{ textDecoration: 'none' }} to="/contact-us">
//               <button
//                 className="_button"
//                 style={{ fontSize: valueSize * 0.025 }}
//               >
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const BusinessPlatform3 = ({ valueSize }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { height, width } = useWindowDimensions();
//   const value = height > width ? width : width;

//   const handleValue = () => {
//     if (width >= 1220) {
//       return width * 0.2 - 30 * 2;
//     }
//     if (width >= 992 && width < 1220) {
//       return width * 0.25 - 30 * 2;
//     }
//     // Ipad
//     if (width >= 768 && width < 992) {
//       return width * 0.25 - 20 * 2;
//     }
//     if (width >= 375 && width < 768) {
//       return width * 0.2;
//     }
//     if (width >= 320 && width < 375) {
//       return width * 0.19;
//     }
//   };

//   const handleWrap = () => {
//     console.log('Wrap:', width);
//     if (width >= 1220) {
//       console.log('>1220');
//       return value * 0.5;
//     }
//     if (width >= 992 && width < 1220) {
//       console.log('992-1220');
//       return value * 0.5;
//     }
//     // Ipad
//     if (width >= 768 && width < 992) {
//       console.log('768-992');
//       return value * 0.5;
//     }
//     if (width >= 375 && width < 768) {
//       console.log('375-768');
//       return value * 0.5;
//     }
//     if (width >= 320 && width < 375) {
//       console.log('320-375');

//       return value * 0.5;
//     }
//   };
//   return (
//     <div className="_container">
//       <Header
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         valueSize={valueSize}
//       />
//       {isMenuOpen && <Menu valueSize={valueSize} />}
//       <div className="_card">
//         <div className="_text">
//           <h3  style={{ fontSize: valueSize * 0.05 }}>
//             With our experience and abilities, we are ready to help you.
//           </h3>
//           <p  style={{ fontSize: valueSize * 0.03 }}>
//             We are experienced in developing systems and software, and securing
//             them.
//           </p>
//         </div>
//         <div  className="_picture">
//           <div className="_picture_4container" style={{ width: handleWrap() }}>
//             <div
//               className="text_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//                 backgroundColor: 'orange',
//               }}
//             >
//               <p style={{ fontSize: valueSize * 0.025 }}>
//                 Software Development
//               </p>
//             </div>
//             <div
//               className="img_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//               }}
//             >
//               <img
//                 src={manlIcon}
//                 alt="image1"
//                 style={{
//                   height: handleValue() / 2,
//                   width: handleValue() / 2,
//                 }}
//               />
//             </div>
//             <div
//               className="img_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//               }}
//             >
//               <img
//                 src={girlIcon}
//                 alt="image1"
//                 style={{
//                   height: handleValue() / 2,
//                   width: handleValue() / 2,
//                 }}
//               />
//             </div>
//             <div
//               className="text_container"
//               style={{
//                 height: handleValue(),
//                 width: handleValue(),
//                 backgroundColor: 'green',
//               }}
//             >
//               <p style={{ fontSize: valueSize * 0.025 }}>
//                 Information Security
//               </p>
//             </div>
//           </div>
//           <div className="text_bottom">
//             <p style={{ fontSize: valueSize * 0.025 }}>
//               We want to hear more from you and are willing to help you.
//             </p>
//             <Link style={{ textDecoration: 'none' }} to="/contact-us">
//               <button
//                 className="_button"
//                 style={{ fontSize: valueSize * 0.025 }}
//               >
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const BusinessPlatform4 = ({ valueSize }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <div className="_container">
//       <Header
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         valueSize={valueSize}
//       />
//       {isMenuOpen && <Menu valueSize={valueSize} />}
//       <div className="_card">
//         <div  className="_picture">
//           <div className="_picture_container">
//             <img
//               src={ProfService_svg}
//               alt="image2"
//               style={{
//                 width: 'calc(35vw - (20px * 2))',
//                 marginBottom: '3vh',
//                 cursor: 'pointer',
//               }}
//             />
//           </div>
//           <div className="text_bottom">
//             <p style={{ fontSize: valueSize * 0.025 }}>
//               We want to hear more from you and are willing to help you.
//             </p>
//             <Link style={{ textDecoration: 'none' }} to="/contact-us">
//               <button
//                 className="_button"
//                 style={{ fontSize: valueSize * 0.025 }}
//               >
//                 Contact Us
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="_text">
//           <h3  style={{ fontSize: valueSize * 0.05 }}>
//             We provide it for you, use it according to your needs.
//           </h3>
//           <p  style={{ fontSize: valueSize * 0.03 }}>
//             Our platform aims to facilitate the business of companies, education
//             sector and “UMKM”.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
