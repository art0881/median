import React from 'react'
import s from './title.module.css'
const Title = ({ title, text }) => {
  return (
    <div className={s.block}>
     <div className={s.title}>{title}</div> 
     <div className={s.text}>{text}</div> 
    </div>
  )
}

export default Title