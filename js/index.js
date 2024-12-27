document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener valores ingresados
    const units = parseInt(document.getElementById("units").value);
    const price = parseFloat(document.getElementById("price").value);

    if (isNaN(units) || isNaN(price) || units <= 0 || price <= 0) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    // Calcular subtotal
    const subtotal = units * price;

    // Determinar el porcentaje de descuento
    let discountRate = 0;
    if (units > 100) {
      discountRate = 0.4; // 40%
    } else if (units >= 25) {
      discountRate = 0.2; // 20%
    } else if (units >= 10) {
      discountRate = 0.1; // 10%
    }

    // Calcular descuento y total
    const discount = subtotal * discountRate;
    const total = subtotal - discount;

    // Mostrar resultados
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("discount").textContent = discount.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("output").style.display = "block";
  });
