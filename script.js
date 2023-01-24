let preview = document.querySelector("#product");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let options = document.querySelectorAll(".options");

function selectImage(x) {
  preview.src = x.src;
  preview.style.marginBottom = "5rem";
  x.style.marginTop = "-1rem";
  x.style.borderBottom = "0.5rem solid red";
  x.style.borderRadius = "1rem";
}

function normalImage(x) {
  preview.src = "./assets/tenis-1-ampliado.png";
  preview.style.marginBottom = "0";
  x.style.marginTop = "0";
  x.style.borderBottom = "0";
  x.style.borderRadius = "0";
}

// option1.addEventListener("mouseover", () => {
//   preview.src = "./assets/tenis-1-galeria.png";
//   preview.style.marginBottom = "5rem";
// });

// option2.addEventListener("mouseover", () => {
//   preview.src = "./assets/tenis-2-galeria.png";
//   preview.style.marginBottom = "5rem";
// });

// option3.addEventListener("mouseover", () => {
//   preview.src = "./assets/tenis-3-galeria.png";
//   preview.style.marginBottom = "5rem";
// });

// preview.style.marginBottom = "0";
