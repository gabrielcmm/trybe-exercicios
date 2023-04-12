const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//CSS Class Tech

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
const addTechCSS = (element) => {
  const liWithTech = document.querySelector(".tech");
  liWithTech.classList.remove("tech");
  element.target.classList.add("tech");
};

firstLi.addEventListener("click", addTechCSS);
secondLi.addEventListener("click", addTechCSS);
thirdLi.addEventListener("click", addTechCSS);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

const addTechCssInput = (element) => {
  const elementWithTech = document.querySelector(".tech");
  console.log(elementWithTech);
  elementWithTech.innerText = element.target.value;
};

input.addEventListener("input", addTechCssInput);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

const redirectURL = () => {
  window.open("https://www.google.com");
};

myWebpage.addEventListener("dblclick", redirectURL);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

const hoverChangeColor = (element) => {
  console.log("hovering");
  element.target.classList.toggle("colorGreen");
};

myWebpage.addEventListener("mouseover", hoverChangeColor);
myWebpage.addEventListener("mouseleave", hoverChangeColor);
// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.value = "";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
};

input.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.
