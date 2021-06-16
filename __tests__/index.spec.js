import fn, { IsNotArrayError, IsNotIntegerArray } from '../index';

const cases = [
  [[], ''],
  [[1, 2, 3, 4, 5, 6, 7, 8], '1-8'],
  [[1, 3, 4, 5, 6, 7, 8], '1,3-8'],
  [[1, 3, 4, 5, 6, 7, 8, 10, 11, 12], '1,3-8,10-12'],
  [[1, 2, 3], '1-3'],
  [[1, 2], '1,2'],
  [[1, 2, 4], '1,2,4'],
  [[1, 2, 4, 5, 6], '1,2,4-6'],
  [[1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21], '1-3,7-9,15,17,19-21'],
  [[1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002], '1-6,100,1091,1999-2002'],
  [[1], '1'],
  [[1, 3, 5, 7, 9, 11], '1,3,5,7,9,11'],
];

describe('stringifyIntervals', () => {
  test.each(cases)('test %s', (numbers, expected) => {
    expect(fn(numbers)).toEqual(expected);
  });

  test('not array', () => {
    expect(() => fn(null)).toThrow(IsNotArrayError);
  });

  test('non integer array', () => {
    expect(() => fn([1, 2.0, Math.PI])).toThrow(IsNotIntegerArray);
  });
});
