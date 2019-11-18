// You have on each exercise a array variable and an expectedResult variable
// Your goal is to go from the array to the expectedResult using the right array method
// You have to fill the answer variable

describe('Array methods', () => {
  describe('Map', () => {
    it('Map to X', () => {
      const array = [
        {name: 'Jon'},
        {name: 'Bernard'},
        {name: 'Filip'},
      ]

      const expectedResult = ['Jon', 'Bernard', 'Filip']

      const answer = array.map(user => user.name) 

      expect(expectedResult).toEqual(answer);
    });
  });

  describe('Filter', () => {
    it('Remove values under 10', () => {
      const array = [
        11, 18, 7, 15
      ]

      const expectedResult = [11, 18, 15]

      const answer = array.filter(number => number >= 10) 

      expect(expectedResult).toEqual(answer);
    });

    it('Remove falsy values', () => {
      const array = [
        11, 18, 'hello', '', true, {}, undefined, []
      ]

      const expectedResult = [ 11, 18, 'hello', true, {}, []]

      const answer = array.filter(Boolean) 

      expect(expectedResult).toEqual(answer);
    });
  });

  describe('Reduce', () => {
    it('From array of string to number', () => {
      const array = [
        'Jon',
        'Victor',
        'Hackages'
      ]

      const expectedResult = 17

      const answer = array.reduce((acc, val) => acc + val.length, 0) 
      expect(expectedResult).toEqual(answer);
    });

    it('Flatten array of arrays on one level', () => {
      const array = [
        ['Jon'],
        ['Victor','Hackages']
      ]

      const expectedResult = [
        'Jon',
        'Victor',
        'Hackages'
      ]

      const answer = array.reduce((acc, val) => [...acc, ...val], []) 
      expect(expectedResult).toEqual(answer);
    });
  });

  describe('Join', () => {
    it('Array to string', () => {
      const array = [
        'Jon',
        'Victor',
        'Hackages'
      ]

      const expectedResult ='Jon-Victor-Hackages'

      const answer = array.join('-') 
      expect(expectedResult).toEqual(answer);
    });
  });

  describe('Find', () => {
    it('Find User in array of users', () => {
      const array = [
        {name: 'Jon'},
        {name: 'Bernard'},
        {name: 'Filip'},
      ]

      const expectedResult = {name: 'Bernard'}

      const answer = array.find(user => user.name === 'Bernard') 

      expect(expectedResult).toEqual(answer);
    });
  });

  describe('Some', () => {
    it('At least one of the user is over 18 years old', () => {
      const array = [
        {name: 'Jon', age: 10},
        {name: 'Bernard', age: 17},
        {name: 'Filip', age: 82},
      ]

      const expectedResult = true

      const answer = array.some(user => user.age >= 18) 

      expect(expectedResult).toEqual(answer);
    });
  });

  describe('Every', () => {
    it('Every user is over 18 years old', () => {
      const array = [
        {name: 'Jon', age: 10},
        {name: 'Bernard', age: 17},
        {name: 'Filip', age: 82},
      ]

      const expectedResult = false

      const answer = array.every(user => user.age >= 18) 
      expect(expectedResult).toEqual(answer);
    });
  });
});
