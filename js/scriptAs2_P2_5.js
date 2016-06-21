/*  
//Task 1
var coinFlip = Math.random();

//Task2
var choice = window.prompt(" Please choose 'Heads' or 'Tails' ").toLowerCase();

// Task 3
    if (coinFlip < 0.5){ 
        result="heads";
    }

    else  { 
    (coinFlip > 0.5)
        result = "tails";
    }

//Task 4
    if (choice == "heads" && result == "heads") {
        alert("The flip was heads and you picked heads. You win!");
    }
//Task 5   
    else if (choice == "tails" && result == "heads"){ 
        alert("The flip was heads and you picked tails. Sorry, you lose!");
    }
//Task 6
    else if (choice == "heads" && result == "tails"){ 
        alert("The flip was tails and you picked heads. Sorry, you lose!");
    }    
//Task 7   
    else { 
    (choice == "tails" && result == "tails")
        alert("The flip was tails and you picked tails. You win!");
    }    
*/  



/*  ----------------------
// Task 8  */
var coinFlip = Math.random();
    coinFlip = Math.round(coinFlip)
var choice = window.prompt(" Please choose 'Heads' or 'Tails' ").toLowerCase();

    if (coinFlip == 0){ 
        result = "heads";
    }

    else  { 
    (coinFlip == 1)
        result = "tails";
    }
    
    if (choice == "heads" && result == "heads") {
        alert("The flip was heads and you picked heads. You win!");
    }
   
    else if (choice == "tails" && result == "heads"){ 
        alert("The flip was heads and you picked tails. Sorry, you lose!");
    }

    else if (choice == "heads" && result == "tails"){ 
        alert("The flip was tails and you picked heads. Sorry, you lose!");
    }    
   
    else { 
    (choice == "tails" && result == "tails")
        alert("The flip was tails and you picked tails. You win!");
    }                     

// End Assignment 2 part 2.5