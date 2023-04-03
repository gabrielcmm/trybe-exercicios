let student = {};

function addProperty(whichArray, whichProperty, whichValue) {
  whichArray[whichProperty] = whichValue;
}

addProperty(student, "firstName", "Gabriel");
addProperty(student, "lastName", "Martins");
addProperty(student, "phone", "(85) 95555-5555");
addProperty(student, "mail", "gabriel@trybestudent.com");

console.table(student);
