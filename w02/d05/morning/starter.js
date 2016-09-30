console.log('javascript connected!')

$(function(){
  //build your functions here:

  var counter = 1;
  var count = 0;

  function flatten2(){
    console.log('box2 is 200px');
    $('#box2').css('height','200px')
  }

  function unflatten2() {
    console.log('box2 is back to normal height')
    $('#box2').css('height','400px')
  }

  function smallerBy20() {
    console.log('box1 is 20% smaller');
    var height1 = $('#box1').height();
    if (counter%5 === 0) {
      console.log('Double every 5th time')
      $('#box1').css('height', height1*2)
    } else {
      $('#box1').css('height', height1*0.8)
    }
    counter++
  }

  function biggerBy20() {
    console.log('box1 1 is 20% bigger');
    var height1 = $('#box1').height();
    $('#box1').css('height', height1*1.2)
  }

  function superClick() {
    console.log('Super click activated!');
    $('#box1').css('background-color', 'navy')
    $('#box2').css('background-color', 'maroon')
  }

  function rounder() {
    console.log('Super click part 2!')
    $('#box1').css('border-radius', '10px');
    $('#box1').css('background-color', 'teal')
    $('#box2').css('background-color', 'rebeccapurple')
  }

  function takeOver() {
    console.log('box 2 takes over!')
    var height2 = $('#box2').height()
    var width2 = $('#box2').width()
    if (count === 2) {
      $('#box2').css('height', '100vh')
      $('#box2').css('width', '100vw')
      $('#box2').css('left', '0px')
      $('#box2').css('top', '0px')
    }
    count++
  }

  //apply your event listners here:
  $('#box1').hover(flatten2, unflatten2)

  $('#box2').mouseenter(smallerBy20);

  $('#box1').click(biggerBy20);

  $('#box1').mousedown(superClick).mouseup(rounder)

  $('#box2').dblclick(takeOver);
    /* Act on the event */
  });

