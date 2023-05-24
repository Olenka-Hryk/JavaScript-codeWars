// -------------------------------------------------- 1 ----------------------------------------------------------------
// Convert a string to an array:             https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}
//   ||
const stringToArray = string => string.split(" ");
//   ||
const stringToArray = (string) => {
  const words = [''];
  for (const letter of string) {
    if (letter !== ' ') {
      words[words.length-1] += letter;
    } else {
      words.push('');
    }
  }
  return words;
}


// -------------------------------------------------- 2 ----------------------------------------------------------------
// DNA to RNA Conversion:                           https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = dna => dna.split("T").join("U");
//   ||
const DNAtoRNA = dna => dna.replaceAll("T", "U");


// -------------------------------------------------- 3 ----------------------------------------------------------------
// Find Maximum and Minimum Values of a List     https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = list => Math.min(...list);
const max = list => Math.max(...list);


// -------------------------------------------------- 4 ----------------------------------------------------------------
// Smallest value of an array:                   https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    const minElement = Math.min(...arr);
    return toReturn === "index"
      ? arr.findIndex((number) => number === minElement)
      : minElement;
  }



// *********************************************************************************************************************
// -------------------------------------------------- 1* ----------------------------------------------------------------
// A wolf in sheep's clothing                    https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
// not use reverse!!!!!
function warnTheSheep(queue) {
    const sheepFlock = queue.reverse();
    return sheepFlock[0] === "wolf"
      ? "Pls go away and stop eating my sheep"
      : `Oi! Sheep number ${sheepFlock.findIndex(
          (wolfPosition) => wolfPosition === "wolf"
        )}! You are about to be eaten by a wolf!`;
  }
//   || best:
function warnTheSheep(queue) {
  const index = queue.indexOf('wolf');
  return index === queue.length-1 ? "Pls go away and stop eating my sheep"
  : `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`;
}
  

// -------------------------------------------------- 2* ----------------------------------------------------------------
// Beginner - Lost Without a Map                                https://www.codewars.com/kata/beginner-lost-without-a-map
const maps = x => x.map((element) => element * 2);


// -------------------------------------------------- 3* ----------------------------------------------------------------
// Find the first non-consecutive number  https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    return (
      arr.find((elem, index) => {
        if (index === 0) return false;
        return elem !== arr[index - 1] + 1;
      }) ?? null
    );
  }


// -------------------------------------------------- 4* ----------------------------------------------------------------
// You Can't Code Under Pressure#1(Double Integer)  https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = i => i * 2;


// -------------------------------------------------- 5* ----------------------------------------------------------------
// Century From Year                                               https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = year => Math.ceil(year / 100);


// -------------------------------------------------- 6* ----------------------------------------------------------------
// Function 3 - multiplying two numbers (retired)  https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
const multiply = (element1, element2) => element1 * element2;


// -------------------------------------------------- 7* ----------------------------------------------------------------
// Beginner Series #4 Cockroach (Cockroach speed)  https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = s => Math.floor((s * 100000) / 3600);


// -------------------------------------------------- 8* ----------------------------------------------------------------
// Third Angle of a Triangle (Angle of triangle)  https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - a - b;


// -------------------------------------------------- 9* ----------------------------------------------------------------
// Twice as old                                   https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);


// ------------------------------------------------- 10* ----------------------------------------------------------------
// Get Nth Even Number (Return n-th even number)  https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = n => n * 2 - 2;


// ------------------------------------------------- 11* ----------------------------------------------------------------
// What's the real floor                          https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = n => (n <= 0 ? n : n < 13 ? n - 1 : n - 2);


// ------------------------------------------------- 12* ----------------------------------------------------------------
// Beginner Series #2 Clock                       https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
  }


// ------------------------------------------------- 13* ----------------------------------------------------------------
// Is n divisible by x and y                      https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => (n % x === 0 && n % y === 0 ? true : false);