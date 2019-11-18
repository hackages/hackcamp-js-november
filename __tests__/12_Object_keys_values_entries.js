// How would you have done without the function Object.keys, Object.values and Object.entries?

describe('Object keys, values, entries', () => {
  function getUserInfo() {
    return {
      name: 'Davy Engone',
      company: 'Hackages',
      country: 'Everywhere',
    };
  }

  describe('Object keys', () => {
    const user = getUserInfo();
    const result = ['name', 'company', 'country'];
    it('Before', () => {
      let response = [];

      expect(reponse).toEqual(result);
    });

    it('Now use Object keys', () => {
      const reponse = [];
      expect(reponse).toEqual(result);
    });
  });

  describe('Object values', () => {
    const user = getUserInfo();
    const result = ['Davy Engone', 'Hackages', 'Everywhere'];

    it('Before', () => {
      let response = [];

      expect(response).toEqual(result);
    });

    it('Now use Object values', () => {
      const response = [];
      expect(response).toEqual(result);
    });
  });

  describe('Object entries', () => {
    const user = getUserInfo();
    const result = [
      ['name', 'Davy Engone'],
      ['company', 'Hackages'],
      ['country', 'Everywhere'],
    ];

    it('Before', () => {
      let response = [];
      expect(response).toEqual(result);
    });

    it('Now use object entries', () => {
      const response = [];
      expect(response).toEqual(result);
    });
  });
});
