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
});
