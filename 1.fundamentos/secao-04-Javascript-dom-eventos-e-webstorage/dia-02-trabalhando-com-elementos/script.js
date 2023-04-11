// arquivo script.js
const whereAreYou = document.getElementById("where-are-you");
const parent = document.getElementById("parent");

whereAreYou.parentElement.style.color = "red";
whereAreYou.firstElementChild.innerText = "First Child Of";

//First Child a partir de Where Are You
console.log(whereAreYou.parentNode.firstElementChild);
console.log(parent.firstElementChild);
console.log(whereAreYou.parentElement.parentElement.textContent);
