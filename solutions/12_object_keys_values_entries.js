describe.skip('Object keys, values, entries', () => {
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
        for (let key in user) {
          response.push(key);
        }
  
        expect(response).toEqual(result);
      });
  
      it('Now use Object keys', () => {
        const response = Object.keys(user);
        expect(response).toEqual(result);
      });
    });
  
    describe('Object values', () => {
      const user = getUserInfo();
      const result = ['Davy Engone', 'Hackages', 'Everywhere'];
  
      it('Before', () => {
        let response = [];
        for (let key in user) {
          response.push(user[key]);
        }
  
        expect(response).toEqual(result);
      });
  
      it('Now use Object values', () => {
        const response = Object.values(user);
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
        for (let key in user) {
          response.push([key, user[key]]);
        }
        expect(response).toEqual(result);
      });
  
      it('Now use object entries', () => {
        const response = Object.entries(user);
        expect(response).toEqual(result);
      });
    });
  });