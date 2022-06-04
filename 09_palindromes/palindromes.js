//First we have to lowercase everything
//then we have to condense by removing spaces and punctuation
//then we can reverse the string
//then compare the reversed string to the current condensed/lowercased string 
//if equivalent then return true otherwise return false 

const palindromes = function (string) {
    //lowercases string
    lowercase = string.toLowerCase();
    
    //removes punctuation then removes whitespace 
    punctuationless = lowercase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    condensed = punctuationless.replace(/\s/g, '');

    //reverses string
    const myArray = Array.from(condensed);
    let reverse = myArray.reverse();
    reverse = myArray.join('')
    
    //compares reversed string to the orignal input
    if (reverse === condensed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
