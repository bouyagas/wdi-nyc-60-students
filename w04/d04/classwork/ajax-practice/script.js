// Add a random name as the header
// 'use strict';
// $(document).ready(() => {
//   $.ajax({
//     url: 'http://randomuser.me/api',
//     method: 'GET',
//     type: 'json',
//     success: (data) => {
//       const $name = $('<h1>');
//       const first = data.results[0].name.first;
//       const last = data.results[0].name.last
//       $name.text(`${first} ${last}`);
//       $('body').append($name);
//     }
//   });
// });


// Make an unordered list of 5 names
'use strict';
$(document).ready(() => {
  $.ajax({
    url: 'http://api.randomuser.me?results=5',
    method: 'GET',
    type: 'json',
    success: (data) => {
      const $nameList = $('<ul>')
      for (let i = 0; i < data.results.length; i++) {
        let $name = $('<li>');
        let first = data.results[i].name.first;
        let last = data.results[i].name.last
        $name.text(`${first} ${last}`);
        $nameList.append($name);
      }
      $('body').append($nameList);
    }
  });
});
