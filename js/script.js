var link = document.querySelector(".map-button-yellow");
var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close-write");
var linz = document.querySelector(".office-device");
var map = document.querySelector(".modal-map");
var closes = document.querySelector(".modal-close-map");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});


linz.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

closes.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});
