import peliculas from './peliculas.js'
console.log(peliculas)

//Primero voy a filtrar por categorías
const peliculasAccion = peliculas.filter(pelicula =>
  pelicula.genre_ids.includes(28)
);

const peliculasthriller = peliculas.filter(pelicula =>
  pelicula.genre_ids.includes(53)
);

const peliculasAventuras = peliculas.filter(pelicula =>
  pelicula.genre_ids.includes(12)
);

console.log(peliculasAccion);
console.log(peliculasthriller);
console.log(peliculasAventuras);


//Ahora agrupamos según el id de cada bloque, esto conecta nuestros bloques de HTML con JS
const contenedorAccion = document.querySelector('#genero-28');
const contenedorthriller = document.querySelector('#genero-53');
const contenedorAventuras = document.querySelector('#genero-12');

console.log(contenedorAccion);
console.log(contenedorthriller);
console.log(contenedorAventuras);

//Colocar cada película donde correspondr
//forEach recorre todas las películas del array (cada uno de los contenedores que hemos creado)
//innerHTML += me añade el contenido al contenedor
//la url a la base de las imagenes nos la da el enunciado
peliculasAccion.forEach(pelicula => {
    contenedorAccion.innerHTML += `
        <div class="pelicula"> 
            <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>
        </div>
    `;
});

peliculasthriller.forEach(pelicula=>{
    contenedorthriller.innerHTML += `<div class="pelicula"><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}"><h3>${pelicula.title}</h3></div>`;
});

peliculasAventuras.forEach(pelicula=>{
    contenedorAventuras.innerHTML += `<div class="pelicula"><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}"><h3>${pelicula.title}</h3></div>`;
});



//hacer que se deslice cada contenedor y poder ver todas las pelis
const secciones = document.querySelectorAll(".genero-container");

secciones.forEach(seccion => {
    const contenedor = seccion.querySelector(".genero");
    const izquierda = seccion.querySelector(".flechaizq");
    const derecha = seccion.querySelector(".flechader");

    derecha.addEventListener("click", () => {
        contenedor.scrollBy({ left: 300, behavior: "smooth" });
    });

    izquierda.addEventListener("click", () => {
        contenedor.scrollBy({ left: -300, behavior: "smooth" });
    });
});


