// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var userChoice = window.prompt(
    "Enter length of password, between 8 and 128 characters"
  );

  if (userChoice < 8 || userChoice > 128) {
    window.alert("Please choose again");
    return null;
  }
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase = window.confirm("Use lowercase?");
  var uppercase = window.confirm("Use uppercase?");
  var numeric = window.confirm("Use numeric?");
  var special_characters = window.confirm("Use characters?");
  // WHEN I answer each confirm
  // THEN my input should be validated and at least one character type should be selected
  if (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    special_characters === false
  ) {
    window.alert("Please choose again");
    return null;
  }
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=|\?/><{}";

  const passwordTxt = document.getElementById("password");
  const length = document.getElementById("length");
  const incNumbers = document.getElementById("numbers");
  const incSymbols = document.getElementById("symbols");
  const generateBtn = document.getElementById("generate");

  return "make sure to replace this with the finalized random password";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
