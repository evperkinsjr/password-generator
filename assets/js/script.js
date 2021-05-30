/* assignment code */
var generateBtn = document.querySelector("#generate");

// String variables for computer to pick from
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&?_-+=.,~";
var selectedCharacters = "";

// user clicks "Generate" button
generateBtn.addEventListener("click", generate);


function generate() {
	// Password Length Prompt
	var pwLength = prompt("How many characters? Type a number between 8 and 128.");
		if (pwLength >= 8 && pwLength <= 128) {
			alert("Your password will be " + pwLength + " characters long.");
		} else {
        alert("Please type a number between 8 and 128.");
        pwLength = prompt("Type a number between 8 and 128, please.");
    }

	// Character type prompts
	var lowerCase = confirm("Do you want lowercase letters?")
	var upperCase = confirm("Do you want uppercase letters?")
	var numbers = confirm("Do you want numbers?")
	var specChar = confirm("Do you want special characters?")

	 // Checks if at least one character type was selected
    while (!lowerCase && !upperCase && !numbers && !specChar) {
        alert("Please choose at least one character type");
        lowerCase = confirm("Do you want lowercase letters?");
        upperCase = confirm("Do you want uppercase letters?");
        numbers = confirm("Do you want numbers?");
        specChar = confirm("Do you want special characters?");
    }

	// If character type selected, add it to password set
	if (upperCase) {
		selectedCharacters = selectedCharacters.concat(upperChar)
	}
	if (lowerCase) {
		selectedCharacters = selectedCharacters.concat(lowerChar)
	}
	if (numbers) {
		selectedCharacters = selectedCharacters.concat(numericalChar)
	}
	if (specChar) {
		selectedCharacters = selectedCharacters.concat(specialChar)
	}
		generatePassword(pwLength);
	
}

// Creating Password based on above selections
function generatePassword(length) {
	var result = "";
	var characters = selectedCharacters;
	var charactersLength = characters.length;

	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random()*charactersLength));
	}
	var passwordText = document.querySelector("#password");
	passwordText.textContent = result
	return;
}