// Select elements
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");

// Handle form submission
studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("studentName").value.trim();
  const age = document.getElementById("studentAge").value.trim();
  const studentClass = document.getElementById("studentClass").value.trim();

  // Validate inputs
  if (name === "" || age === "" || studentClass === "") {
    alert("Please fill in all fields");
    return;
  }

  // Add student to the table
  addStudentToTable(name, age, studentClass);

  // Reset form
  studentForm.reset();
});

// Add student to table
function addStudentToTable(name, age, studentClass) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${studentClass}</td>
    <td><button class="delete">Delete</button></td>
  `;

  // Add delete functionality
  row.querySelector(".delete").addEventListener("click", function () {
    row.remove();
  });

  studentTable.appendChild(row);
}
