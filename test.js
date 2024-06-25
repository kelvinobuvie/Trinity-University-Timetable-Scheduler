// get lecturers
const lecturersTable = document.getElementById('lecturers-table');
let tableData;



// get lecturers
window.addEventListener('DOMContentLoaded', function() {
    fetch('https://timetable-backend-system.vercel.app/api/lecturers', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA1ODA2LCJpYXQiOjE3MTkxNjAyMDYsImp0aSI6IjFlMmFlMDVjZjNiMTQ0YTc4NmEzNTc3NTM4MzU0Y2MwIiwidXNlcl9pZCI6NiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJkb2UiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.Sdk9Qn_8l4VDvSVAb_hDRRiwb8xxJnFa0zxBJ8glrus' // Add your authorization header
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        appendDataToTable(data);
        // console.log('Success:', data);
        // document.getElementById('responseData').textContent = JSON.stringify(data, null, 2);
        // Handle success - update UI, show a message, etc.
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseData').textContent = `Error: ${error}`;
        // Handle error - show an error message, etc.
    });
});


function appendDataToTable(data) {
    const lecturersTable = document.getElementById('lecturers-table').querySelector('tbody');
    lecturersTable.innerHTML = ''; // Clear previous data

    data.forEach((lecturer, index) => {
        const row = document.createElement('tr');

        const cellId = document.createElement('td');
        cellId.textContent = index + 1;
        row.appendChild(cellId);

        const firstName = document.createElement('td');
        firstName.textContent = lecturer.first_name;
        row.appendChild(firstName);

        const lastName = document.createElement('td');
        lastName.textContent = lecturer.last_name;
        row.appendChild(lastName);

        const userType = document.createElement('td');
        userType.textContent = lecturer.user_type;
        row.appendChild(userType);



        lecturersTable.appendChild(row);
    });
}