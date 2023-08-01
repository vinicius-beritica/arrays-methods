/**
 * getRecursiveFibonacciSeries
 * @description
 * Returns the fibonacci series of a given number
 *
 * @example getRecursiveFibonacciSeries(1) // [0, 1]
 * @example getRecursiveFibonacciSeries(5) // [0, 1, 1, 2, 3, 5]
 *
 * @param {number} n
 * @return {*}  {number[]}
 */
export const getRecursiveFibonacciSeries = (n: number): number[] => {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  const arrFibonacci = getRecursiveFibonacciSeries(n - 1);
  arrFibonacci.push(
    arrFibonacci[arrFibonacci.length - 1] +
      arrFibonacci[arrFibonacci.length - 2],
  );
  return arrFibonacci;
};
