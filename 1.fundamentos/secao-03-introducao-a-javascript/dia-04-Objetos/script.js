let order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  // Adicione abaixo as informações necessárias.
  //'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'
  console.log(
    `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, Endereço: ${order.address.street}, # ${order.address.number}, Apt: ${order.address.apartment}`
  );
}

customerInfo(order);

function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
  //'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'
  order.name = "Luiz Silva";
  order.payment.total = 50;
  let pedido = "";
  for (key in order.order.pizza) {
    pedido = pedido + key + ", ";
  }
  for (key in order.order.drinks) {
    pedido = pedido + order.order.drinks[key].type;
  }
  console.log(pedido);
  console.log(
    `Olá ${order.name}, o valor total do seu pedido de ${pedido} é ${order.payment.total}`
  );
}

orderModifier(order);
