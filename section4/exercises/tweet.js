/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  increaseLikes(newLikes) {
    this.numberOfLikes = this.numberOfLikes + newLikes;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }
};

var tweetOne = new Tweet("John", "First Tweet Ever", "03:10, 07/15/20", 2, ["So cool", "Welcome"]);
var tweetTwo = new Tweet("Sarah", "Found an amazing new biking trail: SailAlong", "14:30, 07/16/20", 17, ["I've riden there and love it!"]);
var tweetThree = new Tweet("Ted", "Check out this article from The New Food Economy", "10:24, 07/16/20", 120, ["Wow!", "This is really inspiring.", "Love this! 🔥", "Thanks for sharing."]);

console.log(tweetOne);
console.log(tweetTwo);
console.log(tweetThree);

tweetTwo.increaseLikes(30);
tweetThree.addComment("I question the last two points...");

console.log(tweetOne);
console.log(tweetTwo);
console.log(tweetThree);
