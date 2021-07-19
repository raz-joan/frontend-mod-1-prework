/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

Between lines 14 and 18 is an 'if...else statement'. The condition is asking if the variable
doorChoice is strictly equal to 1. If this evaluates to true, then the following code block runs.
Otherwise, the code block following 'else' will run instead. More generally, this code allows for
the doorChoice number value to determine if the bearClothing is "hat" or "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

The variable bearClothing is assigned a new value after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

By changing the variable doorChoice to equal 3, bearClothing would be assinged the
value 'scarf'.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Between lines 27 and 35 is an if/else structure with 4 options. The computer will begin
by checking the first conditional. If true, then the following code block will run.
If false, then the computer will move on the second conditional. If true, then the
following code block will run. If false, then the computer will move to the third conditional.
If true, then the following code block will run. If false, then the computer will move to the
final else statement and run that code block. Only a single option will execute! More generally,
If the bearChoice is strictly 1, 2, 3, or something else, then the script says to print a different
message (string) to the console.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If you change the variable bearChoice to equal 3, then the final string printed to the
terminal will read: 'You run as fast as you can into the next room. It's full of snakes!'.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

If you change the variable doorChoice to equal 1, and the variable bearChoice to equal 2,
then the final string printed to the terminal will read:
"You tell the bear the hat is too small and it starts to cry!".

7. What is your favorite ending?

My favorite ending is the final else option, such the the variable bearChoice was strictly
not equal to 1, 2, or 3, in which case, the interpreter is forced to run the final else code block and
the string printed to the termial reads: "You stay with the bear and become it's best friend!".

*/
