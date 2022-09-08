"strict mode";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener("click", function () {
    console.log("Button Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
