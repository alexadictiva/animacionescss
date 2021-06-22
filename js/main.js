const modal = document.querySelector(".modal");
const button1 = document.querySelector(".button1");
button1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
const button2 = document.querySelector(".button2");
button2.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
const button3 = document.querySelector(".button3");
button3.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
const closeButton = document.querySelector(".closeButton");
closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});
