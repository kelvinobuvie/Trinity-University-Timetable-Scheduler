const BASEURL = "https://timetable-backend-system.vercel.app/";

// add new course form vars
const courseCodeId = document.getElementById("course-code-input");
const courseCodeTitle = document.getElementById("course-title-input");
const courseUnit = document.getElementById("course-unit-input");
const studentsNumber = document.getElementById("students-no-input");
const lecturer = document.getElementById("lecturer-input");
const addCourseBtn = document.getElementById("add-course-btn");
const addCourseForm = document.querySelector(".add-course-form");
let courseObj;

// add lecture room vars
const lectureRoom = document.getElementById("lecture-room-name");
const lectureRoomForm = document.getElementById("add-lecture-room-form");

// add new lecturer vars
const addNewLecturerForm = document.getElementById("add-new-lecturer-form");
const lecturerFirstName = document.getElementById("lecturer-firstname");
const lecturerLastName = document.getElementById("lecturer-lastname");
const lecturerUsername = document.getElementById("lecturer-username");
const lecturerTitle = document.getElementById("lecturer-title");
const lecturerPhone = document.getElementById("lecturer-phone-number");
const lecturerFaculty = document.getElementById("lecturer-faculty");
const lecturerDept = document.getElementById("lecturer-dept");
const addLecturerBtn = document.getElementById("add-new-lecturer-btn");

// add lecture timetable vars
const addNewLectureTt = document.getElementById("lecture-form");
const lectureDate = document.getElementById("lecture-day-of-week");
const lectureStartTime = document.getElementById("lecture-start-time");
const lectureEndTime = document.getElementById("lecture-end-time");
const lectureCourse = document.getElementById("lecture-code");
const lecturerRoom = document.getElementById("lecture-room");
const addLectureTtBtn = document.getElementById("add-lecture-tt-btn");

// add exam timetable vars
const addNewExamTt = document.getElementById("exam-form");
const examDate = document.getElementById("exam-date");
const examStartTime = document.getElementById("exam-start-time");
const examEndTime = document.getElementById("exam-end-time");
const examCourseCode = document.getElementById("exam-course-code");
const examRoom = document.getElementById("exam-room");
const addExamTtBtn = document.getElementById("add-exam-tt-btn");

// add course event
addCourseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //console.log('strartt')
  // Prevent the default form submission
  //const formData = new FormData(this);
  //courseObj.title = courseCodeTitle.value;
  //cours

  fetch("https://timetable-backend-system.vercel.app/api/Courses/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus", // Add your authorization header
    },
    body: JSON.stringify({
      title: courseCodeTitle.value,
      code: courseCodeId.value,
      students_number: parseInt(studentsNumber.value),
      unit: parseInt(courseUnit.value),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("course added successfully");
      // Handle success - update UI, show a message, etc.
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error - show an error message, etc.
      alert("failed to add course");
    });
});

// add lecture event
lectureRoomForm.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("https://timetable-backend-system.vercel.app/api/LectureRooms/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus", // Add your authorization header
    },
    body: JSON.stringify({
      lecture_room: lectureRoom.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("lecture room added successfully");
      // Handle success - update UI, show a message, etc.
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error - show an error message, etc.
      alert("failed to add lecture room");
    });
});

// add new lecturer form event
addNewLecturerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("https://timetable-backend-system.vercel.app/api/create-lecturer/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus", // Add your authorization header
    },
    body: JSON.stringify({
      first_name: lecturerFirstName.value,
      last_name: lecturerLastName.value,
      Teaching_faculty: lecturerFaculty.value,
      Teaching_department: lecturerDept.value,
      lecturer_phonenumber: lecturerPhone.value,
      lecturer_title: lecturerTitle.value,
      password: "Test1234#",
      SpecialId: lecturerUsername.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("lecturer created successfully");
      // Handle success - update UI, show a message, etc.
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error - show an error message, etc.
      alert("failed to create new lecturer");
    });
});


// add exam timetable
addNewExamTt.addEventListener("submit", function (event) {
    event.preventDefault();
    
    fetch("https://timetable-backend-system.vercel.app/api/ExamAllocations/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus", // Add your authorization header
        },
        body: JSON.stringify({
            date: examDate.value,
            //    level: ,
            start_time: examStartTime.value,
            end_tIME: examEndTime.value,
            course: parseInt(examCourseCode.value),
            lecture_room: parseInt(examRoom.value),
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        alert("exam timetable created successfully");
        // Handle success - update UI, show a message, etc.
    })
    .catch((error) => {
        console.error("Error:", error);
        // Handle error - show an error message, etc.
        alert("failed to create exam timetable");
    });
});



// add lecture timetable event
addNewLectureTt.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("https://timetable-backend-system.vercel.app/api/createallocations/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus", // Add your authorization header
    },
    body: JSON.stringify({
    //   date: lectureDate.value,
      //    level: ,
      start_time: lectureStartTime.value,
      end_time: lectureEndTime.value,
      course: parseInt(lectureCourse.value),
      lecture_room: parseInt(lecturerRoom.value),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("lecture timetable created successfully");
      // Handle success - update UI, show a message, etc.
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error - show an error message, etc.
      alert("failed to create lecture timetable");
    });
});

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

//FETCH EXAM TIME TABLE FUNC
const examTimeTables = document.querySelectorAll("#exam-timetable-link");

examTimeTables.forEach(examTimeTable => {
  examTimeTable.addEventListener("click", function () {
    fetch("https://timetable-backend-system.vercel.app/api/ExamAllocations/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus", // Add your authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        appendDataToTable(data);
        // console.log('Success:', data);
        // document.getElementById('responseData').textContent = JSON.stringify(data, null, 2);
        // Handle success - update UI, show a message, etc.
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("responseData").textContent = `Error: ${error}`;
        // Handle error - show an error message, etc.
      });
  });
function appendDataToTable(data) {
  const examTimeTable = document
    .getElementById("exam-timetable")
    .querySelector("tbody");
  examTimeTable.innerHTML = ""; // Clear previous data

  data.forEach((exam, index) => {
    const row = document.createElement("tr");

    const date = document.createElement("td");
    date.textContent = exam.date;
    row.appendChild(date);

    // const level = document.createElement("td");
    // level.textContent = exam.level || "none";
    // row.appendChild(level);

    const startTime = document.createElement("td");
    startTime.textContent = exam.start_time;
    row.appendChild(startTime);

    const endTime = document.createElement("td");
    endTime.textContent = exam.end_tIME;
    row.appendChild(endTime);

    const course = document.createElement("td");
    course.textContent = exam.course;
    row.appendChild(course);

    const lectureRoom = document.createElement("td");
    lectureRoom.textContent = exam.lecture_room;
    row.appendChild(lectureRoom);

    examTimeTable.appendChild(row);
  });
}
})






// FETCH LECTURE TIME TABLE FUNC
const lectureTimeTables = document.querySelectorAll("#lecture-timetable-link");

lectureTimeTables.forEach(lectureTimeTable => {
  lectureTimeTable.addEventListener("click", function () {
    fetch("https://timetable-backend-system.vercel.app/api/allocations/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus", // Add your authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        appendLectureTimetableDataToTable(data);
        // console.log('Success:', data);
        // document.getElementById('responseData').textContent = JSON.stringify(data, null, 2);
        // Handle success - update UI, show a message, etc.
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("responseData").textContent = `Error: ${error}`;
        // Handle error - show an error message, etc.
      });
  });
})



function appendLectureTimetableDataToTable(data) {
  const lectureTimeTable = document
    .getElementById("timetable1")
    .querySelector("tbody");
  lectureTimeTable.innerHTML = ""; // Clear previous data

  data.forEach((lecture, index) => {
    const row = document.createElement("tr");

    const serialNo = document.createElement("td");
    serialNo.textContent = index + 1;
    row.appendChild(serialNo);

    const courseTitle = document.createElement("td");
    courseTitle.textContent = lecture.course.title;
    row.appendChild(courseTitle);

    const courseCode = document.createElement("td");
    courseCode.textContent = lecture.course.code;
    row.appendChild(courseCode);

    const startTime = document.createElement("td");
    startTime.textContent = lecture.start_time;
    row.appendChild(startTime);

    const endTime = document.createElement("td");
    endTime.textContent = lecture.end_time;
    row.appendChild(endTime);

    const lectureRoom = document.createElement("td");
    lectureRoom.textContent = lecture.lecture_room;
    row.appendChild(lectureRoom);

    lectureTimeTable.appendChild(row);
  });
}

// script for Exam timetable and form ---tracker ------ FETCH EXAMMMMM TIMETABLE
// document
// 	.getElementById('exam-form')
// 	.addEventListener('submit', function (event) {
// 		event.preventDefault();

// 		// Get form values
// 		const courseCode = document.getElementById('exam-course-code').value;
// 		const date = document.getElementById('exam-date').value;
// 		const fromTime = document.getElementById('exam-start-time').value;
// 		const toTime = document.getElementById('exam-end-time').value;
// 		const location = document.getElementById('exam-room').value;

// 		// Create a new row for the timetable
// 		const tableBody = document.querySelector('#timetable tbody');
// 		const newRow = document.createElement('tr');

// 		newRow.innerHTML = `
//               <td>${date}</td>
//               <td>${fromTime} - ${toTime}</td>
//               <td>${courseCode}</td>
//               <td>${location}</td>
//           `;

// 		tableBody.appendChild(newRow);

// 		// Reset form
// 		event.target.reset();
// 	});

// script for Lecture timetable   -----TRACKER ------ FETCH LECTURE
// document
// 	.getElementById('lecture-form')
// 	.addEventListener('submit', function (event) {
// 		event.preventDefault();

// 		// Get form values ---- tracker
// 		const courseCode1 = document.getElementById('lecture-code').value;
// 		const dayOfWeek1 = document.getElementById('lecture-day-of-week').value;
// 		const fromTime1 = document.getElementById('lecture-start-time').value;
// 		const toTime1 = document.getElementById('lecture-end-time').value;
// 		const location1 = document.getElementById('lecture-room').value;

// 		// Create an event element
// 		const eventDiv = document.createElement('div');
// 		eventDiv.classList.add('event');
// 		eventDiv.innerHTML = `<strong>${courseCode1}</strong><br>${fromTime1} - ${toTime1}<br>${location1}`;

// 		// Find the correct cell based on the day of the week
// 		const cell = findOrCreateCell(dayOfWeek1);
// 		cell.appendChild(eventDiv);

// 		// Reset form
// 		event.target.reset();
// 	});

// function findOrCreateCell(dayOfWeek1) {
// 	const tbody = document.querySelector('#timetable1 tbody');
// 	let row = tbody.querySelector(`tr`);

// 	if (!row) {
// 		row = document.createElement('tr');
// 		for (let i = 0; i < 5; i++) {
// 			const cell = document.createElement('td');
// 			row.appendChild(cell);
// 		}
// 		tbody.appendChild(row);
// 	}

// 	return row.cells[dayOfWeek1];
// }

//   tableData.forEach((tr) => {
//     table.append = `
//         <tr>
//             <td>${tr.data}</td>
//             <td>${tr.startTIme}</td>
//         </tr>
//     `
//   })
