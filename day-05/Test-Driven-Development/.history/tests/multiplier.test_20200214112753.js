const adder = require('../multiplier.js')

describe('Multiplier Testing Suite', () => {
  test('2 * 2 = 4', () => {
    expect(adder(1, 1)).toBe(4)
  })
})
