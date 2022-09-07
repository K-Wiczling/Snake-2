class Snake{
    constructor(){
        this.direction = 0;
        
        this.body = [];
        this.resetSnake();
        
    }
    resetSnake(){
        this.direction = 0;
        this.body = [
            [50, 50],
            [60, 50],
            [70, 50],
            [80, 50],
        ];
    }
    growSnake(points){
        this.body.push([]);
        if(points%5 === 0)
            return true;
    }
    changeSnake(){
        let sTemp = this.body[0];

        switch (this.direction) {
            case 0: sTemp[0] = sTemp[0] + 10; break;
            case 1: sTemp[0] = sTemp[0] - 10; break;
            case 2: sTemp[1] = sTemp[1] - 10; break;
            case 3: sTemp[1] = sTemp[1] + 10; break;
        }
        for (let i = this.body.length - 1; i > 0; --i) {
            this.body[i][0] = this.body[i - 1][0];
            this.body[i][1] = this.body[i - 1][1];
        }
        this.body[0] = sTemp;
        
    }
    hitTail(){
        for (let i = 3; i < this.body.length; ++i) {
            if (this.body[i][0] === this.body[0][0] && this.body[i][1] === this.body[0][1]) {
                return true;
            }
        }
    }
}