import {
  Square,
  Circle,
  Triangle,
  Diamond,
  MousePointer2,
  MoveRight,
  Hand,
  Minus,
  Pencil,
} from "lucide-react";
import { createElement } from "react";

export const shapes = [
  { name: "hand", icon: createElement(Hand) },
  { name: "pointer", icon: createElement(MousePointer2) },
  { name: "square", icon: createElement(Square) },
  { name: 'pencil', icon: createElement(Pencil) },
  { name: "eclipse", icon: createElement(Circle) },
  { name: "arrow", icon: createElement(MoveRight) },
  { name: "triangle", icon: createElement(Triangle) },
  { name: "line", icon: createElement(Minus) },
  { name: "diamond", icon: createElement(Diamond) },
] as const;

export const styleElement = [
  {
    title: "stroke",
    element: ["1E1E1E", "E03131", "2F9E44", "1971C2", "F08C00"],
  },
  {
    title: "background",
    element: ["FFFFFF", "FFC9C9", "B2F2BB", "A5D8FF", "FFEC99"],
  },
] as const;
