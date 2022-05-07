const Employee = require('../lib/Employee');

test('createsObject', function(){
    const employee = new Employee("Joe Bob", 23, "nmorihisa@gmail.com");
    expect(typeof(employee)).toBe("object")
})

test('canSetName', function(){
    const employee = new Employee("Joe Bob", 23, "nmorihisa@gmail.com");
    expect(employee.name).toBe("Joe Bob")
})

test('canGetName', function(){
    const employee = new Employee("Joe Bob", 23, "nmorihisa@gmail.com");
    expect(employee.getName()).toBe("Joe Bob")
})