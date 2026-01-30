import { products } from "../scripts/data.js";

// Función para obtener el producto por ID
function getProductById(productId) {
  for (const category in products.todos) {
    const product = products.todos[category].find((p) => p.id === productId);
    if (product) return product;
  }
  return null;
}

// Función para crear los elementos de las opciones
function createOptionElement(option, groupName) {
  const container = document.createElement("div");
  container.classList.add("option-container");

  if (
    option.name === "Extras" ||
    option.name === "Cubierta fritura" ||
    option.name === "Verdura"
  ) {
    option.options.forEach((opt) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = groupName;
      checkbox.value = JSON.stringify({
        name: opt.name,
        price: opt.price || 0,
      });
      label.appendChild(checkbox);
      label.appendChild(
        document.createTextNode(
          opt.price ? `${opt.name} - $${opt.price.toFixed(2)}` : opt.name,
        ),
      );
      container.appendChild(label);
    });
  } else {
    const select = document.createElement("select");
    select.name = groupName;

    // Añadir opción por defecto
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Seleccione una opción";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    select.appendChild(defaultOption);

    if (option.name !== "Extras") {
      select.required = true;
    }

    option.options.forEach((opt) => {
      const optionElement = document.createElement("option");
      optionElement.value = JSON.stringify({
        name: opt.name,
        price: opt.price || 0,
      });
      optionElement.textContent = opt.price
        ? `${opt.name} - $${opt.price.toFixed(2)}`
        : opt.name;
      select.appendChild(optionElement);
    });
    container.appendChild(select);
  }

  return container;
}

function addToCart(product, size, options, customText) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItemIndex = cart.findIndex(
    (item) =>
      item.id === product.id &&
      item.size === size &&
      JSON.stringify(item.options) === JSON.stringify(options) &&
      item.customText === customText,
  );

  let basePrice = size ? size.price : product.price || 0;
  let extrasCost = 0;

  for (const groupName in options) {
    const selectedOptions = options[groupName];
    if (Array.isArray(selectedOptions)) {
      selectedOptions.forEach((opt) => {
        const option = JSON.parse(opt);
        extrasCost += option.price;
      });
    } else {
      const option = JSON.parse(selectedOptions);
      extrasCost += option.price;
    }
  }

  const totalPrice = basePrice + extrasCost;

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: totalPrice,
      size: size ? size.name : null,
      options: options,
      customText: customText || "", // Añadir customText
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartButton();
}

function updateCartButton() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  //document.getElementById('item-count').textContent = itemCount;
  document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`; // Total del carrito
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"), 10);
  const product = getProductById(productId);

  if (!product) return;

  const productTitle = document.querySelector(".product-info h1");
  const productDescription = document.querySelector(".product-info p");
  const productImage = document.querySelector(".product-image");
  const optionsContainer = document.querySelector(".options");
  const priceContainer = document.querySelector(".product-info .price"); // usar el del HTML

  productTitle.textContent = product.title;
  productDescription.textContent = product.description;
  productImage.src = product.image;

  let selectedSize = null;

  // Mostrar precio inicial según si tiene sizes o price
  if (product.sizes && product.sizes.length > 0) {
    priceContainer.textContent = "Seleccione un tamaño";

    const sizeSelect = document.createElement("select");
    sizeSelect.name = "size";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Seleccione un tamaño";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    sizeSelect.appendChild(defaultOption);

    product.sizes.forEach((size) => {
      const sizeOption = document.createElement("option");
      sizeOption.value = JSON.stringify(size);
      sizeOption.textContent = `${size.size} - $${size.price.toFixed(2)}`;
      sizeSelect.appendChild(sizeOption);
    });
    optionsContainer.appendChild(sizeSelect);

    // Actualizar precio dinámicamente
    sizeSelect.addEventListener("change", (event) => {
      const selectedOption = event.target.options[event.target.selectedIndex];
      selectedSize = JSON.parse(selectedOption.value);
      priceContainer.textContent = `$${selectedSize.price.toFixed(2)}`;
    });
  } else {
    // Productos con precio fijo
    priceContainer.textContent = product.price
      ? `$${product.price.toFixed(2)}`
      : "Precio no disponible";
  }

  const options = {};
  let customText = ""; // Variable para el texto personalizado

  // Añadir el checkbox de "¿Con todo?"
  const withEverythingLabel = document.createElement("label");
  const withEverythingCheckbox = document.createElement("input");
  withEverythingCheckbox.type = "checkbox";
  withEverythingCheckbox.checked = true;
  withEverythingLabel.appendChild(withEverythingCheckbox);
  withEverythingLabel.appendChild(document.createTextNode("¿Con todo?"));
  optionsContainer.appendChild(withEverythingLabel);

  // Manejar el evento de cambio en el checkbox "¿Con todo?"
  withEverythingCheckbox.addEventListener("change", (event) => {
    const customInputContainer = document.querySelector(
      ".custom-input-container",
    );
    if (event.target.checked) {
      if (customInputContainer) {
        customInputContainer.remove();
      }
    } else {
      if (!customInputContainer) {
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("custom-input-container");
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Sin mayonesa, poco queso";
        input.id = "custom-text"; // Añadir id para poder seleccionarlo
        inputContainer.appendChild(input);

        // Insertar inputContainer después de withEverythingLabel
        optionsContainer.insertBefore(
          inputContainer,
          withEverythingLabel.nextSibling,
        );
      }
    }
  });

  // Crear un contenedor para "Extras" que aparezca después
  const extrasContainer = document.createElement("div");
  extrasContainer.classList.add("extras-container");

  product.options.forEach((option) => {
    const groupName = option.name.replace(/\s+/g, "-").toLowerCase();
    const optionGroup = document.createElement("div");
    optionGroup.classList.add("option-group");
    const optionGroupTitle = document.createElement("h3");
    optionGroupTitle.textContent = option.name;
    optionGroup.appendChild(optionGroupTitle);

    const optionElement = createOptionElement(option, groupName);
    optionGroup.appendChild(optionElement);

    if (option.name === "Extras") {
      extrasContainer.appendChild(optionGroup);
    } else {
      optionsContainer.appendChild(optionGroup);
    }

    options[groupName] = [];
    optionElement.querySelectorAll("input, select").forEach((input) => {
      input.addEventListener("change", () => {
        if (input.type === "checkbox") {
          if (input.checked) {
            options[groupName].push(input.value);
          } else {
            const index = options[groupName].indexOf(input.value);
            if (index !== -1) {
              options[groupName].splice(index, 1);
            }
          }
        } else {
          options[groupName] = input.value;
        }
      });
    });
  });

  optionsContainer.appendChild(extrasContainer);

  document.querySelector(".add-to-cart").addEventListener("click", () => {
    const customText = document.getElementById("custom-text")
      ? document.getElementById("custom-text").value
      : ""; // Obtener el texto personalizado
    if (validateOptions(options)) {
      addToCart(product, selectedSize, options, customText);
      alert("¡Producto añadido!");
      window.location.href = "../index.html";
    } else {
      alert("Por favor, no dejes nada sin llenar");
    }
  });

  // Función para validar las opciones seleccionadas
  function validateOptions(options) {
    for (const groupName in options) {
      // Solo verifica que no esté vacío si no es 'Extras'
      if (groupName !== "extras" && options[groupName].length === 0) {
        return false;
      }
    }
    return true;
  }

  updateCartButton();
});
