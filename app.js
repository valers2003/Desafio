// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para
//  resolver el problema.



document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("nombre");
    const btnAdicionar = document.getElementById("adicionar");
    const listaNombres = document.getElementById("listaNombres");
    const btnSortear = document.getElementById("sortear");
    const resultado = document.getElementById("resultado");
    
    let nombres = [];

    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    }

    function actualizarLista() {
        listaNombres.innerHTML = "";
        for (const nombre of nombres) {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        }
    }

    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("Agregue al menos un nombre antes de sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.innerHTML = `El amigo secreto es: <strong>${nombres[indiceAleatorio]}</strong>`;
    }

    btnAdicionar.addEventListener("click", agregarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);
});
