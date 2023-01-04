const { task1, task2 } = require('./part-2');

describe('#Part2', () => {
  it('task 1 should meet the expected data', () => {
    expect(task1()).toStrictEqual({ premium: 300, fee: 45 });
  });

  it('task 2 should meet the expected data', () => {
    expect(task2()).toStrictEqual({ premium: 315, fee: 30 });
  });

  it('task 1 should return an object', () => {
    expect(typeof task1()).toBe('object');
  });

  it('task 2 should return an object', () => {
    expect(typeof task2()).toBe('object');
  });
});
