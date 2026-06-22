const form = document.getElementById("employeeForm");

const employeeList = document.getElementById("employeeList");

const message = document.getElementById("message");

const total = document.getElementById("total");

const average = document.getElementById("average");

const highest = document.getElementById("highest");

let employees = [];

form.addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();

let email = document.getElementById("email").value.trim();

let department = document.getElementById("department").value.trim();

let salary = Number(document.getElementById("salary").value);

if(name===""){

message.textContent="Name cannot be empty";
return;

}

if(email===""){

message.textContent="Email cannot be empty";
return;

}

if(salary<=0){

message.textContent="Salary must be greater than 0";
return;

}

message.textContent="";

let employee={

name:name,
email:email,
department:department,
salary:salary

};

employees.push(employee);

displayEmployees();

form.reset();

});

function displayEmployees(){

employeeList.innerHTML="";

employees.forEach(function(emp,index){

employeeList.innerHTML+=`

<div class="employee">

<h3>${emp.name}</h3>

<p>Email : ${emp.email}</p>

<p>Department : ${emp.department}</p>

<p>Salary : ₹${emp.salary}</p>

<button class="deleteBtn"
onclick="deleteEmployee(${index})">

Delete

</button>

</div>

`;

});

updateStatistics();

}

function updateStatistics(){

total.textContent=employees.length;

if(employees.length===0){

average.textContent=0;
highest.textContent=0;

return;

}

let sum=0;

let max=0;

employees.forEach(function(emp){

sum+=emp.salary;

if(emp.salary>max){

max=emp.salary;

}

});

average.textContent=(sum/employees.length).toFixed(2);

highest.textContent=max;

}

function deleteEmployee(index){

employees.splice(index,1);

displayEmployees();

}