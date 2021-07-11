/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello!");
}

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
var itsMe = "Joan";

function greetMe(name) {
  console.log("Hello " + name);
}

greetMe(itsMe);
itsMe = "Lindsey";
greetMe(itsMe);
itsMe = "Meagan";
greetMe(itsMe);


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function sumOfTwoNumbers(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

sumOfTwoNumbers(1,3);
sumOfTwoNumbers(10,30);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function weatherUpdate(tempDescriptor, skyCondition) {
  console.log("Today, it's " + tempDescriptor + " and " + skyCondition + "!");
}

weatherUpdate("hot", "sunny");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

I named the function 'weatherUpdate' because it would print a description of the current weather
to the terminal given two string arguments. I named the first parameter 'tempDescriptor'
because I wanted the input to be a string not a number, so I thought that I could imply
this by adding 'descriptor' to the word 'temp'. I was thinking of words like: hot, warm, chilly, cold.
I named the second parameter 'skyCondition' to imply the desire for a descriptive string like
sunny, clear, grey, cloudy, etc.

*/
