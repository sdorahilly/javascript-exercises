const reverseString = function(string) {
    const myArray = Array.from(string);
    let reverse = myArray.reverse();
    reverse = myArray.join('')
    return reverse;
};


// Do not edit below this line
module.exports = reverseString;
