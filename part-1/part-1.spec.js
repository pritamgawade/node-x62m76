const expectedDataP1 = require('./expected-data.js');
const part1 = require('./part-1.js');

describe('#Part1', () => {
  it('task 1 should meet the expected data', () => {
    expect(part1.task1()).toStrictEqual(expectedDataP1.expectedTask1);
  });

  it('task 1 should have correct length', () => {
    expect(part1.task1().length).toEqual(1);
  });

  it('task 2 should meet the expected data', () => {
    expect(part1.task2()).toStrictEqual(expectedDataP1.expectedTask2);
  });

  it('task 3 should meet the expected data', () => {
    expect(part1.task3()).toStrictEqual(expectedDataP1.expectedTask3);
  });

  it('task 2 should have correct length', () => {
    expect(part1.task2().length).toEqual(1);
  });

  it('task 3 should have correct length', () => {
    expect(part1.task3().length).toEqual(2);
  });

  it('task 3 should should return an array', () => {
    expect(Array.isArray(part1.task3())).toBe(true);
  });
});
