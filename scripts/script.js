// Selects "generate" button
var generateBtn = document.querySelector("#generate");

// Selects the text within the password box
var passwordText = document.querySelector("#password");

// Arrays of the different values that can be included in the password
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters would you like in your password?", "enter a number between 8 and 128");

  if (!passwordLength) {                                                                // IF the user clicks "cancel"
    alert("A password will not be created");                                            // THEN they will be alerted that a password will not be created
    return;                                                                             // THEN the function will end
  }

  if (isNaN(passwordLength)) {                                                          // IF the user types in something other than a number
    alert("Please type a number!");                                                     // THEN they will be asked to enter a number
    writePassword();                                                                    // THEN they will be prompted again
  } else if (passwordLength < 8 || passwordLength > 128) {                              // IF the password is less than 8 characters or more than 128 characters
    alert("Your password must be between 8 and 138 characters");                        // THEN they will be alerted that their password falls outside of the accepted range
    writePassword();                                                                    // THEN they will be prompted again
  } else {}

  // The user will be asked if they want to include lowercase characters
  var lowerCase = confirm("Do you want to include lowercase characters?");

  // This creates the string for the generatedPassword below
  var generatedLowerCasePassword = "";
  
  if (lowerCase) {                                                                      // IF the user wants to include lowercase letters                                                
    for (i = 0; i < passwordLength; i++) {                                              // FOR each character within their password length
      //Randomly generate a number within the string & select its value                 //
      let randomLowerCase = Math.floor(Math.random() * lowerCaseCharacters.length);     //
      let lowerCaseCharacter = lowerCaseCharacters[randomLowerCase];                    // THEN a random lowercase character will be generated
      generatedLowerCasePassword += lowerCaseCharacter;                                 // THEN the lowercase characters will be combined into a string
    }
  } else {                                                                              // IF the user does not want to include lowercase letters
    generatedLowerCasePassword = null;                                                  // THEN random lowercase characters will not be generated
  }

  // The user will be asked if they want to include uppercase characters
  var upperCase = confirm("Do you want to include uppercase characters?");
  
  // This creates the string for the generatedPassword below
  var generatedUpperCasePassword = "";
  
  if (upperCase) {                                                                      // IF the user wants to include uppercase letters    
    for (i = 0; i < passwordLength; i++) {                                              // FOR each character within their password length
      //Randomly generate a number within the string & select its value                 //
      let randomUpperCase = Math.floor(Math.random() * upperCaseCharacters.length);     //
      let upperCaseCharacter = upperCaseCharacters[randomUpperCase];                    // THEN a random uppercase character will be generated
      generatedUpperCasePassword += upperCaseCharacter;                                 // THEN the uppercase characters will be combined into a string
    }
  } else {                                                                              // IF the user does not want to include uppercase letters
    generatedUpperCasePassword = null                                                   // THEN random uppercase characters will not be generated
  }

  // The user will be asked if they want to include number characters
  var numbers = confirm("Do you want to include numbers?");

  // This creates the string for the generatedPassword below
  var generatedNumberPassword = "";

  if (numbers) {                                                                        // IF the user wants to include numbers
    for (i = 0; i < passwordLength; i++) {                                              // FOR each character within their password length
      //Randomly generate a number within the string & select its value                 //
      let randomNumber = Math.floor(Math.random() * numberCharacters.length);           //
      let numberCharacter = numberCharacters[randomNumber];                             // THEN a random number will be generated
      generatedNumberPassword += numberCharacter;                                       // THEN the numbers will be combined into a string
    }
  } else {                                                                              // IF the user does not want to include numbers
    generatedNumberPassword = null                                                      // THEN random numbers will not be generated
  }

  // The user will be asked if they want to include special characters
  var special = confirm("Do you want to include special characters?");    
  
  // This creates the string for the generatedPassword below
  var generatedSpecialCharacterPassword = "";

  if (special) {                                                                        // IF the user wants to include special characters
    for (i = 0; i < passwordLength; i++) {                                              // FOR each character within their password length
      //Randomly generate a number within the string & select its value                 //
      let randomSpecialCharacter = Math.floor(Math.random() * specialCharacters.length);//
      let specialCharacter = specialCharacters[randomSpecialCharacter];                 // THEN a random special character will be generated
      generatedSpecialCharacterPassword += specialCharacter;                            // THEN the special characters will be combined into a string
    }
  } else {                                                                              // IF the user does not want to include special characters
    generatedSpecialCharacterPassword = null                                            // THEN random special characters will not be generated
  }

  // Creates an array of all the values selected by the user
  var selectedCharacters = [generatedLowerCasePassword, generatedUpperCasePassword, generatedNumberPassword, generatedSpecialCharacterPassword];

  // Joins all the values into a new string
  var combinedString = selectedCharacters.join("");

  // Splits all the values into individual characters
  var charactersArray = combinedString.split("");

  // This creates the string for the FINAL generatedPassword below
  let finalGeneratedPassword = "";

  if (generatedLowerCasePassword === null && generatedUpperCasePassword === null && generatedNumberPassword === null && generatedSpecialCharacterPassword === null) {   // IF the user did not select any characters
    alert("You didn't select any characters!")                                                                                                                          // THEN they will be alerted that they didn't select any characters
    writePassword();                                                                                                                                                    // THEN they will be prompted again
  } else {                                                                                                      // IF the user did select any of the characters
    for (i=0; i < charactersArray.length; i++) {                                                                // FOR each character in the combined charactersArray
      //Randomly generate a number within the string & select its value                                         //
      let randomizeArray = Math.floor(Math.random() * charactersArray.length);                                  //
      let randomizedArray = charactersArray[randomizeArray];                                                    // THEN each value will be randomized once more
      finalGeneratedPassword += randomizedArray;                                                                // THEN each value will be combined into a string
      finalGeneratedPassword = finalGeneratedPassword.slice(0, passwordLength);                                 // THEN the selection is sliced to include only the number of characters that the user initially selected
    }
    
    // Inputs the final Generated Password into the Password Box
    passwordText.value = finalGeneratedPassword;
  }
}

// Runs writePassword function when "generate" button is clicked
generateBtn.addEventListener("click", writePassword);
