export type shapes =
  | {
      type: "square";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
    type:"eclipse",
    centerX: number
    centerY: number,
    radius: number,
    };
