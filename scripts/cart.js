document.addEventListener("DOMContentLoaded", () => {
  function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");
    const shippingCostElement = document.getElementById("shipping-cost");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderType = document.getElementById("order-type").value;

    if (cartItemsContainer && cartTotalContainer) {
      cartItemsContainer.innerHTML = "";
      let total = 0;
      cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        // Formatear opciones
        const optionsText = item.options ? formatOptions(item.options) : "";
        // Convertir saltos de línea a <br>
        const formattedOptionsText = optionsText.replace(/\n/g, "<br>");

        // Asegurar que el precio es un número
        const itemPrice = typeof item.price === "number" ? item.price : 0;

        itemElement.innerHTML = `
                    <div class="cart-item-row">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${itemPrice.toFixed(2)}</div>
                        <button class="remove-item" data-index="${index}">❌</button>
                    </div>
                    <div class="cart-item-size">${item.size ? `Tamaño: ${item.size}` : ""}</div>
                    ${formattedOptionsText ? `<div class="cart-item-options">${formattedOptionsText}</div>` : ""}
                    ${item.customText ? `<div class="cart-item-custom-text">Detalles: ${item.customText}</div>` : ""}
                `;
        cartItemsContainer.appendChild(itemElement);
        total += itemPrice * item.quantity;
      });

      // Añadir costo de envío si es necesario
      if (orderType === "domicilio") {
        const shippingCost = 25;
        shippingCostElement.style.display = "flex"; // Mostrar el costo de envío
        cartTotalContainer.style.marginBottom = "10px"; // Añadir margen al total
        cartTotalContainer.textContent = `Total: $${(total + shippingCost).toFixed(2)}`;
      } else {
        shippingCostElement.style.display = "none"; // Ocultar el costo de envío
        cartTotalContainer.style.marginBottom = "0"; // Restablecer margen
        cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
      }

      // Añadir event listeners a los botones de borrar
      const removeButtons = document.querySelectorAll(".remove-item");
      removeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const index = e.target.getAttribute("data-index");
          removeFromCart(index);
        });
      });
    }
  }

  function formatOptions(options) {
    let formattedOptions = "";
    for (const [key, value] of Object.entries(options)) {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          formattedOptions += `${key}:\n`;
          value.forEach((opt) => {
            const optObj = JSON.parse(opt);
            formattedOptions += `  - ${optObj.name} ${optObj.price ? `- $${optObj.price.toFixed(2)}` : ""}\n`;
          });
          formattedOptions += "\n"; // Añadir un salto de línea extra entre cada grupo de opciones
        }
      } else {
        const optObj = JSON.parse(value);
        if (optObj.name) {
          formattedOptions += `${key}:\n  - ${optObj.name} ${optObj.price ? `- $${optObj.price.toFixed(2)}` : ""}\n\n`;
        }
      }
    }
    return formattedOptions;
  }

  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }

  function toggleAddressField() {
    const orderType = document.getElementById("order-type").value;
    const addressSection = document.getElementById("address-section");
    const shippingCostElement = document.getElementById("shipping-cost");

    if (orderType === "domicilio") {
      addressSection.style.display = "block";
      if (shippingCostElement) {
        shippingCostElement.style.display = "block"; // Mostrar el costo de envío
      }
    } else {
      addressSection.style.display = "none";
      if (shippingCostElement) {
        shippingCostElement.style.display = "none"; // Ocultar el costo de envío
      }
    }

    // Actualizar el total
    updateCartDisplay();
  }

  function sendWhatsAppOrder() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("No tienes productos en tu carrito.");
      return;
    }

    // Obtener detalles del cliente
    const customerName = document.getElementById("customer-name").value.trim();
    const customerPhone = document
      .getElementById("customer-phone")
      .value.trim();
    const customerAddress = document
      .getElementById("customer-address")
      .value.trim();
    const customerPayment = document.getElementById("customer-payment").value;
    const orderType = document.getElementById("order-type").value;

    // Verificar que se ingresen nombre, número, y dirección si es necesario
    if (
      !customerName ||
      !customerPhone ||
      (orderType === "domicilio" && !customerAddress)
    ) {
      alert(
        "Por favor, ingresa tu nombre, número de teléfono y, si el pedido es a domicilio, tu dirección.",
      );
      return;
    }

    let message = `Hola, soy ${customerName}. Quiero hacer una orden:\n\n`;
    cart.forEach((item) => {
      const itemPrice = typeof item.price === "number" ? item.price : 0; // Asegurar que el precio es un número
      message += `- ${item.title} ${item.size ? `(Tamaño: ${item.size})` : ""} x${item.quantity}\n`;
      if (item.options) {
        const optionsText = formatOptions(item.options);
        if (optionsText) {
          message += `  Opciones:\n${optionsText}\n`;
        }
      }
      if (item.customText) {
        message += `  Detalles adicionales: ${item.customText}\n`;
      }
      message += `  Precio: $${itemPrice.toFixed(2)}\n\n`;
    });

    let total = cart.reduce(
      (sum, item) =>
        sum + (typeof item.price === "number" ? item.price : 0) * item.quantity,
      0,
    );

    // Añadir costo de envío si es necesario
    if (orderType === "domicilio") {
      const shippingCost = 25;
      total += shippingCost;
      message += `- Envío a domicilio: $${shippingCost.toFixed(2)}\n`;
    }

    message += `Total: $${total.toFixed(2)}\n\n`;
    if (orderType === "domicilio") {
      message += `Dirección: ${customerAddress}\n`;
    }
    message += `Método de pago: ${customerPayment}\n`;
    message += `Teléfono: ${customerPhone}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=+5215549683833&text=${encodedMessage}`,
      "_blank",
    );
  }

  // Actualizar la visualización del carrito al cargar la página
  updateCartDisplay();

  // Manejar cambio en el tipo de pedido
  document
    .getElementById("order-type")
    .addEventListener("change", toggleAddressField);

  // Enviar el pedido por WhatsApp
  document
    .getElementById("send-order")
    .addEventListener("click", sendWhatsAppOrder);
});
