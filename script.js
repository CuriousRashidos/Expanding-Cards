//select all panels
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //onclick listener
  panel.addEventListener("click", () => {
    //shrink all cards as a trick to shrink previously expanded card
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    //expand the card
    panel.classList.add("active");
  });
});
