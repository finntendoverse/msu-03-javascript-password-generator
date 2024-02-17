// Selects "generate" button
var generateBtn = document.querySelector("#generate");

// Arrays of the different values that can be included in the password
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters would you like in your password?", "enter a number between 8 and 128");
  if (isNaN(passwordLength)) {
    alert("Please type a number!");
    writePassword();
  } else {
    alert("You selected "+ passwordLength);
    }

    var lowerCase = confirm("Do you want to include lowercase characters?");
    var generatedPassword = "";                                                             // This creates the string for the generatedPassword below
    if (lowerCase) {
      // Generate lowercase characters
      for (i = 0; i < passwordLength; i++) {
        let randomLowerCase = Math.floor(Math.random() * lowerCaseCharacters.length);
        let lowerCaseCharacter = lowerCaseCharacters[randomLowerCase];
        generatedPassword += lowerCaseCharacter;
      }
      alert("your password is " + generatedPassword);
    } else {
      // do not generate lowercase characters
    }


  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Runs writePassword function when "generate" button is clicked
generateBtn.addEventListener("click", writePassword);


// Finn's code













// var lowerCase = confirm("Do you want to include lowercase characters?");
// if (lowerCase) {
//   // Generate lowercase characters
// } else {
//   // do not generate lowercase characters
// }

// var upperCase = confirm("Do you want to include lowercase characters?");
// if (upperCase) {
//   // Generate uppercase characters
// } else {
//   // do not generate uppercase characters
// }

// var numbers = confirm("Do you want to include numbers?");
// if (numbers) {
//   // Generate numbers
// } else {
//   // do not generate numbers
// }

// var specialCharacters = confirm("Do you want to include special characters?");
// if (specialCharacters) {
//   // Generate special characters
// } else {
//   // do not generate special characters
// }