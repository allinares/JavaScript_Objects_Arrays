// console.log("Hello World!\n==========\n");

// Exercise 1

console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;

  // use "arr" as parameter to not confuse with the numbers const variable
  // iterate over each value in the array
  // add each number to the sum

  arr.forEach(function (number) {
    sum += number;
    return undefined;
  });

  return sum;
}

// function forEvery(arr, callFunction){
//   for (let i = 0; i < arr.length; i++){
//     callFunction(arr[i]);
//   }
// }

console.log(arraySum(numbers));

// Exercise 2

console.log("EXERCISE 2:\n==========\n");

let favBook = {};

favBook.title = "The Hobbit";
favBook.author = "JRR Tolkien";
favBook.pageCount = 700;
favBook.readCount = 1;

console.log(favBook);

// Add a method that will be a function
favBook.info = function () {
  return `${this.title} by ${this.author} has a page count of ${this.pageCount} and has been read ${this.readCount} time(s).`;
};

console.log(favBook.info());

// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

// Identify the words based on spaces
// Split the sentence into words
// Iterating over each word, and then individualize every character with another split method
// Combine the characters back into words, and then words into a sentence again for the output
function reverseWords(sentence) {
  let result = [];
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
  let letters = words[i].split(""); // ex. "The" => ["T", "h", "e"]
  letters.reverse() // ex. ["e", "h", "T"]
  let reverseWord = letters.join("");
  result.push(reverseWord); // adds the given value to the end of the array
}

// The array will be brought back into a string
return result.join(" ");
}

console.log(reverseWords(sentence));

// Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

// Headers: | name  | age |
//          | ----- | --- |
// Rows:    | Frodo | 50  |
function converter(fileData) {
  // Split the file data into rows based on every newline character
  let rows = fileData.split("\n"); // [ "name,age", "Frodo,50", ... ]
  // Split the first row, or headers, into individual strings on the , delimiter
  let headers = rows[0].split(","); // [ "name", "age" ]

  let result = [];
  // Iterate or "loop" over every content row
  // Fill the result with every new row converted into an object, and then return the array of objects at the end
  for (let i = 1; i < rows.length; i++) {
    let obj = {};
    let data = rows[i].split(","); // ex [ "Frodo", 50 ]
    data.forEach((val, idx) => {
      obj[headers[idx]] = val;
    });
    result.push(obj);
  }

  return result;
}

console.log(converter(csvData));