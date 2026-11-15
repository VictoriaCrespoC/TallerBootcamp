 // Aquí tu código
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");

boton.addEventListener("click", ()=>{
    const elemento = prompt("Introduce un elemento:");
    if (elemento!== null && elemento.trim() !== "") {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = elemento.trim();
        /*Voy a crear la opcion de eliminar el nuevo elemento creado */
        const botonEliminar =document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        /*Tengo que añadir estos elementos a la lista de la web*/
        nuevoElemento.appendChild(botonEliminar);
        lista.appendChild(nuevoElemento);
        /*Tengo que hacer que ese botón funcione*/
        botonEliminar.addEventListener("click", () =>{
            nuevoElemento.remove();
        });       
    }
    else{
        console.log(elemento);
    }
    
});




