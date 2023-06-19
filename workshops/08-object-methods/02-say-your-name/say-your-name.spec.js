describe('me2', () => {

  it('is an object', () => {
    expect(typeof me2).toEqual('object');
  });

  describe('name', () => {

    it('is a property in me2', () => {
      expect('name' in me2).toEqual(true);
    });

    it('is a string', () => {
      expect(typeof me2.name).toEqual('string');
    });

  })

  describe('myGreeting', () => {

    it('is a method in me2', () => {
      expect('myGreeting' in me2).toEqual(true);
    });

    it('is a function', () => {
      expect(typeof me2.myGreeting).toEqual('function');
    });

    it('returns the correct greeting', () => {
      let friend = {
        name: 'Jeff'
      };

      let returnedValue = me2.myGreeting(friend);
      expect(returnedValue).toEqual(`Hi Jeff, my name is ${me2.name}.`);
    });

  })

});
