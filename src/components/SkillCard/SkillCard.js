import React from 'react'
import styles from '../../styles/SkillCard.module.css';
/*https://www.youtube.com/watch?v=OV8MVmtgmoY&ab_channel=ArjunKhara*/
const SkillCard = ({cardInfo}) => {
  return (
    <div className={styles.container} >
        <div className={styles.skillCard}>
            <div className={styles.skillCardHeader}>
                <img src={cardInfo?.icon} alt=""/>
            </div>
            <div className={styles.skillCardContent}>
                <h2>{cardInfo.title}</h2>
                <p>{cardInfo?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default SkillCard