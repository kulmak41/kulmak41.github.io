let n = document.getElementsByClassName("modal").length;
for (let i = 0; i < n; ++i) {
  let modal = document.getElementsByClassName("modal")[i];
  let openBtn = document.getElementsByClassName("descrip__open__btn")[i];
  let closeBtn = document.getElementsByClassName("descrip__close__btn")[i];
  openBtn.onclick = function() {
    modal.style.display = "flex";
  };
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };
  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
