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
const arr = [1, 50, -5, 10, 0, 10];

function sortingAray(arr, param = 'max') {
  if (param == 'min') {
    for (let n = 0; n < arr.length - n; n++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          swapPlaces(arr, i);
        }
      }
    }
  } else {
    for (let n = 0; n < arr.length - n; n++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          swapPlaces(arr, i);
        }
      }
    }
  }

  return arr;
}

function swapPlaces(arr, index) {
  const baff = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = baff;
}

console.log(sortingAray(arr, 'min'));