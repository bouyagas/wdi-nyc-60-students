console.log('javascript connected!')

$(function(){
  //build your functions here:
  function flatten2(){
    console.log('box2 is 200px');
    $('#box2').css('height','200px')
  }




  //apply your event listners here:
  $('#box1').mouseover(flatten2);


})
