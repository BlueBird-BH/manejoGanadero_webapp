function verClave() {
  let campoIngreso = document.getElementById("clave");

  if (campoIngreso.type === "password") {
    campoIngreso.type = "text";
  } else {
    campoIngreso.type = "password";
  }
}