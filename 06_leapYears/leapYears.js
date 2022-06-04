//just going to be a bunch of if else statements
//take one number 
//first is this divisible by 4 --> if not return false
//then if number is divisible by 100 continue on ---> if not return true
//if its also divisible by 400 return true if not return false


// Note: This can also be done with "&&" but its easier logically for me this way :)
const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0){
            if (year % 400 === 0){
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

//Their solution is a lot cleaner but essentially the same thing condensed into "if && or"

// Do not edit below this line
module.exports = leapYears;
