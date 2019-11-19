var verticalY;
var offSet = 0;
var boolOff=true;

window.onscroll = function () {
  verticalY = window.scrollY;
 
  if (offSet < verticalY) {
    boolOff = true;
  }
  else {
    boolOff = false;
  }
  offSet = verticalY;
  //console.log(verticalY);
  changeNav();
};

function changeNav() {
  
  var redNav =  document.getElementById("red-nav-bar");
  var dateNav = document.getElementById("date-red-nav");
  var logoNav = document.getElementById("logo-red-nav");
  var hamb = document.getElementById("hamburguer-b");
  var cont = document.getElementById("cont-but-hamb");

  if (((verticalY >= 102) && verticalY <= 250) && boolOff) {
    dateNav.classList.remove("d-lg-block");
    logoNav.classList.add("logo-nav-bar-f");
    redNav.classList.add("red-nav-bar-f");
    redNav.classList.remove("pb-lg-4","pb-lg-4","pb-sm-1","pr-3","pl-3","pb-1");
    hamb.classList.remove("d-xl-none","d-lg-none");
    redNav.classList.add("pl-1","pr-1");
  }
  
  if ((verticalY <= 105) && !boolOff ) {
    redNav.classList.remove("red-nav-bar-f");
    dateNav.classList.add("d-lg-block");
    logoNav.classList.remove("logo-nav-bar-f");
    redNav.classList.add("pb-lg-4","pb-lg-4","pb-sm-1","pr-3","pl-3","pb-1");
    hamb.classList.add("d-xl-none","d-lg-none");
  }

};