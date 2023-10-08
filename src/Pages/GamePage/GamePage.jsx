import React, { useEffect, useState } from 'react'
import NumButton from '../../components/Button/NumButton';
import Button from '../../components/Button/Button';
import styles from './GamePage.module.css';

const GamePage = () => {
    const [showRules,setShowRules] = useState(false);
    const [diceNum,setDiceNum] = useState(1);
    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState(-1);
    const [warning, setWarning] = useState(false);

    const toggle = () => {
        setShowRules(!showRules);
    }

    const SelectNum = (value) => {
        setWarning(false);
        setSelectedNum(value);
    }
    const updateScore = (curr) => {
        console.log('selected num: ', selectedNum)
        if(selectedNum == -1){
            setWarning(true);
            return;
        }
        if(selectedNum == curr){
            setScore((prev) => (prev + selectedNum));
        }else{
            setScore((prev) => (prev > 1 ? prev-2 : 0));
        }
    }


    const roll_dice = () => {
        let curr = Math.round(Math.random() * 6);
        if(curr>5){ curr = 5; }
        console.log("curr:(diceNum) ",curr);
        setDiceNum(curr);
        updateScore(curr+1)
    }

    const reset = () => {
        console.log('reset')
        setScore(0);
        setDiceNum(1);
        setSelectedNum(-1);
    }
    return (
        <div className={`${styles.container}`}>
            <GameNavBar score={score} selectedNum={selectedNum} SelectNum={SelectNum} warning={warning}/>
            <DiceArea toggle={toggle} diceNum={diceNum} setDiceNum={setDiceNum} roll_dice={roll_dice} reset={reset}/>
            {showRules && <RuleCard />}
        </div>
    )
}

const GameNavBar = ({score,selectedNum,SelectNum,warning}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    return (
        <div className={`${styles.game_navbar}`}>
            <div className={`${styles.score_card}`}>
                <h1 className={`${styles.score_card_score}`}>{score}</h1>
                <h4>Total Score</h4>
            </div>
            <div className={`${styles.select_num}`}>
                {warning && <p className={`${styles.warning}`}> You have not selected any number </p>}
                <ul className={`${styles.dice_list}`}>
                    {
                        arrNumber.map((value, i) => {
                            return <li key={i}>
                                <NumButton
                                    name={value}
                                    varient={selectedNum == value? '0' : '1'}
                                    onClick={() => SelectNum(value)} />
                            </li>
                        })
                    }
                </ul>
                <h3> Select Number </h3>
            </div>
        </div>
    )
}
const DiceArea = ({toggle,diceNum,roll_dice,reset}) => {
    const images = [
        <img src='../../dice_1.png' />,
        <img src='../../dice_2.png' />,
        <img src='../../dice_3.png' />,
        <img src='../../dice_4.png' />,
        <img src='../../dice_5.png' />,
        <img src='../../dice_6.png' />,
    ]

    return (
        <div className={`${styles.dice_area}`}>
            <div onClick={roll_dice}>
                {images[diceNum]}
            </div>
            <Button name="Reset Score" varient='1' onClick={reset}/>
            <Button name="Show Rules" varient='1' onClick={toggle}/>
        </div>
    )
}
const RuleCard = () => {
    return (
        <div className={`${styles.rule_card}`}>
            <p className={`${styles.rule_card_heading}`}>How to play dice game</p>
            <p>1. Select any number <br />
                2. Click on dice image<br />
                3. After click on  dice  if selected number is equal to dice number you will get same point as dice<br />
                4. If you get wrong guess then  2 point will be dedcuted </p>
        </div>
    )
}
export default GamePage






