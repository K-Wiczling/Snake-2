import React, {useRef, useEffect } from 'react';
import './Canvas.css';

const Canvas = (props) =>  {

    const canvasRef = useRef(null)

    useEffect(() => {

        // this.canvas.height = canvasHeight;
        // this.canvas.width = canvasWidth;
        
        // this.context = this.canvas.getContext("2d");
        // clearCanvas() {
        //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // }
        // drawSquare(x,y,s){
        //     this.ctx.fillRect(x, y, s, s);
        // }
        // drawUpdate(){
        // done    this.dom.clearCanvas();
        // done    this.dom.drawSquare(this.food.x, this.food.y,  this.gridSize);
        // done     this.snake.body.forEach((snake_element) =>{
        // done        this.dom.drawSquare(snake_element[0], snake_element[1], this.gridSize);
        // done    });  
        // }
        const canvas = canvasRef.current
        canvas.height = 400;
        canvas.width = 600;
        
        const context = canvas.getContext('2d')
        context.fillStyle = '#000000'
        context.clearRect(0, 0, canvas.width, canvas.height);
        props.toDraw.forEach((snake_element) =>{
            context.fillRect(snake_element[0], snake_element[1], 15, 15)
        });  
       
    }, [])

    return (
        <canvas ref={canvasRef} className="play ba"></canvas>
    );
}

export default Canvas;