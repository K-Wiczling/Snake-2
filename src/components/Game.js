import './App.css';

function App() {
  return (
    <div className="Game">
        <div id="elon"  >
            <div id="musk" >
                <div id="lost" class="center-text">You lost </div>
                <div id="endscore" class="center-text">Youre Socre is: </div>
                <div id="restart" class="center-text" >Enter to start game</div>
            </div>
        </div>
        <div id="score"  >Points: 0</div>
        <canvas id="play">
        </canvas>
        <div id="dsc" class="flex-center">
            <p>Hit enter to start the game</p>
        </div>
    </div>
  );
}

export default App;
