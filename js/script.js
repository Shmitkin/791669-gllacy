var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".feedback-popup");
var popupbg = document.querySelector(".popup-bg");
var close = popup.querySelector(".button-popup-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  popupbg.classList.add("popup-bg-active");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popupbg.classList.remove("popup-bg-active");
});