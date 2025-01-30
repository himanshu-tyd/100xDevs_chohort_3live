
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
    this.canvas.addEventListener("mousedown", (e) => {
      this.clickMouse = true;

      const position = this.getMouseProp(e);

      this.startX = position.x;
      this.startY = position.y;
    });

    this.canvas.addEventListener("mousemove", (e) => {
      if (!this.clickMouse) return;

      const position = this.getMouseProp(e);

      const w = position.x - this.startX;
      const h = position.y - this.startY;
      this.clearCanvas();

      switch (this.seletedTool) {
        case "square":
          {
            this.ctx.strokeRect(this.startX, this.startY, w, h);
          }
          break;

        case "eclipse": {
          const radius = Math.max(w, h) / 2;
          const centerX = this.startX + radius;
          const centerY = this.startY + radius;
          this.ctx.beginPath();
          this.ctx.arc(centerX, centerY, Math.abs(radius), 0, Math.PI * 2);
          this.ctx.stroke();
        }
        break;

        case "triangle":
          {
            this.ctx.beginPath();
            this.ctx.moveTo(this.startX, this.startY);
            this.ctx.lineTo(this.startX - w / 2, this.startY + h);
            this.ctx.lineTo(this.startX + w / 2, this.startY + h);
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
          break;

          case "diamond":
          {
            this.ctx.beginPath();
            this.ctx.moveTo(this.startX, this.startY);
            this.ctx.lineTo(this.startX - w / 2, this.startY + h);
            this.ctx.lineTo(this.startX + w / 2, this.startY - h);
            // this.ctx.lineTo(this.startX + w / 2, this.startY + h);
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
          break;

        default:
          break;
      }
    });

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

        case "eclipse": {
          const radius = Math.max(w, h) / 2;
          const centerX = this.startX + radius;
          const centerY = this.startY + radius;

          shape = {
            type: "eclipse",
            centerX: centerX,
            centerY: centerY,
            radius: Math.abs(radius),
          };

          break;
        }

        case "triangle":
          {
            shape = {
              type: "triangle",
              moveX: this.startX,
              moveY: this.startY,
              lineToLeftX: this.startX - w / 2,
              lineToLeftY: this.startY + h,
              lineToRightX: this.startX + w / 2,
              lineToRightY: this.startY + h,
            };
          }
          break;

        default:
          break;
      }

      if (!shape) return;

      this.existingShapes.push(shape);

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

    this.existingShapes.map((shape) => {
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
          this.ctx.closePath();
          this.ctx.stroke();
          break;

        case "triangle":
          {
            this.ctx.beginPath();
            this.ctx.moveTo(shape.moveX, shape.moveY);
            this.ctx.lineTo(shape.lineToLeftX, shape.lineToLeftY);
            this.ctx.lineTo(shape.lineToRightX, shape.lineToRightY);
            this.ctx.closePath();
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
          break;
      }
    });
  }
}
