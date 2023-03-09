const queryString = location.search

const params = new URLSearchParams (document.location.search)

const id = params.get("id")

const tarjetaDetalle = data.events.find(evento => evento._id == id)


const contenedorTarjetas = document.querySelector('#contenedor-cards')

  contenedorTarjetas.innerHTML = `<div id="tarjeta" class="row g-0 position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
   <img src="${tarjetaDetalle.image}" class="card-img-top" alt="evento" height="180">
   </div>
   <div class="col-md-6 p-4 ps-md-0">
     <h5 class="card-title">${tarjetaDetalle.name}</h5>
     <p class="card-text p-2">${tarjetaDetalle.description}</p>
     <p class="card-text p-2">Date: ${tarjetaDetalle.date}</p>
     <p class="card-text p-2">Price: ${tarjetaDetalle.price}</p>
     <p class="card-text p-2">Category: ${tarjetaDetalle.category}</p>
     <p class="card-text p-2">Capacity: ${tarjetaDetalle.capacity}</p>
     <p class="card-text p-2">Assitance: ${tarjetaDetalle.assistance}</p>
     <p class="card-text p-2">Estimate: ${tarjetaDetalle.estimate}</p>
     
   </div>
 </div>`






