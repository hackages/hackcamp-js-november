describe('typeof...', () => {
  it('object, number, boolean, string, function...', () => {
    expect(typeof {}).toEqual('object');
    expect(typeof []).toEqual('object');
    expect(typeof 'hackages').toEqual('string');
    expect(typeof 'H').toEqual('string');
    expect(typeof -5).toEqual('number');
    expect(typeof 0.1).toEqual('number');
    expect(typeof false).toEqual('boolean');
    expect(typeof NaN).toEqual('number');
    expect(typeof undefined).toEqual('undefined');
    expect(typeof null).toEqual('object');
    expect(typeof Symbol(12)).toEqual('symbol');
    expect(typeof function() {}).toEqual('function');
  });
});
