menu_btn.addEventListener("click", function() {
  header_stripe.classList.toggle("menu_is-open");
  menu_btn_icon.classList.toggle("fa-bars");
  menu_btn_icon.classList.toggle("fa-times");
});
window.addEventListener("click", function(event) {
  if(event.target != header_stripe) {
    header_stripe.classList.toggle("menu_is-open");
  }
});