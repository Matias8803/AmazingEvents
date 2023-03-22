const urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

const eventStatis = document.getElementById("eventStats");
const catUpStats = document.getElementById("upStats");
const catPastStats = document.getElementById("pastStats");

let events = [];
let currentDate = "";

async function getEvents() {
    try {
        const response = await fetch(urlApi);
        const dataEvents = await response.json();
        events = dataEvents.events;
        currentDate = dataEvents.currentDate;

        eventStats(hiPercentage(events), loPercentage(events), largerCapacity(events));
        pastCategoriesStats(events);
        upCategoriesStats(events);
    }catch (error) {
        console.log(error.message);
    }
}

getEvents();

function  largerCapacity(events){
    events.sort((a, b) => b.capacity - a.capacity);
    return events[0];
}

function hiPercentage(events) {
    const hiAssistanceEvent = events.reduce((eventoMayor, eventoActual) => {
        const porcentajeActual = (eventoActual.assistance / eventoActual.capacity) * 100;
        const porcentajeMayor = (eventoMayor.assistance / eventoMayor.capacity) * 100;
        
        if (porcentajeActual > porcentajeMayor) {
            return eventoActual;
        } else {
            return eventoMayor;
        }
    });
   
    return hiAssistanceEvent;
}

function loPercentage(events) {
    const loAssistenceEvent = events.reduce((eventoMenor, eventoActual) => {
        const porcentajeActual = (eventoActual.assistance / eventoActual.capacity) * 100;
        const porcentajeMenor = (eventoMenor.assistance / eventoMenor.capacity) * 100;
        
        if (porcentajeActual < porcentajeMenor) {
            return eventoActual;
        } else {
            return eventoMenor;
        }
    });
    //console.log(eventoMenorAsistencia);
    return loAssistenceEvent;
}

function eventStats(stat1, stat2, stat3) {
    let body = ``;
    body = ` 
        <tr>
            <td>${stat1.name} (${((stat1.assistance/stat1.capacity)*100).toFixed(2)}%)</td>
            <td>${stat2.name} (${((stat2.assistance/stat2.capacity)*100).toFixed(2)}%)</td>
            <td>${stat3.name} (${stat3.capacity})</td>
        </tr>
        `;
        eventStatis.innerHTML = body;
}

function getCategories(events) {
    let categories = [];
    events.forEach(event => {
        if (!categories.includes(event.category)){ 
            categories.push(event.category);
        }
    });
    return categories.sort();
}

function getEventsByCategory(category, events) {
    return events.filter(event => event.category.includes(category));
}

function getAttendanceByCategory(eventsByCategory){
    let attandeance = 0;
    eventsByCategory.forEach(event => { 
        attandeance += (event.assistance / event.capacity) * 100;
    });
    attandeance = (attandeance/eventsByCategory.length).toFixed(2);
    return attandeance;
}

function getPastRevenuesByCategory(eventsByCategory){
    let revenues = 0;
    eventsByCategory.forEach(event => { 
        revenues += (event.assistance * event.price);
    });
    revenues = Math.trunc(revenues);
    return revenues;
}

function getUpAttendanceByCategory(eventsByCategory){
    let attandeance = 0;
    eventsByCategory.forEach(event => { 
        attandeance += (event.estimate / event.capacity) * 100;
    });
    attandeance = (attandeance/eventsByCategory.length).toFixed(2);
    return attandeance;
}

function getUpRevenuesByCategory(eventsByCategory){
    let revenues = 0;
    eventsByCategory.forEach(event => { 
        revenues += (event.estimate * event.price);
    });
    revenues = Math.trunc(revenues);
    return revenues;
}

function upCategoriesStats(events) {
    let upEvents = events.filter(event => event.date > currentDate);
    let arrayCategories = getCategories(upEvents);
    let body = ``;
    arrayCategories.forEach(category => {
        let eventsByCategory = getEventsByCategory(category, upEvents);
        let upRevenuesByCategory = getUpRevenuesByCategory(eventsByCategory);
        let attendanceByCategory = getUpAttendanceByCategory(eventsByCategory);
        body += ` 
            <tr>
                <td>${category}</td>
                <td class="stats">$${upRevenuesByCategory}</td>
                <td class="stats">${attendanceByCategory}%</td>
            </tr>
        `;
      })
      catUpStats.innerHTML = body;
}


function pastCategoriesStats(events) {
    let pastEvents = events.filter(event => event.date < currentDate);
    let arrayCategories = getCategories(pastEvents);
    let body = ``;
    arrayCategories.forEach(category => {
        let eventsByCategory = getEventsByCategory(category, pastEvents);
        let pastRevenuesByCategory = getPastRevenuesByCategory(eventsByCategory);
        let attendanceByCategory = getAttendanceByCategory(eventsByCategory);
        body += ` 
            <tr>
                <td>${category}</td>
                <td class="stats">$${pastRevenuesByCategory}</td>
                <td class="stats">${attendanceByCategory}%</td>
            </tr>
        `;
      })
      catPastStats.innerHTML = body;
}

