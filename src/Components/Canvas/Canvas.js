import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
