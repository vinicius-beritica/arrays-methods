/**
 * nameArrayToString
 * @description
 * Accepts an array of names and returns a
 * string of names separated by commas and an ampersand
 *
 * @example nameArrayToString(['Bart']);
 * // returns 'Bart'
 * @example nameArrayToString(['Bart', 'Lisa']);
 * // returns 'Bart & Lisa'
 * @example nameArrayToString(['Bart', 'Lisa', 'Maggie']);
 * // returns 'Bart, Lisa & Maggie'
 * @param {string[]} nameArray
 * @return {string}
 */
export const nameArrayToString = (nameArray: string[]) => {
  const arrayString = nameArray;
  let stringName = '';
  if (arrayString.length < 2) {
    stringName = arrayString[0].toString();
    return stringName;
  } else if (arrayString.length === 2) {
    stringName = `${arrayString[0]} & ${arrayString[1]}`.toString();
  } else {
    stringName =
      `${arrayString[0]}, ${arrayString[1]} & ${arrayString[2]}`.toString();
  }

  return stringName;
};
