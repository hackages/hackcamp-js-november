describe('typeof...', () => {
  it('object, number, boolean, string, function...', () => {
    expect(typeof {}).toEqual(__);
    expect(typeof []).toEqual(__);
    expect(typeof 'hackages').toEqual(__);
    expect(typeof 'H').toEqual(__);
    expect(typeof -5).toEqual(__);
    expect(typeof 0.1).toEqual(__);
    expect(typeof false).toEqual(__);
    expect(typeof NaN).toEqual(__);
    expect(typeof undefined).toEqual(__);
    expect(typeof null).toEqual(__);
    expect(typeof Symbol(12)).toEqual(__);
    expect(typeof function() {}).toEqual(__);
  });
});
