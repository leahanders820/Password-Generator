// Assignment code here




function generatePassword(
  passwordlength,
  includelowercase,
  includeuppercase,
  includenumbers,
  includespecial,
) {
  console.log("button clicked");
   


  var passwordlength = prompt("choose a password length between 8-128 characters");

  if (passwordlength < 8 || passwordlength > 128) {
    alert("password length must be between 8-128 characters");
      return;

  }

  var includelowercase = confirm("click OK to include lowercase letters");
  var includeuppercase = confirm("click OK the include uppercase letters");
  var includenumbers = confirm("click OK to include numbers");
  var includespecial = confirm("click OK to include special characters");

  if (
    !includelowercase &&
    !includeuppercase &&
    !includenumbers &&
    !includespecial
  ) {
    alert('You must select at least one character type');
    return;
  }

  var password = generatePassword(
    passwordlength,
    includelowercase,
    includeuppercase,
    includenumbers,
    includespecial
  );

  



  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const special = '!#$%&()*+,-./:;<=>?@[^_`{|}~';


    var characters = '';

    if (includelowercase){
      characters += lowercase;
    }
    if (includeuppercase){
      characters += uppercase;
    }
    if (includenumbers){
      characters += numbers;
    }
    if (includespecial){
      characters += special;
    }

    






  
  return "password";
}






















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
