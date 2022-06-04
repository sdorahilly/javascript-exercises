// first thing we need is a part of the function that returns the numbers between two integers
// so we'll have to determine which one is the lower number and which is the higher number 
// then we have to determine the numbers in between that range
// then we have to sum the numbers in that range and return the result
const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"; // if either of them arent integers return error
    if (a < 0 || b < 0) return "ERROR"; // if either of them are negative return error


    // Which one is bigger? If they are the same return 0 because that is the correct result anywhoo
    // if a is less than b then set a to the min and b to the max
    if (a < b) {
        let min = a;
        let max = b;
        let sum = 0;
        for (let i = min; i < max + 1; i++) {   // go through this loop starting with min number and incrimenting up till the number is 1 greater than max number
          sum += i; // add the two adjacent numbers together
        }
        return sum; // return the sum of all of them

    } else if (a > b) { // same as above but if the second number is larger you reverse the mins and maxes
        let max = a;
        let min = b;
        let sum = 0;
        for (let i = min; i < max + 1; i++) {
          sum += i;
        }
        return sum;

    } else { // if a and b are equal return 0 as the sum
        return 0;
    }
};

// Do not edit below this line
module.exports = sumAll;
