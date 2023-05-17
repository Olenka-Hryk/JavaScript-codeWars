// ---------- 1 ------------
// Messi Goals              https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
//
var goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;



// ---------- 2 ------------
// Make negative            https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//
function makeNegative(num) {
  return negativeNamber = (num > 0) ? -num : num;
}



// ---------- 3 ------------
// Game Move               https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
//
const move = (position, roll) => position + roll * 2;



// ---------- 4 ------------
// Personalized Message   https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
//
function greet (name, owner) {
  return greetMessage = (name == owner) ? 'Hello boss' : 'Hello guest';
}
//   ||
function greet (name, owner) {
   return `Hello ${name===owner ? 'boss' : 'guest'}`; 
}



// ---------- 5 ------------
// Keep Hydrated          https://www.codewars.com/kata/keep-hydrated-1/train/javascript
//
const litres = (time) => Math.floor (time * 0.5);



// ---------- 6 ------------
// Opposites Attract      https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//
const lovefunc = (flower1, flower2) => ((flower1 + flower2)%2) ? true : false;
//   ||
const lovefunc = (flower1, flower2) => !!((flower1 + flower2)%2);
