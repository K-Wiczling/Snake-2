import Point from "./point";

class Food{
    constructor(){
      this.point = new Point(100, 100);
    }
    generateFood(canvasWidth, canvasHeight, gridSize) {
        this.point.x = Math.floor((Math.random() * canvasWidth));
        this.point.x -=  (this.point.x % gridSize);
        this.point.y = Math.floor((Math.random() * canvasHeight));
        this.point.y -= (this.point.y % gridSize);
    }
}
export default Food;