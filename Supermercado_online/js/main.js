// DESCUENTO DEL 10% EN PRODUCTO DESTACADOS
document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Buscamos el botón y el precio
  const btnDescuento = document.getElementById("btn-descuento");
  const precioEl = document.getElementById("pd-price");

  // Si existen (solo en las páginas de producto)
  if (btnDescuento && precioEl) {

    //  Guardamos el precio original desde el atributo data-price
    const precioOriginal = parseFloat(precioEl.dataset.price);

    //  Añadimos un escuchador de clic
    btnDescuento.addEventListener("click", () => {

      //  Calculamos el nuevo precio con un 10% menos
      const nuevoPrecio = (precioOriginal * 0.9).toFixed(2);

      //  Actualizamos el texto del precio
      precioEl.textContent = `${nuevoPrecio} €`;

      //  Cambiamos el color para resaltarlo
      precioEl.style.color = "green";

      //  Deshabilitamos el botón para evitar repetir clic
      btnDescuento.disabled = true;
      btnDescuento.textContent = "Descuento aplicado ✓";
    });
  }
});

// AVISO "AÑADIDO AL CARRITO"
document.addEventListener("DOMContentLoaded", () => {
  const btnCarrito = document.getElementById("btn-carrito");
  const alerta = document.getElementById("alerta-carrito");

  if (btnCarrito && alerta) {
    btnCarrito.addEventListener("click", () => {
      // Mostrar el aviso
      alerta.hidden = false;
      alerta.classList.add("visible");

      // Ocultarlo automáticamente después de 2 segundos
      setTimeout(() => {
        alerta.classList.remove("visible");
        // Esperamos la animación y luego lo ocultamos
        setTimeout(() => alerta.hidden = true, 300);
      }, 2000);
    });
  }
});

