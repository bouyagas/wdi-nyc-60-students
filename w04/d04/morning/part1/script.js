console.log('Linked');

<<<<<<< HEAD
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

=======
$(function() {
	// $('#name-click').click(function() {
	// 	let name = '';
	// 	while (name === '') {
	// 		name = prompt('GIVE US A NAME');
	// 	}
	// 	$(this).text(name);		
	// });

	$('#name-click').click(() => {
		let name = '';
		while (name === '') {
			name = prompt('GIVE US A NAME');
		}
		$(this).text(name);
	});

	$('#count-click').click(function() {
		let timer = parseInt(prompt('GIVE US SECONDS')) * 1000;
		setTimeout(function() {
			alert("DONE");
		}, timer)
	});

	$('#scroll-click').click(() => {
		let distance = parseInt(prompt('HOW MANY PX'));
		window.scrollBy(0,distance);
	});
});
>>>>>>> 68f0ffae58f88d2a835fd04f140f6822b22e6e4d
