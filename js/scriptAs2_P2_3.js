/* ------------------------------
// Task 12 Get the max between 2 numbers 
var firstNumber = prompt('Please pick the first number');
var secondNumber = prompt('Please pick the second number'); 
var numberArr = [firstNumber, secondNumber];
    console.log(Math.max(firstNumber, secondNumber));
*/



/* ------------------------------
// Task 13 Display Student Grades  


for (i = 0; i <5; i++)  {
var studentArr = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];    
var studentMarks = [88, 77, 88, 95, 68];
var studentName = studentArr[i];    
var studentGrade = studentMarks[i];

if (studentGrade <60){
        window.console.log(studentName +  ", Your score is " + studentGrade + ". You got an F");
        }
else if (studentGrade <70) {
        window.console.log(studentName + ", Your score is " + studentGrade + ". You got a D");
        } 
        
else if (studentGrade <80) {
        window.console.log(studentName + ", Your score is " + studentGrade + ". You got a C");
        }        
                
else if (studentGrade <90) {
        window.console.log(studentName + ", Your score is " + studentGrade + ". You got a B");
        }

else if (studentGrade <100)
        window.console.log(studentName + ", Your score is " + studentGrade + ". YAY!! You got an A!");        
else {
        window.console.log(studentName + ", Oh No!!!! We never received your grade!?");
}
} // closes for loop


*/





/*  ------------------------------
// Task 14

for (var i = 1; i <=15;  i++) {
    var evenOrOdd = (i %2 == 0);
    
    if (evenOrOdd == false) {
        result = "Odd";
    }
    
    
    else {(evenOrOdd == true) 
        result = "Even";
    }
      
    window.console.log(i + ' ' + result);
}

*/


/* ------------------------------
// Task 15 Fizz Buzz

for (var i = 1; i <=100;  i++) {
    var fizz = (i %3 == 0);
    var buzz = (i %5 == 0);

    if (fizz == true) {
        var fizzResult = "Fizz";
    }
    
    else {(fizz == false) 
        fizzResult = "";
    }
    
    if (buzz == true) {
        var buzzResult = "Buzz";
    }
    
    else {(fizz == false) 
        buzzResult = "";
    }
    
    window.console.log(i + ' ' + fizzResult + buzzResult);
}
*/



// End Assignment 2 part 2.3

