const input = document.getElementById('input');
const boton = document.getElementById('boton');
const listaInvitados = document.getElementById('listaTareas');
const span = document.getElementById('cuenta-tareas');
const btnBuscar = document.getElementById('btnBuscar');
const inputBuscar = document.getElementById('inputBuscar');
let tareas= [];

btnBuscar.addEventListener("click", () => {
    const tareaBuscada = inputBuscar.value;
    const tareasFiltradas = tareas.filter((tarea) => {tarea.includes(tareaBuscada)});
    console.log(tareasFiltradas)
    renderTareas(tareasFiltradas);
    })
    
boton.addEventListener('click', () => {
        tareas.push({id: Date.now(), name: input.value});
        renderTareas();
        console.log(tareas)
});

function renderTareas (){
        let html = '';
        tareas.forEach(function(tarea){
            html += `<li>${tarea.name}<button onclick="borrar(${tarea.id})">Borrar</button></li>`;
        });
        listaInvitados.innerHTML = html;
        input.value = '';
        span.textContent = tareas.length;
}

function borrar(id){
    const index = tareas.findIndex((elem) => elem.id === id);
    tareas.splice(index,1);

    renderTareas();
}
