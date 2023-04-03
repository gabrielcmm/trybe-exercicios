let student1 = {
  html: "Muito Bom",
  css: "Bom",
  javascript: "Ótimo",
  softskills: "Ótimo",
};

let student2 = {
  html: "Bom",
  css: "Ótimo",
  javascript: "Ruim",
  softskills: "Ótimo",
  git: "Bom", // chave adicionada
};

function listSkills(student) {
  let arrayOfSkills = Object.keys(student);
  for (const key in arrayOfSkills) {
    console.log(`${arrayOfSkills[key]}, Nível ${student[arrayOfSkills[key]]}`);
  }
}

listSkills(student1);
