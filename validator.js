const validator = {
  //FÓRMULA DE LUHN

  isValid: function (cardNumber) {
    let inverseNumber = cardNumber.toString().split("").reverse().map(Number);

    let newNumber = inverseNumber.map((num, i) => {
      if (i % 2 === 1) {
        let multiply = num * 2;
        let digitSum = multiply
          .toString()
          .split("")
          .map(Number)
          .reduce(function (a, b) {
            if (multiply > 9) {
              return a + b;
            } else {
              return multiply;
            }
          }, 0);
        return digitSum;
      } else {
        return num;
      }
    });

    newNumber = newNumber.reduce((prev, next) => {
      return prev + next;
    }, 0);
    // console.log(newNumber)

    // validar fórmula
    if (newNumber % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (numCard) {
    let sizeNumber = numCard.length;
    if (sizeNumber > 4) {
      let visibleNumber = numCard.slice(-4);
      let replace = "#";
      let hidenNumber = replace.repeat(sizeNumber - 4);
      return hidenNumber + visibleNumber;
    } else {
      return numCard;
    }
  },
};
export default validator;
