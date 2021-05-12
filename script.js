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

// user clicks button to generate password

// user is prompted to choose a password length 8-128 characters (type in a number)

// validate prompt

// alert user that next 4 prompts ask for character types and they should choose at least one

// user is prompted for lowercase characters

// validate prompt

// user is prompted for uppercase characters

// validate prompt

// user is prompted for numerical characters

// validate prompt

// user is prompted for special characters

// validate prompt

// check if at least one character type is selected
// if not, alert user that at least one character type must be selected then rerun character prompts AND repeat check

// if at least one character type is selected THEN create password from selected criteria

// display password in alert OR write in the textarea