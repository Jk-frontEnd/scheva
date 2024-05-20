const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".closeBtn");
const poemTitle = document.querySelector(".poem-title");
const poemText = document.querySelector(".poem-text");

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Add a click event listener to the modal
// If the user clicks outside of the modal, hide it
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Add a keydown event listener to the window
// If the user presses the Esc key, hide the modal
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});