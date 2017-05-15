
//ausfahrbares Menü

var nav = document.querySelector("nav");
var menu = false;  //ist das Menü offen?
var hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function() {
  if (menu) nav.style.transform = "translateX(0)";
  else nav.style.transform = "translateX(200px)";
  menu = !menu;
})



//Bildergallerie

