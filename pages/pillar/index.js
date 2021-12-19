import React, { useEffect, useState } from 'react';
import styles from './Pillar.module.css';
import Image from 'next/image';

import Menu from '../../components/Menu';
import Header from '../../components/Header';

import businessIcon from '../../public/icon/bussines_icon.png';
import digitalIcon from '../../public/icon/digital_icon.png';
import iotIcon from '../../public/icon/iot_icon.png';
import serviceIcon from '../../public/icon/service_icon.png';

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

const Pillar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowSize();
  const { height, width } = size;
  const valueSize = height < width ? height : width;
  const value = height > width ? width : width;
  return (
    <div className={styles.pillar}>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        // backColor={true}
        valueSize={valueSize}
        // defaultBack="black"
      />
      {isMenuOpen && <Menu valueSize={valueSize} />}
      <div
        style={{
          width: valueSize * 0.8,
          height: valueSize * 0.8,
          backgroundColor: 'whitesmoke',
          marginTop: 80,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className={styles.pillar_top}
          style={{
            width: valueSize * 0.8,
            height: valueSize * 0.4,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            className={styles.pillar_topLeft}
            style={{
              width: valueSize * 0.4 * 0.95,
              height: valueSize * 0.4 * 0.95,
              marginRight: valueSize * 0.4 * 0.05,
              marginBottom: valueSize * 0.4 * 0.05,
            }}
          >
            <div className={styles.circleBig_topLeft}>
              <div className={styles.pillar_icon}>
                <div style={{ width: valueSize * 0.1 }}>
                  <Image src={businessIcon} alt="" />
                </div>
              </div>
              <div className={styles.title_topLeft}>
                <h3
                  className={styles.pillar_title_h3}
                  style={{ fontSize: valueSize * 0.021 }}
                >
                  Business Platform
                </h3>
                <p
                  className={styles.pillar_text}
                  style={{ fontSize: valueSize * 0.018 }}
                >
                  Our aims to facilitate the business of companies.
                </p>
              </div>
            </div>
            <div className={styles.circleSmall_topLeft}></div>
          </div>
          <div
            className={styles.pillar_topRight}
            style={{
              width: valueSize * 0.4 * 0.95,
              height: valueSize * 0.4 * 0.95,
              marginLeft: valueSize * 0.4 * 0.05,
              marginBottom: valueSize * 0.4 * 0.05,
            }}
          >
            <div className={styles.circleBig_topRight}>
              <div className={styles.pillar_icon}>
                <div style={{ width: valueSize * 0.1 }}>
                  <Image src={iotIcon} alt="" />
                </div>
              </div>
              <div className={styles.title_topRight}>
                <h3
                  className={styles.pillar_title_h3}
                  style={{ fontSize: valueSize * 0.021 }}
                >
                  IoT Platform
                </h3>
                <p
                  className={styles.pillar_text}
                  style={{ fontSize: valueSize * 0.018 }}
                >
                  We will make it easy for you to use the IOT
                </p>
              </div>
            </div>
            <div className={styles.circleSmall_topRight}></div>
          </div>
        </div>
        <div
          className={styles.pillar_bottom}
          style={{
            width: valueSize * 0.8,
            height: valueSize * 0.4,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            className={styles.pillar_bottomLeft}
            style={{
              width: valueSize * 0.4 * 0.95,
              height: valueSize * 0.4 * 0.95,
              marginRight: valueSize * 0.4 * 0.05,
              marginTop: valueSize * 0.4 * 0.05,
            }}
          >
            <div className={styles.circleBig_bottomLeft}>
              <div className={styles.pillar_icon}>
                <div style={{ width: valueSize * 0.1 }}>
                  <Image src={digitalIcon} alt="" />
                </div>
              </div>
              <div className={styles.title_bottomLeft}>
                <h3
                  className={styles.pillar_title_h3}
                  style={{ fontSize: valueSize * 0.021 }}
                >
                  Digitalization
                </h3>
                <p
                  className={styles.pillar_text}
                  style={{ fontSize: valueSize * 0.018 }}
                >
                  Transformation into the digital era is a necessity.
                </p>
              </div>
            </div>
            <div className={styles.circleSmall_bottomLeft}></div>
          </div>
          <div
            className={styles.pillar_bottomRight}
            style={{
              width: valueSize * 0.4 * 0.95,
              height: valueSize * 0.4 * 0.95,
              marginLeft: valueSize * 0.4 * 0.05,
              marginTop: valueSize * 0.4 * 0.05,
            }}
          >
            <div className={styles.circleBig_bottomRight}>
              <div className={styles.pillar_icon}>
                <div style={{ width: valueSize * 0.1 }}>
                  <Image src={serviceIcon} alt="" />
                </div>
              </div>
              <div className={styles.title_bottomRight}>
                <h3
                  className={styles.pillar_title_h3}
                  style={{ fontSize: valueSize * 0.021 }}
                >
                  Professional Service
                </h3>
                <p
                  className={styles.pillar_text}
                  style={{ fontSize: valueSize * 0.018 }}
                >
                  We are experienced in developing systems and software.
                </p>
              </div>
            </div>
            <div className={styles.circleSmall_bottomRight}></div>
          </div>
        </div>
        <div
          className={styles.pillar_title}
          style={{ width: valueSize * 0.4 * 0.95 }}
        >
          <h1 style={{ fontSize: valueSize * 0.04 }}>OUR PILLAR</h1>
          {/* <p className="pillar_text" style={{ fontSize: valueSize * 0.02 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            dolores corporis quia.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Pillar;
