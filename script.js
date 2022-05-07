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

// Empty array to store user choices within.
var passArr = [];
var randomPassword = "";

//PROMPT for password criteria - length, upper and lower case, numbers, special characters.
// Confirm which characters are to be included.
// At least one character type needs to be selected.
// Password generated using answers to prompts.
// userInput -> Math.floor to randomize.
// Display password on page.

// Assignment code here
var generatePassword = function () {
  var passwordLength = prompt(
    "How many characters would you like your password to be? Please choose between 8 and 128."
  );
  if (!passwordLength) {
    alert("You must enter a number!");
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    return false;
  } else {
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
    } else if (
      upperCaseConfirm &&
      lowerCaseConfirm &&
      numConfirm &&
      specConfirm
    ) {
      passArr = upperCase.concat(lowerCase, numChar, specChar);
    } else if (
      // 3 options only.
      upperCaseConfirm &&
      lowerCaseConfirm &&
      numConfirm
    ) {
      passArr = upperCase.concat(lowerCase, numChar);
    } else if (upperCaseConfirm && lowerCaseConfirm && specConfirm) {
      passArr = upperCase.concat(lowerCase && specChar);
    } else if (lowerCaseConfirm && numConfirm && specConfirm) {
      passArr = lowerCase.concat(numChar, specChar);
    }

    // 2 options only.
    else if (upperCaseConfirm && lowerCaseConfirm) {
      passArr = upperCase.concat(lowerCase);
    } else if (numConfirm && specConfirm) {
      passArr = numChar.concat(specChar);
    } else if (upperCaseConfirm && numConfirm) {
      passArr = upperCase.concat(numChar);
    } else if (upperCaseConfirm && specConfirm) {
      passArr = upperCase.concat(specChar);
    } else if (lowerCase && numConfirm) {
      passArr = lowerCase.concat(numChar);
    } else if (lowerCaseConfirm && specConfirm) {
      passArr = lowerCase.concat(specChar);
    }

    // 1 option only.
    else if (upperCaseConfirm) {
      passArr = upperCase;
    } else if (lowerCaseConfirm) {
      passArr = lowerCase;
    } else if (numConfirm) {
      passArr = numChar;
    } else if (specConfirm) {
      passArr = specChar;
    }

    for (var i = 0; i < passwordLength; i++) {
      randomPassword =
        randomPassword + passArr[Math.floor(Math.random() * passArr.length)];
      console.log(randomPassword);
    }
    return randomPassword;
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
