import getShapes from "./getShapes";
import { shapes } from "./shapes";

export const initDraw = async (
  canvas: HTMLCanvasElement,
  roomId: string,
  socket: WebSocket
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

  console.log(await getShapes(roomId));

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

    const shape: shapes = {
      type: "rect",
      x: startX,
      y: startY,
      width: w,
      height: h,
    };

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
    ctx.strokeRect(startX, startY, w, h);
  });
};

const clearCanvas = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  exShapes: shapes[]
) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  exShapes.map((shape) => {
    ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
  });
};
