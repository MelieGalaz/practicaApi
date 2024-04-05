const container = document.querySelector(".container");
const imgElement = document.getElementById("img");

const zorroRandom = () => {
  fetch("https://randomfox.ca/floof")
    .then((res) => res.json())
    .then((data) => {
      const { image } = data;
      imgElement.src = image; // Actualiza la fuente de la imagen en la tarjeta
      imgElement.alt = "zorro"; // Actualiza el texto alternativo de la imagen
    });
};

// Agrega un evento de clic al botón para llamar a la función zorroRandom
document.getElementById("btn").addEventListener("click", zorroRandom);
