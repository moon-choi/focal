const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

// Implement a function biggestFollower() which returns the name of the individual who follows the most people.
const biggestFollower = function (obj) {
  for (const key of obj) {
    key.num = key.follows.length;
  }
  console.log(key.num)
};

console.log(biggestFollower(data))

// Implement mostPopular() which returns the name of the most popular (most followed) individual.

// Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

// Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.
