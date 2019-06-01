menu_btn.addEventListener("click", function() {
  header_stripe.classList.toggle("menu_is-open");
  menu_btn_icon.classList.toggle("fa-bars");
  menu_btn_icon.classList.toggle("fa-times");
});

/*window.addEventListener("click", function(event) {
  if (
    event.target != header_stripe &&
    event.target != menu_btn_icon &&
    event.target != menu_btn &&
    header_stripe.classList.contains("menu_is-open")
  ) {
    header_stripe.classList.toggle("menu_is-open");
    menu_btn_icon.classList.toggle("fa-bars");
    menu_btn_icon.classList.toggle("fa-times");
  }
})*/
