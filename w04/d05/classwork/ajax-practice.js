'use strict'
$(document).ready(() => {
  const urlSTR = 'http://example.com/?artistID=45ef7&medium=music',
  $.ajax({
    url: 'http://example.com',
    method: 'GET',
    dataType: 'json',
    data: {
      artistID: "45ef7",
      medium: "music"
    },
  })
  .done( (a, b, c) => {
    // a -> successful data object (pretty much only interested in this parameter)
    // b -> 'success'
    // c -> XHR object
  })
  .fail( (a, b, c) => {
    // a -> error data object (pretty much only interested in this parameter)
    // b -> 'error' or 'failure'
    // c -> XHR object
  })
  .always( (a, b, c) => {
    // This is not that important to use if your have both .done and .fail
    // a -> successful/error data object
    // b -> 'success' / 'failure'
    // c -> XHR object
  })
});
