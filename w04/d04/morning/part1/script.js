console.log('Linked');

$( document ).ready(function() {

var nameClick = $("#name-click");
var countClick = $("#count-click");
var scrollClick = $("#scroll-click");

function nameButton() {
  var name = prompt("Hey what does this button say?");
  nameClick.html(name)
}

function alertDone() {
  var timer = prompt("Enter the number of seconds to wait before I alert 'DONE!'");

  function alertMe() {
    alert('DONE!');
  }

  setTimeout(alertMe, timer*1000);
}

function scroll() {
  var pixels = prompt("How many pixels should I scroll down?");
  var pixelsToScroll = parseInt(pixels);
  window.scrollTo(0, pixelsToScroll);
}

nameClick.click(nameButton);

countClick.click(alertDone);

scrollClick.click(scroll);

});

