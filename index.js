import validator from "./validator.js";

function validateNumCard() {
  let numCard = document.getElementById("ncard").value;
  let alertBox = document.getElementsByClassName("alertBox");
  if (numCard === "" || numCard === null) {
    alert("Ingrese un número de Giftcard");
    return false;
  }

  let validate = validator.isValid(numCard);
  let mask = validator.maskify(numCard);

  for (let i = 0; i < alertBox.length; i++) {
    if (validate === true) {
      alertBox[i].style.display = "block";
      document.getElementById("valid").innerText =
        "Su giftcard terminada en " + mask + " es válida";
    } else {
      alertBox[i].style.display = "block";
      document.getElementById("valid").innerText =
        "Su giftcard terminada en " + mask + " es inválida";
    }
  }
}
document
  .getElementById("validbtn")
  .addEventListener("click", validateNumCard, false);

function event(evt) {
  function keyNumbers(key) {
    let code = key.keyCode || key.which;
    if (code >= 48 && code <= 57) {
      return true;
    } else {
      alert("Ingrese solo números");
      return false;
    }
  }
  if (keyNumbers(evt) === false) {
    evt.preventDefault();
  }
}
document.getElementById("ncard").addEventListener("keypress", event, false);

function inputClean() {
  //damos nombre a la funcion
  let numCard = document.getElementById("ncard");
  let alertBox = document.getElementsByClassName("alertBox");
  numCard.value = "";
  for (let i = 0; i < alertBox.length; i++) {
    alertBox[i].style.display = "none";
  }
}
document
  .getElementById("restartbtn")
  .addEventListener("click", inputClean, false);
