const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

document.querySelector(".btn").addEventListener("click", function () {
  alert("Service is not available at the moment.");
});
