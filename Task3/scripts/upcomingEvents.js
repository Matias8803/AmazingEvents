
console.log([document])



const contenedorTarjetas = document.getElementById("contenedor-cards");

const checkbox = document.getElementById("checkbox")

const buscador = document.querySelector("#input")

buscador.addEventListener("input", superFiltro)

checkbox.addEventListener("change", superFiltro)

mostrarTarjetas(data.events);
crearCheckboxs(data.events);


function superFiltro(){
  let filtroA = filterOfText(data.events, input.value);
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
    if (evento.date >= data.currentDate ){
      tarjetas += `<div class="card" style="width: 18rem; height=20rem;">
      <img src="${evento.image}" class="card-img-top" alt="evento" height="180">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text p-1">${evento.description}</p>
        <p class="card-text p-1"> Date: ${evento.date}</p>
       <p class="card-text p-1"> Price: $${evento.price}</p>
        <a href="./details.html?id=${evento._id}" class="btn btn-primary position-absolute bottom-0 end-0 ms-auto m-2">Details</a>
      </div>
    </div>`

}})
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
  

  
