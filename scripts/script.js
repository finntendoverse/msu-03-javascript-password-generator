// Selects "generate" button
var generateBtn = document.querySelector("#generate");

// Arrays of the different values that can be included in the password
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  var generatedLowerCasePassword = "";                                                             // This creates the string for the generatedPassword below
  if (lowerCase) {
    // Generate lowercase characters
    for (i = 0; i < passwordLength; i++) {
      let randomLowerCase = Math.floor(Math.random() * lowerCaseCharacters.length);
      let lowerCaseCharacter = lowerCaseCharacters[randomLowerCase];
      generatedLowerCasePassword += lowerCaseCharacter;
    }
    alert("your password is " + generatedLowerCasePassword);
  } else {
    // do not generate lowercase characters
  }

  var upperCase = confirm("Do you want to include uppercase characters?");
  var generatedUpperCasePassword = "";
  if (upperCase) {
    // Generate uppercase characters
    for (i = 0; i < passwordLength; i++) {
      let randomUpperCase = Math.floor(Math.random() * upperCaseCharacters.length);
      let upperCaseCharacter = upperCaseCharacters[randomUpperCase];
      generatedUpperCasePassword += upperCaseCharacter;
    }
    alert("your password is " + generatedUpperCasePassword);
  } else {
    // do not generate uppercase characters
  }

  var numbers = confirm("Do you want to include numbers?");
  var generatedNumberPassword = "";
  if (numbers) {
    // Generate numbers
    for (i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * numberCharacters.length);
      let numberCharacter = numberCharacters[randomNumber];
      generatedNumberPassword += numberCharacter;
    }
    alert("your password is " + generatedNumberPassword);
  } else {
    // do not generate numbers
  }

  var special = confirm("Do you want to include special characters?");
  var generatedSpecialCharacterPassword = "";
  if (special) {
    // Generate special characters
    for (i = 0; i < passwordLength; i++) {
      let randomSpecialCharacter = Math.floor(Math.random() * specialCharacters.length);
      let specialCharacter = specialCharacters[randomSpecialCharacter];
      generatedSpecialCharacterPassword += specialCharacter;
    }
    alert("your password is " + generatedSpecialCharacterPassword);
  } else {
    // do not generate special characters
  }

}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Runs writePassword function when "generate" button is clicked
generateBtn.addEventListener("click", writePassword);
