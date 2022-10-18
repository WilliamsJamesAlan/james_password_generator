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
  // THEN the password is either displayed in an alert or written to the page"t",
  //seperated Capital, lower case, numeric, and special symbols

  const alpha = ["a", "b", "c",  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",  "w", "x", "y", "z", ];
  const calpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "|",];

  const passwordTxt = document.getElementById("password");
  const length = document.getElementById("length");
  const incNumbers = document.getElementById("numbers");
  const incSymbols = document.getElementById("symbols");
  const generateBtn = document.getElementById("generate");
  var password = ""
  for(var i = 0; i< userChoice; i++) {
    password += generate(lowercase, uppercase, numeric, special_characters, alpha, calpha, numbers, symbols)
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// comment out to see if it workslet characters = alpha; 
 // comment out to see if it works incNumbers.checked ? (characters += numbers) : "";
 // comment out to see if it works incSymbols.checked ? (characters += symbols) : "";
 // comment out to see if it works passwordTxt.value = generatePassword(length.value, characters);
/* Deleted line*/
function generate(lowercase, uppercase, numeric, special_characters, alpha, calpha, numbers, symbols) 
{
  var arrays = []
 if (lowercase === true)
 arrays.push (alpha)
 if (uppercase === true)
 arrays.push (calpha)
 if (numeric === true)
 arrays.push (numbers)
 if (special_characters === true)
 arrays.push (symbols)
var selectedindex = Math.floor(Math.random()*arrays.length)

var selectedarray = arrays[selectedindex]

var selectedcharacter = Math.floor(Math.random()*selectedarray.length)
console.log (selectedcharacter)
var returning = selectedarray[
  selectedcharacter 
]
return returning
}

