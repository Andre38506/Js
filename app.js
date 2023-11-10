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

console.log(convertCurence(77, 'usd', 'rub'))


