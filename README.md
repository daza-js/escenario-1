# Desglose de Pago - Tienda de Abarrotes

## Descripción

Esta aplicación calcula el desglose del pago para un cliente en una tienda de abarrotes al realizar una compra. El usuario puede ingresar:

- El número de unidades de un producto (entero positivo).
- El precio unitario del producto (número positivo).

Con estos datos, se calcula:

- Subtotal.
- Descuento aplicado según la cantidad de unidades compradas.
- Total a pagar.

## Lógica de Negocio

### Reglas de Descuento

- **Más de 100 unidades:** Descuento del 40%.
- **Entre 25 y 100 unidades:** Descuento del 20%.
- **Entre 10 y 24 unidades:** Descuento del 10%.
- **Menos de 10 unidades:** Sin descuento.

### Fórmulas

- **Subtotal:** `unidades * precio_unitario`
- **Descuento:** `subtotal * porcentaje_descuento`
- **Total a Pagar:** `subtotal - descuento`

## Requisitos

### Software

- Navegador web compatible con JavaScript.

## Instalación

1. Descarga los archivos del repositorio.
2. Abre el archivo `index.html` en cualquier navegador web.

## Uso

1. Ingresa el número de unidades en el campo correspondiente.
2. Ingresa el precio unitario del producto.
3. Haz clic en el botón **Calcular**.
4. El desglose del pago aparecerá en pantalla con los valores de:
   - Subtotal.
   - Descuento aplicado.
   - Total a pagar.

## Casos de Uso

### Ejemplo 1: Compra sin descuento

- **Entrada:**
  - Unidades: `5`
  - Precio Unitario: `$10`
- **Salida:**
  - Subtotal: `$50`
  - Descuento: `$0`
  - Total a Pagar: `$50`

### Ejemplo 2: Compra con 10% de descuento

- **Entrada:**
  - Unidades: `15`
  - Precio Unitario: `$20`
- **Salida:**
  - Subtotal: `$300`
  - Descuento: `$30`
  - Total a Pagar: `$270`

### Ejemplo 3: Compra con 40% de descuento

- **Entrada:**
  - Unidades: `150`
  - Precio Unitario: `$8`
- **Salida:**
  - Subtotal: `$1200`
  - Descuento: `$480`
  - Total a Pagar: `$720`

### Validación de Datos Incorrectos

- Si el usuario ingresa valores no válidos (como negativos, cero o no numéricos), se muestra un mensaje de error: **"Por favor, ingresa valores válidos."**

## Extensiones Futuras

Esta aplicación puede ampliarse con las siguientes funcionalidades:

- Cálculo de impuestos.
- Soporte para múltiples productos en una sola transacción.
- Conexión a una base de datos o API para obtener precios dinámicos.
