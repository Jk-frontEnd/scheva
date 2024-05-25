const poemBtns = document.querySelectorAll(".poem__btn");
const li = document.createElement("li");
const btn = document.createElement("btn");

poemBtns.forEach((btn) =>{
  btn.addEventListener("click", () => {
    const poemId = btn.getAttribute("data-poem-id");
    const poemTitleText = btn.getAttribute("data-poem-title");

    fetch("../db/poems-db.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((poem) => {
            const li = document.createElement("li");
            const btn = document.createElement("btn");
            btn.classList.add("poem__btn");
            btn.setAttribute("data-poem-id", poem.id);
            btn.setAttribute("data-poem-title", poem.title);
            btn.textContent = poem.title;
            li.appendChild(btn);
            poemsList.appendChild(li);
            });
        });
  });
});

poemBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const poemId = btn.getAttribute("data-poem-id");
    const poemTitle = btn.getAttribute("data-poem-title");

    fetch("../db/poems-db.json")
      .then((response) => response.json())
      .then((data) => {
        const poem = data.find((p) => p.id === parseInt(poemId));

        if (poem) {
          modal.querySelector(".modal-content .poem-title").textContent =
            poemTitle;
          modal.querySelector(".modal-content .poem-text").textContent =
            poem.text;

          modal.style.display = "block";
        }
      });
  });
});

// Add a click event listener to the close button
closeBtn.addEventListener("click", () => {
  // Hide the modal
  modal.style.display = "none";
});

// Add a click event listener to the modal
modal.addEventListener("click", (event) => {
  // If the click is outside the modal-content element, hide the modal
  if (event.target === modal) {
    modal.style.display = "none";
  }
});