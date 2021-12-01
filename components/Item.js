import React from 'react';
import Button from './Button';
import Image from 'next/image';
import styles from './Item.module.css';

const Item = ({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
  itemPosition,
  valueSize,
}) => {
  return (
    <div className={styles.item2}>
      <Image
        src={backgroundImg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className={styles.item2__container}>
        <div className={styles[itemPosition]}>
          <div
            className={
              itemPosition === 'item__right'
                ? styles.right
                : itemPosition === 'item__left'
                ? styles.left
                : styles.center
            }
          >
            <div>
              <h1 className={styles.h1} style={{ fontSize: valueSize * 0.04 }}>
                {title}
              </h1>
            </div>
            <div className={styles.item2_textDesc}>
              <p className={styles.p} style={{ fontSize: valueSize * 0.02 }}>
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item2__lowerThird}>
        <div className={styles.item2__buttons}>
          <Button
            imp={styles.secondary}
            text={rightBtnTxt}
            link={rightBtnLink}
            value={valueSize}
          />
          {twoButtons && (
            <Button imp={styles.primary} text={leftBtnTxt} link={leftBtnLink} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
