import React from 'react'
import styles from "../../styles/Timeline.module.css"

const Timeline = () => {
  return (
    <div className={styles.timeline}>
        <ul>
            <li>
                <div className={styles.timelineContent}>
                    <h2 className={styles.date}>June 2022</h2>
                    <h1>Sogeti Game Jam</h1>
                    <p>
                        I participated in a team of 5, in a 48-hour game jam to create a game that promotes protecting the environment. <br/>
                        We were judged based on the connection to environmentalism, the game's code, and the overall development. <br/>
                        Our team won the Best Code category with a prize of €2500.
                    </p>
                </div>
            </li>
            <li>
                <div className={styles.timelineContent}>
                    <h2 className={styles.date}>May 2022 - Present</h2>
                    <h1>Dashboard</h1>
                    <p>
                        The dashboard is a multi-purpose desktop app I created. 
                        <br/>
                        It allows me to launch any frequently used desktop app in one click and includes a To-Do-List making it easy for me to keep track of what needs to be done. 
                        <br/>
                        I created this app using NodeJS, ElectronJS, ReactJS, ExpressJS, and MongoDB.
                        <br/>
                        While working on this project, I gained a better understanding of ElectronJS, ExpressJS, and MongoDB.
                    </p>
                </div>
            </li>
            
        </ul>
    </div>
  )
}

export default Timeline