/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let newtime= parseInt(time,10);
  if (newtime < 12)
  return "Good Morning"
  if (newtime >17)
  return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(message){
  document.getElementById('greeting').innerText=message;
}
/* Write your implementation of displayMessage() */
