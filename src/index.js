/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let n = 1;
  let main = 0;
  while (n <= preferences.length) {
    let number_2 = preferences[n-1];
    let number_3 = preferences[number_2 - 1];
    if (n === preferences[number_3 - 1]) {
      main++;
      preferences[n - 1] = NaN;
      preferences[number_2 - 1] = NaN;
      preferences[number_3 - 1] = NaN;
    }
    n++;
  } 
  return main;
  // your implementation
};
