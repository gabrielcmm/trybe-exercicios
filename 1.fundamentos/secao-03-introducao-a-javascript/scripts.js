let rating = 61;
if (rating >= 80 && rating <= 100) {
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (rating < 80 && rating >= 60) {
  console.log("Você está na lista de espera!");
} else if (rating < 60 && rating >= 1) {
  console.log("Infelizmente você foi reprovado!");
} else {
  console.log("Informação inválida");
}
