console.log('Linked');

$( document ).ready(function() {

let nameClick = $("#name-click");
let countClick = $("#count-click");
let scrollClick = $("#scroll-click");

function nameButton() {
  let name = prompt("Hey what does this button say?");
  nameClick.html(name)
}

function alertDone() {
  let timer = prompt("Enter the number of seconds to wait before I alert 'DONE!'");

  function alertMe() {
    alert('DONE!');
  }

  setTimeout(alertMe, timer*1000);
}

function scroll() {
  let pixels = prompt("How many pixels should I scroll down?");
  let pixelsToScroll = parseInt(pixels);
  window.scrollTo(0, pixelsToScroll);
}

nameClick.click(nameButton);

countClick.click(alertDone);

scrollClick.click(scroll);

});

