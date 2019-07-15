/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){
  let newtime= parseInt(time,10);
  if (newtime < 12)
  return "Good Morning"
  if (newtime >17)
  return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(str){
  document.getElementById("greeting").innerText = str;
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
