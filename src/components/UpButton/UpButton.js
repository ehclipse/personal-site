import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import styles from '../../styles/UpButton.module.css'

const UpButton = () => {
  return (
    <a className={styles.goUp} href="/#">
        <FaArrowCircleUp size={35}/>
    </a>
  )
}

export default UpButton