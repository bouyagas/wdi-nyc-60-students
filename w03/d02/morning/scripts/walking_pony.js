// console.log("PONY POWER!!");

// function walkingPony() {
//   $('#pony').css("marginLeft", '1500px');
//   $('#pony').animate({
//     marginLeft: '-500px'
//   }, 5000, walkingPony)
// }


// setInterval(walkingPony, 100)


function trot() {
  var position = $('#pony').offset().left;
  // Once pony goes off the page, reset it to the right side of the page
  if (position < -500) {
    position = 1280;
  }
  $('#pony').css('margin-left', position-20)
// }
}

setInterval(trot, 100);




// function walkingPony() {
//  var $pony = $('#pony');
//  var distance = 1200;
//  setInterval(function() {
//    $pony.css('left', distance + 'px');
//    if (distance < -300) {
//      distance = 1200;
//    } else {
//      distance -= 5;
//    }
//  }, 10);
// };

// $(document).ready(function(){
//  walkingPony();
// })
