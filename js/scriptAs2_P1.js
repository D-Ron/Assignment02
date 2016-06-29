/*  ---------------------- 
//Task 1 
var userName = window.prompt("What is your name?");
    window.alert(userName.length);
*/

/*  ---------------------- 
//Task 2  
var userName = window.prompt("What is your name?");
var digit = window.prompt ("Pick a number");
    console.log(userName.charAt(digit));
*/


/*  ----------------------
//Task 3 
var firstName = window.prompt("What is your first name?");
var lastName = window.prompt("What is your last name?");
var userName = firstName.concat(" " + lastName);
    window.alert('Your name is: ' + userName);
*/ 


/* ----------------------
//Task 4  
var sentence = "The quick brown fox jumped over the lazy dog.";
    window.alert(sentence.indexOf('fox'));
 */


/* ----------------------
//Task 5   
var sentence = "The quick brown fox jumped over the lazy dog.";
    window.alert(sentence.lastIndexOf('fox'));
*/


/*  ----------------------
//Task 6   
var sentence = "The quick brown fox jumped over the lazy dog.";
var fullName = prompt('What is your full name?');
    window.alert(sentence.replace('the lazy dog', fullName));
*/


/*  ----------------------
//Task 7    
var sentence = "The quick brown fox jumped over the lazy dog.";
var pickWord = prompt('Please select 1 word from the following sentence: \n\"The quick brown fox jumped over the lazy dog.\" ');
    window.alert(sentence.search(pickWord));
*/



/*  ---------------------- 
//Task 8    
var old_string = "The quick brown fox jumped over the lazy dog.";
    //window.console.log(old_string.indexOf('the lazy dog')); // index of 32
    //window.console.log(old_string.indexOf('.')); // index of 44
var new_string = old_string.slice(32, 45);
    window.alert(new_string);
*/


/*  ---------------------- 
//Task 9  
var sentence = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.          ";
var sentence =  sentence.toLowerCase();
    window.alert(sentence.trim());
*/


/*  ----------------------  
//Task 10 
var sentence; 
    sentence = prompt("Please enter a sentence of your choosing.")
    sentence = sentence.toUpperCase().slice(0, 1) + sentence.slice(1);
    window.console.log(sentence);
*/




// End Tasks for Assignment 2 part 1