"use client";

import React, { useEffect, useRef, useState } from "react";
import ToolBox from "@/components/ToolBox";
import { canvasType, shapesType } from "@/types/types";
import { shapes, styleElement } from "@/constans";
import { DrawGame } from "../_draw/DrawGame";
import StyleBox from "@/components/StyleBox";

interface canvasprops {
  roomId: string;
  socket: WebSocket;
}

const Canvas = ({ roomId, socket }: canvasprops) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedShape, setSelectedShape] = useState<shapesType>(null);
  const [drawGame, setDrawGame] = useState<DrawGame>();
  const [canvasSize, setCanvasSize] = useState<canvasType>({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const [selectedColor, setSelectedColor] = useState<string>("1E1E1E");
  const [selectedBackground, setSelectedBackground] = useState<string>(
    "FFFFFF"
  );

  useEffect(() => {
    const windowSize = () => {
      const h = window.innerHeight;
      const w = window.innerHeight;

      setCanvasSize({ h, w });
    };
    window.addEventListener("resize", () => windowSize);

    return () => window.removeEventListener("resize", windowSize);
  }, []);

  useEffect(() => {
    drawGame?.setTool(selectedShape);
    drawGame?.setStrokeColor(selectedColor);
    drawGame?.setFillColor(selectedBackground!);
  }, [selectedShape, drawGame, selectedColor, selectedBackground]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const draw = new DrawGame(canvas, roomId, socket);
      setDrawGame(draw);

      return () => {};
    }
  }, [canvasRef, roomId, socket]);

  const handleSetShape = (shapeName: shapesType) => {
    setSelectedShape(shapeName);
  };

  return (
    <div className="flex w-screen h-screen justify-center ">
      <div className="p-1 flex items-center self-center justify-center gap-2 absolute top-0 z-20 translate-y-2 shadow-md border-b border-gray-200  rounded-md border-b-indigo-600  bg-white ">
        {shapes.map((item, index) => (
          <ToolBox
            key={index}
            item={item}
            currentShape={selectedShape}
            handleClick={handleSetShape}
          />
        ))}
      </div>
      <div className="w-[218px] z-20 h-[468px] rounded-lg top-0 bg-white shadow-sm border-[.4px] border-slate-200 fixed left-0 translate-x-5 translate-y-[calc(100%-75%)] text-black ">
        {styleElement.map((item, i) => (
          <StyleBox
            key={i}
            items={item}
            selectedBackground={selectedBackground}
            setSelectedBackground={setSelectedBackground}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        ))}
      </div>
      <canvas
        ref={canvasRef}
        height={canvasSize?.h}
        width={canvasSize?.w}
        className="fixed block  bg-slate-50"
      ></canvas>
    </div>
  );
};

export default Canvas;
