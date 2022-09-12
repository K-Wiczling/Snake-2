import { React, useState, useEffect } from 'react';
import Canvas from '../components/Canvas';
import Splash from '../components/Splash';
import Stats from '../components/Stats';
import './Game.css';
import GameMenager from '../classes/gameMenager';


const Game = () =>{
  
  const [toDraw, setToDraw] = useState([])
  const [score, setScore] = useState(0)
  
  let params = {
    width: 800*1.6,
    height: 800,
    gridSize: 20
  }
  const gm = new GameMenager(params);

  const keyPress = document.addEventListener("keydown", gm.KeyPressCalc);
  const keyPress1 = document.addEventListener("touchstart", gm.TouchStart);
  const keyPress2 = document.addEventListener("touchend", gm.TouchEnd);
  
  gm.StartGame();

  useEffect(() =>{
    
    const Refresh = () =>{
      let t = gm.GameLoop();
      if(score !== gm.score)
        setScore(gm.score);
      
      if(gm.isGamePlay)
        setTimeout(Refresh, 1000);
        setToDraw(t);
    }
    Refresh();
  },[]);
  
  return (
    <div className="game">
      <div className='wrapper br'>
        <Stats>
          {score}
        </Stats>
      </div>
        
      <div className="wrapper bg-light-blue">
        <Canvas toDraw={toDraw} params={params}/>
      </div>
    </div>
    
  );

}


export default Game;
