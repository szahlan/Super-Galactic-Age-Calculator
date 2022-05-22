import Person from './../src/person.js'

describe('Person', () => {

  let reusablePerson;

  beforeEach(() => {
    reusablePerson = new Person(40, 80);
  });

  test('It should create a person constructor that includes age and avergae life expectancy', () =>{ 
    expect(reusablePerson.age).toEqual(40);
    expect(reusablePerson.avgLifeExpectancy).toEqual(80);
  });

  test('It should create a function that calculates the persons age in Mercury years', () =>{ 
    expect(reusablePerson.mercuryAge()).toEqual("166.7");
  });

  test('It should create a function that calculates the persons age in Venus years', () =>{ 
    expect(reusablePerson.venusAge()).toEqual("64.5");
  });

  test('It should create a function that calculates the persons age in Mars years', () =>{ 
    expect(reusablePerson.marsAge()).toEqual("21.3");
  });

  test('It should create a function that calculates the persons age in Jupiter years', () =>{ 
    expect(reusablePerson.jupiterAge()).toEqual("3.4");
  });

  test('It should calculate the number of years the person has left on mercury', () =>{ 
    expect(reusablePerson.remainingMercuryYears()).toEqual("166.7");
  });

  test('It should calculate the number of years the person has left on Venus', () =>{ 
    expect(reusablePerson.remainingVenusYears()).toEqual("64.5");
  });

  test('It should calculate the number of years the person has left on Mars', () =>{ 
    expect(reusablePerson.remainingMarsYears()).toEqual("21.3");
  });

  test('It should calculate the number of years the person has left on Jupiter', () =>{ 
    expect(reusablePerson.remainingJupiterYears()).toEqual("3.4");
  });

  test('It should calculate the number of years the person has lived past their life expectancy on Mercury', () =>{ 
    const person = new Person(84, 80);
    expect(person.remainingMercuryYears()).toEqual("16.7");
  });

  test('It should calculate the number of years the person has lived past their life expectancy on Venus', () =>{ 
    const person = new Person(86, 80);
    expect(person.remainingVenusYears()).toEqual("9.7");
  });

  test('It should calculate the number of years the person has lived past their life expectancy on Mars', () =>{ 
    const person = new Person(88, 80);
    expect(person.remainingMarsYears()).toEqual("4.3");
  });

  test('It should calculate the number of years the person has lived past their life expectancy on Jupiter', () =>{ 
    const person = new Person(90, 80);
    expect(person.remainingJupiterYears()).toEqual("0.8");
  });
});
