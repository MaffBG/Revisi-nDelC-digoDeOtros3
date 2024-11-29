// Tenemos un li de productos
// Arreglo de productos con información sobre nombre, tipo, color e imagen
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Selección de elementos del DOM
const listaProductos = document.getElementById("lista-de-productos");
const inputBuscar = document.getElementById("inputBuscar");
const botonFiltro = document.getElementById("buttonFiltro");

// Función para renderizar los productos en la lista
function renderProductos(productos) {
  // Limpia el contenido anterior
  listaProductos.innerHTML = "";

  // Genera los elementos visuales para los productos
  productos.forEach(producto => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    contenedor.appendChild(titulo);
    contenedor.appendChild(imagen);
    listaProductos.appendChild(contenedor);
  });
}

// Función para filtrar los productos por tipo o color
function filtrarProductos(productos, texto) {
  return productos.filter(
    producto =>
      producto.tipo.toLowerCase().includes(texto.toLowerCase()) ||
      producto.color.toLowerCase().includes(texto.toLowerCase())
  );
}

// Muestra todos los productos al cargar la página
renderProductos(productos);

// Evento del botón de filtro
botonFiltro.addEventListener("click", () => {
  const texto = inputBuscar.value.trim(); // Captura el texto ingresado por el usuario
  const productosFiltrados = filtrarProductos(productos, texto); // Filtra los productos
  renderProductos(productosFiltrados); // Renderiza los productos filtrados
});
