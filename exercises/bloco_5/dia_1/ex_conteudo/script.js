const container = document.getElementById("container");
container.style.backgroundColor = "gray";

const headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "green";

const emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "pink";

const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "yellow";

const urgent = document.querySelectorAll(".urgent");
urgent[0].style.backgroundColor = "purple";
urgent[1].style.backgroundColor = "purple";

const noUrgent = document.querySelectorAll(".no-urgent");
noUrgent[0].style.backgroundColor = "black";
noUrgent[1].style.backgroundColor = "black";
