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
    // Renderizar la lista actualizada
    renderizarLista();
}

// Función para renderizar la lista de amigos
function renderizarLista() {
    // Obtener el elemento de la lista
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";

    // Iterar sobre la lista de amigos y agregar cada uno como un item
    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaElementos.appendChild(item);
    });
}
// Función para sortear un amigo
function sortearAmigo() {
    // Validar si la lista está vacía
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // Generar un índice aleatorio para sortear un amigo
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Mostrar el resultado del sorteo
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

    // Limpiar la lista
    listaDeAmigos = [];
    renderizarLista();
}

