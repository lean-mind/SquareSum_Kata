const squareSum = require('./index');

describe('Square Sum', () => {
   it('should return a number', () => {
       expect(typeof squareSum([0, 3, 4, 5])).toBe('number');
   });
   it('should return a simple square', () => {
       expect(squareSum([1])).toBe(1);
       expect(squareSum([2])).toBe(4);
       expect(squareSum([3])).toBe(9);
   });
   it ('should return a simple sum', () => {
       expect(squareSum([1, 1])).toBe(2);
       expect(squareSum([1,1,1])).toBe(3);
   });
   it('should sum the squares', () => {
       expect(squareSum([1, 2, 3])).toBe(14);
   });
   it('should omit strings', () => {
       expect(squareSum([1, 'n', 3])).toBe(10);
   });
   it('should return a square of a number input strings', () => {
       expect(squareSum(2)).toBe(4);
   });
});