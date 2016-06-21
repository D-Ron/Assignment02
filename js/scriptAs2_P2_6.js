/*   */
// Task 1
var coinFlip;

// Task 2 create a FOR loop to run 10 times 
for (var i = 1; i <= 10; i++) {

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
			console.log(i);   

} // closes loop

// End Assignment 2 part 2.6