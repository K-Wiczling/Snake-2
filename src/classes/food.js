class Food{
    constructor(){
        this.x = 100;
        this.y = 100;
    }
    generateFood() {
        this.x = Math.floor((Math.random() * canvasWidth));
        this.x -=  (this.x % gridSize);
        this.y = Math.floor((Math.random() * canvasHeight));
        this.y -= (this.y % gridSize);
    }
}