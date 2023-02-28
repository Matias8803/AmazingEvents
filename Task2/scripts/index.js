const contenedorTarjetas = document.querySelector('#contenedor-cards')

let tarjetas = ''

for (const evento of data.events) {
    tarjetas += `<div class="card" style="width: 18rem; height=20rem;">
   <img src="${evento.image}" class="card-img-top" alt="evento" height="180">
   <div class="card-body">
     <h5 class="card-title">${evento.name}</h5>
     <p class="card-text p-3">${evento.description}</p>
     <a href="./details.html" class="btn btn-primary position-absolute bottom-0 end-0 ms-auto m-2">Details</a>
   </div>
 </div>`

}

contenedorTarjetas.innerHTML = tarjetas