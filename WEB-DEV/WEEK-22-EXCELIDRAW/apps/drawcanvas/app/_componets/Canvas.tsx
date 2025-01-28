"use client";

import React, { useEffect, useRef, useState } from "react";
import { initDraw } from "@/app/_draw";
import { shapes } from "@/constans";
import ToolBox from "@/components/ToolBox";

interface canvasprops {
  roomId: string;
  socket: WebSocket
}

const Canvas = ({ roomId , socket } :canvasprops) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedShape, setSelectedShape] = useState<string>();


 
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      initDraw(canvas, roomId , socket);

      return () => {
        canvas.removeEventListener("mousedown", () => {});
        canvas.removeEventListener("mouseup", () => {});
        canvas.removeEventListener("mousemove", () => {});
      };
    }
  }, [canvasRef ,roomId]);

  const handleSetShape = (shapeName: string) => {
    setSelectedShape(shapeName);
  };

  return (
    <div className="flex w-screen h-screen  justify-center ">
      <div className="p-2 flex items-center justify-center gap-2 absolute top-0 z-20 translate-y-2 shadow-md border-b border-gray-200  rounded-md border-b-indigo-600  bg-white ">
        {shapes.map((item, index) => (
          <ToolBox key={index} item={item} handleClick={handleSetShape} />
        ))}
      </div>
      <canvas
        ref={canvasRef}
        height={window.innerHeight}
        width={window.innerWidth}
        className="fixed block  text-black bg-slate-100"
      ></canvas>
    </div>
  );
};

export default Canvas;
