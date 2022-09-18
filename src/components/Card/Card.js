import React, {useEffect} from 'react'
import styles from '../../styles/Card.module.css'
import java from '../../images/skills_logo/java.png'



const Card = () => {

    useEffect(() => {
        const card = document.querySelector(`.${styles.card__inner}`);

        card.addEventListener('click', (e) => {
            card.classList.toggle('is-flipped');
        });
    })
    
    
 
  return (
    <div className={styles.card}>
        <div className={styles.card__inner}>
            <div className={`${styles.card__face} ${styles.card__face__front}`}>
                <h2>Developer Card</h2>
            </div>

            <div className={`${styles.card__face} ${styles.card__face__back}`}>
               <div className={styles.card__content}>
                    <div className={styles.card__header}>
                        <img src={java} alt="" class="pp"/>
                        <h2>Kim Hajin</h2>
                    </div>
                    <div className={styles.card__body}>
                        <h3>JavaScript Wizard</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Card