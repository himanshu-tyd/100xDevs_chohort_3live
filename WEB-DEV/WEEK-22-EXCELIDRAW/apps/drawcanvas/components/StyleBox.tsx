import React, { useState } from "react";

interface styleProps {
  items: { title: string; element: string[] };
  selectedBackground: string | null;
  setSelectedBackground: (color: string) => void;
  setSelectedColor: (color: string) => void;
  selectedColor: string | null
}

const StyleBox = ({
  items,
  selectedBackground,
  setSelectedBackground,
  selectedColor,
  setSelectedColor,
}: styleProps) => {
  const [stroke, setStroke] = useState(false);
  const [background, setBackground] = useState(false);

  console.log("strroke", selectedColor);
  const handleClick = (color: string, title: string) => {
    if (title === "stroke") {
      setSelectedColor(color || "1E1E1E"); // Ensures it always has a default
      setStroke(true);
      setBackground(false);
    }
  
    if (title === "background") {
      setSelectedBackground(color);
      setBackground(true);
      setStroke(false);
    }
  };
  console.log(selectedBackground, selectedColor);

  return (
    <div className="flex flex-col px-2 py-3 font-normal text-[10px] capitalize space-y-1">
      <span>{items.title}</span>
      <div className="flex items-center gap-2">
        {items.element.map((c) => (
          <div
            onClick={() => handleClick(c, items.title)}
            key={c}
            className="w-6 h-6 cursor-pointer rounded-md border border-gray-300 hover:border hover:border-gray-700 p-1  "
            style={{ backgroundColor: `#${c}` }}
          ></div>
        ))}
        <div className="w-[2px] h-2 rounded-lg bg-gray-300"></div>
        <div
        
          className={`w-7 h-7  rounded-md outline-2 outline-indigo-100 outline `}
          style={{
            backgroundColor: stroke
              ? `#${selectedColor || "1E1E1E"}`
              : background
                ? `#${selectedBackground || "transparent"}`
                : "transparent",
          }}
        ></div>
      </div>
    </div>
  );
};

export default StyleBox;
