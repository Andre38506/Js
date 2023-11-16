console.log('Hello Js');
/* Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает
число и возвращает true, если его надо удалить и false, если надо оставить */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const filterAray = (arr, fn, num) => {
  const newArr = [];
  for (const el of arr) {
    if (fn(el, num)) {
      continue;
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};

const isNum = (el, num) => el <= num;
console.log(filterAray(arr, isNum, 5));

//task-2
const arr2 = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023'];
function parsingArray(arr) {
  return arr.filter(el => {
    const value = el.split('/');
    const value2 = el.split('-');
    return ((Number(value[0]) <= 12
      && Number(value[0]) > 0)
      || Number(value2[0]) <= 12 && value2[0] > 0);
  }
  )
    .map(el => {
      if (el.includes('/')) {
        const arr = el.split('/');
        const result = (arr[1] + '-' + arr[0] + '-' + arr[2]);
        return el = result;
      } else {
        return el;
      }
    });

}
console.log(parsingArray(arr2));
