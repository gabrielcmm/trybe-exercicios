const studentRegister = (name, age) => {
  try {
    dataValid(name, age);
    hasAge(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!}`;
  } catch (error) {
    return error.message;
  }
};

const dataValid = (name, age) => {
  if (name === undefined || age === undefined) {
    throw new Error('Todas as informações são necessárias');
  }
};

const hasAge = (age) => {
  if (Number(age) < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
};

console.log(studentRegister('Gabriel', 17));
