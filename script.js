// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specChar = ["!", "#", "$", "%", "&", "(", ")", "*", "-", "_"];

// Final empty array for password to be pushed to.
var passArr = [];

function createPassword() {
  passwordLength = prompt(
    "How many characters would you like your password to be? Please choose between 8 and 128."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    prompt("Your password is " + passwordLength + " characters!");
  } else {
    prompt("Please choose a length between 8 and 128 characters.");
    createPassword();
  }
}

// Assignment code here
var generatePassword = function () {};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
