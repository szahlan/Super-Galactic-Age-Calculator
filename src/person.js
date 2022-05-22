export default class Person {
  constructor(age, avgLifeExpectancy) {
    this.age = age;
    this.avgLifeExpectancy = avgLifeExpectancy;
  }

  mercuryAge() {
    const mercuryAge = this.age/0.24;
    return mercuryAge.toFixed(1);
  }

  venusAge() {
    const venusAge = this.age/0.62;
    return venusAge.toFixed(1);  
  }

  marsAge() {
    const marsAge = this.age/1.88;
    return marsAge.toFixed(1); 
  }

  jupiterAge() {
    const jupiterAge = this.age/11.86;
    return jupiterAge.toFixed(1);
  }

  remainingMercuryYears() {
    const remainingMercuryYears = (this.avgLifeExpectancy - this.age)/0.24;
    return remainingMercuryYears.toFixed(1);
  }
}

