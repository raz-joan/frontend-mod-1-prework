## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

  + I felt inspired and challenged when reading the SuperLearner Article.
  + I currently practice reading, teaching others what I know, and maintaining a healthy brain (through nutrition, movement, and sleep). Sometimes these practices are more frequent than others, but they do feel like habits.
  + I'd like to put more energy into practicing a growth mindset and really believing that learning is a *journey* not a *destination*. Currently already in the mindset of changing my perfectionistic habits.
  + I've never been one to take organized breaks, however I am now convinced this is a **necessary** practice.
  + I'd like to add **focus** to this list of practices of a SuperLearner. The ability to assess your goal, break it into manageable chunks, and *focus* on one chunk at a time. Really this is just the practice of calendaring that we talked about in Session 1.


2. What are the data types you learned about in this section? In your own words, define each.

I learned about the three fundamental data types in this section:
---
  1. **numbers** are any number, integer or rational, however decimals are called floating numbers. Do not use commas when writing large numbers.
  2. **strings** are contained in single or double quotes, '' or "", and they can contain any characters including spaces.
  3. **booleans** are either *true* or *false*. They can help to determine questions in a script.The questions will contain the following comparison operators: <, >, <=, >=, ==, ===, and !=. An answer may be strictly true or false, but can also be 'truthy' or 'falsey'.
---


3. How would you log the string `"Hello World!"` to the console?

`console.log("Hello World!");`


4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

The purpose of code comments is that they allow us to communicate to both ourselves and others our thoughts/intentions/logic/reasoning in plain english. The computer will ignore comments entirely as it runs through a file. You can write code comments in the following two ways:
  * // two backslashes is a single line comment (the computer will ignore what follows them until the next line of code)
  * /* multi line comments are bracketed in this manner of backslash and asterisk */ (the computer will ignore whatever is between the opening and close)


5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable is a space holder for data (numbers, strings, booleans). It's syntax is `var variableName = 'dataType';`.
Think of variables like a mailbox with a name, for example Tony or 1821. We know exactly which mailbox it is because it has a name. We can put one of the three data types into Tony, and now our mailbox is holding data inside. For example, maybe that data is an apple, a teddy bear, and a song. Perhaps on a Monday morning you place an apple in the mailbox Tony, but then in the afternoon you replace the apple with a teddy bear. Now Tony is holding a teddy bear unless you replace that with something else, like the song three days later. Whatever is most recently placed in the mailbox is what is found whenever we look inside Tony, or call a variable.


6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

I frequently use Strava. It likely uses *strings* to hold the variable for an account's name, *numbers* to hold the variable of an event's movement metrics, and *booleans* to toggle between public or private posts (is it private? if yes -- post to followers only, else post public).


7. In your own words, explain what concatenation is.

**Concatenation** allows for the addition of data types, similar or different, using the '+' operator.


8. Think of a site or app you use frequently. Where do you think the developers used concatenation?

When ordering clothing in an online store, you must enter your name, contact information and money information in order to actually make the purchase. Once the order is processed, oftentimes the site displays something like 'Thank you Joan for your purchase!'. When you input your name into the information form, it was able to store your name in a variable so that it could be referenced and displayed later. In (incomplete) code, what I mean is:

```
var buyersName = 'getNameFromForm'; // I'm unsure how you would actually do this ... but the idea seems logical to me
console.log("Thank you " + buyersName + " for your purchase!");
```


9. What questions do you still have about the work we've done so far? (not having a question is not an option)

The idea of a boolean data type feels fuzzy. I understand that the true / false helps determine direction in a flowchart, however would you ever just assign a variable to be true or false when it's declared? I am unable to think of a reason why. Or perhaps a variable would hold the answer to a question, which could be one or the other, and then that would cause another script to be executed?

I wonder at how the distinction between a number and a floating number will play out as we learn more?

Is it correct that the command "node" in the zsh shell just accesses the noted .js file and executes what is inside?
