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
console.log(check('swordspas', str))


