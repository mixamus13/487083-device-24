var link = document.querySelector(".map-button-yellow");

var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close-write");

var linz = document.querySelector(".office-device");
var map = document.querySelector(".modal-map");

var closes = document.querySelector(".modal-close-map");

var storage = localStorage.getItem("name");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

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
  popup.classList.remove("modal-error");
});

closes.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});
