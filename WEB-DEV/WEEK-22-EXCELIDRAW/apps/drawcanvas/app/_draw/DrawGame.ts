import { shapes } from "./shapes";
import getShapes from "./getShapes";
import { shapesType } from "@/types/types";

export class DrawGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private existingShapes: shapes[];
  private roomId: string;
  private clickMouse: boolean;
  socket: WebSocket;
  private startX: number;
  private startY: number;
  private seletedTool: shapesType = null;

  constructor(canvas: HTMLCanvasElement, roomId: string, socket: WebSocket) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.existingShapes = [];
    this.roomId = roomId;
    this.socket = socket;
    this.clickMouse = false;
    this.startX = 0;
    this.startY = 0;
    this.inittDraw();
    this.initHandler();
    this.initMouseHandler();
  }

  setTool(took: shapesType) {
    this.seletedTool = took;
  }

  //geting existing shapes from backend
  async inittDraw() {
    this.existingShapes = await getShapes(this.roomId);
    this.clearCanvas();
  }

  //init socket handler
  initHandler() {
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "chat") {
        const parseShape = JSON.parse(message.message);

        this.existingShapes.push(parseShape.shape);
        this.clearCanvas();
      }
    };
  }
  getMouseProp = (e: MouseEvent) => {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  initMouseHandler() {
    //mousedown handler
    this.canvas.addEventListener("mousedown", (e) => {
      this.clickMouse = true;

      const position = this.getMouseProp(e);
      this.startX = position.x;
      this.startY = position.y;
    });

    //mouse move handler
    this.canvas.addEventListener("mousemove", (e) => {
      if (!this.clickMouse) return;

      const position = this.getMouseProp(e);

      const w = position.x - this.startX;
      const h = position.y - this.startY;
      this.clearCanvas();

      switch (this.seletedTool) {
        case "square":
          this.ctx.strokeRect(this.startX, this.startY, w, h);

          break;

        case "eclipse":
          const radius = Math.max(w, h) / 2;
          const centerX = this.startX + radius;
          const centerY = this.startY + radius;
          this.ctx.beginPath();
          this.ctx.arc(centerX, centerY, Math.abs(radius), 0, Math.PI * 2);
          this.ctx.stroke();

          break;

        case "triangle":
          this.ctx.beginPath();
          this.ctx.moveTo(this.startX, this.startY);

          this.ctx.lineTo(this.startX - w / 2, this.startY + h);
          this.ctx.lineTo(this.startX + w / 2, this.startY + h);
          this.ctx.closePath();
          this.ctx.lineWidth = 1;
          this.ctx.stroke();

          break;

        case "diamond":
          this.ctx.beginPath();
          this.ctx.moveTo(this.startX, this.startY);
          this.ctx.lineTo(this.startX - w / 2, this.startY + h / 2);
          this.ctx.lineTo(this.startX, this.startY + h);
          this.ctx.lineTo(this.startX + w / 2, this.startY + h / 2);
          this.ctx.closePath();
          this.ctx.lineWidth = 1;
          this.ctx.stroke();

          break;
        case "line":
          this.ctx.beginPath();
          this.ctx.moveTo(this.startX, this.startY);
          this.ctx.lineTo(position.x, position.y);
          this.ctx.closePath();
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
          break;

        case "arrow":
          const arrowSize = 15;
          const endX = position.x;
          const endY = position.y;
          console.log(endX, endY);

          //this will give us angel of end line
          const arrowAngle = Math.atan2(h, w);

          //first line
          const line1X = endX - arrowSize * Math.cos(arrowAngle - Math.PI / 6);
          const line1Y = endY - arrowSize * Math.sin(arrowAngle - Math.PI / 6);

          //second line

          const line2X = endX - arrowSize * Math.cos(arrowAngle + Math.PI / 6);
          const line2Y = endY - arrowSize * Math.sin(arrowAngle + Math.PI / 6);

          //main line
          this.ctx.beginPath();
          this.ctx.moveTo(this.startX, this.startY);
          this.ctx.lineTo(endX, endY);
          this.ctx.stroke();

          // fist line draw
          this.ctx.beginPath();
          this.ctx.moveTo(endX, endY);
          this.ctx.lineTo(line1X, line1Y);
          this.ctx.stroke();

          console.log(endX, endY);
          //second line draw
          this.ctx.beginPath();
          this.ctx.moveTo(endX, endY);
          this.ctx.lineTo(line2X, line2Y);
          this.ctx.stroke();

          break;

        default:
          break;
      }
    });

    //Mouse Up handler
    this.canvas.addEventListener("mouseup", (e) => {
      this.clickMouse = false;

      const position = this.getMouseProp(e);
      const w = position.x - this.startX;
      const h = position.y - this.startY;

      let shape: shapes | null = null;

      switch (this.seletedTool) {
        case "square":
          {
            shape = {
              type: "square",
              x: this.startX,
              y: this.startY,
              width: w,
              height: h,
            };
          }
          break;

        case "eclipse":
          {
            const radius = Math.max(w, h) / 2;
            const centerX = this.startX + radius;
            const centerY = this.startY + radius;

            shape = {
              type: "eclipse",
              centerX: centerX,
              centerY: centerY,
              radius: Math.abs(radius),
            };
          }

          break;

        case "triangle":
          {
            shape = {
              type: "triangle",
              moveX: this.startX,
              moveY: this.startY,
              lineToLeftX: this.startX - w / 2,
              lineToLeftY: this.startY + h / 2,
              lineToRightX: this.startX + w / 2,
              lineToRightY: this.startY + h / 2,
            };
          }
          break;

        case "diamond":
          {
            shape = {
              type: "diamond",
              moveX: this.startX,
              moveY: this.startY,
              topLeftX: this.startX - w / 2,
              topLeftY: this.startY + h / 2,
              buttonLeftX: this.startX,
              buttonLeftY: this.startY + h,
              topRightX: this.startX + w / 2,
              topRightY: this.startY + h / 2,
            };
          }
          break;
        case "line":
          {
            shape = {
              type: "line",
              moveX: this.startX,
              moveY: this.startY,
              lineToX: position.x,
              lineToY: position.y,
            };
          }
          break;

        case "arrow":
          const arrowSize = 15;
          const endX = position.x;
          const endY = position.y;

          //this will give us angel of end line
          const arrowAngle = Math.atan2(h, w);

          //first line
          const line1X = endX - arrowSize * Math.cos(arrowAngle - Math.PI / 6);
          const line1Y = endY - arrowSize * Math.sin(arrowAngle - Math.PI / 6);

          //second line

          const line2X = endX - arrowSize * Math.cos(arrowAngle + Math.PI / 6);
          const line2Y = endY - arrowSize * Math.sin(arrowAngle + Math.PI / 6);

          shape = {
            type: "arrow",
            moveToX: this.startX,
            moveToY: this.startY,
            mainLineX: endX,
            mainLineY: endY,
            line1MoveToX: endX,
            line1MoveToY: endY,
            line2MoveToX: endX,
            line2MoveToY: endY,
            line1X: line1X,
            line1Y: line1Y,
            line2X: line2X,
            line2Y: line2Y,
          };

          break;

        default:
          break;
      }

      console.log(shape);

      if (!shape) return;

      this.existingShapes?.push(shape);

      this.socket.send(
        JSON.stringify({
          type: "chat",
          message: JSON.stringify({ shape }),
          roomId: this.roomId,
        })
      );
    });
  }

  //re-rendering logic
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.lineWidth = 1;

    this.existingShapes?.map((shape) => {
      switch (shape.type) {
        case "square":
          this.ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
          break;

        case "eclipse":
          this.ctx.beginPath();
          this.ctx.arc(
            shape.centerX,
            shape.centerY,
            shape.radius,
            0,
            Math.PI * 2
          );
          this.ctx.stroke();
          this.ctx.closePath();
          break;

        case "triangle":
          this.ctx.beginPath();
          this.ctx.moveTo(shape.moveX, shape.moveY);
          this.ctx.lineTo(shape.lineToLeftX, shape.lineToLeftY);
          this.ctx.lineTo(shape.lineToRightX, shape.lineToRightY);
          this.ctx.closePath();
          this.ctx.stroke();

          break;

        case "diamond":
          this.ctx.beginPath();
          this.ctx.moveTo(shape.moveX, shape.moveY);
          this.ctx.lineTo(shape.topLeftX, shape.topLeftY);
          this.ctx.lineTo(shape.buttonLeftX, shape.buttonLeftY);
          this.ctx.lineTo(shape.topRightX, shape.topRightY);
          this.ctx.closePath();
          this.ctx.stroke();

          break;

        case "line":
          this.ctx.beginPath();
          this.ctx.moveTo(shape.moveX, shape.moveY);
          this.ctx.lineTo(shape.lineToX, shape.lineToY);
          this.ctx.closePath();
          this.ctx.stroke();
          break;

        case "arrow":
          //main line
          this.ctx.beginPath();
          this.ctx.moveTo(shape.moveToX, shape.moveToY);
          this.ctx.lineTo(shape.mainLineX, shape.mainLineY);
          this.ctx.stroke();

          // fist line draw
          this.ctx.beginPath();
          this.ctx.moveTo(shape.line1MoveToX, shape.line1MoveToY);
          this.ctx.lineTo(shape.line1X, shape.line1Y);
          this.ctx.stroke();

          //second line draw
          this.ctx.beginPath();
          this.ctx.moveTo(shape.line2MoveToX, shape.line2MoveToY);
          this.ctx.lineTo(shape.line2X, shape.line2Y);
          this.ctx.stroke();

          break;

        default:
          break;
      }
    });
  }
}
