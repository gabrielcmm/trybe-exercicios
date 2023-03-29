let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
for (const number of numbers) {
  console.log(number);
  sum = sum + number;
}
console.log(`A soma de todos os números do Array é: ${sum}`);
let mediaAritimetica = sum / numbers.length;
console.log(
  `A média é: ${mediaAritimetica}, tem um total de ${numbers.length} números na Array`
);
if (mediaAritimetica > 20) {
  console.log("A Média é MAIOR que 20");
} else {
  console.log("A Média é MENOR que 20");
}

let highestValue = 0;
for (const number of numbers) {
  if (number > highestValue) {
    highestValue = number;
  }
}
console.log(`O MAIOR número dentro da Array é ${highestValue}`);

let countOdd = 0;
for (const number of numbers) {
  if (number % 2 !== 0) {
    countOdd++;
  }
}
console.log(`Essa Array contém ${countOdd} números ÍMPARES`);

let lowestNumber = numbers[0];
for (const number of numbers) {
  if (number < lowestNumber) {
    lowestNumber = number;
  }
}
console.log(`O MENOR número dentro da Array é ${lowestNumber}`);

for (let index = 1; index <= 25; index++) {
  // console.log(index / 2);
}

let word = "Trybe";
let reverseWord = "";
for (let index = word.length - 1; index >= 0; index--) {
  reverseWord = reverseWord + word[index];
}
console.log(reverseWord);

let languages = ["java", "javascript", "python", "html", "css"];
let largerWord = languages[0];
let smallerWord = languages[0];

for (const language of languages) {
  if (language.length < smallerWord.length) {
    smallerWord = language;
  } else if (language.length > largerWord.length) {
    largerWord = language;
  }
}
console.log(`A Maior Palavra é: ${largerWord}`);
console.log(`A Menor Palavra é: ${smallerWord}`);

let fatorial = 5;
let sumFatorial = 1;
for (let index = fatorial; index > 1; index--) {
  sumFatorial = sumFatorial * index;
}
console.log(sumFatorial);
