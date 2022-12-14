import React, {useRef, useEffect } from 'react';
import './Canvas.css';

const Canvas = ({toDraw, params}) =>  {

    const canvasRef = useRef(null)
    
    useEffect(() => {
        console.log('cnavas');
        const canvas = canvasRef.current
        canvas.width = params.width;
        canvas.height = params.height;
        const context = canvas.getContext('2d')
        context.fillStyle = '#000000'
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        toDraw.forEach((draw) =>{
            context.fillRect(draw.x, draw.y, params.gridSize, params.gridSize)
        });  
        
    }, [toDraw, params])

    return (
        <canvas ref={canvasRef} className="play ba"></canvas>
    );
}

export default Canvas;