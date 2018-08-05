// assigning all variables 
var home = document.querySelector(".home");
var about = document.querySelector(".about");
var contact = document.querySelector(".contact-Us")

var toggle = function(element){
    location.reload();
    home.style.display === "none";
    if (element.classList.contains('hidden')){
        this.classList.remove('hidden');
    }
} 