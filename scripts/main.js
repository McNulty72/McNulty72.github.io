var miImage = document.querySelector('img');

miImage.onclick = function() {
  var miSrc = miImage.getAttribute('src');
  if (miSrc === 'images/umbrella-icon.png') {
    miImage.setAttribute('src', 'images/umbrella-icon2.png');
  } else {
    miImage.setAttribute('src', 'images/umbrella-icon.png')
  }
}
var miBoton = document.querySelector('button')
var miTitulo = document.querySelector('h1')
function estableceNombreUsuario() {
  var miNombre = prompt('Por favor, ingresa tu nombre');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Umbrella Store is cool ' + miNombre;
}
if (!localStorage.getItem('nombre')){
  estableceNombreUsuario();
}
else {
  var nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Umbrella Store is cool ' + nombreAlmacenado;
}
miBoton.onclick = function() {
  estableceNombreUsuario();
}
