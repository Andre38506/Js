//Формула вычисления расстояния между двумя точками A(xa, ya) и B(xb, yb) на плоскости:AB = √(xb - xa)2 + (yb - ya)2 

function calculateLong(xa, ya, xb, yb) {
  let a = xb - xa;
  let b = yb - ya;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
let result = calculateLong(0, 1, 2, -2);
console.log(result);

//Задача переводчик

let language = 'ru';

function translate(a) {
  switch (a) {
    case 'en':
      console.log('good afternoon');
      break;
    case 'ru':
      console.log('добрый день');
      break;
    case 'de':
      console.log('gutten tag');
      break;
  }
}

translate(language);

//задача проверка

let hasLicence = true;
let age = 17;
let isDrink = false;

let isDrive = hasLicence && age >= 18 && !isDrink;
console.log(isDrive);
