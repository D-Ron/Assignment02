
/*   */
// Task 1
var coinFlip;

// Task 2 create a do while loop till it becomes tails  - lecture 3 slide 76
do {
var choice = window.prompt(" Please choose 'Heads' or 'Tails' ").toLowerCase();

// Task 3	
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);

// Task 4 Conditional Expression
    if (coinFlip == 0){ 
        result = "heads";
    }

    else  { 
    (coinFlip == 1)
        result = "tails";
    }
    
 // revised logic for coin flip game   
    if (choice == result) {
        window.console.log("Result is " + result + ", You picked " + choice + ". You win!");
    }
   
    else  {(choice != result) 
        window.console.log("Result is " + result + ", You picked " + choice + ". Sorry, you lose!");
    } 

} while (result == "heads");

			window.console.log("Result is TAILS, loop is finished"); 

// End Assignment 2 part 2.7