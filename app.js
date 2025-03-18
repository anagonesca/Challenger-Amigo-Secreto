// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  
    // Obtener el input del nombre del amigo
    let inputAmigo = document.getElementById("amigo");
    let nombreIngresado = inputAmigo.value.trim();

    // Validar si el nombre está vacío
    if (!nombreIngresado) {
        alert("Ingresa un amigo para continuar");
        return;
    }

    // Validar si el nombre contiene números
    if (/\d/.test(nombreIngresado)) {
        alert("Por favor, ingresa solo letras en el nombre.");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    // Validar si el nombre ya está en la lista
    if (listaDeAmigos.includes(nombreIngresado)) {
        alert(`El nombre "${nombreIngresado}" ya está en la lista. Ingresa otro nombre.`);
        return;
    }
      // Agregar el nombre a la lista
    listaDeAmigos.push(nombreIngresado);

    // Limpiar el input y enfocarlo
    inputAmigo.value = "";
    inputAmigo.focus();

