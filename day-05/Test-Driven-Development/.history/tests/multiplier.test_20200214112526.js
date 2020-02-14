const adder = require('../adder.js')

describe('Adder Testing Suite', () => {
  test('2 * 2 = 4', () => {
    expect(adder(1, 1)).toBe(2)
  })
})
