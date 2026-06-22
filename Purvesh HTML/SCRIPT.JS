let studentCount = 0;

function checkResult(marks) {
    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function showStudent(name, marks, result) {
    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML += `
        <div class="student">
            <h3>${name}</h3>
            <p>Marks: ${marks}</p>
            <p>Result: ${result}</p>
        </div>
    `;
}

let students = [
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 35 },
    { name: "Amit", marks: 60 },
    { name: "Dhiraj", marks: 69}
];

for (let i = 0; i < students.length; i++) {
    let result = checkResult(students[i].marks);
    showStudent(students[i].name, students[i].marks, result);
}