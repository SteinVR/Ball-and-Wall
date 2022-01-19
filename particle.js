import { DEFAULT_COLOR, PARTICLE_COLOR, PARTICLE_RADIUS } from "./constants.js";
export class Particle {
  constructor(m, x, y, v0_x, v0_y) {
    this.m = m;
    this.x = x;
    this.y = y;
    this.v_x = v0_x;
    this.v_y = v0_y;
    this.a_x = 0;
    this.a_y = 0;
    this.left_spring_force_vector = null;
    this.right_spring_force_vector = null;
    this.left_spring_pressure_force_vector = null;
    this.right_spring_pressure_force_vector = null;
    this.reaction_force_vector = null;
    this.total_force_vector = null;
  }

  recalculatePositions(dt) {
    this.total_force_vector = this.#totalForceVector();
    this.a_x = this.total_force_vector.x / this.m;
    this.a_y = this.total_force_vector.y / this.m;
    this.v_x += this.a_x * dt;
    this.v_y += this.a_y * dt;
    this.x += this.v_x * dt;
    this.y += this.v_y * dt;
  }

  draw(ctx, max_vector_length) {
    ctx.fillStyle = PARTICLE_COLOR;
    ctx.beginPath();
    ctx.arc(this.x, this.y, PARTICLE_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = DEFAULT_COLOR;
  }

  #totalForceVector() {
    let tmp = this.left_spring_force_vector.addVector(this.right_spring_force_vector);
    tmp = tmp.addVector(this.left_spring_pressure_force_vector);
    tmp = tmp.addVector(this.right_spring_pressure_force_vector);
    tmp = tmp.addVector(this.reaction_force_vector);
    return tmp;
  }

}