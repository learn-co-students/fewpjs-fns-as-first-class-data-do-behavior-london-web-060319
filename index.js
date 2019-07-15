/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  if( parseInt(string) > 0 && parseInt(string) < 12 ) {
      return "Good Morning"
  } else if( string < "17:00" && string > "12:00" ) {
      return "Good Afternoon"
  } else if( string > "17:00" ){
      return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}

console.log(greet("8:00"))