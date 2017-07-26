// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
 
if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
   // Your answer here
}

console.log(max(3, 2));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
  if (num1 > num2 && num1 > num3){
    return num1;
  } else if (num2 > num1 && num2 > num3){
    return num2;
  } else if (num3 > num1 && num3 > num2){
    return num3;
  }
    // Your answer here
}
  console.log (maxOfThree(1, 2, 3));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    return true;
  } else {
    return false;
  }
    // Your answer here
}

console.log(isVowel("e"));
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1, num2){
  return num1 + num2;
}
console.log(sum(1, 11));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3){
  return ((num1 + num2 + num3)/3);
}
console.log(avg (5, 5, 10));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(char){
  return (char.length);
}
console.log(getLength("tacocat"));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(param1, param2){
if (param2.length > param1.length){
  return true;
} else {
  return false;
}

}
console.log(greaterThan("bob", "steve"));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return "Hello, " + name;
}
console.log(greet("Charizard"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(food, noun, verb1, verb2, adj){
  return "This bro likes to eat " + food + ", but he didn't expect it to come out as a fried mayonnaise ball. " + noun + " decided to " + verb1 + " his underwear and " + verb2 + " his " + adj + " chili at the chef."
}
console.log(madlib("kiwi", "The booger", "boink", "smash", "fried"));