import { React, Component } from 'react';
import Canvas from '../components/Canvas';
import Splash from '../components/Splash';
import Stats from '../components/Stats';
import './Game.css';
import GameMenager from '../classes/gameMenager';

class Game extends Component {
  constructor(props){
    super(props)
    this.gm = new GameMenager(400, 600, 15);
    this.gm.startGame();
  }
  render(){
    let t = true;
    if(t){
      return (
        <div className="game">

          <div className='wrapper br'>
            <Stats/>
          </div>
            
          <div className="wrapper">
            <Canvas toDraw={this.gm.ToDraw()}/>
          </div>


        </div>
        
      );

    }
    else if (!t){
      return (
       
          <Splash/>
        
      );
    }
  }
}

export default Game;
