const contentWrapper = document.getElementById('content-wrapper');
const hamburger = document.getElementById('hamburger-button');
const menu = document.getElementById('menu');
// const listItems = menu.childNodes;
// console.log(listItems);

const slideMenu = () => {
  hamburger.addEventListener('click', (event) => {
    if (contentWrapper.className !== 'open') {
      contentWrapper.setAttribute('class', 'open');
    } else {
      contentWrapper.setAttribute('class', '');
    }
  });
// Toggles the `open` class on the content wrapper
// and menu wrapper when the hamburger is clicked
};
slideMenu();

const animateHamburger = () => {

  // Toggles the `open` class on the hamburger when clicked

};

const selectMenuItem = () => {
  let nodes = document.getElementById('menu').childNodes;
  for(let i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName === 'LI') {
      nodes[i].addEventListener('click', (event) => {
        if (nodes[i].className !== 'selected') {
          nodes[i].setAttribute('class', 'selected');
        } else {
          nodes[i].setAttribute('class', '');
        }
      })
     }
  }
}
  // Adds `selected` class to clicked menu li element and
  // removes `selected` class from all other li elements in the menu *HINT* try using .siblings()
selectMenuItem();

document.addEventListener('DOMContentLoaded', () => {
  console.log('Script.js linked');
  // Set up click events for the hamburger button and the menu items here
  // The hamburger button calls `animateHamburger` and slideMenu
  // The list elements call `selectMenuItem`


});
