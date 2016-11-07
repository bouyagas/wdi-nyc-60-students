'use strict';

(() => {
  function getRandomUser() {
    fetch('https://randomuser.me/api/?results=10')
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  getRandomUser();
})();

