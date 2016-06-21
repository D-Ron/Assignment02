window.confirm("Are you ready to begin? Please check the console window after confirming.");
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



// End Assignment 2 part 2.9