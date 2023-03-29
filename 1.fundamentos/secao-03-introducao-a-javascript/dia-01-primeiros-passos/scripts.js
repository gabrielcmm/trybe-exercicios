let bruto = 3000;
let valorInss;
let valorIr;
let liquido;

const inss1 = bruto <= 1556.94; //8
const inss2 = bruto > 1556.94 && bruto <= 2594.92; //9
const inss3 = bruto > 2594.92 && bruto <= 5189.82; //11
const inss4 = bruto > 5189.82; //570,88

if (inss1) {
  liquido = bruto * (1 - 0.08);
} else if (inss2) {
  liquido = bruto * (1 - 0.09);
} else if (inss3) {
  liquido = bruto * (1 - 0.11);
} else if (inss4) {
  valorInss = 570.88;
  liquido = bruto - valorInss;
}

const ir1 = liquido <= 1903.98; // 0
const ir2 = liquido > 1903.98 && liquido <= 2826.65; //142,5 + 7.5%
const ir3 = liquido > 2826.65 && liquido <= 3751.05; //354,8 + 15%
const ir4 = liquido > 3751.05 && liquido <= 4664.68; //636,16 + 22,5%
const ir5 = liquido > 4664.68; //869,36 + 27,5

if (ir1) {
  liquido = liquido;
} else if (ir2) {
  liquido = liquido - (liquido * 0.075 - 142.5);
} else if (ir3) {
  liquido = liquido - (liquido * 0.15 - 354.8);
} else if (ir4) {
  liquido = liquido - (liquido * 0.225 - 636.16);
} else if (ir5) {
  liquido = liquido - (liquido * 0.275 - 869.36);
}

console.log(`Valor Salário Bruto: ${bruto}`);
console.log(`Valor Salário Liquido: ${liquido}`);
