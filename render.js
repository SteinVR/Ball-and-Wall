import { DEFAULT_COLOR, HEIGHT, WIDTH } from "./constants.js";
export function drawLine(ctx, x_0, y_0, x_1, y_1, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x_0, y_0);
  ctx.lineTo(x_1, y_1);
  ctx.stroke();
  ctx.strokeStyle = DEFAULT_COLOR;
}
export function clearCanvas(ctx) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}