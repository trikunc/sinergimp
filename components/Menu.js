import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

function Menu({ valueSize }) {
  return (
    <div className={styles.menu}>
      <Link href="/pillar" passHref>
        <div className={styles.menuItem}>
          <h4 className={styles.h4} style={{ fontSize: valueSize * 0.023 }}>
            Our Pilar
          </h4>
        </div>
      </Link>

      <Link href="/" passHref>
        <div className={styles.menuItem}>
          <h4 className={styles.h4} style={{ fontSize: valueSize * 0.023 }}>
            Blog
          </h4>
        </div>
      </Link>
      <Link href="/contact-us" passHref>
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
