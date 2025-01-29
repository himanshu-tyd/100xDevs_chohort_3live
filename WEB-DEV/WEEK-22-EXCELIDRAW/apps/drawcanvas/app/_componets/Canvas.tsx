"use client";

import React, { useEffect, useRef, useState } from "react";
import ToolBox from "@/components/ToolBox";
import { canvasType, shapesType } from "@/types/types";
import { shapes } from "@/constans";
import { DrawGame } from "../_draw/DrawGame";

interface canvasprops {
  roomId: string;
  socket: WebSocket;
}

const Canvas = ({ roomId, socket }: canvasprops) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedShape, setSelectedShape] = useState<shapesType>("square");
  const [drawGame, setDrawGame] = useState<DrawGame>();
  const [canvasSize, setCanvasSize] = useState<canvasType>({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  const windowSize = () => {
    const h = window.innerHeight;
    const w = window.innerHeight;

    setCanvasSize({ h, w });
  };

  useEffect(() => {
    window.addEventListener("resize", () => windowSize);
  }, []);

  useEffect(() => {
    drawGame?.setTool(selectedShape);
  }, [selectedShape, drawGame]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const draw = new DrawGame(canvas, roomId, socket);
      setDrawGame(draw);

      return () => {
        canvas.removeEventListener("mousedown", () => {});
        canvas.removeEventListener("mouseup", () => {});
        canvas.removeEventListener("mousemove", () => {});
      };
    }
  }, [canvasRef]);

  const handleSetShape = (shapeName: shapesType) => {
    setSelectedShape(shapeName);
  };

  return (
    <div className="flex w-screen h-screen  justify-center ">
      <div className="p-2 flex items-center justify-center gap-2 absolute top-0 z-20 translate-y-2 shadow-md border-b border-gray-200  rounded-md border-b-indigo-600  bg-white ">
        {shapes.map((item, index) => (
          <ToolBox
            key={index}
            item={item}
            currentShape={selectedShape}
            handleClick={handleSetShape}
          />
        ))}
      </div>
      <canvas
        ref={canvasRef}
        height={canvasSize?.h}
        width={canvasSize?.w}
        className="fixed block  text-black bg-slate-100"
      ></canvas>
    </div>
  );
};

export default Canvas;
