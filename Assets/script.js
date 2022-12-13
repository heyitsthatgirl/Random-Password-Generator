//Targets the generate password button for the event listener later
var generateBtn = document.querySelector("#generate");

//Defines the criteria variables as strings 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var nums = "1234567890";
var specChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

//Establishes variables to be defined later in the function
var chooseUp;
var chooseLow;
var chooseNums;
var chooseChars;
var criteria = "";
var chosen = "";
var combo = "";


var generatePassword = function () {

  //Takes user input for password length, turns it into an integer, and stores the data in the passLength variable to be used later
  var passLengthChoose = window.prompt("Please choose a password length between 8 and 128 characters:");
  var passLength = parseInt(passLengthChoose);
  console.log(passLength); //logs selected length in the console (debugging)

  //Makes sure the function only continues if the user chooser a number 8-128
  if (passLength >= 8 && passLength <= 128) {
    window.alert("Great! Let's choose some more criteria.");
  }
  else if (passLength < 8 || passLength > 128) {
    window.alert("Please choose a number between 8 and 128.")
   return ""; //exits function and makes sure no value is returned
  }
  else {
    return "";
  }
  
  //Prompts the user to choose what types of criteria they want to use for their password
  chooseUp = window.confirm("Use uppercase?"); 
  //Combines the strings of criteria variables based on user input
  if (chooseUp) {
    criteria = criteria.concat(uppercase);
    window.alert("Ok, we'll use some UPPERCASE letters.");
  }
  else {
    window.alert("Got it, no uppercase letters.");
  }
    
  chooseLow = window.confirm("Use lowercase?");
  if (chooseLow) {
    criteria = criteria.concat(lowercase);
    window.alert("Ok, we'll use some lowercase letters.");
  }
  else {
    window.alert("Got it, no lowercase letters.");
  }
    
  chooseNums = window.confirm("Use numbers?");  
  if (chooseNums) {
    criteria = criteria.concat(nums);
    window.alert("Ok, we'll use some numbers.");
  }       
  else {
    window.alert("Got it, no numbers.");
  }     
    
  chooseChars = window.confirm("Use special characters?");
  if (chooseChars) {
    criteria = criteria.concat(specChars);  
    window.alert("Ok, we'll use special characters.");   
  }
  else {
    window.alert("Got it, no special characters.")
  }
  //Stops the function if user does not confirm any criteria types
 if (!chooseUp && !chooseLow && !chooseNums && !chooseChars) {
    window.alert("Try again: Please choose at least one type of criteria.");
    return ""; 
  }

  console.log(criteria); //logs the new criteria string in the console (debugging)

  var newPass = "";

  //For loop combines the user selected criteria with the password length
  for (var i = 0; i < passLength; i++) { //sets the character limit to the number user chose
    chosen = Math.floor(Math.random() * criteria.length); //selects a random item from the criteria string but returns it as the index number, not the character
    console.log(chosen); //logs the randomly selected items in the console (debugging)
    combo = criteria[chosen]; //matches the index numbers of the chosen selections with their characters in the criteria string
    console.log(combo); //logs the characters in the console (debugging)
    newPass = newPass.concat(combo); //adds the randomly selected items to a new string one by one until character limit has been reached and loop ends
    console.log(newPass);//logs the new string of selected items in the console (debugging)
  }
  return(newPass); //displays selected criteria in the text box
  }
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

