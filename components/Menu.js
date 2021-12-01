import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

function Menu({ valueSize }) {
  return (
    <div className={styles.menu}>
      <Link href="/pillar">
        <div className={styles.menuItem}>
          <h4 className={styles.h4} style={{ fontSize: valueSize * 0.023 }}>
            Our Pilar
          </h4>
        </div>
      </Link>

      <Link style={{ textDecoration: 'none' }} href="/">
        <div className={styles.menuItem}>
          <h4 className={styles.h4} style={{ fontSize: valueSize * 0.023 }}>
            Blog
          </h4>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} href="/contact-us">
        <div className={styles.menuItem}>
          <h4 className={styles.h4} style={{ fontSize: valueSize * 0.023 }}>
            Contact Us
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default Menu;
