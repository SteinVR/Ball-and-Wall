import { drawLine } from "./render.js";
import { Vector } from "./vector.js";
import { SPRING_COLOR } from "./constants.js";
export class Spring {
  constructor(c, left_particle, right_particle) {
    this.c = c;
    this.left_particle = left_particle;
    this.right_particle = right_particle;
  }

  calculateForce(pressure) {
    let distanceTuple = this.distanceBetweenParticles();
    let distance_x = distanceTuple[0];
    let distance_y = distanceTuple[1];
    let F_x = this.c * distance_x;
    let F_y = this.c * distance_y;
    let left_spring_particle_vector = new Vector(-F_x, -F_y);
    let right_spring_particle_vector = new Vector(F_x, F_y);
    let spring_vector = new Vector(this.left_particle.x - this.right_particle.x, this.left_particle.y - this.right_particle.y);
    spring_vector = spring_vector.multiplyVector(1 / spring_vector.length());
    let pressure_vector = spring_vector.rotateVector(Math.PI / 2);
    pressure_vector = pressure_vector.multiplyVector(pressure);
    this.left_particle.left_spring_force_vector = left_spring_particle_vector;
    this.right_particle.right_spring_force_vector = right_spring_particle_vector;
    this.left_particle.left_spring_pressure_force_vector = pressure_vector;
    this.right_particle.right_spring_pressure_force_vector = pressure_vector;
  }

  draw(ctx, max_vector_length) {
    drawLine(ctx, this.left_particle.x, this.left_particle.y, this.right_particle.x, this.right_particle.y, SPRING_COLOR);
    this.left_particle.draw(ctx, max_vector_length);
    this.right_particle.draw(ctx, max_vector_length);
  }

  distanceBetweenParticles() {
    let distance_x = this.left_particle.x - this.right_particle.x;
    let distance_y = this.left_particle.y - this.right_particle.y;
    return [distance_x, distance_y];
  }

}