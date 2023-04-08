// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbolsArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var lowercaseLettersStr = "abcdefghijklmnopqrstuvwxyz"

var lowercaseLettersArr = lowercaseLettersStr.split('');
//convert lowercaseLettersArr to uppercase
var uppercaseLettersArr = lowercaseLettersStr.toUpperCase().split('');

function generatePassword() {
  selectionArr = [];
  var passLength = prompt("Please specify password length between 8-128 characters:", "");

//validates that user input is a number between 8 and 128, throws alert if validation fails (passes?) 
  if(passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password is too long or short, or not a number. Please try again.");
    return false;
  }

//prompts to include/exclude data types, throws alert if none selected
if(confirm("Include lowercase letters?")) {
  selectionArr = selectionArr.concat(lowercaseLettersArr);
}
if(confirm("Include uppercase letters?")) {
  selectionArr = selectionArr.concat(uppercaseLettersArr);
}
if(confirm("Include special characters?")) {
  selectionArr = selectionArr.concat(symbolsArr);
}
if(confirm("Include numbers?")) {
  selectionArr = selectionArr.concat(numbersArr);
}
if(selectionArr = []) {
  alert("You must select at least one data type!");
  return false;
}

//I understand this is not an optimal solution to remove the odd JS-targeting-the-password-id-element text, but I don't know the correct way to solve that problem yet.
password = " ";


//builds password variable to be printed via passwordText in writePassword function
for( i = 0; i < passLength; i++) {
  var passChar = Math.floor(Math.random() * selectionArr.length);
  password = password + selectionArr[passChar];
}
return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);