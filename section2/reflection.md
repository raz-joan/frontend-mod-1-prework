## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

   I am generally hesitant to ask questions, both out of fear of looking dumb and because I find great satisfaction in finding a solution to a problem on my own. Despite these feelings, I have asked questions all over the spectrum of time - too soon, too long, and places in between. The second article, "Asking Better Questions", felt particularly helpful. I feel confident in knowing *when* and *how* to ask a **good technical question** thanks to the question algorithm that Turing has shared. It will take practice to adjust my feelings of insecurity and stubbornness, however it's healthier to be humble and willing to work together for a solution rather than alone (much more professional!).


2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

   I noticed the directions were thinner and I appreciated it. It was good to arrive at a point and realize I did or didn't remember how to do it. In every case, even if I had forgotten, I was able to pretty easily find the information that I needed. Also, having us look at sources online, is helping to train my brain that the answer is out there, so I hear myself saying "well, I don't know, but I can google it" rather than "well, I don't know, now what".


3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

   A conditional statement sets up conditions and uses an if/then decision making structure. A daily life conditional statement could be: If you are tired and it is dark, then go to bed. An example of when a conditional is used in a web application is when you visit a brewery website and a popup window opens before you can navigate the site asking "Are you 21 or over?". The question requires an answer (yes or no), which are conditions that tell which code to execute next (yes -> allow to navigate the site, no -> do NOT allow to navigate the site and give this message "...").


4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

   You would use an `if` statement with as many `else if` statements as needed, and finally, end with the `else` statement. For example:
   ```javascript
   if (condition1) {
     //code runs if condition1 is true, otherwise continues to the next condition
   } else if (condition2) {
     //code runs if condition1 was false and condition2 is true, otherwise continues to the next condition
   } else if (condition3) {
     //code runs if condition1 and condition2 were false and condition3 is true, otherwise continues to the next condition
   } else {
     //code runs if condition1, condition2, and condition3 were all false
   };
   ```
   In the above code block, the computer would first check 'condition1', if true then that body of code would execute, if false it would skip the contained code block and check the second condition, 'condition2'. Similarly it determines whether the condition is true or false and navigates accordingly. This continues for as many conditions as needed. If it reaches the final `else` statement, then that contained code block will run as none of the other conditions were met. It is important to note that only a single option will ever run. Visually, this is a flow chart where instead of question being yes or no, it can have many path options to follow.


5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

   Logical operators allow developers to check if **two** conditions or at least **one of two** conditions are met. The `&&` AND operator will check that both conditions are true before running a block of code, while the `||` OR operator will check that at least one of the conditions is true before running a block of code.


6. What questions do you still have about `if` statements and/or functions?

   I understand the basic ideas of `if` statements and how to write them (the decision making flow chart is very helpful to me), however I wonder about the larger picture of how scripts fit together/ are nested, etc. I also found the comparison of `strings` and `null`/`undefined` to be confusing. I know that over time I'll learn how to set up conditions correctly that do not leave room for error... fuzzy at the moment though.

   As for functions, what they are, how they work, how they are declared, and how they are called feels comfortable. No questions at this time.
