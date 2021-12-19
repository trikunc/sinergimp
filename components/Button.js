import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

const Button = ({ imp, text, link, valueSize }) => {
  return (
    <div
      className={styles.button}
      style={{
        fontSize: valueSize * 0.02,
      }}
    >
      <Link href={`${link}`}>{text}</Link>
    </div>
  );
};

export default Button;
