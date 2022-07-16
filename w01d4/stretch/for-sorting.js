const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 },
];

const getAge = function() {
  let ageArr = [];
  for (const item of students) {
    ageArr.push(item["age"]);
  }
  return ageArr.sort((a, b) => a - b);
};

console.log(getAge(students));
