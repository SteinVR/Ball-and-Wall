export class Edge {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  length() {
    let dx = Math.pow(this.a.x - this.b.x, 2);
    let dy = Math.pow(this.a.y - this.b.y, 2);
    return Math.pow(dx + dy, 0.5);
  }

}