/**
 * https://pt.wikipedia.org/wiki/Ano_bissexto
 * @param startYear start year
 * @param endYear end year
 * @returns array of leap years between startYear and endYear
 */
export const leapYear = (startYear: number, endYear: number): number[] => {
  if (endYear < startYear) {
    return [];
  }
  const anoBissexto =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0;
  const proxAno = leapYear(startYear + 1, endYear);
  return anoBissexto ? [startYear, ...proxAno] : proxAno;
};
