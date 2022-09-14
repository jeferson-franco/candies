const solution = require('./candies.js');

test('test 1', () => {
    expect(solution(3, 10)).toBe(9);
});

test('test 2', () => {
    expect(solution(1, 2)).toBe(2);
});

test('test 3', () => {
    expect(solution(10, 5)).toBe(0);
});

test('test 4', () => {
    expect(solution(4, 4)).toBe(4);
});

test('test 5', () => {
    expect(solution(4, 15)).toBe(12);
});

test('test 6', () => {
    expect(solution(9, 100)).toBe(99);
});

test('test 7', () => {
    expect(solution(8, 2)).toBe(0);
});

test('test 8', () => {
    expect(solution(3, 3)).toBe(3);
});

test('test 9', () => {
    expect(solution(7, 10)).toBe(7);
});

test('test 10', () => {
    expect(solution(3, 23)).toBe(21);
});
