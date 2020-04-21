/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const time = timeString.split(":");
  const timeTime = parseInt(time[0]);
  if (timeTime < 12) {
    return "Good Morning";
  } else if (timeTime > 12 && timeTime < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const phrase = document.getElementById("greeting");
  phrase.innerText = string;
}