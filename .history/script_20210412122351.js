// # Programming Basics: Logical Operators

// These exercises are aimed at making you familiar with logical operators. ** Print all your checks to the console.Make sure that you are using the * correct * logical operator.**

// 0. Declare two variables: `isDogBetter` with the value of`true`, and`isCatBetter` with the value of`false`.
const isDogBetter = true;
const isCatBetter = false;


// 1. Check the result of:

// - a) isDogBetter AND isCatBetter.
console.log((isDogBetter && isCatBetter));
// its false because the values are not matching type. 


// - b) isDogBetter OR isCatBetter.
console.log((isDogBetter || isCatBetter));
// For an || statement to be true, only one argument needs to be true, i.e. dogIsBetter OR catIsBetter. Since true is... true..., this statement can be true. 

// - c) NOT(isDogBetter AND isCatBetter).
console.log(!(isDogBetter && isCatBetter));
// they are not the same. so its true. 

// 2. Declare three more variables`atoms`, `sandGrains`, `starsInSky`.Give these variables number values.
const atoms = 10;
const sandGrains = 20;
const starsInSky = 30;


// 3. Check the result of whether:

// - a)`atoms` is greater than`starsInSky` AND`atoms` is greater than`sandGrains`.
console.log((atoms > starsInSky) && (atoms > sandGrains));
// the first one is right and second one is false, so answer is false. 

// - b)`atoms` is NOT equal to`sandGrains`.
console.log(atoms !== sandGrains);
// because we compare the value so its true.and they have different values. 

// - c)`starsInSky` is less than`sandGrains` OR`starsInSky` is greater than`atoms`.
console.log((starsInSky < sandGrains) || (starsInSky > atoms));

// - d)`atoms` is equal to`starsInSky` OR`atoms` is NOT equal to`sandGrains`.
console.log((atoms === starsInSky) || (atoms !== sandGrains));

// - e)`atoms` is greater than or equal to 10 AND`sandGrains` is less than or equal to 10.
console.log((atoms >= 10) && (sandGrains <= 10));

// - f)`atoms` multiplied by`starsInSky` is less than 100 OR whether`atoms` multiplied by`sandGrains` is greater than 100.
console.log((atoms * starsInSky <= 100) || (atoms * sandGrains > 100));

// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.


