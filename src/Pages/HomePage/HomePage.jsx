import React from 'react'
import styles from './HomePage.module.css'
import Button from '../../components/Button/Button'
const HomePage = (props) => {
  return (
    <div className={`${styles.container}`}>
        <div>
            <img src="../HomeDiceImage.png" />
        </div>
        <div className={`${styles.home_page_options}`}>
            <img src="../DICE_GAME_TEXT.png" alt="dice_game_text"  className={`${styles.dice_game_text}`}/>
            <Button name="Play Now" onClick={props.changeFunc}/>
        </div>
    </div>
  )
}

export default HomePage