import React, { useRef, useState } from "react";
import "./SignatureCanvas.css"
const SignatureCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setLastX(e.nativeEvent.offsetX);
    setLastY(e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    context.strokeStyle = "blue";
    context.lineWidth =1;
    context.lineCap = "round";

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.stroke();

    setLastX(x);
    setLastY(y);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="signature" >
      <canvas
        ref={canvasRef}
        width={350}
        height={125}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        style={{border:"1px solid #b8bdc9",borderRadius:"5px"}}

      />
      <button className="sig-btn" onClick={clearCanvas}>Clear</button>
    </div>
  );
};

export default SignatureCanvas;
