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

//PROMPT for password criteria - length, upper and lower case, numbers, special characters.
// Confirm which characters are to be included.
// At least one character type needs to be selected.
// Password generated using answers to prompts.
// userInput -> Math.floor to randomize.
// Display password on page.

function createPassword() {
  passwordLength = parseInt(
    prompt(
      "How many characters would you like your password to be? Please choose between 8 and 128."
    )
  );
  if (!passwordLength) {
    alert("You must enter a list of characters!");
    return createPassword();
  } else {
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You must choose between 8 and 128 characters.");
      return createPassword();
    }
  }
  return;
}

// Assignment code here
var generatePassword = function () {
  createPassword();

  // Confirm which characters are to be used.
  // Note: passwordLength will be used in for loop when generating the random password.
  var upperCaseConfirm = window.confirm(
    "Would you like your password to have upper case letters?"
  );
  var lowerCaseConfirm = window.confirm(
    "Would you like your password to have lower case letters?"
  );
  var numConfirm = window.confirm(
    "Would you like your password to have numbers?"
  );
  var specConfirm = window.confirm(
    "Would you like your password to have special characters?"
  );

  if (!upperCaseConfirm && !lowerCaseConfirm && !numConfirm && !specConfirm) {
    alert(
      "Please choose what characters you would like included in your password."
    );
    generatePassword();
  } else if {}
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
