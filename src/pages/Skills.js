import React from 'react'
import Card from '../components/Card/Card';
import SkillCard from '../components/SkillCard/SkillCard';
import styles from '../styles/Skills.module.css';


import Java from '../images/skills_logo/java.png';
import JS from '../images/skills_logo/JS.png';
import Git from '../images/skills_logo/git.png';
import CSS from '../images/skills_logo/css.png';
import HTML from '../images/skills_logo/html.png';
import ReactLogo from '../images/skills_logo/react.png';
import CPP from '../images/skills_logo/c++.svg';

const Skills = () => {

  const skills = [{title: 'Java', description: '', icon: Java}, {title: 'Git', icon: Git}, {title: 'HTML', icon: HTML}, {title: 'CSS', icon: CSS}, {title: 'JavaScript', icon: JS}, {title: 'React', icon: ReactLogo}, {title: 'C++', icon: CPP},]
  return ( 
    <div className={styles.container}>
      <h1>SKILLS</h1>
      <div className={styles.skills}>
        {skills.map((skill) => {
          return <SkillCard cardInfo={skill}/>
        })}
      </div>
    </div>
  )
}

export default Skills