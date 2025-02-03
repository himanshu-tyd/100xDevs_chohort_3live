"use client";

import React, { useEffect, useRef, useState } from "react";
import ToolBox from "@/components/ToolBox";
import { canvasType, shapesType } from "@/types/types";
import { shapes, styleElement } from "@/constans";
import { DrawGame } from "../_draw/DrawGame";
import StyleBox from "@/components/StyleBox";
import { Moon, Sun } from "lucide-react";

interface CanvasProps {
  roomId: string;
  socket: WebSocket;
}

const Canvas = ({ roomId, socket }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedShape, setSelectedShape] = useState<shapesType>(null);
  const [drawGame, setDrawGame] = useState<DrawGame>();
  const [canvasSize, setCanvasSize] = useState<canvasType>({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const [selectedColor, setSelectedColor] = useState<string>("1E1E1E");
  const [selectedBackground, setSelectedBackground] = useState<string>("FFFFFF");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const windowSize = () => {
      const h = window.innerHeight;
      const w = window.innerWidth;
      setCanvasSize({ h, w });
    };
    window.addEventListener("resize", windowSize);
    return () => window.removeEventListener("resize", windowSize);
  }, []);

  useEffect(() => {
    drawGame?.setTool(selectedShape);
    drawGame?.setStrokeColor(selectedColor);
    drawGame?.setFillColor(selectedBackground);
  }, [selectedShape, drawGame, selectedColor, selectedBackground]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const draw = new DrawGame(canvas, roomId, socket);
      setDrawGame(draw);
    }
  }, [canvasRef, roomId, socket]);

  const handleSetShape = (shapeName: string) => {
    setSelectedShape(shapeName as shapesType);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex w-screen h-screen justify-center">
      <div className={`
        p-2 flex items-center justify-center gap-2 
        fixed top-4 left-1/2 -translate-x-1/2 z-20
        rounded-xl shadow-lg
        ${theme === "light" 
          ? "bg-white/95 border border-slate-200" 
          : "bg-[#232329] border border-slate-700"
        }
        backdrop-blur-sm transition-colors duration-300
      `}>
        {shapes.map((item, index) => (
          <ToolBox
            key={index}
            item={item}
            currentShape={selectedShape}
            handleClick={handleSetShape}
            theme={theme}
          />
        ))}
      </div>
      <div 
        className={`w-[212px] z-20 h-[468px] rounded-lg top-0 shadow-sm fixed left-0 translate-x-5 translate-y-[calc(100%-75%)] 
          ${theme === "light" 
            ? "bg-white border-slate-200 border-[.4px]" 
            : "bg-[#232329] text-white border-slate-700 border-[.4px]"
          }`}
      >
        {styleElement.map((item, i) => (
          <StyleBox
            key={i}
            items={{
              title: item.title,
              element: [...item.element]
            }}
            selectedBackground={selectedBackground}
            setSelectedBackground={setSelectedBackground}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        ))}
      </div>
      <div className="fixed top-0 right-0 -translate-x-10 translate-y-5 z-20 rounded-full bg-white shadow-md border border-slate-200 p-2 flex items-center justify-center clicked-effect">
        <button 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
      <canvas
        ref={canvasRef}
        height={canvasSize.h}
        width={canvasSize.w}
        className={`fixed block ${theme === "light" ? "bg-slate-50" : "bg-[#121212]"}`}
      />
    </div>
  );
};

export default Canvas;
