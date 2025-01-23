// Loops - A programming construct
// that repeats a set of code instructions
// over and over until a specific condition
// is met.

// While Loops - This is a special
// type of loop that repeats code instructions 
// over and over so long
// as a specific condition is TRUE.

console.log ('js connected internal html')
function basicLoop() {
  var x = 2;
  while (x + 2 == 4) {
    console.log ('this code will repeat forever.');
  }
}
function welcome () {
    console.log ('Excellent! You are using JS.')
}

function basicLoop(){
  var value = 0

  while (value < 10) { // 0 is less than 10. This is a true statement.
    console.log("this message will repeat.")
  }
}
basicLoop()


function trafficLight(){
  var lightColors = ["red", "yellow", "green"];
  var timer = 0;
  while (timer < 1 && timer < 10) {
    console.log("this light is " + lightcolor[0]);
    timer += 1;
  }  
}