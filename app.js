//Формула вычисления расстояния между двумя точками A(xa, ya) и B(xb, yb) на плоскости:AB = √(xb - xa)2 + (yb - ya)2 

function calculateLong(xa, ya, xb, yb) {
  let a = xb - xa;
  let b = yb - ya;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
let result = calculateLong(0, 1, 2, -2);
console.log(result);