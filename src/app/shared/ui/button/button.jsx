import React from 'react'
import s from './button.module.css'

const Button = ({ padding, children }) => {
  return (
      <button className={s.button} style={{ padding: padding }}>
      {children}
    </button>
  )
}

export default Button