"use client"
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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';

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);
  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder
  })

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}