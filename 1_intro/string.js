// ------------- Task 1 -----------
let text = prompt("Enter text:");
console.log(`${text}`);

let gap = text.split(" ");
console.log(`Gap: ${gap.length-1}`);

// ------------- Task 2 -----------
let letter = confirm("Converts the first character of a string to uppercase!")
if (letter) {
    UpperCase = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(`${UpperCase}`);
}

// ------------- Task 3 -----------
let words = text.split(" ");
console.log(`Words: ${words.length}`);

// ------------- Task 4 -----------
let phrase = prompt("Enter phrase: ");
console.log(`${phrase}`);
let phraseWords = phrase.split(" ");
let abbreviation = "";

for (let i = 0; i < phraseWords.length; i++) {
    abbreviation += phraseWords[i].charAt(0).toUpperCase();
}
console.log(abbreviation);

// ------------- Task 5 -----------
let UserPhrase = phrase.toLowerCase().replace(/[\W_]/g, "");
let reverseUserPhrase = UserPhrase.split('').reverse().join('');

if (UserPhrase == reverseUserPhrase) console.log("Entered string is a palindrome!");
else console.log("Entered string is not a palindrome!");