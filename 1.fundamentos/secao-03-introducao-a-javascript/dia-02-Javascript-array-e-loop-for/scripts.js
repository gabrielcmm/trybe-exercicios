let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

console.log(tasksList.length);

tasksList.push("Fazer exercícios da Trybe");
console.log(tasksList[tasksList.length - 1]);

tasksList.unshift("Preparar o Café");
console.log(tasksList[0]);

tasksList.pop(tasksList.indexOf("Fazer exercícios da Trybe"));

console.log("");
tasksList.forEach((task) => {
  console.log(task);
});

tasksList.shift();

console.log("");
tasksList.forEach((task) => {
  console.log(task);
});
