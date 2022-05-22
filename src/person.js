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
    const venusAge = this.age/.62;
    return venusAge.toFixed(1);  
  }

  marsAge() {
    const marsAge = this.age/1.88;
    return marsAge.toFixed(1); 
  }
}