
//Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


 //TODO: Get user input to create and return an array of employee objects
    
    function collectEmployees() {
      const employees = []; 

      let addMoreEmployees = true;


      while (addMoreEmployees) {

      const firstName = prompt("Enter employee's first name:");
      if (firstName === null) {
          alert("First name input cancelled. Please enter a valid first name!");

          continue;

          }


      const lastName = prompt ("Enter employee's last name:");    
      if (lastName === null) {
          alert("Last name input cancelled. Please enter a valid last name!");

          continue;

          }


      let salaryInput = prompt ("Enter employee's salary:");
      if (salaryInput === null) {
        alert("Salary input cancelled. Please enter a valid salary!");

        continue;

      }
    

      let salary = parseFloat(salaryInput);    
      if (isNaN(salary)) {
        alert("Please enter a valid salary!");
        
        continue;
        
        }

      const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary

        };


      employees.push(employee);

      const continueAdding = confirm("Do you want to add another employee?");
      if (!continueAdding) {

      addMoreEmployees = false;

        }


      }    
      return employees; 
    
      }


    

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

    if(employeesArray.length === 0) {

    console.log("No employees to calculate average salary!");
    return;
    
    } 

    const totalSalary = employeesArray.reduce((acc, employee) => {
    return acc + employee.salary; 
    }, 0);

    const averageSalary = totalSalary / employeesArray.length; 
    console.log(`Average salary ${averageSalary}`);
    }


// Select a random employee
const getRandomEmployee = function(employeesArray) {

  // TODO: Select and display a random employee

  if(employeesArray.length === 0) {
      console.log("There's no random employees to select!");

    return;
    }


const randomIndex = Math.floor(Math.random() * employeesArray.length);
const randomEmployee = employeesArray[randomIndex];

    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`)

};


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
