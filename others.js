// go back to the top
mybutton = document.getElementById("myBtn");
menu = document.querySelector('#menu');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
    mybutton.style.bottom = "10vh";
    if (menu != null){
        menu.style.display = "block";
        menu.style.bottom = "30vh";
    }
  } else {
    mybutton.style.bottom = "100vh";
    mybutton.style.display = "none";
    if (menu != null){
        menu.style.bottom = "100vh";
        menu.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


