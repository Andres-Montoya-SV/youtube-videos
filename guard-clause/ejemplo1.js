function dividir(dividendo, divisor) {
    if (divisor === 0) {
      throw new Error("El divisor no puede ser cero.");
    }
  
    const resultado = dividendo / divisor;
    return resultado;
  }
  
  try {
    const resultado = dividir(10, 0);
    console.log("El resultado es:", resultado);
  } catch (error) {
    console.error("Error al realizar la división:", error.message);
  }
  