// Simulated data
let opdQueue = [];
let admittedPatients = [];
let totalBeds = 10;
let availableBeds = 10;

// DOM Elements
const opdQueueList = document.getElementById("opdQueueList");
const admittedPatientsList = document.getElementById("admittedPatientsList");
const totalBedsElement = document.getElementById("totalBeds");
const availableBedsElement = document.getElementById("availableBeds");

// Add a patient to the OPD Queue
function addPatientToQueue() {
  const patientName = prompt("Enter patient's name:");
  if (patientName) {
    opdQueue.push(patientName);
    updateOPDQueue();
  }
}

// Update the OPD Queue display
function updateOPDQueue() {
  opdQueueList.innerHTML = "";
  opdQueue.forEach((patient, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = ${index + 1}. ${patient};
    opdQueueList.appendChild(listItem);
  });
}

// Admit a patient (move from OPD queue to admitted list if beds are available)
function admitPatient() {
  if (availableBeds > 0 && opdQueue.length > 0) {
    const patientName = opdQueue.shift();
    admittedPatients.push(patientName);
    availableBeds--;
    updateBeds();
    updateOPDQueue();
    updateAdmittedPatients();
  } else {
    alert("No available beds or no patients in the OPD queue.");
  }
}

// Update the bed availability display
function updateBeds() {
  availableBedsElement.textContent = availableBeds;
}

// Update the admitted patients display
function updateAdmittedPatients() {
  admittedPatientsList.innerHTML = "";
  admittedPatients.forEach((patient, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = ${index + 1}. ${patient};
    admittedPatientsList.appendChild(listItem);
  });
}

// Initial render of bed availability
updateBeds();