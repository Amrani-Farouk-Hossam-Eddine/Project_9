document.addEventListener("click", function (e) {
  if (e.target.classList.contains("cl")) {
    document.querySelector("ul").style.display = "block";
  } else {
    console.log("hello");
    document.querySelector("ul").style.display = "none";
  }
});
