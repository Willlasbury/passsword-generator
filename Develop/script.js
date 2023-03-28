//  user questions
let questionsToAsk = {
  qLength:
    "How long do you want your password to be?\n(must be between 8 and 128 characters)",
  qIdiot: "Sorry your answer must be a NUMBER?",
  qNotFollowDirections: "Sorry your answer must be between 8 and 128 characters?",
  qUpper: "Do you want to include upper case characters? (yes/no)",
  qLower: "Do you want to include lower case characters? (yes/no)",
  qNumeric: "Do you want to include numberic characters? (yes/no)",
  qSpecial: "Do you want to include special characters? (yes/no)",
};


// recursively ask the user for length of password
function askLengthAgain(question = questionsToAsk.qLength) {
  // ask for length first time with default question
    let length = prompt(question);
  // check if input is a number and ask new question if it isn't
    if (isNaN(length)) {
      askLengthAgain(questionsToAsk.qIdiot);
    } 
    // convert variable length from string to number and check that the
    // value fits in our acceptable range
    else {
    length = Number(length);
      if (length >=8 && length <= 128){
      return length  }
      else {
        askLengthAgain(questionsToAsk.qNotFollowDirections)
      }
  }
} 
// }

// ask for password length
// function askLength() {
//   let length = prompt(questionsToAsk.qLength);

//   // // check if input is a number
//   if (isNaN(length)) {
//     askLengthAgain(questionsToAsk.qIdiot);
//   } else {
//     length = Number(length);
//     console.log(typeof length, length);
//   }
// }

// iterates through questions list to ask for all prompt values
// function askQuestions() {
//   for (let key in questionsToAsk) {
//     key = confirm(questionsToAsk[key]);
//     console.log(key);
//   }
// }

function passworkCriteria() {}

// final function to generate password
function generatePassword() {
  askLengthAgain();
}

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
