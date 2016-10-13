$( document ).ready(function() {

function scrollTo(element, top, duration) {

  let distance = top - element.scrollTop();
  let perTick = distance / duration * 10;

  let clearScroll = setInterval(() => {
    if (duration < 0 || element.scrollTop === top) {
      clearInterval(clearScroll);
    } else {
      duration -= 10;
      element.scrollTop(element.scrollTop() + perTick);
    }
  }, 10);
}

// Scroll to bottom of window when document is loaded
window.scrollBy(0, 20000);

var launchButton = $("#launch");

var seconds = 10;

launchButton.click(buttonClickHandler);

function buttonClickHandler() {
  var temp = prompt("This is mission control: Please report the current temperature in fahrenheit.");
  var temperature = parseInt(temp);
  var fuel = prompt("Please report the current fuel percentage.");
  var fuelTank = parseInt(fuel);
  var password = prompt("Please report the password!");

  if ( (temperature <= 200) && (fuelTank >= 60) && (password === "fizzbuzz") ) {
    alert("The rocket ship is ready to launch! Start the countdown!!!");
    countdown();
  }
    // Attach a click event handler to the GO! button with id #
    // Prompt the user three times for current tempature in F, current fuel percentage, and the password
    // If temp is less than or equal to 200, the fuel is greater than 60, and the password is 'fizzbuzz', alert the User of an iminent launch and initiate countdown()
}

function timer() {
  launchButton.text(seconds);
  seconds -= 1;

  if (seconds === 0) {
    scrollTo($('body'), 0, 10000);
  }
}


function countdown() {
  setInterval(timer, 1000);
}


});
