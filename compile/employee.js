"use strict";
function createEmployee(config) {
    var newEmployee = { name: "John Wick", id: 0, age: 100, tsalary: 15000000 };
    if (config.fname && config.lname) {
        newEmployee.name = config.fname + " " + config.lname;
    }
    if (config.id) {
        newEmployee.id = config.id;
    }
    if (config.age) {
        newEmployee.age = config.age;
    }
    if (config.salary && config.bonus) {
        if (config.bonus = true) {
            newEmployee.tsalary = config.salary * 2.5;
        }
        else {
            newEmployee.tsalary = config.salary;
        }
    }
    return newEmployee;
}
var emp = createEmployee({ fname: "Phumipat", lname: "Thirawat", id: 666, age: 19, salary: 1000, bonus: true });
console.log('Employee', emp);
