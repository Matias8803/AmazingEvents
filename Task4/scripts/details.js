const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";


const queryString = location.search

const params = new URLSearchParams (document.location.search)

const id = params.get("id")

// const tarjetaDetalle = data.events.find(evento => evento._id == id)


const contenedorTarjetas = document.querySelector('#contenedor-cards')

async function getEvents() {
    const response = await fetch (urlApi);
    const dataEvents = await response.json();
    console.log("array de eventos", dataEvents.data);
    events = dataEvents.events;
    currentDate = dataEvents.currentDate;

    if (events.find(event => event._id == eventId) ===  undefined) {
      loadNoResults();
    }else {
      cargarTarjetaDetalle(events, Number(eventId));
    }

};

let events = [];
let currentDate = "";
getEvents();

function cargarTarjetaDetalle(events, id){
let tarjeta= ``;
if (events.find(event => event._id == eventId)
  contenedorTarjetas.innerHTML = `<div id="tarjeta" class="row g-0 position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
   <img src="${tarjetaDetalle.image}" class="card-img-top" alt="evento" height="180">
   </div>
   <div class="col-md-6 p-4 ps-md-0">
     <h5 class="card-title">${tarjetaDetalle.name}</h5>
     <p class="card-text p-1">${tarjetaDetalle.description}</p>
     <div class="d-flex justify-content-between mt-2">
     <p class="card-text">Date: ${tarjetaDetalle.date}</p>
     <p class="card-text">Price: $${tarjetaDetalle.price}</p>
     </div>
     <div class="d-flex justify-content-between mt-2">
     <p class="card-text">Category: ${tarjetaDetalle.category}</p>
     <p class="card-text">Capacity: ${tarjetaDetalle.capacity}</p>
     <p class="card-text">Estimate: ${tarjetaDetalle.estimate}</p>
     </div>
     
   </div>
 </div>`

else if (tarjetaDetalle.date < "2022-01-01")
contenedorTarjetas.innerHTML = `<div id="tarjeta" class="row g-0 position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
   <img src="${tarjetaDetalle.image}" class="card-img-top" alt="evento" height="180">
   </div>
   <div class="col-md-6 p-4 ps-md-0">
     <h5 class="card-title">${tarjetaDetalle.name}</h5>
     <p class="card-text p-1">${tarjetaDetalle.description}</p>
     <p class="card-text p-1">Date: ${tarjetaDetalle.date}</p>
     <p class="card-text p-1">Price: $${tarjetaDetalle.price}</p>
     <p class="card-text p-1">Category: ${tarjetaDetalle.category}</p>
     <p class="card-text p-1">Capacity: ${tarjetaDetalle.capacity}</p>
     <p class="card-text p-1">Assistance: ${tarjetaDetalle.assistance}</p>
     
   </div>
 </div>`

}



