import React from "react";


interface ToolBoxProps {
  item: {
    name: string;
    icon: React.ReactNode;
  };
  handleClick: (name: string) => void;
  currentShape: string | null;
  theme: "light" | "dark";
}

const ToolBox: React.FC<ToolBoxProps> = ({
  item,
  handleClick,
  currentShape,
  theme,
}) => {
  const isSelected = currentShape === item.name;
  const isDark = theme === "dark";

  return (
    <div
      className={`
        relative cursor-pointer p-2 rounded-md group 
        transition-all duration-300 
         ${
          isSelected
            ? //this is for dark mode
              isDark
              ? "bg-[#16161a] hover:bg-indigo-200"
              : "bg-indigo-100 hover:bg-[#9191b1]"
            : //this is for light mode
              isDark
              ? "bg-[#232329]  hover:bg-[#16161a]"
              : "bg-white hover:bg-indigo-50"
          }
        `}
      onClick={() => handleClick(item.name)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(item.name);
        }
      }}
    >
      {/* Tool Icon */}
      <span
        className={`
          block relative text-base
          ${isDark ? "text-slate-200  " : "text-[#232329]"}
          ${isSelected && !isDark && "text-indigo-900"}
        `}
      >
        {item.icon}
      </span>

      {/* Tooltip */}
      <span
        className={`
          capitalize absolute left-1/2 -translate-x-1/2 -bottom-8
          text-xs py-1 px-2 rounded-md whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-all duration-200
          ${
            isDark
              ? "bg-[#282830] text-indigo-50"
              : "bg-white text-slate-900 shadow-lg"
          }
        `}
      >
        {item.name}
      </span>
    </div>
  );
};

export default ToolBox;
