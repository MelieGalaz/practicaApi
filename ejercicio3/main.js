// Utilizando el template de ejercicio Si o NO, se debe cambiar la etiqueta img por un gif y cambiar el texto por el resultado de la api cuando se apriete el botón.

const img = document.getElementById("img");
const res = document.getElementById("res");
const btn = document.getElementById("btn");

const respRandom = () => {
  fetch("https://yesno.wtf/api")
    .then((res) => res.json())
    .then((data) => {
      img.src = data.image;
      res.innerHTML = data.answer;
    });
};
document.getElementById("btn").addEventListener("click", respRandom);
