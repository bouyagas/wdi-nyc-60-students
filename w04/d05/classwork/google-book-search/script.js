'use strict'
$(document).ready(() => {

  const $body = $('body');
  const $searchField = $('input');
  const $submit = $('button');

  function searchBook(name) {
    let bookName = $searchField.val();
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes',
      method: 'GET',
      dataType: 'json',
      data: {
        q: bookName
      },
    })
    .done( (data) => {
      console.log(data);
    })
    .fail( (data) => {
      console.log(data);
    });
  }
  $submit.on('click', searchBook)
});
