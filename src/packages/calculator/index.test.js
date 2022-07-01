const shared = require('.');

describe('shared', () => {
  describe('add', () => {
    it('adds', () => {
      expect(shared.add(1, 1)).toBe(2);
    });
  });
});