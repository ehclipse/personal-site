import React, { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { MdEmail,   } from 'react-icons/md'
import styles from '../../styles/ContactBar.module.css'


const ContactBar = ({theme}) => {
  const emailCopyClipboard = () => {
    navigator.clipboard.writeText("brian.tran0000@gmail.com");
  }


  useEffect(() => {
    var contactElements = document.getElementsByClassName(styles.contact);
    for(var i = 0; i < contactElements.length; i++)
    {
        contactElements[i].style.color = theme === 'dark' ? '#fff' : '#000'
    }
  }, [theme])

  return (
    <div className={styles.container}>
        <a href="Resume.pdf" target='_blank' rel='noopener noreferrer' className={styles.downloadResume}><FaFileDownload size={30} className={styles.contact}/></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/btbrian/"><FaLinkedin size={30} className={styles.contact}/></a> 
        <a target="_blank" rel="noreferrer" href="https://github.com/ehclipse"> <FaGithub size={30} className={styles.contact} /> </a>
        <span onClick={() => emailCopyClipboard()} className={styles.email}><MdEmail size={30} className={styles.contact} /></span>
      
 
    </div>
  )
}

export default ContactBar