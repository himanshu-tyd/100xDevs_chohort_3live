"use client";

import React, { useEffect, useRef, useState } from "react";
import ToolBox from "@/components/ToolBox";
import { canvasType, shapesType } from "@/types/types";
import { shapes, styleElement } from "@/constans";
import { DrawGame } from "../_draw/DrawGame";
import StyleBox from "@/components/StyleBox";
import {
  Loader2,
  Moon,
  Sun,
} from "lucide-react";
import useGetShapes from "../_draw/getShapes";


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
  const [selectedBackground, setSelectedBackground] =
    useState<string>("FFFFFF");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { loading, getShapes } = useGetShapes();

  const isDark = theme === "light";

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
      const draw = new DrawGame(canvas, roomId, socket, getShapes);
      setDrawGame(draw);
    }
  }, [canvasRef, roomId, socket, getShapes]);

  const handleSetShape = (shapeName: string) => {
    setSelectedShape(shapeName as shapesType);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex w-screen h-screen justify-center relative">
      {loading && (
        <div
          className="w-screen h-screen absolute bg-opacity-95 backdrop-blur-sm
    top-0 right-0 left-0 bg-transparent z-30  flex items-center justify-center cursor-not-allowed   "
        >
          <div className="flex items-center space-x-3">
            <Loader2 className="text-blue-600 h-10 w-10 animate-spin " />
            <span>Wait...</span>
          </div>
        </div>
      )}

      <div
        className={`
        p-2 flex items-center justify-center gap-2 
        fixed top-4 left-1/2 -translate-x-1/2 z-20
        rounded-xl shadow-lg
        ${
          isDark
            ? "bg-white/95 border border-slate-200"
            : "bg-[#232329] border border-slate-700"
        }
        backdrop-blur-sm transition-colors duration-300
      `}
      >
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
          ${
            isDark
              ? "bg-white border-slate-200 border-[.4px]"
              : "bg-[#232329] text-white border-slate-700 border-[.4px]"
          }`}
      >
        {styleElement.map((item, i) => (
          <StyleBox
            key={i}
            items={{
              title: item.title,
              element: [...item.element],
            }}
            selectedBackground={selectedBackground}
            setSelectedBackground={setSelectedBackground}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        ))}
      </div>
      <div
        className={`fixed top-5 z-20 right-5 -translate-x-5 rounded-full  shadow-md border  p-2 flex items-center justify-center clicked-effect ${
          isDark
            ? "bg-white/95 border-slate-200 "
            : "bg-[#232329] text-white/95 border-slate-500 "
        } `}
      >
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "dark" : "light"} mode`}
        >
          {isDark ? <Moon /> : <Sun />}
        </button>
      </div>

      <canvas
        ref={canvasRef}
        height={canvasSize.h}
        width={canvasSize.w}
        className={`fixed block ${isDark ? "bg-slate-50" : "bg-[#121212]"}`}
      />
    </div>
  );
};

export default Canvas;
