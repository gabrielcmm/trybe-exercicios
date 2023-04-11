// arquivo script.js
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

const paiOndeVoceEsta = elementoOndeVoceEsta.parentElement;
console.log(paiOndeVoceEsta);

let irmaoOndeVoceEsta = document.createElement("section");
irmaoOndeVoceEsta.innerHTML = "Irmão Onde Você está!";
paiOndeVoceEsta.appendChild(irmaoOndeVoceEsta);
console.log(irmaoOndeVoceEsta);

let filhoOndeVoceEsta = document.createElement("section");
filhoOndeVoceEsta.innerText = "Filho onde você está";
elementoOndeVoceEsta.appendChild(filhoOndeVoceEsta);

const primeiroNeto = elementoOndeVoceEsta.firstElementChild;

let primeiroBisneto = document.createElement("section");
primeiroBisneto.innerText = "Primeiro Bisneto";
primeiroBisneto.className = "elementoBisneto";
primeiroBisneto.id = "idDoBisneto";
primeiroNeto.appendChild(primeiroBisneto);

console.log(
  document.getElementsByClassName("elementoBisneto")[0].parentElement
    .parentElement.nextElementSibling
);
