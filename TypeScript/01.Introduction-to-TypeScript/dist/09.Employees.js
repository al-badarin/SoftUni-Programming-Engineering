function createEmployeeList(employees) {
    for (let employee of employees) {
        const personalNum = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${personalNum}`);
    }
}
// Test the function
createEmployeeList([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
createEmployeeList([
    "Samuel Jackson",
    "Will Smith",
    "Bruce Willis",
    "Tom Holland",
]);
