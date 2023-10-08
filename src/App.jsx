import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import GamePage from './Pages/GamePage/GamePage'
function App() {
  const [isStarted,setIsStarted] = useState(false);
  const toStarted = () => {
    setIsStarted(!isStarted);
  }
  return <>
    {isStarted ? <GamePage /> : <HomePage changeFunc={toStarted}/>}
  </>
}

export default App
