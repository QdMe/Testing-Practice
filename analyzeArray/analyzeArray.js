export function analyzeArray(arr) {
  let average = getAvg(arr);
  let min = getMin(arr);
  let max = getMax(arr);
  let length = arr.length;

  return { average, min, max, length };
}
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

function getAvg(arr) {
  return (
    arr.reduce((prev, cur) => {
      return prev + cur;
    }) / arr.length
  );
}
function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function getMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
