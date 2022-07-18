const validator = {
  //FÓRMULA DE LUHN

  isValid: function (cardNumber) {
    // pasar array a orden inverso
    let inverseNumber = cardNumber.toString().split("").reverse().map(Number);

    // aplicar operación a números en posiciones pares
    let newNumber = inverseNumber.map((num, i) => {
      if (i % 2 === 1) {
        // a todos los numeros que ocupan las posiciones pares se les multiplica por dos
        let multiply = num * 2;
        //y si el doble de ese numero es mayor a 9 debemos sumar los digitos del resultado
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

    // sumar dígitos
    newNumber = newNumber.reduce((prev, next) => {
      return prev + next;
    }, 0);
    // console.log(newNumber)

    // validar fórmula
    if (newNumber % 10 === 0) { //si el residual del newNumber equivale a 10
      return true;
    } else {
      return false;
    }
  },
  //funcion para reemplazar por # los números, exceptuando los últimos 4
  maskify: function (numCard) { //creamos la funcion maskify para que afecte al numCard
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
