class Employee {
    name;
    salary;
    position;
    department;
    email;
    age;
    constructor(name, salary, position, department, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
    // Format the employee details for output
    formatDetails() {
        return `${this.name} ${this.salary.toFixed(2)} ${this.email || "n/a"} ${this.age || -1}`;
    }
}
class Department {
    name;
    employees;
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    // Calculate the average salary of the department
    averageSalary() {
        if (this.employees.length === 0) {
            return 0;
        }
        const totalSalary = this.employees.reduce((sum, emp) => sum + emp.salary, 0);
        return totalSalary / this.employees.length;
    }
    // Sort employees by salary in descending order
    sortEmployeesBySalary() {
        this.employees.sort((a, b) => b.salary - a.salary);
    }
    // Print employees in the department
    printEmployees() {
        this.sortEmployeesBySalary();
        console.log(`Highest Average Salary: ${this.name}`);
        this.employees.forEach((emp) => console.log(emp.formatDetails()));
    }
}
// Main program
function companyRoster(input) {
    const departments = {};
    const countEmployees = Number(input[0]);
    for (let i = 1; i <= countEmployees; i++) {
        const [name, salaryStr, position, department, email, ageStr] = input[i].split(" ");
        const salary = Number(salaryStr);
        const age = Number(ageStr) || undefined;
        const employee = new Employee(name, salary, position, department, email || undefined, age);
        if (!departments[department]) {
            departments[department] = new Department(department);
        }
        departments[department].addEmployee(employee);
    }
    let highestAvgDepartment = null;
    let highestAvgSalary = 0;
    for (let deptName in departments) {
        const avgSalary = departments[deptName].averageSalary();
        if (avgSalary > highestAvgSalary) {
            highestAvgSalary = avgSalary;
            highestAvgDepartment = departments[deptName];
        }
    }
    if (highestAvgDepartment) {
        highestAvgDepartment.printEmployees();
    }
}
// Test the program with example inputs
const input1 = [
    "4",
    "Peter 120.00 Dev Development peter@abv.bg 28",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development sam@sam.com",
    "George 0.20 Freeloader Nowhere 18",
];
const input2 = [
    "6",
    "Silver 496.37 Temp Coding silver@yahoo.com",
    "Sam 610.13 Manager Sales",
    "John 609.99 Manager Sales john@abv.bg 44",
    "Venci 0.02 Director BeerDrinking beer@beer.br 23",
    "Andre 700.00 Director Coding",
    "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey",
];
companyRoster(input1);
console.log();
companyRoster(input2);
