const repeatString = function(string, num) {
    if (num < 0) return "ERROR"
    let blank ='';
    i = 0
    while (i < num) {
        blank += string;
        i++
    }
    return blank;
};

// Do not edit below this line
module.exports = repeatString;
