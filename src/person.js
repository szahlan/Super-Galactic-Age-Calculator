export default class Person {
  constructor(age, avgLifeExpectancy) {
    this.age = age;
    this.avgLifeExpectancy = avgLifeExpectancy;
  }

  mercuryAge() {
    const mercuryAge = this.age/.24;
    return mercuryAge.toFixed(1);
  }

  venusAge() {
    
  }
}