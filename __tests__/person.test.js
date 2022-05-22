import Person from './../src/person.js'

describe('Person', () => {

  test('create a person constructor that includes age and avergae life expectancy', () =>{ 
    const person = new Person(40, 80);
    expect(person.age).toEqual(40);
    expect(person.avgLifeExpectancy).toEqual(80);
  });
});
