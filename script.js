// Additional Code for fun here
var area=document.querySelector("textarea")
area.setAttribute("style", "font-size:25px; font-weight:bold;")

// Assign Variables and Arrays
var characterLength = 8;
var choiceArr=[];

var specialCharArr=['@','!','$','%','^','&','*','_','#','*','-'];
var lowerCaseArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr=['0','1','2','3','4','5','6','7','8','9'];

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var desiredPrompts= myPrompts();
  
  
  if(desiredPrompts){
    var newPassword = generatePassword();
    var passwordText= document.querySelector("#password")
    passwordText.value= newPassword;
    
  } else{
    passwordText.value="";
  }
}

// Step 3: Generate a password that matches the selected the criteria

function generatePassword(){
  // console.log("Password Generated")
  var password= "";
  for(var i=0; i <characterLength; i++){
    var randomPassword= Math.floor(Math.random() * choiceArr.length);
    
    password = password + choiceArr[randomPassword];
  }
  // Step 4: Display the password within text area
  return password;
}

// Step 1: Need to prompt the user for Password Criteria
//    -Password length 8<129
//    -Needs to confirm whether to include lowercase,uppercase,numeric, and or special characters
// Step 2: Validate  the input and atleast one character type is selected 

function myPrompts(){
  choiceArr=[];
  
  characterLength= parseInt(prompt('How many Characters do you want your password to have? Min: 8 characters Max: 128 characters'));
  
  if (isNaN(characterLength) || characterLength<8 || characterLength>128){
    alert('Character length has to be a number between 8 - 128. Please try again');
    return false;
  }
  
  if (confirm('Would you like to include lower case letters?')){
    choiceArr=choiceArr.concat(lowerCaseArr);
  }
  
  if (confirm('Would you like to include Upper Case letters?')){
    choiceArr=choiceArr.concat(upperCaseArr);
  }
  
  if (confirm('Would you like to include numeric values?')){
    choiceArr=choiceArr.concat(numberArr);
  }
  
  if (confirm('Would you like to include special characters?')){
    choiceArr=choiceArr.concat(specialCharArr);
  }
  return true;
}



