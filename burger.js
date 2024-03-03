//function open & close buttons on mobile

function open() {
  let burger = document.getElementById("burger");
  burger.onclick = function () {
    document.getElementById("links").style.display = "inline-block";
    document.getElementById("burger").style.display = "none";
    document.getElementById("close").style.display = "inline";

  } 
}
 open();
function close() {
  let close = document.getElementById("close");
  close.onclick = function () {
    document.getElementById("links").style.display = "none";
    document.getElementById("burger").style.display = "inline";
    document.getElementById("close").style.display = "none";
  }
}
close();
 
//function open close proiecte

function openProUnu() {
  let openButton = document.getElementById("me-btn-unu");
  openButton.onclick = function () {
    document.getElementById("open-pro").style.display = "flex";
    document.getElementById("close-pro-unu").style.display = "inline";

  } 
}
 openProUnu();

 function openProDoi() {
  let openButton = document.getElementById("me-btn-doi");
  openButton.onclick = function () {
    document.getElementById("edu").style.display = "flex";
    document.getElementById("close-pro-doi").style.display = "inline";
  } 
}
 openProDoi();

 function openProTrei() {
  let openButton = document.getElementById("me-btn-trei");
  openButton.onclick = function () {
    document.getElementById("skills").style.display = "flex";  
    document.getElementById("close-pro-trei").style.display = "inline";

  } 
}
 openProTrei();

function closeProUnu() {
  let closeButton = document.getElementById("close-pro-unu");
  closeButton.onclick = function () {
    document.getElementById("open-pro").style.display = "none";  
  }
}
closeProUnu();

function closeProDoi() {
  let closeButton = document.getElementById("close-pro-doi");
  closeButton.onclick = function () {
    document.getElementById("edu").style.display = "none";  
  }
}
closeProDoi();

function closeProTrei() {
  let closeButton = document.getElementById("close-pro-trei");
  closeButton.onclick = function () {
    document.getElementById("skills").style.display = "none";  
  }
}
closeProTrei();