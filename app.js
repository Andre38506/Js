console.log('Hello Js');
function convertCurence(amount, curenc, targetCurenc = '') {
  const objExchangeRate = {
    usd: 92.18,
    evro: 98.41,
    rub: 1
  };
  if (!objExchangeRate[curenc] || !objExchangeRate[targetCurenc]) {
    return;
  }
  return (objExchangeRate[curenc] * amount) / objExchangeRate[targetCurenc];
}
console.log(convertCurence(77, 'usd', 'rub'));

//2-task
let str = 'passwords';
function crypto(str) {
  const arr = str.split('');
  const firstText = arr.splice(3).join('');
  return firstText + arr.join('');
}
function check(encrypted, passwords) {
  const arr = encrypted.split('');
  const firstText = arr.splice(-3).join('');
  return (firstText + arr.join('')) == passwords;
}
console.log(crypto(str));
console.log(check('swordspas', str));

//task-3 
const arr = [1, 40, -5, 10, 0];

function sortingAray(arr, param = 'max') {
  let newArr = [];
  if (param == 'min') {
    for (let el of arr) {
      for (let index in arr) {
        if (arr[index] < el) {
          let el = arr.splice(index, 1);//не понимаю как вынести эту строку чтобы не дублировался код, тут задействован индекс с цикла 
          newArr.push(el.join(' '));
        }
      }
    }
  } else {
    for (let el of arr) {
      for (let index in arr) {
        if (arr[index] > el) {
          let el = arr.splice(index, 1);
          newArr.push(el.join(' '));
        }
      }
    }
  }

  return newArr;
}

console.log(sortingAray(arr, 'max'));