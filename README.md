# Challenger-Amigo-Secreto
Este proyecto permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

### Variables y Arrays
let listaDeAmigos = []; → Almacena los nombres.

### Funciones
Agregar Nombres: Los usuarios pueden agregar nombres de amigos a una lista mediante un campo de texto.
Validación de Entrada: Se verifica que el campo no esté vacío y que no contenga números.
Visualización de la Lista: Los nombres agregados se muestran en una lista debajo del campo de entrada.
Sorteo Aleatorio: Al hacer clic en el botón "Sortear Amigo", se selecciona aleatoriamente un nombre de la lista y se muestra en la 
página.

### DOM
document.getElementById("id") → Obtiene elementos del HTML.
document.createElement("li") → Crea elementos de lista.
innerHTML = "" → Limpia listas antes de actualizar.

### Validaciones
if (!nombreIngresado) {} → Evita agregar nombres vacíos.
if (listaDeAmigos.includes(nombreIngresado)) {} → Evita nombres repetidos.
if (listaDeAmigos.length === 0) {} → Verifica que haya amigos antes de sortear.

### Métodos de arrays
push(nombre) → Agrega un nombre a la lista.
.includes(nombre) → Verifica si un nombre ya existe.

### Número Aleatorio
Math.random() y Math.floor() → Generan un índice aleatorio para el sorteo.

### Mensajes de Alerta

alert("mensaje") → Notifica errores o advertencias.

El proyecto está completo y listo para ser utilizado.

### Tecnologías

HTML: Para la estructura de la página.
CSS: Para el estilo visual.
JavaScript: Para la lógica del programa.

### Preguntas Frecuentes

1. ¿Cómo agregar nombres a la lista?
   Use el campo de texto para ingresar un nombre y haga clic en "Adicionar".

2. ¿Qué pasa si la lista está vacía?
   - Se mostrará un mensaje indicando que no hay amigos para sortear.
