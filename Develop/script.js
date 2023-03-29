//  user questions
let lengthQuestions = {
  qLength:
    "How long do you want your password to be?\n(must be between 8 and 128 characters)",
  qIdiot: "Sorry your answer must be a NUMBER?",
  qNotFollowDirections: "Sorry your answer must be between 8 and 128 characters?",
};

let characterQuestions = {
  qUpper: "Do you want to include upper case characters? (yes/no)",
  qLower: "Do you want to include lower case characters? (yes/no)",
  qNumeric: "Do you want to include numberic characters? (yes/no)",
  qSpecial: "Do you want to include special characters? (yes/no)",
};

// pulled from https://gist.github.com/bendc/1e6af8f2d8027f2965da
// supplies all upper and lower case letters
// I hope there are no ethical concerns when the alternative was just
// typing all letters 
const letters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.concat(caps.map(letter => letter.toLowerCase()));
})();

// seperate letters into distinct groups to match criteria
upperLetters = letters.slice(0, 26)
lowerLetters = letters.slice(26)

function getNumbers() {
  
  let numbers = []
  for (let i = 0; i < 10; i++) {
    numbers.push(i)
  }
  return numbers
}

numbers = getNumbers()

// array of all special characters
const specialCharacters = "`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~";


// queryKey = {
//   upper: upperLetters,
//   lower: lowerLetters,
//   numberic: 
//   special:
// }


// recursively ask the user for length of password
function askLengthAgain(question = lengthQuestions.qLength) {
  // ask for length first time with default question
  let length = prompt(question);
  // check if input is a number and ask new question if it isn't
  if (isNaN(length)) {
    askLengthAgain(lengthQuestions.qIdiot);
  }
  // convert variable length from string to number and check that the
  // value fits in our acceptable range
  else {
    length = Number(length);
    if (length >= 8 && length <= 128) {
      return length;
    } else {
      askLengthAgain(lengthQuestions.qNotFollowDirections);
    }
  }
}

// iterates through questions list to ask for all prompt values
// and returns an array of answers
function askCharacterQuestions() {
  let answerLog = []
  for (let key in characterQuestions) {
    key = confirm(characterQuestions[key]);
    answerLog.push(key);
  }
  return answerLog
}

// Do something with criteria
// upper, lower, numberic, special
function criteria(quaryArray) {


  
  return quaryKey
}


// uses answerLog from askCharacterQuestions and length to create password
function conditionalPassword(length, queryArray, allLetters, allSpecialCharacters) {
  randomNumber = Math.floor(Math.random() * arr)
  
  console.log(randomNumber)
}



// final function to generate password
function generatePassword() {

  // length = askLengthAgain();

  // answerLog = askCharacterQuestions()

  // use conditionals 

  // console.log(answerLog)
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
