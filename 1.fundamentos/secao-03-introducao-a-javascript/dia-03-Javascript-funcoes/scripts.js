let clientesTrybeBank = ["Ada", "John", "Gus"];

function clientExists(nome) {
  for (const cliente of clientesTrybeBank) {
    if (cliente === nome) {
      return true;
    } else {
      return false;
    }
  }
}

function clienteIsValid(cliente) {
  if (typeof cliente === "string") {
    return true;
  } else {
    return false;
  }
}

function removeCliente(cliente) {
  if (clienteIsValid) {
    if (clientExists(cliente)) {
      const indexCliente = clientesTrybeBank.indexOf(cliente);
      clientesTrybeBank.splice(indexCliente, 1);
      return `Cliente ${cliente} removido com sucesso!`;
    } else {
      return `Cliente ${cliente} não existe no sistema!`;
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}
let nome = true;
console.log(removeCliente(nome));
