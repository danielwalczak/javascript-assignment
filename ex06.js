/*
Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## Arguments

  * goodUsers: a list of valid users

Tip: you can use array#some and Array#every or _.includes
*/

function checkUsersValid(validUsers) {
  return function(usersToTest) {
    return usersToTest.every(function(testUser) {
      return validUsers.some(function(validUser) {
        return validUser.id === testUser.id;
      });
    });
  }
}

var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

var testOne = testAllValid([
  { id: 2 },
  { id: 1 }
])
// => true

var testTwo = testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
])
// => false

console.log('test one:', testOne);
console.log('test two:', testTwo);
