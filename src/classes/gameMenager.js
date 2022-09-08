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
        
        this.StartTouchPosX = null;
        this.StartTouchPosY = null;

    }
    TouchStart = (e) =>{
        this.StartTouchPosX = e.touches[0].clientX;
        this.StartTouchPosY = e.touches[0].clientY;
    }
    TouchEnd = (e) =>{
        const x =  e.changedTouches[0].clientX;
        const y =  e.changedTouches[0].clientY;
        this.MakeMove(this.CalcSwipeDirection(x - this.StartTouchPosX, y - this.StartTouchPosY))
        // console.clear();
        // console.log('X swipe ', x - this.StartTouchPosX);
        // console.log('Y swipe ', y - this.StartTouchPosY);
        
        // console.log('End X:', e.changedTouches[0].clientX);
        // console.log('End Y:', e.changedTouches[0].clientY);
    }
    CalcSwipeDirection = (x, y) =>{
        let nx = Math.abs(x);

        let ny = Math.abs(y);

        let dir = 0;
        if(nx >= ny){
            if(x > 0){
                //Swipe right
                dir = 0;
            }else{
                //Swipe lefy
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
    ToDraw = () =>{
        let toDraw = [];
        toDraw = structuredClone(this.snake.body);
        toDraw.push(structuredClone(this.food.point));
        return toDraw;
    }
    startGame(){
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

            if (this.snake.body[0].x === this.food.point.x && this.snake.body[0].y=== this.food.point.y) {
                
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

}
export default GameMenager;


