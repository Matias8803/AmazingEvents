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


      cargarTarjetaDetalle(events, Number(id));
   

};

let events = [];
let currentDate = "";
getEvents();

function cargarTarjetaDetalle(events, id){
let tarjeta = ``;
const tarjetaDetalle = events.find(event => event._id === id);
 if (tarjetaDetalle.date >= currentDate){
  tarjeta  += `<div id="tarjeta" class="card border-dark row flex-row p-4 pb-lg-5 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
  <div class="col-md-6 mb-md-0 p-md-4">
   <img src="${tarjetaDetalle.image}" class="card-img-top" alt="evento">
   </div>
   <div class="col-md-6 p-4 ps-md-0">
     <h5 class="card-title display-7 fw-bold lh-1 mb-2">${tarjetaDetalle.name}</h5>
     <p class="card-text lead">${tarjetaDetalle.description}</p>
     <p class="card-text lead">Date: ${tarjetaDetalle.date}</p>
     <p class="card-text lead">Price: $${tarjetaDetalle.price}</p>
     
     <div class="d-flex justify-content-between mt-4">
     <p class="card-text p-1 fw-bold">Category: ${tarjetaDetalle.category}</p>
     <p class="card-text p-1 fw-bold">Capacity: ${tarjetaDetalle.capacity}</p>
     <p class="card-text p-1 fw-bold">Estimate: ${tarjetaDetalle.estimate}</p>
     </div>
     
   </div>
 </div>`;

}else if (tarjetaDetalle.date < currentDate){
  tarjeta += `<div id="tarjeta" class="card border-dark row flex-row p-4 pb-lg-5 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
  <div class="col-md-6 mb-md-0 p-md-4">
   <img src="${tarjetaDetalle.image}" class="card-img-top" alt="evento" height="180">
   </div>
   <div class="col-md-6 p-4 ps-md-0">
     <h5 class="card-title display-7 fw-bold lh-1 mb-2">${tarjetaDetalle.name}</h5>
     <p class="card-text lead">${tarjetaDetalle.description}</p>
     <p class="card-text lead">Date: ${tarjetaDetalle.date}</p>
     <p class="card-text lead">Price: $${tarjetaDetalle.price}</p>

     <div class="d-flex justify-content-between mt-4">
     <p class="card-text p-1 fw-bold">Category: ${tarjetaDetalle.category}</p>
     <p class="card-text p-1 fw-bold">Capacity: ${tarjetaDetalle.capacity}</p>
     <p class="card-text p-1 fw-bold">Assistance: ${tarjetaDetalle.assistance}</p>
     </div>
   </div>
 </div>`

}
 contenedorTarjetas.innerHTML = tarjeta
}


