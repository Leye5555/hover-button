// change daniel's picture to havilah's picture on click;

let daniel = "./assets/daniel.jpg";
let havilah = "./assets/havilah.jpg";
const sample = document.getElementById("sample");

const img = document.createElement("img");
img.src = daniel;
img.alt = "daniel";
img.width = 300;
img.height = 400;
img.addEventListener("click", changeImage);
sample.appendChild(img);
console.log(daniel);

function changeImage(event) {
  const currentImage = event.target;
  const src = currentImage.getAttribute("src");

  if (daniel === src) {
    currentImage.src = havilah;
  } else {
    currentImage.src = daniel;
  }
}
