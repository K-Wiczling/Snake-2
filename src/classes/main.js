let canvasHeight = 300;
let canvasWidth = 600;
let gridSize = 10;
let game = new Game(canvasHeight, canvasWidth, gridSize);

document.addEventListener("keydown", keyPress);

function keyPress(e) {
    switch (e.code) {
        case "Enter":
            if(!game.isGamePlay)
             game.startGame(); break;
        case "ArrowRight":
            if (game.snake.direction != 1)
                game.snake.direction = 0; break;
        case "ArrowLeft":
            if (game.snake.direction != 0)
                game.snake.direction = 1; break;
        case "ArrowUp":
            if (game.snake.direction != 3)
                game.snake.direction = 2; break;
        case "ArrowDown":
            if (game.snake.direction != 2)
                game.snake.direction = 3; break;
    }
}

