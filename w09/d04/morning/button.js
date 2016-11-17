var hagrid = {
  name: "Rubeus Hagrid",
  quote: "You're a wizard, Harry!",
  sayQuote: function() {
    console.log(this.quote)
  }
}

var longbottom = {
  name: "Neville Longbottom",
  quote: "Well, there's some debate among herbologists about its effectiveness in fresh water as opposed to salt water... ",
  sayQuote: function() {
    console.log(this.quote)
  }
}


var button = document.getElementById('sorcerersButton');

button.addEventListener(
  "click",
  hagrid.sayQuote.bind(hagrid)
)
// "You're a wizard, Harry!"

button.addEventListener("mouseover",
    function() {
      button.classList.add('swashOut');
    }
)

button.addEventListener("mouseout",
    function() {
      button.classList.remove('swashOut');
    }
)

// When we call hagrid.sayQuote on the button, the this.quote is looking at the "this" object of whatever called it, in this case the button. Since the button does not have a button.quote, it will return undefined. In order to log "you're a wizard harry", we need to bind the hagrid object to the function so the "this" will point to hagrid
