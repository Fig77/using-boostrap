//TODO: Width validation, F5 validation.

var verticalY;
var offSet = 0;
var boolOff = true;
var formChanged = false;

window.onscroll = function () {
  verticalY = window.scrollY;
  if (window.innerWidth >= 992) {
    if (offSet < verticalY) {
      boolOff = true;
    } else {
      boolOff = false;
    }
    offSet = verticalY;
    //console.log(verticalY);

    changeNav();
  }
};

// Header
function changeNav() {

  var redNav = document.getElementById("red-nav-bar");
  var dateNav = document.getElementById("date-red-nav");
  var logoNav = document.getElementById("logo-red-nav");
  var hamb = document.getElementById("hamburguer-b");


  if (((verticalY >= 102) && verticalY <= 250) && boolOff) {
    dateNav.classList.remove("d-lg-block");
    logoNav.classList.add("logo-nav-bar-f");
    redNav.classList.add("red-nav-bar-f");
    redNav.classList.remove("pb-lg-4", "pb-lg-4", "pb-sm-1", "pr-3", "pl-3", "pb-1");
    hamb.classList.remove("d-xl-none", "d-lg-none");
    redNav.classList.add("pl-1", "pr-1");
  }

  if ((verticalY <= 105) && !boolOff) {
    redNav.classList.remove("red-nav-bar-f");
    dateNav.classList.add("d-lg-block");
    logoNav.classList.remove("logo-nav-bar-f");
    redNav.classList.add("pb-lg-4", "pb-lg-4", "pb-sm-1", "pr-3", "pl-3", "pb-1");
    redNav.classList.remove("pl-1", "pr-1");
    hamb.classList.add("d-xl-none", "d-lg-none");
  }

};

//Searchbar

function enlargeSearchbar() {
  var search = document.getElementById("search-bar");
  var icon = document.getElementById("icon-search");
  if (!formChanged) {
    search.classList.add("input-bar-on-click")
    icon.classList.add("d-none");
    formChanged = true;
  } else {
    search.classList.remove("input-bar-on-click")
    icon.classList.remove("d-none");
    formChanged = false;
  }

}