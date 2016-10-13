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

let launchButton = $("#launch");

let seconds = 10;

launchButton.click(buttonClickHandler);

function buttonClickHandler() {
  let temp = prompt("This is mission control: Please report the current temperature in fahrenheit.");
  let temperature = parseInt(temp);
  let fuel = prompt("Please report the current fuel percentage.");
  let fuelTank = parseInt(fuel);
  let password = prompt("Please report the password!");

  if ( (temperature <= 200) && (fuelTank >= 60) && (password === "fizzbuzz") ) {
    alert("The rocket ship is ready to launch! Start the countdown!!!");
    countdown();
  }
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
