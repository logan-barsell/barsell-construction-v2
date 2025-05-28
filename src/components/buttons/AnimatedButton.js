'use client';
import { useState } from 'react';
import styles from './AnimatedButton.module.css';

const AnimatedButton = ({ text, onClick, color = 'white', className }) => {
  return (
    <div
      className={`${styles.button} ${styles[color]} ${className}`} // Conditionally apply white or black variant
      onClick={onClick}
    >
      <div className={`${styles.line} ${styles.line1}`} />
      <div className={`${styles.line} ${styles.line2}`} />
      <div className={`${styles.line} ${styles.line3}`} />
      <div className={`${styles.line} ${styles.line4}`} />
      <div className={`${styles.line} ${styles.line5}`} />
      <div className={`${styles.line} ${styles.line6}`} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default AnimatedButton;
