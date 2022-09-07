class DomManipulation{

    constructor(canvasHeight, canvasWidth){

        this.canvas = document.getElementById("play");
        this.canvas.height = canvasHeight;
        this.canvas.width = canvasWidth;
        
        this.ctx = this.canvas.getContext("2d");
        
        this.score = document.getElementById("score");
        this.elon = document.getElementById("elon");
        this.endscore = document.getElementById("endscore");
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
    drawSquare(x,y,s){
        this.ctx.fillRect(x, y, s, s);
    }
    showEndScreen(){
        this.elon.style.display = "flex";
    }
    hideEndScreen(){
        this.elon.style.display = "none";
    }
    scoreUp(points){
        this.score.innerHTML = "Points: " + points;
    }
    hideScore(){
        this.score.style.visibility = "hidden";
    }
    showScore(){
        this.score.style.visibility = "visible";
    }
    endScore(points){
        this.endscore.innerHTML = "You're score: " + points;
    }
}