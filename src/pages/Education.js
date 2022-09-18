import React from 'react'
import styles from '../styles/Education.module.css';

const Education = () => {
  return (                 
    <div className={styles.bg}>
      <div className={styles.container}>
        <h1> EDUCATION </h1>
        <div className={styles.uniItem}>
          <div className={`${styles.row} ${styles.university}`}>
            <h2> <span> THE UNIVERSITY OF TEXAS AT DALLAS </span> | RICHARDSON, TEXAS </h2>
            <p>FALL 2020 - SPRING 2024</p>
          </div>
          <div className={styles.row}>
            <h3>BACHELOR OF SCIENCE IN COMPUTER SCIENCE</h3>  
            <p>GPA: 3.95/4.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Maybe add a comet background
 */
  
export default Education