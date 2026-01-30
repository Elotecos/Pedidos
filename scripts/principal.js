import {
  frituraOptions,
  papitasOptions,
  papaslocasOptions,
  maruchanOptions,
  carneOptions,
  extrasOptions,
  saborPreparadas,
  saborArizonaLoco,
  saborArizona,
  saborBoings,
  products,
} from "../scripts/data.js";

let cart = [];
const container = document.getElementById("product-container");

// Función para renderizar un producto con opciones y tamaños
function renderProduct(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  // Renderizar el resto de la información del producto
  let priceInfo = "";
  if (product.sizes && product.sizes.length > 0) {
    priceInfo = product.sizes
      .map((size) => `$${size.price.toFixed(2)}`)
      .join(", ");
  } else {
    priceInfo = `$${(product.price || 0).toFixed(2)}`;
  }

  //<p>${product.description}</p>
  productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}${priceInfo ? ` - ${priceInfo}` : ""}</h2>        
    `;

  productDiv.addEventListener("click", () => {
    // Redirigir a product.html con el ID del producto en la URL
    window.location.href = `pages/product.html?id=${product.id}`;
  });

  container.appendChild(productDiv);
}

// Función para renderizar productos de una categoría específica
function renderProducts(category) {
  container.innerHTML = ""; // Limpiar el contenedor antes de renderizar nuevos productos

  if (products.todos.hasOwnProperty(category)) {
    products.todos[category].forEach((product) => {
      renderProduct(product);
    });
  } else {
    console.error(`No se encontraron productos en la categoría "${category}"`);
  }
}

// Función para renderizar todos los productos de todas las categorías
function renderAllProducts() {
  container.innerHTML = ""; // Limpiar el contenedor antes de renderizar nuevos productos

  Object.keys(products.todos).forEach((category) => {
    products.todos[category].forEach((product) => {
      renderProduct(product);
    });
  });
}

// Función para actualizar el botón del carrito
// Función para actualizar la visualización del botón del carrito
function updateCartButton() {
  // Obtener el carrito de localStorage o crear un carrito vacío si no existe
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Obtener los elementos del DOM para el total y el contador de productos
  const cartTotalElement = document.getElementById("cart-total");
  const itemCountElement = document.getElementById("item-count");

  // Calcular el total y la cantidad de productos en el carrito
  let total = 0;
  let itemCount = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    itemCount += item.quantity;
  });

  // Actualizar los elementos del DOM con los valores calculados
  cartTotalElement.textContent = `$${total.toFixed(2)}`;
  //itemCountElement.textContent = `${itemCount}x`;
}

const openStatusElement = document.getElementById("open-status");
const statusBullet = document.getElementById("status-bullet");

function updateOpenStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const openingHour = 19; // 7:00 PM
  const closingHour = 22; // 10:00 PM
  const closingMinutes = 30; // 10:30 PM

  if (hours > openingHour || (hours === openingHour && minutes >= 0)) {
    if (
      hours < closingHour ||
      (hours === closingHour && minutes <= closingMinutes)
    ) {
      openStatusElement.textContent = "Abierto";
      statusBullet.className = "bullet green"; // Cambia la bolita a verde
    } else {
      openStatusElement.textContent = "Cerrado";
      statusBullet.className = "bullet red"; // Cambia la bolita a roja
    }
  } else {
    openStatusElement.textContent = "Cerrado";
    statusBullet.className = "bullet red"; // Cambia la bolita a roja
  }
}

// updateOpenStatus();

updateOpenStatus();

// Llamada inicial para actualizar la visualización del carrito al cargar la página
document.addEventListener("DOMContentLoaded", updateCartButton);

// Event listeners para los botones de categoría
document
  .getElementById("btn-todo")
  .addEventListener("click", renderAllProducts);
document
  .getElementById("btn-elotes")
  .addEventListener("click", () => renderProducts("elotes"));
document
  .getElementById("btn-esquites")
  .addEventListener("click", () => renderProducts("esquites"));
document
  .getElementById("btn-maruchan")
  .addEventListener("click", () => renderProducts("maruchan"));
document
  .getElementById("btn-snacks")
  .addEventListener("click", () => renderProducts("snacks"));
document
  .getElementById("btn-drinks")
  .addEventListener("click", () => renderProducts("drinks"));

// Inicializar con la categoría "All" cuando la página se carga
renderAllProducts();
updateCartButton();
