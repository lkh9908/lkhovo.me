// go back to the top
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
    mybutton.style.bottom = "10vh";
  } else {
    mybutton.style.bottom = "100vh";
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// make a wish hover
wishHover = document.querySelector('.wish');
skillsImg = document.querySelector('.skills');
skills = document.querySelectorAll('.skill');
wishHover.addEventListener("mouseover", function( event ) {
    skills.forEach(element => {
        element.style.opacity = 0;
    });
}, false);

wishHover.addEventListener("mouseout", function( event ) {
    skills.forEach(element => {
        element.style.opacity = 0.8;
    });
}, false);