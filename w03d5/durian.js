class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  //     craig
  //  [simon,    ali       , moon]
  //       [sarah, andrew]
  get totalEmployees() {
    //DEPTH FIRST TREE TRAVERSAL
    let totalEmployees = 0; // 1
    for (const subordinate of this.subordinates) {
      totalEmployees += subordinate.totalEmployees + 1;
      // 1st iteration: simon should be counted.
      // +1 is adding the person we are trying to loop over in the for loop.
    }
    return totalEmployees;
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {
    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }
    //a                  [a,b,c]
    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver =
        subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver); //merge two arrays ("employees" & "recursed employees")
    }
    return employees;
  }
}

const ada = new Employee("Ada", "CEO", 3000000.0);
const craig = new Employee("Craig", "VP Software", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const arvinder = new Employee("Arvinder", "VP Design", 1000000);
const simone = new Employee("Simone", "Senior", 500000);
const ali = new Employee("Ali", "Senior", 500000);
const florida = new Employee("Florida", "Senior", 500000);
const david = new Employee("David", "Senior", 500000);
const brian = new Employee("Brian", "Senior", 500000);
const karla = new Employee("Karla", "Senior", 500000);
const sarah = new Employee("Sarah", "Junior", 250000);
const andrew = new Employee("Andrew", "Junior", 250000);
const emma = new Employee("Emma", "Junior", 250000);
const jeremy = new Employee("Jeremy", "Junior", 250000);
const chandler = new Employee("Chandlder", "Junior", 250000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
craig.addSubordinate(simone);
craig.addSubordinate(ali);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);
ali.addSubordinate(sarah);
ali.addSubordinate(andrew);
david.addSubordinate(emma);
david.addSubordinate(jeremy);
karla.addSubordinate(chandler);

console.log("boss", craig.boss);
console.log("num of subs", craig.numberOfSubordinates);
let wealthyEmployees = ada.employeesThatMakeOver(418401);
console.log("wealthy", wealthyEmployees);

const adaTotalEmployees = ada.totalEmployees; // Returns the total number of employees in the entire company.

const craigTotalEmployees = craig.totalEmployees; // Returns the total number of employees working in software development.

console.log("adaTotalEmployee", adaTotalEmployees);
console.log("craigTotalEmployee", craigTotalEmployees);
