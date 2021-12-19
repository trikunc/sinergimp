import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import sinergiWhite from '../public/img/Logo SMP White.png';
import sinergiBlack from '../public/img/Logo SMP Black.png';

function Header({
  isMenuOpen,
  setIsMenuOpen,
  backColor,
  valueSize,
  defaultBack,
}) {
  const handleIcon = () => {
    if (defaultBack === 'black') {
      return isMenuOpen ? sinergiWhite : sinergiWhite;
    } else {
      return isMenuOpen ? sinergiBlack : sinergiWhite;
    }
  };

  return (
    <div
      className={styles.Header}
      style={
        isMenuOpen === false
          ? backColor
            ? { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
            : { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
          : { backgroundColor: 'rgba(0, 0, 0, 0.0)' }
      }
    >
      <div className={styles.header__logo}>
        <Link href="/" passHref>
          <div
            className={styles.header__logoImg}
            style={{ width: valueSize * 0.1 }}
          >
            <Image src={handleIcon()} alt="" />
          </div>
        </Link>
      </div>
      <div className={styles.header__links}>
        {!isMenuOpen && (
          <div
            className={styles.header__links}
            style={{ fontSize: valueSize * 0.02 }}
          >
            {/* <Link to="/">DIGITALISASI</Link>
            <Link to="/iot">IOT PLATFORM</Link>
            <Link to="/">PLATFORM BISNIS</Link>
            <Link to="/">LAYANAN PROFESIONAL</Link> */}
            <Link className={styles.header__nav} href="/digitalization">
              DIGITALIZATION
            </Link>
            <Link className={styles.header__nav} href="/iot">
              IOT PLATFORM
            </Link>
            <Link className={styles.header__nav} href="/business-platform">
              BUSINESS PLATFORM
            </Link>
            <Link className={styles.header__nav} href="/support-service">
              PROFESIONAL SERVICES
            </Link>
          </div>
        )}
        <div
          className={styles.header__menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseIcon style={{ fontSize: valueSize * 0.03 }} />
          ) : (
            <MenuIcon
              style={{
                color: 'white',
                fontSize: valueSize * 0.03,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
