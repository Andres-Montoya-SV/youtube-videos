function calcularTotalPedido(pedido) {
  let total = 0;
  if (!pedido) {
    return null;
  } else if (pedido.length === 0) {
    return null;
  } else {
    for (let item of pedido) {
      if (!item) {
        continue;
      } else if (!item.hasOwnProperty("precio")) {
        continue;
      } else if (!item.hasOwnProperty("cantidad")) {
        continue;
      } else {
        total += item.precio * item.cantidad;
      }
    }
  }

  return total;
}
