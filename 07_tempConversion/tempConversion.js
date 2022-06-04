//(x°F - 32) * (5/9) = result F to C --> have to use the fraction for the rounding to work
//(x°C x (9/5)) + 32 = result  C to F --> same here
//First do this thing then round the number and return that number
const ftoc = function(x) {
  c = ((x -32) * (5/9));
  return c = Math.round(c * 10) / 10;
};
const ctof = function(x) {
  f = ((x * (9/5)) + 32);
  return f = Math.round(f * 10) / 10;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};