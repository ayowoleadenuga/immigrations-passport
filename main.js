// assigning all variables 
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact-Us");
let body = document.querySelector("body");
let nav = document.querySelector(".map");

let changeDisplayHome = () => {
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
// let changeBackgroundBody = () => {
//     if(this.className = "con") {
//         body.style.background = "#2E4316";
//     } else {
//         body.style.background = null;
//         // changeBackgroundBody() = false;
//     }
// };
// let changeBackgroundMap = () => {
//     if(this.classList = "abt"){
//         map.style.background = "#2E4316";
//     } else {
//         map.style.background = null;
//         // changeBackgroundBody() = false;
//     }
// };

let Show = class1 => {
  class1.className = "show";
};

let Hide = (class2, class3) => {
  class2.className = "hidden";
  class3.className = "hidden";
};
