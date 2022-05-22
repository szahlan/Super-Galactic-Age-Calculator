import Person from './../src/person.js'

describe('Person', () => {

  let reusablePerson;

  beforeEach(() => {
    reusablePerson = new Person(40, 80);
  });

  test('create a person constructor that includes age and avergae life expectancy', () =>{ 
    expect(reusablePerson.age).toEqual(40);
    expect(reusablePerson.avgLifeExpectancy).toEqual(80);
  });

  test('create a function that calculates the persons age in Mercury years', () =>{ 
    expect(reusablePerson.mercuryAge).toEqual(166.7);
  });
});
