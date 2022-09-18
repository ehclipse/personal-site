import React from 'react'
import Timeline from '../components/Timeline/Timeline';
import styles from '../styles/Projects.module.css';
const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>PROJECTS</h1>
      <div className={styles.timelineContainer}>
        <Timeline/>
      </div>
    </div>
  )
}

export default Projects