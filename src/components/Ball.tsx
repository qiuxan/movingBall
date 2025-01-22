import React, { useState, useEffect } from 'react'
import "./Ball.css"

interface BallProps {
    left?: number;
    top?: number;
    bgColor?: string;

    xSpeed: number;
    ySpeed: number;
}


const Ball = (props:BallProps) => {
  
  const [left, setLeft] = useState(props.left || 0); // x axis position
  const [top, setTop] = useState(props.top || 0); // y axis position
  const [xSpeed, setXSpeed] = useState(props.xSpeed); // x axis speed
  const [ySpeed, setYSpeed] = useState(props.ySpeed); // y
  
  const duration = 16
  
  useEffect(() => {
    const interval = setInterval(() => {
      const xDistance = xSpeed * duration / 1000;
      const yDistance = ySpeed * duration / 1000;

      let newLeft = left + xDistance;
      let newTop = top + yDistance;

      if (newLeft <= 0) {
        newLeft = 0;
        setXSpeed(-xSpeed);
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        setXSpeed(-xSpeed);
      }

      if (newTop <= 0) {
        newTop = 0;
        setYSpeed(-ySpeed);
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        setYSpeed(-ySpeed);
      }

      setLeft(newLeft);
      setTop(newTop);
    }, duration);

    return () => clearInterval(interval);
  }, [left, top, xSpeed, ySpeed]);

  return (
    <div 
    className='ball' 
    style={{
        left: left + "px",
        top: top + "px",
        background:props.bgColor ||"red"
    }}></div>
  )
}

export default Ball