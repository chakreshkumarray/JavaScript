// How to generate all combinations of a string in JavaScript
let possibleCombinations = (str) => {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
          combinations.push(str.slice(i, j));
      }
  }
  return combinations;
}
console.log(possibleCombinations('Dog'));