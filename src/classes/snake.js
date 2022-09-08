import Point from "./point";
class Snake{
    constructor(){
        this.direction = 1;
        
        this.body = [];
        this.resetSnake();
        
    }
    resetSnake(){
        this.direction = 0;
        this.body = [
            new Point(70,50),
            new Point(80,50),
            new Point(90,50),
            new Point(100,50)
        ];
    }
    growSnake(points){
        this.body.push([]);
        if(points%5 === 0)
            return true;
    }
    changeSnake(){
        const sTemp = structuredClone(this.body[0]);

        switch (this.direction) {
            case 0: sTemp.x = sTemp.x + 10; break;
            case 1: sTemp.x = sTemp.x - 10; break;
            case 2: sTemp.y = sTemp.y - 10; break;
            case 3: sTemp.y = sTemp.y + 10; break;
        }
        for (let i = this.body.length - 1; i > 0; --i) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        this.body[0] = sTemp;
        
    }
    hitTail(){
        for (let i = 3; i < this.body.length; ++i) {
            if (this.body[i].x === this.body[0].x && this.body[i].y === this.body[0].y) {
                return true;
            }
        }
    }
}
export default Snake;