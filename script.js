const BASEURL = "https://timetable-backend-system.vercel.app/";
// login
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginLoader = document.getElementById("login_loader");

  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      // Show loader
      loginLoader.style.display = "block";

      // Get form values
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      console.log({ username, password });

      try {
        // Send login request to the server
        const response = await fetch(
          "https://timetable-backend-system.vercel.app/api/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              SpecialId: username,
              password,
            }),
          }
        );
        // if (!response.ok) {
        //       throw new Error(`HTTP error! status: ${response.status}`);
        //   }

        const data = await response.json();
        const token = data.access;

        // Decode JWT to get user role
        const userInfo = jwt_decode(
          token
        );
        console.log({ userInfo })
        const userRole = userInfo.user_type;

        // Save token to localStorage (optional)
        localStorage.setItem("token", token);

        // Redirect based on user role
        redirectToDashboard(userRole);
      } catch (error) {
        console.error("Error:", error);
        // Handle error (e.g., show error message)
        alert("Login failed. Please check your credentials.");
      } finally {
        // Hide loader
        loginLoader.style.display = "none";
      }
    });
  } else {
    console.error("Login form not found");
  }
});

// Function to redirect user based on role
function redirectToDashboard(role) {
  switch (role) {
    case "admin":
      window.location.href = "/pages/admin.html";
      break;
    case "lecturer":
      window.location.href = "/pages/lecturer.html";
      break;
    case "student":
      window.location.href = "/pages/student.html";
      break;
    default:
      console.error("Unknown user role:", role);
      alert("Unknown user role. Contact support.");
  }
}

// script to show forms
function showForm(formId) {
  // Hide all forms
  var forms = document.querySelectorAll(".form-container");
  forms.forEach(function (form) {
    form.classList.remove("active");
  });

  // Show the selected form
  var selectedForm = document.getElementById(formId);
  selectedForm.classList.add("active");
}

// script for Exam timetable and form
// document
//   .getElementById("exam-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

// Get form values
// const courseCode = document.getElementById("exam-course-code").value;
// const date = document.getElementById("exam-date").value;
// const fromTime = document.getElementById("exam-start-time").value;
// const toTime = document.getElementById("exam-end-time").value;
// const location = document.getElementById("exam-room").value;

// Create a new row for the timetable
// const tableBody = document.querySelector("#timetable tbody");
// const newRow = document.createElement("tr");

// newRow.innerHTML = `
//         <td>${date}</td>
//         <td>${fromTime} - ${toTime}</td>
//         <td>${courseCode}</td>
//         <td>${location}</td>
//     `;

// tableBody.appendChild(newRow);

// Reset form
//   event.target.reset();
// });

// script for Lecture timetable
// document
//   .getElementById("lectureForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

// Get form values
// const courseCode1 = document.getElementById("coursecode1").value;
// const dayOfWeek1 = document.getElementById("dayOfWeek1").value;
// const fromTime1 = document.getElementById("fromTime1").value;
// const toTime1 = document.getElementById("toTime1").value;
// const location1 = document.getElementById("location1").value;

// Create an event element
// const eventDiv = document.createElement("div");
// eventDiv.classList.add("event");
// eventDiv.innerHTML = `<strong>${courseCode1}</strong><br>${fromTime1} - ${toTime1}<br>${location1}`;

// Find the correct cell based on the day of the week
// const cell = findOrCreateCell(dayOfWeek1);
// cell.appendChild(eventDiv);

// Reset form
//     event.target.reset();
//   });

// function findOrCreateCell(dayOfWeek1) {
//   const tbody = document.querySelector("#timetable1 tbody");
//   let row = tbody.querySelector(`tr`);

//   if (!row) {
//     row = document.createElement("tr");
//     for (let i = 0; i < 5; i++) {
//       const cell = document.createElement("td");
//       row.appendChild(cell);
//     }
//     tbody.appendChild(row);
//   }

//   return row.cells[dayOfWeek1];
// }
