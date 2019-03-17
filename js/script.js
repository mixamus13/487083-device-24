var link = document.querySelector(".map-button-yellow");
var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close-write");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
