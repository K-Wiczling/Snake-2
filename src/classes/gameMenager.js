import Snake from './snake';
import Food from './food';

class GameMenager{
    constructor(height, width , grid){
        this.fps = 8;
        this.count = 0;
        this.gridSize = grid;
        this.width = width;
        this.height = height;
        this.isGamePlay = false;

        this.snake = new Snake();
        this.food = new Food();
        // this.dom = new CanvasManipulation(height, width, canvas);
        
        this.refresh = null;

    }
    ToDraw = () =>{
        let toDraw = [];
        toDraw = structuredClone(this.snake.body);
        toDraw.push([this.food.x, this.food.y]);
        return toDraw;
    }
    startGame(){
        this.setup();
        this.gameLoop();
    }
    setup(){
        clearTimeout(this.refresh);
        
        this.fps = 8;
        this.count = 0;
        this.isGamePlay = true;
        this.snake.resetSnake();
        this.food.generateFood(this.width, this.height,this.gridSize);
    }
    
    endGame(){
        clearTimeout(this.refresh);
        this.isGamePlay = false;
  
    }
    gameLoop() {
        console.log(this.snake);
        if (this.isGamePlay) {
            
            this.ToDraw();
            if (this.snake.body[0][0] == this.food.x && this.snake.body[0][1] == this.food.y) {
                
                this.count += (this.fps - 6)/2;
                if(this.snake.growSnake(this.count))
                    this.fps += 2;
                // this.dom.scoreUp(this.count);
                this.food.generateFood(this.width, this.height, this.gridSize);
            }
            if (this.snake.body[0][0] > this.width - 10 ) 
                this.endGame();
            if (this.snake.body[0][0] < 0 ) 
                this.endGame();
            if (this.snake.body[0][1] > this.height - 10 ) 
                this.endGame();
            if (this.snake.body[0][1] < 0) 
                this.endGame();
            this.snake.changeSnake();
            if(this.snake.hitTail())
                this.endGame()
            this.refresh = setTimeout(this.gameLoop, 1000/this.fps);
            console.log(this.refresh);
        }
        
    }
    MakeMove = (direction) => {
        switch (direction) {
            case "Enter":
                if(!this.isGamePlay)
                 this.startGame(); break;
            case "ArrowRight":
                if (this.snake.direction != 1)
                    this.snake.direction = 0; break;
            case "ArrowLeft":
                if (this.snake.direction != 0)
                    this.snake.direction = 1; break;
            case "ArrowUp":
                if (this.snake.direction != 3)
                    this.snake.direction = 2; break;
            case "ArrowDown":
                if (this.snake.direction != 2)
                    this.snake.direction = 3; break;
        }
    }

}
export default GameMenager;


