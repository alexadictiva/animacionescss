const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const button1 = document.querySelector(".button1");
button1.addEventListener("click", () => {
  modal1.classList.remove("hidden");
  modal1.classList.add("visible");
});
const button2 = document.querySelector(".button2");
button2.addEventListener("click", () => {
  modal2.classList.remove("hidden");
  modal2.classList.add("visible");
});
const button3 = document.querySelector(".button3");
button3.addEventListener("click", () => {
  modal3.classList.remove("hidden");
  modal3.classList.add("visible");
});
const closeButton1 = document.querySelector(".closeButton1");
closeButton1.addEventListener("click", () => {
  modal1.classList.add("hidden");
  modal1.classList.remove("visible");
});
const closeButton2 = document.querySelector(".closeButton2");
closeButton2.addEventListener("click", () => {
  modal2.classList.add("hidden");
  modal2.classList.remove("visible");
});

const closeButton3 = document.querySelector(".closeButton3");
closeButton3.addEventListener("click", () => {
  modal3.classList.add("hidden");
  modal3.classList.remove("visible");
});
