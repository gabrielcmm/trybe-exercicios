const header = document.querySelector("#header-container");
const emergency = document.querySelector(".emergency-tasks");
const notEmergency = document.querySelector(".no-emergency-tasks");
const emergencyH3 = document.querySelectorAll(".emergency-tasks div h3");
const notEmergencyH3 = document.querySelectorAll(".no-emergency-tasks div h3");
const footer = document.querySelector("#footer-container");
header.style.backgroundColor = "green";

emergency.style.backgroundColor = "salmon";

emergencyH3[0].style.backgroundColor = "purple";
emergencyH3[1].style.backgroundColor = "purple";

notEmergency.style.backgroundColor = "yellow";

notEmergencyH3[0].style.backgroundColor = "black";
notEmergencyH3[1].style.backgroundColor = "black";

footer.style.backgroundColor = "green";
