function procesarDatos(datos) {
  // Usando un Guard Clause para verificar si los datos están vacíos o no son del tipo esperado
  if (!datos || !Array.isArray(datos) || datos.length === 0) {
    throw new Error("Los datos de entrada no son válidos.");
  }

  // Transformar los datos (por ejemplo, duplicar cada elemento en este caso)
  const datosTransformados = datos.map((elemento) => elemento * 2);

  return datosTransformados;
}

try {
  const datosEntrada = [1, 2, 3, 4, 5];
  const datosProcesados = procesarDatos(datosEntrada);
  console.log("Datos procesados:", datosProcesados);
} catch (error) {
  console.error("Error al procesar los datos:", error.message);
}
