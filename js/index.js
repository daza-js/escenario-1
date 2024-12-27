/**
 * Verifica si la entrada es válida.
 */
function isValidInput(units, price) {
  return !isNaN(units) && !isNaN(price) && units > 0 && price > 0;
}

/**
 * Calcula los totales basados en las unidades y el precio.
*/
function calculateTotals(units, price) {
  const subtotal = units * price;
  const discountRate = getDiscountRate(units);
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  return { subtotal, discount, total };
}

/**
 * Obtiene la tasa de descuento basada en la cantidad de unidades.
 */
function getDiscountRate(units) {
  if (units > 100) return 0.4;
  if (units >= 25) return 0.2;
  if (units >= 10) return 0.1;
  return 0;
}

/**
 * Muestra los resultados en la interfaz de usuario.
 */
function displayResults(subtotal, discount, total) {
  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("discount").textContent = discount.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("output").style.display = "block";
}

/**
 * Maneja el evento de pago.
 */
const handleOnPayment = function (event) {
  event.preventDefault();

  const units = parseInt(document.getElementById("units").value);
  const price = parseFloat(document.getElementById("price").value);

  if (!isValidInput(units, price)) {
    alert("Por favor, ingresa valores válidos.");
    return;
  }

  const { subtotal, discount, total } = calculateTotals(units, price);

  displayResults(subtotal, discount, total);
};

document
  .getElementById("paymentForm")
  .addEventListener("submit", handleOnPayment);
