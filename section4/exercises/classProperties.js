/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
/*
class Dog {

}
var goldenRetriever = new Dog();
var dauschund = new Dog();

console.log(goldenRetriever);
console.log(dauschund);

// Prompt 2: Snack
class Snack {

}
var potatoChips = new Snack();
var appleSlices = new Snack();

console.log(potatoChips);
console.log(appleSlices);

// Prompt 3: Shirt
class Shirt {

}
var athleticTank = new Shirt();
var longSleeveDress = new Shirt();

console.log(athleticTank);
console.log(longSleeveDress);

*/
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
/*
class Dog {
  constructor() {
    this.size = "small";
    this.color = "blonde";
    this.hair = "short";
  }
}
var goldenRetriever = new Dog();
var dauschund = new Dog();

console.log(goldenRetriever);
console.log(dauschund);
// Prompt 2: Snack
class Snack {
  constructor (){
    this.type = "salty";
    this.cost = "$3.00";
    this.health = "junk food";
  }
}
var potatoChips = new Snack();
var appleSlices = new Snack();

console.log(potatoChips);
console.log(appleSlices);

// Prompt 3: Shirt
class Shirt {
  constructor () {
    this.material = "synthetic";
    this.price = "$35.00";
    this.type = "athletic";
  }
}
var athleticTank = new Shirt();
var longSleeveDress = new Shirt();

console.log(athleticTank);
console.log(longSleeveDress);
*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breedSize, coatColor, hairLength) {
    this.size = breedSize;
    this.color = coatColor;
    this.hair = hairLength;
  }
}
var goldenRetriever = new Dog("large", "red", "long");
var dauschund = new Dog("small", "brown", "short");

console.log(goldenRetriever);
console.log(dauschund);
// Prompt 2: Snack
class Snack {
  constructor (type, cost, health){
    this.type = type;
    this.cost = cost;
    this.health = health;
  }
}
var potatoChips = new Snack("salty", "$3.00", "junk food");
var appleSlices = new Snack("sweet", "$1.00", "healthy");

console.log(potatoChips);
console.log(appleSlices);

// Prompt 3: Shirt
class Shirt {
  constructor (material, price, type) {
    this.material = material;
    this.price = price;
    this.type = type;
  }
}
var athleticTank = new Shirt("synthetic", "$35.00", "athletic");
var longSleeveDress = new Shirt("cotton", "$50.00", "dress");

console.log(athleticTank);
console.log(longSleeveDress);
