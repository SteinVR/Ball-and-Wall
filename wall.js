import { DEFAULT_COLOR } from "./constants.js";
export class Wall {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = DEFAULT_COLOR;
  }

  distanceToRightEdge(point) {
    return point.x - this.x - this.width;
  }

}