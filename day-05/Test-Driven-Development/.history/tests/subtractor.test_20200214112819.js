const adder = require('../subtractor.js')

describe('Subtractor Testing Suite', () => {
  test('2 - 2 = 0', () => {
    expect(adder(1, 2)).toBe(0)
  })
})
