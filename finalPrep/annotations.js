// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
// function declaration 'buildABear' with arguments: name, age, fur, clothes, specialPower
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// string variable that interpolates the argument "name"
  var demographics = [name, age];
// array variable that stores the first two arguments "name" and "age"
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// string variable that uses concatenation to include the argument "specialPower"
  var builtBear = {
// object literal declaration called builtBear
    basicInfo: demographics,
// the key basicInfo is paired with the array variable 'demographics'
    clothes: clothes,
// the key clothes is paired with the function argument "clothes"
    exterior: fur,
// the exterior key is paired with the function argument fur
    cost: 49.99,
// this is a static key-value pair, such that the value is assigned a number
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
// the key sayings is paired with an array that contains two previously defined
// string variables, "greeting" and "powerSaying" and a new string: "Goodnight my friend!".
    isCuddly: true,
// this is a static key-value pair, such that isCuddyly holds a boolean value
  };
  console.log(builtBear);
// I added in this console.log, so that I could see the object literal & check that I understood
// the function correctly
  return builtBear
// this tells the interpreter to return the object "builtBear" as it's final step
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// the function buildABear is being called with string, number, and array parameters.
// the function will place the parameters with the corresponding arguments in order to
// return the object 'builtBear'
// should return:
// builtBear {basicInfo: ["Fluffy", 4], clothes: ['pants', 'jorts', 'tanktop'], exterior: "brown",
// cost: 49.99, sayings: ["Hey partner! My name is Fluffy - will you be my friend?!", "Did you know
// that I can give you nightmares?", "Goodnight my friend!"], isCuddly: true }

buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
// the function buildABear is being called with string, number, and array parameters.
// the function will place the parameters with the corresponding arguments in order to
// return the object 'builtBear'
// should return:
// builtBear {basicInfo: ["Sleepy", 2], clothes: ['pajamas', 'sleeping cap'], exterior: "purple",
// cost: 49.99, sayings: ["Hey partner! My name is Sleepy - will you be my friend?!", "Did you know
// that I can sleeping in?", "Goodnight my friend!"], isCuddly: true }


//FizzBuzz
function fizzBuzz(num1, num2, range) {
// the above line declares the function "fizzBuzz" with three parameters: "num1", "num2", and "range"
  for (var i = 0; i <= range; i++) {
// this is a for loop such that the counter is initialized at 0, with the condition that i will be
// incremented until the parameter number that matches the range argument is reached, and each loop
// the counter is incremented by 1. So, it will count 0, 1, 2, 3, ..., 'range'.
    if (i % num1 === 0 && i % num2 === 0) {
// an if structure is nested within the for loop. this first condition uses the AND operator, which says
// that if BOTH conditions are true then the following code in curly braces should run. The two conditions
// are 'if i modulo num1 is stricly 0' and 'if i modulo num2 is stricly 0', meaning 'if i divides into both
// num1 and num2 with a remainder of 0, then follow this path
      console.log('fizzbuzz');
// the code block for the first condition says to print the string: 'fizzbuzz'
    } else if (i % num1 === 0) {
// this is the second condition to check should the first condition be false. it says that 'if i modulo num1
// is strictly equal to 0', which means if i divided by num1 has a remainder 0, then follow this path.
      console.log('fizz');
// this code block executes if the second condition is true and it tells the interpreter to print the string 'fizz'
    } else if (i % num2 === 0) {
// This is the third condition to check should the first two be false. it says that 'if i modulo num2 is strictly
// equal to 0', which means if i divided by num2 has a remainder 0, then follow this path
      console.log('buzz');
// this code block executes if the third condition is true and it tells the interpreter to print the string 'buzz'
    } else {
// should all three previous conditions give false, then this final else statement will be run.
      console.log(i);
// this will only run if all previous conditions were false. it tells the interpreter to log/print the index number 'i'
// which is the current loop number having started the count at 0.
    }
  }
}

fizzBuzz(3, 5, 100);
// the function fizzBuzz is called. It will use the argument 3 where the parameter num1 is in the code, it will
// use the argument 5 where the parameter num2 is found in the code, and finally the argument 100 is the parameter
// 'range' so the loop will run 101 times (0 to 100, including 100)
// (Output should be: fizzbuzz (since 0 divided by anything is 0), 1, 2, fizz (3 divided by 3), 4, buzz (5 divided by 5), etc...)
fizzBuzz(5, 8, 400);
// the function fizzBuzz is called again. It will use the argument 5 where the parameter num1 is in the code, it will
// use the argument 8 where the parameter num2 is found in the code, and finally the argument 400 is the parameter
// 'range' so the loop will run 401 times (0 to 400, including 400)
// (Output should be: fizzbuzz (since 0 divided by anything is 0), 1, 2, 3, 4, fizz (5 divided by 5), 6, 7, buzz (8 divided by 8), etc...)

// So, basically this function will loop through the range + 1, starting at 0, and search for numbers that are multiples
// of the first two arguments given. it gives the word fizzbuzz if the numer is a multiple for both, fizz if just the first
// and buzz if just the second, however it prints the index number being checked if it isnt a multiple of either.
