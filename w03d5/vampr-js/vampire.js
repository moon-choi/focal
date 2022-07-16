class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;
    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    //DEPTH FIRST TREE TRAVERSAL
    let totalDescendents = 0;
    for (const descendent of this.offspring) {
      totalDescendents += descendent.totalDescendents + 1;
    }
    return totalDescendents;
  }
  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let mills = [];
    if (this.yearConverted > 1980) {
      mills.push(this);
    }
    for (const descendent of this.offspring) {
      const allMills = descendent.allMillennialVampires;
      mills = mills.concat(allMills);
    }
    return mills;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }
  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (
      this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal
    ) {
      return false; //not more senior
    }
    return true; //more senior
  }

  //JASON'S CODE - WORKING
  vampireWithName(name) {
    //checks to see if name matches
    if (this.name === name) {
      return this;
    }
    for (const child of this.offspring) {
      const vam = child.vampireWithName(name);
      //checks to see if child exists
      if (vam) {
        return vam;
      }
    }
    //if no names match
    return null;
  }
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // closestCommonAncestor(vampire) {}
}

module.exports = Vampire;

const original = new Vampire("Original", 1990);
const ansel = new Vampire("Ansel", 1991);
const bart = new Vampire("Bart", 1991);
const elgort = new Vampire("Elgort", 1992);
const sarah = new Vampire("Sarah", 1992);
const andrew = new Vampire("Andrew", 1993);

original.addOffspring(ansel);
original.addOffspring(bart);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);

// console.log("totalDescendents", original.totalDescendents);
// console.log("allMillennialVampires", original.allMillennialVampires);
console.log("hi", original.vampireWithName("Elgort"));
// console.log(original.offspring);
