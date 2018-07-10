var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".feedback-popup");
var popupbg = document.querySelector(".popup-bg");
var close = popup.querySelector(".button-popup-close");
var form = popup.querySelector(".feedback-form");
var email = popup.querySelector("[name=feedback-email]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  popupbg.classList.add("popup-bg-active");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popupbg.classList.remove("popup-bg-active");
  popup.classList.remove("popup-error");
});

 form.addEventListener("submit", function (evt) {
    if (!email.value) {
  evt.preventDefault();
  popup.classList.remove("popup-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("popup-error");;
  }
});

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popupbg.classList.remove("popup-bg-active");
        popup.classList.remove("popup-error");
      }
    }
  });