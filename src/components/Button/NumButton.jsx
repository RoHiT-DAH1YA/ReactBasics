import React from 'react'
import styles from './NumButton.module.css'
const NumButton = (props) => {
    let cls = props.varient == '1' ?  `${styles.white_btn}` : `${styles.black_btn}`
  return (
    <button className={cls + ` ${styles.num_btn}`} onClick={props.onClick}>{props.name}</button>
  )
}

export default NumButton