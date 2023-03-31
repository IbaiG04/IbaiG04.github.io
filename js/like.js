// Obtiene el botón del HTML
const botonLike = document.getElementById('boton-like');
const textLiked = document.getElementById('liked');

// Define una variable para el contador de likes
let contadorLikes = Math.floor(Math.random() * (1000 - 100) + 1);

textLiked.textContent = `Likes: ${contadorLikes}`;


// Agrega un evento de clic al botón
botonLike.addEventListener('click', function() {
  // Incrementa el contador de likes
  contadorLikes++;

  // Actualiza el texto del botón con el contador de likes
  textLiked.textContent = `Likes: ${contadorLikes}`;
});
