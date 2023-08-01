interface MostFrequentType {
  value: string | number;
  occurrences: number;
}

/**
 * findFirstMostFrequent
 * @example findFirstMostFrequent([3, 'a', 3, 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3]);
 * // returns { value: 'a', occurrences: 5 }
 *
 * @param {(Array<string | number>)} inputArray
 * @return {MostFrequentType}  {({ value: string | number; occurrences: number })}
 */

export const findFirstMostFrequent = (
  inputArray: Array<string | number>,
): MostFrequentType => {
  const frequencyMap: { [key: string]: number } = {};
  let mostFrequentValue = inputArray[0];
  let maxFrequency = 1;

  for (const value of inputArray) {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;

    if (
      frequencyMap[value] > maxFrequency ||
      (frequencyMap[value] === maxFrequency &&
        inputArray.indexOf(value) < inputArray.indexOf(mostFrequentValue))
    ) {
      mostFrequentValue = value;
      maxFrequency = frequencyMap[value];
    }
  }

  return { value: mostFrequentValue, occurrences: maxFrequency };
};
