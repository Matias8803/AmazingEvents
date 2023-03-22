console.log([document])
const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";


let events = [];

const contenedorTarjetas = document.getElementById("contenedor-cards");

const checkbox = document.getElementById("checkbox");

const buscador = document.querySelector("#input");

async function getEvents() {
  try {
    const response = await fetch (urlApi);
    const dataEvents = await response.json();
    console.log("array de eventos", dataEvents.data);
    events = dataEvents.events;

    mostrarTarjetas(dataEvents.events);
    crearCheckboxs(dataEvents.events);

    buscador.addEventListener("input", superFiltro);

      checkbox.addEventListener("change", superFiltro);

      superFiltro();
  } catch(error){
    console.log(error.message);
  }
};

getEvents();
/* buscador.addEventListener("input", superFiltro)

checkbox.addEventListener("change", superFiltro)

mostrarTarjetas(data.events);
crearCheckboxs(data.events); */


function superFiltro(){
  let filtroA = filterOfText(events, input.value);
  let FiltroB = filterOfCategory(filtroA);

  mostrarTarjetas(FiltroB);

}

function crearCheckboxs(array) {
  let arrayCountrys = array.map((event) => event.category);
  let setCountry = new Set(arrayCountrys);
  let arrayChecks =  Array.from(setCountry);
  let checkboxs = "";
  arrayChecks.forEach((category) => {
    checkboxs += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
    <label class="form-check-label" for="${category}">${category}</label>
</div>`
  });

  checkbox.innerHTML = checkboxs;

}




function mostrarTarjetas(events){

  let tarjetas = '';

  events.forEach( evento => {
      tarjetas += `<div class="card bd-placeholder-img card-img-top" style="width: 20rem; height=20rem;">
     <img src="${evento.image}" class="card-img-top" alt="evento" height="180">
     <div class="card-body">
       <h5 class="card-title text-center">${evento.name}</h5>
       <p class="card-text">${evento.description}</p>
         <p class="card-text"> Date: ${evento.date}</p>
         <p class="card-text"> Price: $${evento.price}</p>
       <a href="./details.html?id=${evento._id}" class="btn btn-primary position-absolute bottom-0 end-0 ms-auto m-2">Details</a>
     </div>
     </div>
   </div>`
  
  })
  contenedorTarjetas.innerHTML = tarjetas
  }
  
  function filterOfText(eventos, text) {
    let arrayFiltrado = eventos.filter((e) => 
    e.name.toLowerCase().includes(text.toLowerCase()));
    
    return arrayFiltrado;
  }



  function filterOfCategory(array) {
    let checkboxs = document.querySelectorAll("input[type='checkbox']");
    let arrayChecks = Array.from(checkboxs);
    let arrayChecksChecked = arrayChecks.filter((check) => check.checked);
    let arrayChecksCheckedValues = arrayChecksChecked.map((checkChecked) => checkChecked.value);
    let arrayFiltrado = array.filter((e) =>
    arrayChecksCheckedValues.includes(e.category)
    );
    if (arrayChecksChecked.length > 0) {
      return arrayFiltrado;
    }
    return array;
  }
  