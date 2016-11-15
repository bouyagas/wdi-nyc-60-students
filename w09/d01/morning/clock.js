const clock = () => {
  const minuteHand = document.querySelector('#minute-hand');
  const secondHand = document.querySelector('#second-hand');
  const hourHand = document.querySelector('#hour-hand');

  let secondDeg = 0;
  let minuteDeg = 0;
  let hourDeg = 0;

  setInterval(function() {
    secondDeg += 6;
    secondHand.style.transform=`rotate(${secondDeg}deg)`
  }, 1000);

  setInterval(function() {
    minuteDeg += 6;
    console.log(`minute=${minuteDeg}`);
    minuteHand.style.transform=`rotate(${minuteDeg}deg)`
  }, 60000);

  setInterval(function() {
    hourDeg += 0.5;
    console.log(`hour=${hourDeg}`);
    hourHand.style.transform=`rotate(${hourDeg}deg)`
  }, 60000);

};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Clocks loaded');
  clock();
});