/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hour) {
  if (parseInt(hour) < 12) {
    return "Good Morning"
  } 
  else if (parseInt(hour) > 12 && parseInt(hour) < 17) {
    return "Good Afternoon"
  } 
  else if (parseInt(hour) > 5) {
    return "Good Evening"
  } 
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  greeting = document.getElementById("greeting")
  greeting.innerText = string
}
