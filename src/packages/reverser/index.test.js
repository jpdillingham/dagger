const reverser = require('./index');

describe('reverser', () => {
  describe('reverse', () => {
    it('reverses', () => {
      expect(reverser.reverse('hello')).toBe('olleh');
    });
  });
});