const icon = document.querySelector(".icon");

function toggleModal() {
  var modal = document.getElementById("myModal");
  //   modal.style.display = modal.style.display === "none" ? "block" : "none";
  modal.classList.toggle("none-dis");
  console.log(modal);
  toggleMenu();
}

icon.addEventListener("click", toggleModal);

function toggleMenu() {
  var icon = document.querySelector(".icon");
  icon.classList.toggle("menu-open");
}



