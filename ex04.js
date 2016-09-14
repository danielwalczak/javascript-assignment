// Convert the following code from a for-loop to Array#map:
// * Your solution should use Array.prototype.map()
// * Do not use any for/while loops or Array.prototype.forEach.
// * Do not create any unnecessary functions e.g. helpers.

function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

function doubleAllWithMap(numbers) {
  return numbers.map(function(number) {
    return number * 2;
  });
}

var numbers = [1, 2, 3];

console.log(doubleAllWithMap(numbers));
