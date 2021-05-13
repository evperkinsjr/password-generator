// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// need multiple arrays for computer to pick from
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// user clicks button to generate password

// user is prompted to choose a password length 8-128 characters (type in a number)
var pwLength = Number(window.prompt("Type a number between 8 and 128, please.", ""));

if (pwLength >= 8 && pwLength <= 128) {
    alert("Your password will be " + pwLength + " characters long.");
} else {
    alert("Please type a number between 8 and 128.");
}

// alert user that next 4 prompts ask for character types and they should choose at least one
var nextPrompt = confirm("Next, choose at least one of four character types: lowercase letters, uppcase letters, numbers, and special characters.");

// user is prompted for lowercase characters
var lowerChoice = confirm("Lowercase letters?");

// validate prompt

// user is prompted for uppercase characters
var upperChoice = confirm("Uppercase letters?");

// validate prompt

// user is prompted for numerical characters
var numericalChoice = confirm("Numbers?");

// validate prompt

// user is prompted for special characters
var specialChoice = confirm("Special characters?");

// validate prompt

// check if at least one character type is selected
// if not, alert user that at least one character type must be selected then rerun character prompts AND repeat check

// if at least one character type is selected THEN create password from selected criteria

// display password in alert OR write in the textarea