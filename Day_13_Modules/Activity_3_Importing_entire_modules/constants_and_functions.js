export const PI = 3.14159;
export const GRAVITY = 9.81;

export function circleArea(radius) {
  return PI * radius * radius;
}

export function calculateForce(mass) {
  return mass * GRAVITY;
}