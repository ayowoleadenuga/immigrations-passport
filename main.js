// assigning all variables
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact-Us");
let body = document.querySelector("body");
let map = document.querySelector(".map");

let changeDisplayHome = () => {
  window.location.reload();
  Show(home);
  Hide(about, contact);
  home.className = "home";
};
let changeDisplayAbout = () => {
  Show(about);
  Hide(home, contact);
};
let changeDisplayContact = () => {
  Show(contact);
  Hide(about, home);
};
let changeBackgroundBody = () => {
    if(document.querySelector('.con').className = "con") {
        body.style.background = "#2E4316";
     } // else {
    //     alert('sorry');
    //     body.style.background = null;
    //     // changeBackgroundBody() = false;
    // }
}
let changeBackgroundMap = () => {
    if(document.querySelector('.abt').classList = "abt"){
        map.style.background = "#2E4316";
        body.style.background = 'url(https://res.cloudinary.com/ayowoleadenuga/image/upload/v1533319808/nigeria-ecowas-passports.png) no-repeat center center fixed';
     } // else {
    //     map.style.background = null;
    //     // changeBackgroundBody() = false;
    // }
};

let Show = class1 => {
  class1.className = "show";
};

let Hide = (class2, class3) => {
  class2.className = "hidden";
  class3.className = "hidden";
};
