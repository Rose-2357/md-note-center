export function nthOccurance(str, substring, n) {
  let index = -1;
  for (let i = 0; i < n; i++) {
    index = str.indexOf(substring, index + 1);
  }
  return index;
}
