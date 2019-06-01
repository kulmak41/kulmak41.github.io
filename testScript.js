let n = document.getElementsByClassName("btn").length;
for (let i = 0; i < n; ++i){
  let btn = document.getElementsByClassName("btn")[i];
  btn.onclick = function () {
    alert("success" + i);
  }
}