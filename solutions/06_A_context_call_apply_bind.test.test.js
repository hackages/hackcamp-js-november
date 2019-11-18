describe('Context in JavaScript', () => {
  describe('Should use call & apply', () => {
    function upperCase() {
      return this.toUpperCase();
    }

    function toFixed(numberOfDecimals) {
      return this.toFixed(numberOfDecimals);
    }

    function concat(secondArray) {
      return this.concat(secondArray);
    }

    it('with call', () => {
      // TODO Modify the call below to satisfy all the assertions below.
      const actual = upperCase.call('juan');

      expect(actual).toEqual('JUAN');
    });

    it('with call and arguments', () => {
      const numberToUse = 5.56789;

      // TODO Modify the call below to satisfy all the assertions below.
      const actual = toFixed.call(numberToUse, 2);

      expect(actual).toEqual('5.57');
    });

    it('with apply and arguments', () => {
      // TODO Modify the code below to satisfy all the assertions below.
      const actual = concat.apply([1, 2], [[3, 4]]);

      expect(actual).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Should use bind', () => {
    it('increment the counter value', (done) => {
      const counter = {
        value: 0,
      };
      // TODO Modify the code below to satisfy all the assertions below.
      function increment() {
        this.value++;
        if (this.value === 10) {
          expect(this.value).toEqual(10);
          done();
        }
      }
      setInterval(increment.bind(counter), 30);
    });

    it('push a new user after 1s', (done) => {
      const hackcamp = {
        members: ['Davy'],
      };
      // TODO Modify the code below to satisfy all the assertions below.
      function addMembers() {
        this.members.push('Joker');
        expect(this.members.length).toEqual(2);
        done();
      }
      setTimeout(addMembers.bind(hackcamp), 1000);
    });
  });

  describe('What does "this" refer to ?', () => {
    function addMentor(mentor) {
      this.mentors.push(mentor);
      return this.mentors;
    }

    it('Should add new mentor ', () => {
      const company = {
        name: 'Hackages Lab',
        mentors: [],
        addMentor: addMentor,
      };
      addMentor.call(company, 'Alex');
      addMentor.call(company, 'Juan');

      expect(company.mentors).toEqual(['Alex', 'Juan']);
    });

    it('Should switch the context', () => {
      const hackcamp = {
        mentors: ['Eric', 'Martine'],
      };
      const davy = 'Joker';

      let actual = addMentor.call(hackcamp, davy);

      // TODO Modify the code above to satisfy all the assertions below.
      expect(actual).toEqual(['Eric', 'Martine', 'Joker']);

      const hackjam = {
        mentors: ['Davy', 'Bouba', 'Victor'],
      };

      actual = addMentor.call(hackjam, davy);

      // TODO Modify the code above to satisfy all the assertions below.
      expect(actual).toEqual(['Davy', 'Bouba', 'Victor', 'Joker']);
    });
  });

  describe('More about context', () => {
    it("with 'new' keywords ", () => {
      // TODO Modify the code below to satisfy all the assertions below.
      function User(args) {
        function init() {
          this.name = args.name;
        }
        init.call(this)
      }
      const actual = new User({ name: 'Hackages' });

      expect(actual).toEqual({ name: 'Hackages' });
    });

    it("without 'new' keywords ", () => {
      /**
       * TODO
       * Start from the solution you found above.
       * Modify the function to solve the assertion
       * Also, this time try not to use the 'new' keyword
       * and simply call the User function instead.
       * Ex: const user = User({ name: 'Hackages' })
       */
      function User(args) {
        let user = {}
        function init() {
          this.name = args.name;
        }
        init.call(user);
        return user;
      }

      const actual = User({ name: 'Hackages' })

      expect(actual).toEqual({ name: 'Hackages' });
    });
  });
});