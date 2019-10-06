test('We can require all the rules without throwing', () => {
  expect(() => {
    require('../'); // eslint-disable-line global-require
  }).not.toThrow();
});
