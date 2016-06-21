
/*  ----------------------
// Part 4 */

// Task 1
var intro = window.confirm("Are you ready to play Hitchhiker's Guide to the Galaxy?");
    if  ( intro == true) {
        window.alert("Awesome, our hero is waiting!");
    } else {
        window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");    
    }

// Task 2
 window.alert ("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

// Task 3
var directionChoice = window.prompt ('Which direction would you like to head (please enter forward, left, or right?');    

// Task 4
    directionChoice = directionChoice.toLowerCase();
    switch (directionChoice) {
        case "forward":
        window.alert("You walk about 100 yards and safely make your way out of the cave!");
        break;

        case "left":
        window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");    
        break;

        case "right": 
        window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");    
        break;

        default: 
        window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");    
    }


// Task 5
var rateThisGame = window.prompt ("What do you think of this game? \nPlease pick between 1 - 10");  

// Task 6
    if (rateThisGame > 10) {
	prompt('Please enter a valid response. Choose between 1 and 10.');	
  	}

    else if  (rateThisGame >5 ) {
        window.console.log("Thank you, we will continue to make improvements to the game!");
    } else { 
        window.console.log("Whatever, you weren’t very good at this game anyway!");    
    }
  



// End Assignment 2 part 2.4


