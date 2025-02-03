export type shapes =
  | {
      type: "square";
      x: number;
      y: number;
      width: number;
      height: number;
      isFill: boolean;
      fillColor: string;
      strokeColor: string;
    }
  | {
      type: "eclipse";
      centerX: number;
      centerY: number;
      radius: number;
      isFill:boolean;
      fillColor:string,
      strokeColor:string
    }
  | {
      type: "triangle";
      moveX: number;
      moveY: number;
      lineToLeftX: number;
      lineToLeftY: number;
      lineToRightX: number;
      lineToRightY: number;
      isFill:boolean;
      fillColor:string;
      strokeColor:string;
    }
  | {
      type: "diamond";
      moveX: number;
      moveY: number;
      topLeftX: number;
      topLeftY: number;
      buttonLeftX: number;
      buttonLeftY: number;
      topRightX: number;
      topRightY: number;
      isFill:boolean;
      fillColor:string;
      strokeColor:string;
    }
  | {
      type: "line";
      moveX: number;
      moveY: number;
      lineToX: number;
      lineToY: number;
      strokeColor:string
    }
  | {
      type: "arrow";
      strokeColor:string
      moveToX: number;
      moveToY: number;
      mainLineX: number;
      mainLineY: number;
      line1MoveToX: number;
      line1MoveToY: number;
      line2MoveToX: number;
      line2MoveToY: number;
      line1X: number;
      line1Y: number;
      line2X: number;
      line2Y: number;
    }

  | {
      type: "pencil";
      points: { x: number; y: number; strokeColor: string }[][];
      strokeColor: string;
    };
