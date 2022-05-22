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
    let remainingMercuryYears;
    if (this.age > this.avgLifeExpectancy) {
      remainingMercuryYears = (this.age - this.avgLifeExpectancy)/0.24;
    } else {
      remainingMercuryYears = (this.avgLifeExpectancy - this.age)/0.24;
    }
    return remainingMercuryYears.toFixed(1);
  }

  remainingVenusYears() {
    let remainingVenusYears;
    if (this.age > this.avgLifeExpectancy) {
      remainingVenusYears = (this.age - this.avgLifeExpectancy)/0.62;
    } else {
      remainingVenusYears = (this.avgLifeExpectancy - this.age)/0.62;
    }
    return remainingVenusYears.toFixed(1);
  }

  remainingMarsYears() {
    let remainingMarsYears;
    if (this.age > this.avgLifeExpectancy) {
      remainingMarsYears = (this.age - this.avgLifeExpectancy)/1.88;
    } else {
      remainingMarsYears = (this.avgLifeExpectancy - this.age)/1.88;
    }
    return remainingMarsYears.toFixed(1);
  }

  remainingJupiterYears() {
    let remainingJupiterYears;
    if (this.age > this.avgLifeExpectancy) {
      remainingJupiterYears = (this.age - this.avgLifeExpectancy)/11.86;
    } else {
      remainingJupiterYears = (this.avgLifeExpectancy - this.age)/11.86;
    }
    return remainingJupiterYears.toFixed(1);
  }
}

