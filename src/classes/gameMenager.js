import Snake from './snake';
import Food from './food';

class GameMenager{
    constructor(params){
        this.fps = 8;
        this.score = 0;
        this.gridSize = params.gridSize;
        this.width = params.width;
        this.height = params.height;
        this.isGamePlay = false;

        this.snake = new Snake(this.gridSize);
        this.food = new Food(this.width, this.height,this.gridSize, {x: 10, y:10});
        
        this.StartTouchPosX = null;
        this.StartTouchPosY = null;

    }
    //Collects all information required for the canvas to draw snake and his food
    //Chcange this information to be understund by Canvas Component
    ToDraw = () =>{
        let toDraw = [];
        toDraw = structuredClone(this.snake.body);
        toDraw.push(structuredClone(this.food.point));
        return toDraw;
    }
    //Starting the game
    StartGame = () =>{
        this.Setup();
        this.GameLoop();
    }
    //Prepare every thing for the game
    Setup = () =>{
        this.fps = 8;
        this.score = 0;
        this.isGamePlay = true;
        this.snake.ResetSnake();
        this.food.GenerateFood();
    }

    //Enging the game 
    EndGame = (how)=>{
        this.isGamePlay = false;        
    }
    //Runs each frame of the game
    GameLoop = () => {
        if (this.isGamePlay) {
            
            if (this.snake.body[0].x === this.food.point.x && this.snake.body[0].y=== this.food.point.y) {
                
                this.score += (this.fps - 6)/2;
                if(this.snake.GrowSnake(this.score)){
                    
                }
                this.food.GenerateFood();
            }
            if (this.snake.body[0].x > this.width - 10 ) 
                this.EndGame("hit right");

            if (this.snake.body[0].x < 0 ) 
                this.EndGame("hit left");

            if (this.snake.body[0].y > this.height - 10 ) 
                this.EndGame("hit bottom");

            if (this.snake.body[0].y < 0) 
                this.EndGame("hit top");

            if(this.snake.HitTail())
                this.EndGame("hit tail")

            this.snake.ChangeSnake();
            
        }
        return this.ToDraw();
    }
    
    //Movement Mehtods
    
    //Change direction of the snake using mehtods below
    MakeMove = (direction) => {
        if (this.snake.direction !== 1 && direction === 0)
            this.snake.direction = direction; 
            
            if (this.snake.direction !== 0 && direction === 1 )
            this.snake.direction = direction; 

        if (this.snake.direction !== 3 && direction === 2)
            this.snake.direction = direction; 
            
            if (this.snake.direction !== 2 && direction === 3)
            this.snake.direction = direction;

    }
    //Get the strat position of the touch and store it to later use
    TouchStart = (e) =>{
        this.StartTouchPosX = e.touches[0].clientX;
        this.StartTouchPosY = e.touches[0].clientY;
    }
    //Get the end position of the touch
    TouchEnd = (e) =>{
        const x =  e.changedTouches[0].clientX;
        const y =  e.changedTouches[0].clientY;
        this.MakeMove(this.CalcSwipeDirection(x - this.StartTouchPosX, y - this.StartTouchPosY))
    }
    //Calculate swipe direction
    CalcSwipeDirection = (x, y) =>{
        let nx = Math.abs(x);
        let ny = Math.abs(y);
        let dir = 0;
    
        if(nx >= ny){
            if(x > 0){
                //Swipe right
                dir = 0;
            }else{
                //Swipe left
                dir = 1;
            }
        }else{
           if(y > 0){
                //Swipe down
                dir = 3;
            }else{
                //Swipe top
                dir = 2;
            }
        }
        
        return dir
    }
    //Get key press information 
    KeyPressCalc = (e) =>{
        let dir = 0;
        switch ( e.code) {
    
            // case "Enter":
            //     if(!this.isGamePlay)
            //       break;
    
            case "ArrowRight":
                if (this.snake.direction !== 1)
                    dir = 0; 
                    break;
    
            case "ArrowLeft":
                if (this.snake.direction !== 0)
                    dir = 1; 
                    break;
    
            case "ArrowUp":
                if (this.snake.direction !== 3)
                    dir = 2; 
                    break;
    
            case "ArrowDown":
                if (this.snake.direction !== 2)
                    dir = 3; 
                    break;
            default: {
    
            }
        }
        this.MakeMove(dir)
    }
}
export default GameMenager;


