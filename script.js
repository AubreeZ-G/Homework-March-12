// Assignment Code
var generateBtn = document.querySelector("#generate");
var x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
document.body.appendChild(x);

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  console.log(event);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var response = "Password must contain at least 8 characters, one special character, one number, and one uppercase letter.";
 submissionResponseEl.textContent = response;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (alphabetNumericCharacters.includes(key)) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent += event.key;
  }

  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");

//check box for capitol letters, lower case letters, special characters, number
//slider for length
//click button to generate