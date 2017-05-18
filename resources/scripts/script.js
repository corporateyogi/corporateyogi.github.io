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

var body = document.querySelector("body");
var html = document.querySelector("html");
var viewer = document.querySelector("#viewer");
var imgCurrent = document.querySelector("#imgCurrent");
var images = document.querySelectorAll("#galerie figure");
var index = null;

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function(e) {
    viewer.className = "viewer";
    html.className = "noscroll";
    var bgImage = e.target.style.backgroundImage;
    imgCurrent.src = bgImage.slice(5, bgImage.length - 2);
    index = e.target.id;
  })
}

document.getElementById("imgBack").addEventListener("click", function() {
  index--;
  if (index < 0) index = images.length - 1;
  var bgImage = images[index].style.backgroundImage;
  imgCurrent.src = bgImage.slice(5, bgImage.length - 2);
});

document.getElementById("imgForward").addEventListener("click", function() {
  index++;
  if (index > images.length - 1) index = 0;
  var bgImage = images[index].style.backgroundImage;
  imgCurrent.src = bgImage.slice(5, bgImage.length - 2);
});

document.getElementById("imgExit").addEventListener("click", function() {
  index = null;
  viewer.className = "";
  html.className = "";
});












//
