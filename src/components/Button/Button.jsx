import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
    let cls = props.varient == '1' ?  `${styles.white_btn}` : `${styles.black_btn}`
  return (
    <button className={cls + ` ${styles.simplebutton}`} onClick={props.onClick}>{props.name}</button>
  )
}

export default Button