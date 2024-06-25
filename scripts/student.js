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

