//1-task
function convertCurence(amount, curenc, targetCurenc = '') {
  const objExchangeRate = {
    usd: 92.18,
    evro: 98.41,
    rub: 1
  };
  if (!objExchangeRate[curenc] || !objExchangeRate[targetCurenc]) {
    return null;
  }
  return (objExchangeRate[curenc] * amount) / objExchangeRate[targetCurenc];
}
console.log(convertCurence(77, 'usd', 'rub'));

//2-task
let str = 'passwords';
function crypto(str) {
  let arr = str.split('');
  let firstText = arr.splice(3).join('');
  return firstText + arr.join('');
}
function check(encrypted, passwords) {
  let arr = encrypted.split('');
  let firstText = arr.splice(-3).join('');
  return (firstText + arr.join('')) == passwords;
}
console.log(crypto(str));
console.log(check('swordspas', str));

const operations = [1000, -700, 300, -500, 10000];

function calculateSum(operations) {
  let res = 0;
  for (let el of operations) {
    res += el;
  }
  return res;
}

function isBalans(operations) {
  let res = 0;
  for (let el of operations) {
    if (res < 0) {
      return false;
    }
    res += el;
  }
  return true;
}

function calcMedium(operations) {
  let positive = 0;
  let negative = 0;
  let positiveIndex = 0;
  let negativeIndex = 0;
  for (let el of operations) {
    if (el > 0) {
      positive += el;
      positiveIndex++;
    } else {
      negative += el;
      negativeIndex++;
    }
  }
  let positiveSum = positive / positiveIndex;
  let negativeSum = negative / negativeIndex;
  return (`${positiveSum} ,${negativeSum}`);
}

console.log(calculateSum(operations));

console.log(isBalans(operations));
console.log(calcMedium(operations));

//task-3 
const arr = [1, 40, -5, 10, 0];

function sortingAray(arr, param = 'max') {
  let newArr = [];
  if (param == 'min') {
    for (let el of arr) {
      for (let index in arr) {
        if (arr[index] < el) {
          let el = arr.splice(index, 1);
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