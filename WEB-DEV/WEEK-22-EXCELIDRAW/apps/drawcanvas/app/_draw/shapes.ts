export type shapes =
  | {
      type: "square";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "eclipse";
      centerX: number;
      centerY: number;
      radius: number;
    }
  | {
      type: "triangle";
      moveX: number;
      moveY: number;
      lineToLeftX: number;
      lineToLeftY: number;
      lineToRightX: number;
      lineToRightY: number;
    };
