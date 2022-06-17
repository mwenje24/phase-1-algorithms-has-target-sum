function hasTargetSum(array, target) {
  // Write your algorithm here
  let confirmedValues = {};
  
  for (const num1 of array) {
    const num2 = target - num1;
    if (num2 in confirmedValues)
      return true;
    confirmedValues[num1] = true;
  }

  return false;
}

/* 
  0(n)
*/

/* 
  create a value to hold the already visited numbers
  iterate through the array to find the number that sums the
    first number and the second to give the target value
  if found return true
  otherwise if the number is not in the array return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
