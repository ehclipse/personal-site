import React from 'react'
import styles from '../styles/Home.module.css';
import bg from '../images/bg.jpg'
import ContactBar from '../components/ContactBar/ContactBar';

const Home = ({theme}) => {
  return (
    <section className={styles.container}>
        <div className={styles.bg}>
          <img alt="" src={bg} />
        </div>
        <div className={styles.textContainer}>
          <h1>Hello! I'm <span>Brian Tran</span></h1>
          <p>
              I am a student pursuing a Bachelor's Degree in Computer Science at The University of Texas at Dallas and set to graduate in May 2024.
              I am always curious and I want to explore my various technical interests. I am currently looking into frontend and backend web/app development. 
              I am learning how to work with ReactJS, a frontend library and ExpressJS, a backend framework through YouTube tutorials.
          </p>
          <ContactBar theme={theme} className={styles.contact}/>
        </div>
    </section>
  )
}

export default Home 