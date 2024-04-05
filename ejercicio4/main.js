const img = document.getElementById("img");
const buttonBirtani = document.getElementById("btn-biryani");
const buttonBurger = document.getElementById("btn-burger");
const buttonDosa = document.getElementById("btn-dosa");
const buttonIdly = document.getElementById("btn-idly");
const buttonPizza = document.getElementById("btn-pizza");
const buttonAll = document.getElementById("btn-all");

const changeImage = (url = "") =>
  fetch(`https://foodish-api.com/api${url ? "/images/" + url : ""}`)
    .then((res) => res.json())
    .then((response) => (img.src = response.image));

buttonBirtani.addEventListener("click", () => {
  changeImage("biryani");
});
buttonBurger.addEventListener("click", () => {
  changeImage("burger");
});
buttonDosa.addEventListener("click", () => {
  changeImage("dosa");
});
buttonIdly.addEventListener("click", () => {
  changeImage("idly");
});
buttonPizza.addEventListener("click", () => {
  changeImage("pizza");
});

buttonAll.addEventListener("click", () => {
  changeImage();
});

changeImage();
// https://foodish-api.com/
// https://foodish-api.com/images/burger/
// fetch("https://api.example.com/data")
//   .then(function (response) {
//     // Convertir la respuesta a JSON
//     return response.json();
//   })
//   .then(function (data) {
//     // Manejar los datos obtenidos
//     console.log(data);
//   })
//   .catch(function (error) {
//     // Manejar cualquier error que ocurra durante la solicitud
//     console.error("Error:", error);
//   })
//   .finally(function () {
//     // Realizar alguna acción de limpieza o finalización, independientemente del resultado de la promesa
//     console.log("La solicitud ha finalizado");
//   });
// .catch() es un método que se utiliza en las promesas en JavaScript para manejar cualquier error que ocurra durante la ejecución de una promesa, es decir, cuando la promesa es rechazada. Esto permite capturar y manejar los errores de manera elegante y legible en el flujo de una cadena de promesas.

// Cintia Paez 19:52
// El método .finally() es otro método utilizado en JavaScript para trabajar con promesas. A diferencia de .then() y .catch(), que se utilizan para manejar el resultado resuelto o rechazado de una promesa, .finally() se utiliza para ejecutar cierto código independientemente de si la promesa se resuelve o se rechaza.
// const { breeds: [{ name }] } = data;
// Primero, accedemos a la propiedad breeds del objeto data, que es un array que contiene un objeto. Luego, dentro del array destructuramos ese objeto para extraer su propiedad name, que es el nombre de la raza del gato. Finalmente, asignamos el valor de name a la variable name
