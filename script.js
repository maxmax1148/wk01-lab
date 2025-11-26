// Show/hide message
document.getElementById("btn-show").addEventListener("click", function () {
  const msg = document.getElementById("message");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
});
