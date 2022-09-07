"strict mode";

const modal = document.querySelector(".show-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModel.length; i++)
  console.log(
    btnsOpenModel[i].addEventListener("click", function () {
      console.log("button Clicked");
    })
  );
