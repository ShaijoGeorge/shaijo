import { useEffect, useRef } from "react";
import "../styles/GeometricAnimation.css";

const GeometricAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let angle = 0;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 400;

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const time = angle * 0.01;

      // Draw multiple rotating shapes
      for (let i = 0; i < 6; i++) {
        const rotation = time + (i * Math.PI / 3);
        const radius = 80 + Math.sin(time + i) * 20;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);

        // Draw hexagon
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const hexAngle = (j * Math.PI) / 3;
          const x = radius * Math.cos(hexAngle);
          const y = radius * Math.sin(hexAngle);
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        
        // Style
        ctx.strokeStyle = `rgba(100, 255, 218, ${0.3 + i * 0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
      }

      // Draw central pulsing circle
      const pulseRadius = 15 + Math.sin(time * 2) * 5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(100, 255, 218, 0.8)";
      ctx.fill();

      // Draw connecting lines
      ctx.beginPath();
      for (let i = 0; i < 12; i++) {
        const lineAngle = (i * Math.PI) / 6 + time;
        const innerRadius = 30;
        const outerRadius = 120 + Math.sin(time + i) * 15;
        
        const x1 = centerX + innerRadius * Math.cos(lineAngle);
        const y1 = centerY + innerRadius * Math.sin(lineAngle);
        const x2 = centerX + outerRadius * Math.cos(lineAngle);
        const y2 = centerY + outerRadius * Math.sin(lineAngle);
        
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.strokeStyle = "rgba(100, 255, 218, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      angle++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div id="geometric-animation">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default GeometricAnimation;