// Apuntando al DOM
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Variable con las citas

const quotes = [
  {
    person : 'Albert Einstein',
    quote: 'No poseo talentos especiales'
  },
  {
    person :'Anonimo 1',
    quote : 'Cita numero 1'
  },
  {
    person :'Anonimo 2',
    quote : 'Cita numero 2'
  },
  {
    person :'Anonimo 3',
    quote : 'Cita numero 3'
  },  {
    person :'Anonimo 4',
    quote : 'Cita numero 4'
  },
];

// Add event btn

btn.addEventListener('click', function(){
  // 
  let random = Math.floor(Math.random() * quotes.length);
  // Escribiendo el resultado en la pantalla.
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})