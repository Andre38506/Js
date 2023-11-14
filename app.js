console.log('Hello Js');
/* Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает
число и возвращает true, если его надо удалить и false, если надо оставить */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const filterAray = (arr, fn, num) => {
//   const newArr = [];
//   for (const el of arr) {
//     if (fn(el, num)) {
//       continue;
//     } else {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// };

// const isNum = (el, num) => el <= num;
// console.log(filterAray(arr, isNum, 5));

const price = [[100, 200], [120, 100], [200, 350]];

const fiterArr = price.filter(priceEl => priceEl[0] < priceEl[1])
  .map(el => el[1] - el[0]);
  
console.log(fiterArr);