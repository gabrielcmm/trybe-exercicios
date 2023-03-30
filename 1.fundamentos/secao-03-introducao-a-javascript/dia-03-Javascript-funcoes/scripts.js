let clientesTrybeBank = ["Ada", "John", "Gus"];

function newClient(nome) {
  if (typeof nome === "string") {
    clientesTrybeBank.push(nome);
  } else {
    return "Nome inválido";
  }
}
newClient("Gabriel");
newClient("Júlia");
console.table(clientesTrybeBank);
removeClient("Gabriel");
console.table(clientesTrybeBank);

function removeClient(nome) {
  if (typeof nome === "string") {
    if (clientesTrybeBank.includes(nome)) {
      clientesTrybeBank.splice(clientesTrybeBank.indexOf(nome), 1);
      return `Remoção do Cliente: ${nome}`;
    }
  } else {
    return "Nome inválido";
  }
}
