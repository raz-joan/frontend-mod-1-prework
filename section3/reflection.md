## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

    - The first point that resonated most with me was that growth mindset is the recognition that we are always evoloving, which embodies the beliefs that we can learn anything with effort and work and that this learning occurs by embracing struggle and working through it.
    - The second point that resonated with me was to not compare yourself with others, but instead to practice self discipline and goal management so that you are aware of your own progress.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

    Currently, I demonstrate growth mindset by believing that I can improve with effort, seeking out challenges, understanding the process, and accepting that mistakes are part of it. I do not practice asking for help quick enough and tend to compare myself with others, rather than focusing only on my own progress.

3. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

    The app AllTrails is essentially a database for hiking and biking trails. Each trail could be an array of data that is related. For example, the 'Mount Sanitas and Sanitas Valley Loop Trail' is ['hard', '3.2 miles', '1,256 ft', 'loop'], while the 'Anne U. White Trail' is ['easy', '3.2 miles', '485 ft', 'out & back']. This would make it easy to organize and extract data for each hike in particular!

4. In your own words, explain what an Array method is.

    An array method allows you to 'do' something to an array. I like to think of them as preset, simple functions/directions for performing particular tasks with arrays, like removing the last element from an array `arrayName.pop();`. The methods are called by writing a '.' and the method name following the array name; some of these will have arguments. There are many preset javascript methods for arrays. Some examples are:
      * methods that add/remove elements (push, pop, shift, unshift,...)
      * methods that search among elements (indexOf, includes(value), find/filter(func), ...)
      * method that iterates over elements (forEach(func))
      * methods that transform the array (map(func), sort(func), reverse(), split/join, ...)

5. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

    The purpose of a loop is to perform an action a certain 'n' number of times. One would use a loop /in conjunction with/ an array in order to do a task with each successive element in an array. For example, add 10 to every number in the list. If you wanted to perform a task a certain number of times but that didn't involve a list, then you would not use a loop and an array, but a loop alone or a loop with another structure, like an `if ` statement. For example, print the numbers 1 through 20 to the terminal.

6. If you had to teach a 5 year old about loops, how would you explain it?

    A loop is like singing the song '99 bottle of pop on the wall'. You start with 99 bottles, sing the lines "99 bottles of pop on the wall, 99 bottles of pop, take one down and pass it around, 98 bottles of pop on the wall". So now you have one less, but because you /still/ have bottles remaining, you repeat. Every time you repeat the lines, you remove one bottle. Eventually you will have just one bottle left and when it is taken down, there will be zero bottles remaining, which will terminate the song. A for loop is similar in that it has a starting point, a stopping point, and a set of instructions that are repeated every time the counter is incremeneted/decremented.

7. What questions do you still have about Arrays and loops?

    How do you use the keywords `break` and `continue` in a loop? What is an example of an infinite loop that could cause a browser to run out of memory?
