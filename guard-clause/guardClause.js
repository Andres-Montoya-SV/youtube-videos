function calcularTotalPedidoGuardClause(pedido) {
    if (!pedido || pedido.length === 0) {
      return null;
    }
  
    let total = 0;
    for (let item of pedido) {
      if (!item || !item.hasOwnProperty('precio') || !item.hasOwnProperty('cantidad')) {
        continue;
      }
  
      total += item.precio * item.cantidad;
    }
  
    return total;
  }
  