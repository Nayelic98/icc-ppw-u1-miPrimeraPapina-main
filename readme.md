
# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Nayeli Barbecho
**Repositorio:** [https://github.com/Nayelic98/icc-ppw-u1-miPrimeraPapina-main](https://github.com/Nayelic98/icc-ppw-u1-miPrimeraPapina-main)  
**Página desplegada (GitHub Pages):** [https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/](https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/)  

---

## 🧱 Estructura HTML utilizada

| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

---

## 🧩 Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<menu>` | Define una lista de comandos o enlaces que el usuario puede interactuar, como un conjunto de opciones o atajos rápidos|3 botones creados con menú |
| `<canvas>` |Se utiliza para dibujar gráficos, animaciones o diagramas usando JavaScript. Permite representar contenido visual dinámico.| Se dibujo una cuadrado azul y un circulo rojo |

**Código usado:**
```html
<menu>
                <li><button onclick="alert('Nuevo documento creado')">Nuevo</button></li>
                <li><button onclick="alert('Guardado con éxito')">Guardar</button></li>
                <li><button onclick="alert('Imprimiendo...')">Imprimir</button></li>
</menu>
```
<canvas id="miCanvas" width="300" height="200" style="border:1px solid #000;"></canvas>

<script>
        const canvas = document.getElementById("miCanvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "skyblue";
        ctx.fillRect(50, 50, 100, 75);
        ctx.beginPath();
        ctx.arc(200, 100, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
</script>

---

#  Práctica 2 – Adición de CSS y JavaScript
---

### 1. Archivos agregados

| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `script.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

Estructura final del proyecto:

```
icc-ppw-u1-mi_papina_web/
│
├── index.html
├── style.css
├── script.js
└── README.md
```


---

### 2. Implementación en HTML

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
<link
        rel="stylesheet"
        href="style.css"
    >
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
<script src="script.js"></script>
```

---

| Elemento        | Estilo implementado                                                                                                                                                     | Descripción                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `body`          | `font-family: Arial, sans-serif; margin: 10px; padding: 0; background-color: #ffffff;`                                                                                  | Define la fuente general, márgenes, relleno y color de fondo de toda la página.          |
| `header`        | `background-color: #a296e0; color: white; padding: 10px 0; text-align: center; border-bottom: 3px solid #564e80;`                                                       | Aplica color de fondo, color de texto, centrado, padding y línea inferior al encabezado. |
| `h2`            | `color: #215693; border-bottom: 2px solid #6e8fd6; padding-bottom: 5px;`                                                                                                | Colorea el título de sección y agrega una línea inferior con padding para separación.    |
| `section`       | `margin: 20px; padding: 15px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.2); color: #215693;`                                                           | Espaciado interno y externo, bordes redondeados, sombra y color de texto de la sección.  |
| `footer`        | `background-color: #a296e0; color: white; text-align: center; padding: 10px 0; position: fixed; width: 100%; bottom: 0;`                                                | Estilo de pie de página fijo, con color, centrado y padding.                             |
| `menu`          | `margin: 20px 0; text-align: left;`                                                                                                                                     | Aplica márgenes y alineación a la lista de comandos.                                     |
| `menu button`   | `background-color: #564e80; color: white; border: none; padding: 10px 15px; margin: 5px; cursor: pointer; border-radius: 5px; box-shadow: 2px 2px 6px rgba(0,0,0,0.3);` | Botones con color, borde redondeado, sombra, padding, margen y cursor pointer.           |
| `button:hover`  | `background-color: #423d66; transform: scale(1.05); transition: transform 0.2s ease;`                                                                                   | Efecto hover para aumentar tamaño y cambiar color al pasar el cursor.                    |
| `table`         | `width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #a9a8b0; color: white;`                                                                    | Define ancho completo, colapsa bordes, agrega margen superior y color de fondo/ texto.   |
| `table, th, td` | `border: 1px solid #564e80;`                                                                                                                                            | Aplica borde a toda la tabla y celdas.                                                   |
| `th, td`        | `padding: 8px; text-align: left;`                                                                                                                                       | Espaciado interno y alineación del contenido de celdas.                                  |
| `section h3`    | `color: #6e8fd6;`                                                                                                                                                       | Color específico para los subtítulos dentro de cada sección.                             |

Propiedad nueva 1: transition → utilizada en el botón para crear un efecto suave al pasar el mouse. 
Propiedad nueva 2: box-shadow → da sombra y color de texto.
**Ejemplo en el código:**

AGREGAR DOS EJEMPLOS DE SU CODIGO CSS

```css
section {
    margin: 20px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    color: #215693;
}
button:hover {
    background-color: #423d66;
    transform: scale(1.05);
    transition: transform 0.2s ease;
}
```

---

###  4. Interactividad agregada con JavaScript

El archivo `script.js` incorpora dos acciones básicas:

1. **Agregar una nueva fila a la tabla al presionar el botón**

   ```javascript
   document.getElementById("agregarFila").addEventListener("click", () => {
     const tabla = document.querySelector("table");
     const nuevaFila = tabla.insertRow();
     nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
   });
   ```

2. **Cambiar el color del título al pasar el mouse por encima**

   ```javascript
   const titulo = document.getElementById("titulo");
   titulo.addEventListener("mouseover", () => {
     titulo.style.color = "red";
   });
   titulo.addEventListener("mouseout", () => {
     titulo.style.color = "blue ";
   });
   ```
3. **Cambiar el color de fondo de la seccion**
    ```javascript
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


4. **Poner un mensaje de alerta al tocar los botones del menu**
```javascript
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
## Capturas de pantalla del proyecto final


![alt text](<"Screenshot 2025-10-23 205713.png">)
