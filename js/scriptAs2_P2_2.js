/* ----------------------
// task 6 
var currentDate = new Date();
    console.log(currentDate);
*/


/* ----------------------
// task 7

var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October ", "November", "December"];
var year = prompt('Enter a year');
var month = prompt('Enter a month in number format (ex 1 , 2... ');;
var monthDuration = new Date(year , month, 1, -1).getDate();
var monthName = monthArr[month -1];
window.console.log(monthName + ' ' + year + ' ' + 'has ' + monthDuration + ' days in it.');
*/



/* ----------------------
// task 8 Get month name (with Prompt)  
var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October ", "November", "December"];
var monthQuery = window.prompt('Please enter the month and year');
monthQuery = new Date(monthQuery);
var monthName  = monthArr[monthQuery.getMonth()];
    console.log(monthName);

*/


/*  ----------------------
// task 9 Test if the day is a weekend or not.  
var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dateQuery = window.prompt('Please enter the full date');
    dateQuery = new Date(dateQuery);
var dayOfWeek  = dayArr[dateQuery.getDay()];
    switch (dayOfWeek){
        case "Sunday":
            console.log('It will be a ' + dayOfWeek + ' which is a weekend.');
        break;
            
        case "Saturday":
            console.log('It will be a ' + dayOfWeek + ' which is a weekend.');
        break;
        
        default:
            console.log('It will be a ' + dayOfWeek + ' which is a weekday.');
    }

*/




/*  ----------------------
// task 10 Getting "yesterdays day of the week" 
var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDate = new Date('June 20, 2016'); 
var dayOfWeek  = dayArr[currentDate.getDay()]; 
var yesterDay = dayArr[currentDate.getDay()-1]; 
    window.console.log(dayOfWeek);
    window.console.log(currentDate.getDay());
    window.console.log(yesterDay);
    window.console.log(currentDate);
*/





/*  ----------------------
// task 11 Getting the Initial for the day of the week
var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDate = new Date();
var dayOfWeek  = dayArr[currentDate.getDay()];
var dayOfWeekInitial = (dayOfWeek.charAt(0));
    window.console.log(dayOfWeekInitial);
*/


// End Tasks for Assignment 2 part 2.2

