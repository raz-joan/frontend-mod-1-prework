// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Thunderbolt";
var specialAbility = "flying";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Meet our hero: " + heroName + "!";
var catchphrase = `Always ${specialAbility} high.`;
// Declare two variables - power AND energy - set to integers
var power = 12;
var energy = 30;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Tree Guy", "Water Woman", "Animal Friend"];
var sidekicks = ["Raincloud", "Lightning", "Sun", "Moon"];
// Print the first sidekick to your console
console.log(sidekicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("City Person");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else if (dangerLevel <= 50) {
    console.log(saveTheDay);
  } else {
    console.log(badExcuse);
  }
}
//Test Cases
var announcement = `Never fear, the Courageous ${heroName} is here!`;
var excuse = 'I think I forgot to lock up my 1992 Toyota Corolla. Be right back.';

assessSituation(99, announcement, excuse); // Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse); // should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse); // should print - "Meh. Hard pass."
// check the edge cases ...
assessSituation(-1, announcement, excuse); // should print - 'Meh. Hard pass'
assessSituation(0, announcement, excuse); // should print - 'Meh. Hard pass'
assessSituation(10, announcement, excuse); // should print - "Never fear, the Courageous Thunderbolt is here!"
assessSituation(50, announcement, excuse); // should print - "Never fear, the Courageous Thunderbolt is here!"

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Lock Ness",
  smell: "salty",
  weight: 1000,
  citiesDestroyed: ["London", "Dublin"],
  luckyNumbers: [1, 2, 3, 4, 5],
  address: {
    number: 111,
    street: "Lake Bottom",
    state: "Scotland",
    zip: 12345
  }
}

console.log(scaryMonster);
// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
class SuperHero {
  constructor (name, superPower, age) {
    this.superHeroName = name;
    this.superPower = superPower;
    this.heroAge = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.superHeroName);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(newPower) {
    this.powerLevel = this.powerLevel + newPower;
  }
}
// - Create 2 instances of your SuperHero class
var seaMermaid = new SuperHero("Sea Mermaid", "swimming", 20);
var forestMan = new SuperHero("Forest Man", "climbing trees", 50);

console.log(seaMermaid);
console.log(forestMan);

// added some code tests for the SuperHero class ...
seaMermaid.sayName();
seaMermaid.maximizeEnergy();
console.log(seaMermaid);
forestMan.gainPower(50);
console.log(forestMan);


/* Reflection

// What parts were most difficult about this exerise?
First, the timed nature of what seemed like an extensive goal list was a little stressful.
But, the most difficult part was creating the object literal and the superhero class.
I knew what I wanted to do, but needed to look up the syntax.

// What parts felt most comfortable to you?
Working with numbers, strings, booleans, and arrays felt comfortable.
Using concatenation, interpolation, and array methods also felt comfortable.

// What skills do you need to continue to practice before starting Mod 1?
I need to continue practicing everything: reading through directions for details, efficiently coding
all five data types, feeling confident with methods and properties. Programming really is as simple as
manipulating, storing, and presenting data, however that doesn't mean it is easy or efficient.
I need to keep studying and to keep practicing.
*/
