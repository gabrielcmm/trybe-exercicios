let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function orderUp(array) {
  for (let index = 0; index < array.length; index++) {
    for (let indexJ = 0; indexJ < array.length; indexJ++) {
      if (array[index] < array[indexJ]) {
        const holder = array[index];
        array[index] = array[indexJ];
        array[indexJ] = holder;
      }
    }
  }
  return array;
}

function orderDown(array) {
  for (let index = 0; index < array.length; index++) {
    for (let indexJ = 0; indexJ < array.length; indexJ++) {
      if (array[index] > array[indexJ]) {
        const holder = array[index];
        array[index] = array[indexJ];
        array[indexJ] = holder;
      }
    }
  }
  return array;
}

// console.log(orderUp(numbers));
// console.log(orderDown(numbers));

function multiplyByNext(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index + 1] !== undefined) {
      array[index] = array[index] * array[index + 1];
    } else {
      array[index] *= 2;
    }
  }
  return array;
}
// console.log(multiplyByNext(numbers));

function printSquare(number) {
  let linePrint = "";
  for (let index = 1; index <= number; index++) {
    linePrint = linePrint + "*";
  }

  for (let index = 1; index <= number; index++) {
    console.log(linePrint);
  }
}

printSquare(5);
console.log("");

function printTriangle(number) {
  let linePrint = "";
  for (let index = 0; index < number; index++) {
    for (let indexLine = 0; indexLine <= index; indexLine++) {
      linePrint = linePrint + "*";
    }
    console.log(linePrint);
    linePrint = "";
  }
}

printTriangle(5);
console.log("");

function printInverseTriangle(number) {
  let linePrint = "";
  let lineCount = 0;
  let baseNumber = number;
  for (let index = 1; index <= number; index++) {
    while (lineCount < number - 1) {
      linePrint = linePrint + " ";
      lineCount++;
    }
    linePrint = linePrint + "*";
    console.log(linePrint);
    linePrint = "";
    lineCount = index;
  }
}

printInverseTriangle(5);
