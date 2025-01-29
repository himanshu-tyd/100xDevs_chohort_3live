import { shapesType } from "@/types/types";
import getShapes from "./getShapes";
import { shapes } from "./shapes";

export const initDraw = async (
  canvas: HTMLCanvasElement,
  roomId: string,
  socket: WebSocket
  // selectedShape: shapesType | null
) => {
  const ctx = canvas.getContext("2d");

  if (ctx == null) return;

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);

    if (message.type === "chat") {
      const parseShape = JSON.parse(message.message);

      existingShapes.push(parseShape.shape);
      clearCanvas(ctx, canvas, existingShapes);
    }
  };

  let startX: number = 0;
  let startY: number = 0;
  let clickMouse: boolean = false;

  const existingShapes: shapes[] = await getShapes(roomId);
  clearCanvas(ctx, canvas, existingShapes);

  const getMouseProp = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  canvas.addEventListener("mousedown", (e) => {
    clickMouse = true;

    const position = getMouseProp(e);

    startX = position.x;
    startY = position.y;
  });

  canvas.addEventListener("mouseup", (e) => {
    clickMouse = false;

    const position = getMouseProp(e);
    const w = position.x - startX;
    const h = position.y - startY;

    let shape: shapes | null = null;

    //@ts-ignore
    const selecteShape = window.selectedShape;
    switch (selecteShape) {
      case "square":
        {
          shape = {
            type: "square",
            x: startX,
            y: startY,
            width: w,
            height: h,
          };
        }
        break;

      case "eclipse":
        {
          const radius = Math.max(w, h) / 2;
          const centerX = startX + radius;
          const centerY = startY + radius;

          shape = {
            type: "eclipse",
            centerX: centerX,
            centerY: centerY,
            radius: radius,
          };
        }
        break;

      default:
        break;
    }

    if (!shape) return;

    existingShapes.push(shape);

    socket.send(
      JSON.stringify({
        type: "chat",
        message: JSON.stringify({ shape }),
        roomId,
      })
    );
  });

  canvas.addEventListener("mousemove", (e) => {
    if (!clickMouse) return;

    const position = getMouseProp(e);

    const w = position.x - startX;
    const h = position.y - startY;
    clearCanvas(ctx, canvas, existingShapes);

    //@ts-ignore
    const seletedTool = window.selectedShape;

    switch (seletedTool) {
      case "square":
        {
          ctx.strokeRect(startX, startY, w, h);
        }
        break;

      case "eclipse":
        {
          const radius = Math.max(w, h) / 2;
          const centerX = startX + radius;
          const centerY = startY + radius;
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        break;

      default:
        break;
    }

    // if (seletedTool == "square") {
    // } else if (seletedTool == "eclipse") {
    // }
  });
};

const clearCanvas = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  exShapes: shapes[]
) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  exShapes.map((shape) => {
    switch (shape.type) {
      case "square":
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        break;

      case "eclipse":
        ctx.beginPath()
        ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2);
        ctx.stroke()
        ctx.closePath()
        break;
    }
  });
};
