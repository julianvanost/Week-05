const adder = require('../adder.js')

describe('Adder Testing Suite', () => {
  test('1 8 1 = 2', () => {
    expect(adder(1, 1)).toBe(2)
  })
})
