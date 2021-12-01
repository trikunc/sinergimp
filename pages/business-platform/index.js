import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Page.module.css';

// import image1 from '../../assets/img/Picture1.png';
// import image2 from '../../assets/img/Picture4.png';

import Digitalization_svg from '../../public/icon/Digitalization.svg';
// import ProfService_svg from '../../assets/img/Professional Service.svg';

import girlIcon from '../../public/icon/woman_code.svg';
import manlIcon from '../../public/icon/man_code.svg';
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

  const handleValue = () => {
    if (width >= 1220) {
      return width * 0.15 - 33 * 2;
    }
    if (width >= 992 && width < 1220) {
      return width * 0.17 - 30 * 2;
    }
    // Ipad
    if (width >= 768 && width < 992) {
      return width * 0.2 - 20 * 2;
    }
    if (width >= 375 && width < 768) {
      return width * 0.2;
    }
    if (width >= 320 && width < 375) {
      return width * 0.19;
    }
  };

  const handleWrap = () => {
    console.log('Wrap:', width);
    if (width >= 1220) {
      console.log('>1220');
      return value * 0.5;
    }
    if (width >= 992 && width < 1220) {
      console.log('992-1220');
      return value * 0.5;
    }
    // Ipad
    if (width >= 768 && width < 992) {
      console.log('768-992');
      return value * 0.5;
    }
    if (width >= 375 && width < 768) {
      console.log('375-768');
      return value * 0.5;
    }
    if (width >= 320 && width < 375) {
      console.log('320-375');

      return value * 0.5;
    }
  };
  return (
    <div className={styles._container}>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        valueSize={valueSize}
      />
      {isMenuOpen && <Menu valueSize={valueSize} />}
      <div className={styles._card}>
        <div className={styles._text}>
          <h3 style={{ fontSize: valueSize * 0.04 }}>
            With our experience and abilities, we are ready to help you.
          </h3>
          <p style={{ fontSize: valueSize * 0.025 }}>
            We are experienced in developing systems and software, and securing
            them.
          </p>
        </div>
        <div className={styles._picture}>
          <div
            className={styles._picture_4container}
            style={{ width: handleWrap() }}
          >
            <div
              className={styles.text_container}
              style={{
                height: handleValue(),
                width: handleValue(),
                backgroundColor: 'orange',
              }}
            >
              <p style={{ fontSize: valueSize * 0.02 }}>Software Development</p>
            </div>
            <div
              className={styles.img_container}
              style={{
                height: handleValue(),
                width: handleValue(),
              }}
            >
              <div
                style={{
                  height: handleValue() / 2,
                  width: handleValue() / 2,
                }}
              >
                <Image src={manlIcon} alt="image1" />
              </div>
            </div>
            <div
              className={styles.img_container}
              style={{
                height: handleValue(),
                width: handleValue(),
              }}
            >
              <div
                style={{
                  height: handleValue() / 2,
                  width: handleValue() / 2,
                }}
              >
                <Image src={girlIcon} alt="image1" />
              </div>
            </div>
            <div
              className={styles.text_container}
              style={{
                height: handleValue(),
                width: handleValue(),
                backgroundColor: 'green',
              }}
            >
              <p style={{ fontSize: valueSize * 0.02 }}>Information Security</p>
            </div>
          </div>
          <div className={styles.text_bottom}>
            <p style={{ fontSize: valueSize * 0.02 }}>
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
      </div>
    </div>
  );
};

export default BusinessPlatform;
