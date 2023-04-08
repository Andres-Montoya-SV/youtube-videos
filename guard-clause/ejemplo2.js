function realizarAccion(token, accion, estaLogueado) {
  if (!estaLogueado) {
    throw new Error("No estás logueado. Por favor, inicia sesión.");
  }

  if (!isAuthenticated(token)) {
    throw new Error(
      "No estás autenticado. Por favor, inicia sesión nuevamente."
    );
  }

  const role = getUserRole(token);
  if (role !== "admin") {
    throw new Error("No tienes permiso para realizar esta acción.");
  }

  // Realizar la acción solo si el usuario está logueado, autenticado y tiene el rol adecuado
  console.log("Acción realizada:", accion);
}

function isAuthenticated(token) {
  // Simulación de la validación del token
  return token === "token_valido";
}

function getUserRole(token) {
  // Simulación de la obtención del rol del usuario a partir del token
  if (token === "token_admin") {
    return "admin";
  } else {
    return "user";
  }
}

try {
  const token = "token_admin";
  const estaLogueado = true;
  realizarAccion(token, "Eliminar usuario", estaLogueado);
} catch (error) {
  console.error("Error al realizar la acción:", error.message);
}
