'use script';

class Age {
  curYear = new Date().getFullYear();
  constructor(birthYear) {
    this.birthYear = birthYear;
  }
  calcBirthYear() {
    return this.curYear - this.birthYear;
  }
}

const nikos = new Age(1993);

console.log(nikos.calcBirthYear());
