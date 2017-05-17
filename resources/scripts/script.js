//ausfahrbares Menü

var nav = document.querySelector("nav");
var navigation = nav.querySelectorAll("ul a");
var menu = false;  //ist das Menü offen?
var hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function() {
  (menu) ? nav.style.transform = "translateX(0)" :
    nav.style.transform = "translateX(200px)";
  menu = !menu;
});

for (var i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener("click", function() {
    console.log("navigation clicked!")
    if (menu) {
      nav.style.transform = "translateX(0)";
    menu = false;
    }
  });
}

//Bildergallerie

var images = document.querySelectorAll("#galerie figure");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    window.alert("Bildergallerie ist in Arbeit");
  })
}
