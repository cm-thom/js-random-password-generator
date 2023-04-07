// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var lowercaseLettersStr = "abcdefghijklmnopqrstuvwxyz"

var lowercaseLettersArr = lowercaseLettersStr.split('');
var uppercaseLettersArr = lowercaseLettersStr.toUpperCase().split('');




//write generate password function that prompts for:
// 1. prompt user for password criteria
//      a. password length, 8 - 128 characters
//        - under 8 chars alerts password too short
//        - over 128 chars alerts password too long
//      b. prompt to in/exclude lowercase, uppercase, numbers, special chars 
// 2. validate the input
//    - ???????
// 3. generate password based on user inputs
//    - math.floor, math.random
//    - ???????
//    - wow so password
// 4. display password to the page/screen. already done lmao

function generatePassword() {
  var passLength = prompt("Please specify password length between 8-128 characters:", "8-128 characters");

  if(passLength < 8 || passLength > 128) {
    alert("try again dummy");
  }


  return "generated password variable goes here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//make generate password function to return a value for var password in writePassword function

//figure out how tf document.querySelector("password") works