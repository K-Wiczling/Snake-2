import Point from "./point";
class Snake{
    constructor(gridSize){
        this.direction = 1;
        this.gridSize = gridSize;
        this.body = [];
        this.ResetSnake();
        
    }
    //Set snake to his beginer form
    ResetSnake = () =>{
        this.direction = 0;
        this.body = [
            new Point(10*this.gridSize,5*this.gridSize),
            new Point(9*this.gridSize,5*this.gridSize),
            new Point(8*this.gridSize,5*this.gridSize),
            new Point(7*this.gridSize,5*this.gridSize)
        ];
    }
    //Run when get food to add one more pice to the body
    GrowSnake = (points) =>{
        this.body.push([]);
        // if(points%5 === 0)
        //     return true;
    }
    //Move snake in the direction fo the movement
    ChangeSnake = () =>{
        const sTemp = new Point(this.body[0].x, this.body[0].y)
        
        switch (this.direction) {
            case 0: sTemp.x += this.gridSize; break;
            case 1: sTemp.x -= this.gridSize; break;
            case 2: sTemp.y -= this.gridSize; break;
            case 3: sTemp.y += this.gridSize; break;
        }
        for (let i = this.body.length - 1; i > 0; --i) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        this.body[0] = new Point(sTemp.x, sTemp.y) ;
    }
    //Chceck if snake actuly hit his tail
    HitTail = () =>{
        for (let i = 3; i < this.body.length; ++i) {
            if (this.body[i].x === this.body[0].x && this.body[i].y === this.body[0].y)
                return true;
        }
    }
}
export default Snake;