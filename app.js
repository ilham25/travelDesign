const modal = document.querySelector(".copyright-modal");

modal.addEventListener("click", (e) => {
  e.target.classList.forEach((element) => {
    if (element === "active") {
      modal.classList.toggle("active");
    }
  });
});
