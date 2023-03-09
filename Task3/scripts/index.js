console.log([document])

const contenedorTarjetas = document.querySelector('#contenedor-cards')

let buscador = document.getElementById("buscador")

let tarjetas = ''

function mostrarTarjetas(eventos){
for (const evento of data.events) {
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

}
contenedorTarjetas.innerHTML = tarjetas
}

mostrarTarjetas(data)



buscador.addEventListener("change",()=>{
  let tarjetasFiltradas = data.events.filter((evento) =>evento.includes == buscador.value)

  mostrarTarjetas(tarjetasFiltradas)
  contenedorTarjetas.innerHTML = tarjetasFiltradas

  
})




