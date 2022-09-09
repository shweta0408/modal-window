"strict mode";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

const openModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener("click", function () {
    console.log("Button Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", openModel);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
  }
});
