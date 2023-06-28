// var interval1=setInterval(callback1,4000)
// function callback1(){
//     console.log("print after 4 second");
//     clearInterval(interva1)
// }


// Example


// function callback(){
//     console.log("print after 3 seconds");
    
// }
// var intervalID=setInterval(callback,3000)
// setTimeout(function() {
//     clearInterval(intervalID);
//     console.log('stop function');
// },10000);


// Define the callback function
function greet() {
    console.log('Hello, world!');
  }
  
  // Call the callback function every 2 seconds using setInterval
  var intervalId = setInterval(greet, 2000);
  
  // After 10 seconds, stop the interval
  setTimeout(function() {
    clearInterval(intervalId);
    console.log('Interval stopped.');
  }, 10000);
  
