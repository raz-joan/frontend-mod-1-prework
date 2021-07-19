/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);
/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
/* The above line of code is printing to the terminal the answer to the question: is 4 less than 9?
The answer to the question is 'true', which is also the word that will be printed in the terminal. */

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
/* The first line of code declares the variable 'books' and assigns it the number value of 3.
The second line of code tells the interpreter to print to the console the answer to the
comparison: is 4 less than 'books'?, which holds the number 3. The answer to this question is
false, as 4 > 3, so 'false' will be printed to the terminal. */

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
/* The first line of code declares the variable 'friends' and assigns it the number 6.
The second line of code declares the variable 'siblings' and assigns is the number 2.
The third line of code tells the interpreter to print to the terminal the answer to the
question: is 'friends' greater than 'siblings', which is the same as is 6 greater than 2?
The answer is 'true', which is what will print in the terminal. */

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
/* This first line of code declares the variable 'attendees' and assigns it the number 9.
The second line of code declares the variable 'meals' and assigns it the number 8.
The third line of code tells the computer to print to the terminal the answer to the
question: is 'attendees' strictly not equal to 'meals', or rather is 9 strictly
not equal to 8? The answer is 'true', which is what will print in the terminal. */

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;
var dog = 0;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
// this is true AND true, which is true.

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
// this is true AND false, which is false.

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
// this is true OR false, which is true.

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);
console.log(age && lovesToPlay);
console.log(lovesToPlay && dog);
console.log(dog && lovesToPlay);

// What did your final line of code evaluate to? Why do you think that is? Explain.

/* ANSWER: I expected the answer to be true, as 'lovesToPlay = true' and 'age = 1' (which
is converted to true for boolean/number conversion). And, two true operands evaluate to
true with the && comparison operator. However, it actually evaluated to '1'.
This was surprising to me, however I read more about the AND '&&' operator with
different data types and learned that...

  - it evaluates operands from left to right
  - for each operand, it converts it to a boolean. if the result is false, it stops
    and returns the original value of that operand.
  - if all operands have been evaluated to be true, then it returns the last operand.

SO, because the comparison evaluates to true, it will return the last operand!
To see this better, I compared the same two variables but in the opposite order
and saw that the answers in the terminal correlated to the last operand: age =1,
and lovesToPlay = true. Wild!

For assurance, I then created another `var dog = 0;`. I wanted to compare it with
'lovesToPlay' to check that it would return 0. What's interesting here is that it's
actually hard to distinguish the two comparisons based on the terminal log. Both
printed outputs are 0. In either case, it stops when the dog operand is evaluated
to false and returns the value of dog, which is 0. Neat. */

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
