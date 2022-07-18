import validator from "./validator.js";

//llamar a las funciones ncard (input en html) y alertbox para validar la tarjeta
function validateNumCard() {
  let numCard = document.getElementById("ncard").value; //llamamos al valor de ncard, que se encuentra en el input de html
  let alertBox = document.getElementsByClassName("alertBox"); //llamamos a toda la clase de alertbox
  // alert para ingresar número si es que está vacío el cuadro
  if (numCard === "" || numCard === null) {
    //si el numCard está en blanco o no tiene caracteres, entonces lanza la alerta
    alert("Ingrese un número de Giftcard");
    return false; //el false hace que el texto de "tu num de giftcard es in/valida" no vuelva a salir al no ingresar un numero
  }

  // validar tarjeta y mostrar número enmascarado
  let validate = validator.isValid(numCard); //llamamos a la variable validate para que verifique si el numCard es válido
  let mask = validator.maskify(numCard); //hacemos que el numCard se enmascare

  for (let i = 0; i < alertBox.length; i++) {
    //funcion de iterar
    /*declaramos que la variable i equivale a cero, por lo tanto si i es menor al 
    largo de alertbox, entonces i aumenta en uno y se vuelve a repetir todo el contenido*/
    if (validate === true) {
      //si la variable validate es solo verdadera, entonces hacemos que aparezca la alerta
      alertBox[i].style.display = "block";
      document.getElementById("valid").innerText = //llamamos a que en nuestro html aparezca el texto
        "Su giftcard terminada en " + mask + " es válida";
    } else {
      //Y si no se cumple la condicional nos arroja el texto de abajo
      alertBox[i].style.display = "block";
      document.getElementById("valid").innerText =
        "Su giftcard terminada en " + mask + " es inválida";
    }
  }
}
//llamamos para darle funcionalidad al botón validar en el html
document
  .getElementById("validbtn")
  .addEventListener("click", validateNumCard, false);

// función para permitir solo números en input
function event(evt) {
  function keyNumbers(key) {
    let code = key.keyCode || key.which; //diferentes tipos de navegadores
    if (code >= 48 && code <= 57) {
      //code 48 a 57 representan del 0 al 9
      return true;
    } else {
      alert("Ingrese solo números");
      return false;
    }
  }
  if (keyNumbers(evt) === false) {
    //si el evento no se cumple (o sea que sí ingresamos numeros),
    evt.preventDefault(); //entonces se cancela y no lanza alerta
  }
}
document.getElementById("ncard").addEventListener("keypress", event, false);

// función para reiniciar
function inputClean() {
  //damos nombre a la funcion
  let numCard = document.getElementById("ncard"); //llamamos a la funcion ncard y alertBox
  let alertBox = document.getElementsByClassName("alertBox");
  numCard.value = ""; //el valor del numCard queda vacío
  for (let i = 0; i < alertBox.length; i++) {
    //funcion de iterar?
    alertBox[i].style.display = "none"; //se borra el texto de la alertbox
  }
}
document
  .getElementById("restartbtn")
  .addEventListener("click", inputClean, false);
