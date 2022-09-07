class Game{
    constructor(height, width , grid){
        this.fps = 8;
        this.count = 0;
        this.gridSize = grid;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.isGamePlay = false;

        this.snake = new Snake();
        this.food = new Food();
        this.dom = new DomManipulation(height, width);
        
        this.refresh;
    }
    
    startGame(){
        game.setup();
        game.gameLoop();
    }
    setup(){
        clearTimeout(game.refresh);
        
        game.fps = 8;
        game.count = 0;
        game.isGamePlay = true;
        game.snake.resetSnake();
        game.dom.hideEndScreen();
        game.dom.showScore();
        game.dom.scoreUp(game.count);
        game.food.generateFood();
    }
    drawUpdate(){
        game.dom.clearCanvas();
        game.dom.drawSquare(game.food.x, game.food.y,  game.gridSize);
        game.snake.body.forEach((snake_element) =>{
            game.dom.drawSquare(snake_element[0], snake_element[1], game.gridSize);
        });  
    }
    endGame(){
        clearTimeout(game.refresh);
        game.dom.clearCanvas();
        game.isGamePlay = false;
        game.dom.endScore(game.count);
        game.dom.hideScore();
        game.dom.showEndScreen();
    }
    gameLoop() {
        if (game.isGamePlay) {
            
            game.drawUpdate()
            if (game.snake.body[0][0] == game.food.x && game.snake.body[0][1] == game.food.y) {
                
                game.count += (game.fps - 6)/2;
                if(game.snake.growSnake(game.count))
                    game.fps += 2;
                game.dom.scoreUp(game.count);
                game.food.generateFood();
            }
            if (game.snake.body[0][0] > game.canvasWidth - 10 ) 
                game.endGame();
            if (game.snake.body[0][0] < 0 ) 
                game.endGame();
            if (game.snake.body[0][1] > game.canvasHeight - 10 ) 
                game.endGame();
            if (game.snake.body[0][1] < 0) 
                game.endGame();
            game.snake.changeSnake();
            if(game.snake.hitTail())
                game.endGame()
            game.refresh = setTimeout(game.gameLoop, 1000/game.fps);
        }
        
    }
}
