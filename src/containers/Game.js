import { React, Component } from 'react';
import Canvas from '../components/Canvas';
import Splash from '../components/Splash';
import Stats from '../components/Stats';
import './Game.css';
import GameMenager from '../classes/gameMenager';

class Game extends Component {
  constructor(props){
    super(props)
    this.params = {
      width: 600,
      height: 400,
      gridSize: 10
    }
    this.gm = new GameMenager(this.params);
    this.refresher = null;
    this.state = {
      toDraw: []
    }
    
    this.keyPress = document.addEventListener("keydown", this.gm.KeyPressCalc);
    this.keyPress = document.addEventListener("touchstart", this.gm.TouchStart);
    this.keyPress = document.addEventListener("touchend", this.gm.TouchEnd);
}

  componentDidMount(){
    this.gm.startGame();
    this.Refresh();
    this.setState({toDraw: []})
  }
 
  Refresh = () =>{
    let t = this.gm.gameLoop();
    if(this.gm.isGamePlay)
      this.refresher = setTimeout(this.Refresh, 200);
    this.setState({toDraw: t})
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
            <Canvas toDraw={this.state.toDraw} params={this.params}/>
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
