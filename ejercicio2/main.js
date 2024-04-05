// const container = document.querySelector(".container");
// const imgElement = document.getElementById("img");

// const zorroRandom = () => {
//   fetch("https://randomfox.ca/floof")
//
//     .then((data) => {
//       const { image } = data;
//       imgElement.src = image; // Actualiza la fuente de la imagen en la tarjeta
//       imgElement.alt = "zorro"; // Actualiza el texto alternativo de la imagen
//     });
// };

// // Agrega un evento de clic al botón para llamar a la función zorroRandom
// document.getElementById("btn").addEventListener("click", zorroRandom);

const btn = document.getElementById("btn");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const gatisRandom = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      img1.src = data[0].url;
    });
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      img2.src = data[0].url;
    });
};
document.getElementById("btn").addEventListener("click", gatisRandom);
