const { TestWatcher } = require('jest');
const { sum } = require('./index');

describe('Create a Function that adds two numbers together', () => {
  it('returns number', () => {
    let result = sum(1, 2);
    expect(typeof result === 'number').toBe(true);
  });
  it('returns correct value', () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, -2)).toBe(0);
  });
});
