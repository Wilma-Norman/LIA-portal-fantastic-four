/* Hamburder menu START */
const icon = document.querySelector(".icon");

function toggleModal() {
  var modal = document.getElementById("myModal");
  //   modal.style.display = modal.style.display === "none" ? "block" : "none";
  modal.classList.toggle("none-dis");
  toggleMenu();
}

icon.addEventListener("click", toggleModal);

function toggleMenu() {
  var icon = document.querySelector(".icon");
  icon.classList.toggle("menu-open");
}

/* Hamburder menu END */

/* Render dynamic friends list to sidebar of student chat page  START*/
console.log(students);
//Dom elements
const chatListContainer = document.querySelector(".chat-list-container");

/* Render dynamic friends list to sidebar of student chat page  END*/
