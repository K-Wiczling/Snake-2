import Snake from './snake';
import Food from './food';

class GameMenager{
    constructor(params){
        this.fps = 8;
        this.count = 0;
        this.gridSize = params.gridSize;
        this.width = params.width;
        this.height = params.height;
        this.isGamePlay = false;

        this.snake = new Snake();
        this.food = new Food();
        

    }
    ToDraw = () =>{
        let toDraw = [];
        toDraw = structuredClone(this.snake.body);
        toDraw.push(structuredClone(this.food.point));
        return toDraw;
    }
    startGame(){
        console.log("sg");
        this.setup();
        this.gameLoop();
    }
    setup(){
        this.fps = 8;
        this.count = 0;
        this.isGamePlay = true;
        this.snake.resetSnake();
        this.food.generateFood(this.width, this.height,this.gridSize);
    }
    
    endGame(how){
        this.isGamePlay = false;
        //TESTING
        console.log(`end ${how}`);
        console.log(this.snake);
        console.log(this.food);
        
    }
    gameLoop = () => {
        if (this.isGamePlay) {

            if (this.snake.body[0].x == this.food.point.x && this.snake.body[0].y== this.food.point.y) {
                
                this.count += (this.fps - 6)/2;
                if(this.snake.growSnake(this.count)){
                    // this.dom.scoreUp(this.count);
                }
                this.food.generateFood(this.width, this.height, this.gridSize);
            }
            if (this.snake.body[0].x > this.width - 10 ) 
                this.endGame("hit right");
            if (this.snake.body[0].x < 0 ) 
                this.endGame("hit left");
            if (this.snake.body[0].y > this.height - 10 ) 
                this.endGame("hit bottom");
            if (this.snake.body[0].y < 0) 
                this.endGame("hit top");
            this.snake.changeSnake();
            if(this.snake.hitTail())
                this.endGame("hit tail")
        }
        return this.ToDraw();
    }
    // MakeMove = (direction) => {
    //     switch (direction) {
    //         case "Enter":
    //             if(!this.isGamePlay)
    //              this.startGame(); break;
    //         case "ArrowRight":
    //             if (this.snake.direction != 1)
    //                 this.snake.direction = 0; break;
    //         case "ArrowLeft":
    //             if (this.snake.direction != 0)
    //                 this.snake.direction = 1; break;
    //         case "ArrowUp":
    //             if (this.snake.direction != 3)
    //                 this.snake.direction = 2; break;
    //         case "ArrowDown":
    //             if (this.snake.direction != 2)
    //                 this.snake.direction = 3; break;
    //     }
    // }

}
export default GameMenager;


