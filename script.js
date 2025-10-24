// Agregar nueva fila a la tabla
document.getElementById("agregarFila").addEventListener("click", () => {
  const tabla = document.querySelector("table");
  const nuevaFila = tabla.insertRow();
  nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
  alert("Se ha agregado un nuevo artículo a la tabla");
});

// Cambiar color del título al pasar el mouse
const titulo = document.getElementById("titulo");
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "red";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.color = "purple";
});

// Eventos de los botones del menu
const botonesMenu = document.querySelectorAll("menu button");
botonesMenu.forEach(boton => {
  boton.addEventListener("click", () => {
    if (boton.textContent === "Nuevo") {
      alert("Nuevo documento creado");
    } else if (boton.textContent === "Guardar") {
      alert("Guardado con éxito");
    } else if (boton.textContent === "Imprimir") {
      alert("Imprimiendo...");
    }
  });
});

// Cambiar fondo de las secciones al hacer doble clic
const secciones = document.querySelectorAll("section");
secciones.forEach(seccion => {
  seccion.addEventListener("dblclick", () => {
    seccion.style.backgroundColor = "#f0e68c";
  });
});


