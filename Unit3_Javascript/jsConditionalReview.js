// A function is a set of instructions
// that infrorms the computer on what to do
// with data.


// Conditional Statements use the if/else
// keywords to allow us create multiple
// custom outcomes based on the data
// we recieve

function timeOfDay(time) {
    if  (time == 'am')
        console.log("it is the morning.");
      } else if (time == 'pm') {
        console.log ("it is the evening.");
      } else {
        console.log("sorry, cannot understand input.");
    }
    
    
    timeOfDay()
    // create a function that will give 
    // someone a letter grade based on their
    // numerical grade score. For example,
    // if someone has a 90, your program
    // should print you have an A, if the
    // data entered is an 80,
    // the program should print you have a B,
    // etc.
    
    function GradeScale(grade) {
        if (grade == '90')
            console.log("the grade is an A.");
          } else if (grade == '80') {
            console.log ("the grade is a B.");
          } else if (grade == '70')
            console.log("the grade is a C.")
          { else if (grade == '60') }