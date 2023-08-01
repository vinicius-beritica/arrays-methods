/**
 * getRecursiveFactorial
 *
 * @example getRecursiveFactorial(0) // 1
 * @example getRecursiveFactorial(7) // 5040
 * @example getRecursiveFactorial(10) // 3628800
 *
 * @param {number} n
 * @return {*}  {number}
 */
export const getRecursiveFactorial = (n: number): number => {
  if (n === 0) {
    return n + 1;
  }
  return n * getRecursiveFactorial(n - 1);
};
