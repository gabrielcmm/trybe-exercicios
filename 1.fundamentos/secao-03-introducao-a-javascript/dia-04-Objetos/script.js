let lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

let lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

let lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function addProperty(whichLesson, whichProperty, whichValue) {
  whichLesson[whichProperty] = whichValue;
}

addProperty(lesson2, "turno", "noite");
//console.table(lesson2);

function listKeys(whichLesson) {
  return Object.keys(whichLesson);
}

//console.log(listKeys(lesson2));

function objectSize(whichLesson) {
  return Object.keys(whichLesson).length;
}
//console.log(objectSize(lesson2));

function listValues(whichLesson) {
  return Object.values(whichLesson);
}

// console.log(listValues(lesson2));

function listLessons(l1, l2, l3) {
  let allLessons = {};
  Object.assign(allLessons, {
    lesson1: l1,
    lesson2: l2,
    lesson3: l3,
  });

  return allLessons;
}

let allLessons = listLessons(lesson1, lesson2, lesson3);

function studentByLesson(lessons) {
  for (const key in lessons) {
    console.log(lessons.key.materia);
  }
}

console.log(studentByLesson(allLessons));
