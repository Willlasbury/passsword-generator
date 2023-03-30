//  user questions
let lengthQuestions = {
  qLength:
    "How long do you want your password to be?\n(must be between 8 and 128 characters)",
  qNaN: "Sorry your answer must be a NUMBER?",
  qWrongLength:
    "Sorry your answer must be between 8 and 128 characters?",
};

let characterQuestions = [
  "Do you want to include upper case characters? (yes/no)",
  "Do you want to include lower case characters? (yes/no)",
  "Do you want to include numberic characters? (yes/no)",
  "Do you want to include special characters? (yes/no)",
];

// ask the user for length of password
function askLengthAgain(question = lengthQuestions.qLength) {
  // ask for length first time with default question
  let length = prompt(question);
  // check if input is a number and ask new question if it isn't
  if (isNaN(length)) {
    askLengthAgain(lengthQuestions.qNaN);
  }
  // convert variable length from string to number and check that the
  // value fits in our acceptable range
  else {
    length = Number(length);
    if (length >= 8 && length <= 128) {
      return length;
    } else {
      return askLengthAgain(lengthQuestions.qWrongLength);
    }
  }
}

// iterates through questions list to ask for all prompt values
// and returns an array of answers
function askCharacterQuestions(questions = characterQuestions) {
  let characterBool = [];
  for (let i = 0; i < questions.length; i++) {
    let answer = confirm(questions[i]);
    characterBool.push(answer);
  }
  if (characterBool.includes(true)) {
    return characterBool;
  } else {
    alert("You must select at least one value");
     return askCharacterQuestions();
  }
}

// CREATE VARIOUS ARRAYS AND DICTS

// pulled from https://gist.github.com/bendc/1e6af8f2d8027f2965da
// supplies all upper and lower case letters
// I hope there are no ethical concerns when the alternative was just
// typing all letters
const letters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.concat(caps.map((letter) => letter.toLowerCase()));
})();

// seperate letters into distinct groups to match criteria
const upperLetters = letters.slice(0, 26);
const lowerLetters = letters.slice(26);

// create an array of all single digit numbers
function getNumbers() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }
  return numbers;
}

// save an array of numbers
const numbers = getNumbers();

// array of all special characters
const special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const specialCharacters = special.split("");

// combine all character values
characterKey = [upperLetters, lowerLetters, numbers, specialCharacters];

// Compare the length, characterkey, and answerLog to create a dict for password criteria
function compare(key, log) {
  storage = [];
  for (let i = 0; i < log.length; i++)
    if (log[i] == true) {
      storage.push(key[i]);
    }

  return storage.flat();
}

// final function to generate password
function generatePassword() {
  let length = askLengthAgain();

  let answerLog = askCharacterQuestions();

  let usedKey = compare(characterKey, answerLog);

  let password = [];

  for (let i = 0; i < length; i++) {
    password[i] = usedKey[Math.floor(Math.random() * usedKey.length)];
  }
  password = password.join("");
  return password;
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
