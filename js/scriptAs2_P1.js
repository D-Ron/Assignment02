/*  ---------------------- 
//Task 1 
var userName = window.prompt("What is your name?");
    window.alert(userName.length);
*/

/*  ---------------------- 
//Task 2  lecture 2 - slide 6
var userName = window.prompt("What is your name?");
var digit = window.prompt ("Pick a number");
    console.log(userName.charAt(digit));
*/


/*  ----------------------
//Task 3  lecture 2 - slide 8
var firstName = window.prompt("What is your first name?");
var lastName = window.prompt("What is your last name?");
var userName = firstName.concat(" " + lastName);
    window.alert('Your name is: ' + userName);
*/ 


/* ----------------------
//Task 4     lecture 2 - slide 10
var sentence = "The quick brown fox jumped over the lazy dog.";
    window.alert(sentence.indexOf('fox'));
 */


/* ----------------------
//Task 5     lecture 2 - slide 11  
var sentence = "The quick brown fox jumped over the lazy dog.";
    window.alert(sentence.lastIndexOf('fox'));
*/


/*  ----------------------
//Task 6     lecture 2 - slide 14   
var sentence = "The quick brown fox jumped over the lazy dog.";
var fullName = prompt('What is your full name?');
    window.alert(sentence.replace('the lazy dog', fullName));
*/


/*  ----------------------
//Task 7     lecture 2 - slide 15    
var sentence = "The quick brown fox jumped over the lazy dog.";
var pickWord = prompt('Please select 1 word from the following sentence: \n\"The quick brown fox jumped over the lazy dog.\" ');
    window.alert(sentence.search(pickWord));
*/



/*  ---------------------- 
//Task 8     lecture 2 - slide 16-18     
var old_string = "The quick brown fox jumped over the lazy dog.";
    //window.console.log(old_string.indexOf('the lazy dog')); // index of 32
    //window.console.log(old_string.indexOf('.')); // index of 44
var new_string = old_string.slice(32, 45);
    window.alert(new_string);
*/


/*  ---------------------- 
//Task 9       lecture 2 slide 20 and 25 
var sentence = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.          ";
var sentence =  sentence.toLowerCase();
    window.alert(sentence.trim());
*/


/*  ---------------------- 
//Task 10      lecture 2  (lecture 3 slide 27?)
var sentence = "the quick brown fox jumped over the lazy dog.";
    window.alert(sentence.replace('t', 'T'));

*/


// End Tasks for Assignment 2 part 1