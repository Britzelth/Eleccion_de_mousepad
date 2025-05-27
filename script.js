const formulario = document.getElementById("formulario-personaje");
const resultadoDiv = document.getElementById("resultado");
const botonReintentar = document.getElementById("boton-reintentar");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const opciones = formulario.querySelectorAll('input[name="personaje"]');
  let personajeSeleccionado = null;

  opciones.forEach(opcion => {
    if (opcion.checked) {
      personajeSeleccionado = {
        nombre: opcion.value,
        imagen: opcion.getAttribute('data-img')
      };
    }
  });

  resultadoDiv.innerHTML = "";

  if (personajeSeleccionado) {
    resultadoDiv.innerHTML = `
      <p>Elegiste: <strong>${personajeSeleccionado.nombre}</strong></p>
      <img src="${personajeSeleccionado.imagen}" alt="${personajeSeleccionado.nombre}">
    `;

    formulario.classList.add("desactivado");
    botonReintentar.style.display = "inline-block";
  } else {
    resultadoDiv.textContent = "Por favor, selecciona una opción.";
  }
});

botonReintentar.addEventListener("click", function () {
  formulario.reset();
  formulario.classList.remove("desactivado");
  resultadoDiv.innerHTML = "";
  botonReintentar.style.display = "none";
});