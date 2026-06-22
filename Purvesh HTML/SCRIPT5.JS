let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);

    if (name === "" || marks === "") {
        alert("Please enter all details");
        return;
    }

    let result = marks >= 40 ? "Pass" : "Fail";

    let student = {
        name: name,
        marks: marks,
        result: result
    };

    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function displayStudents() {

    let list = document.getElementById("studentList");
    list.innerHTML = "";

    let passCount = 0;
    let failCount = 0;

    students.forEach(function(student) {

        list.innerHTML += `
        <div class="student">
            <h3>${student.name}</h3>
            <p>Marks: ${student.marks}</p>
            <p class="${student.result.toLowerCase()}">
                Result: ${student.result}
            </p>
        </div>
        `;

        if (student.result === "Pass") {
            passCount++;
        } else {
            failCount++;
        }

    });

    document.getElementById("total").textContent = students.length;
    document.getElementById("pass").textContent = passCount;
    document.getElementById("fail").textContent = failCount;
}