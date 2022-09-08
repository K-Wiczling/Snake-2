import Point from "./point";

class Food{
    constructor(width, height, gridSize, position){
      this.point = new Point(position.x*gridSize, position.y*gridSize); //Position if the food
      this.gridSize = gridSize;
      this.width = width;
      this.height = height
    }
    GenerateFood = () => {
      
      //Generate X adn Y value in the cnavas constrains
      this.point.x = Math.floor((Math.random() * this.width));
      this.point.x -=  (this.point.x % this.gridSize);

      this.point.y = Math.floor((Math.random() * this.height));
      this.point.y -= (this.point.y % this.gridSize);
    }
}
export default Food;