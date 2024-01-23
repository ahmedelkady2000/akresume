const my1btn = document.getElementById("imgbtn");
const sectionImgviewer = document.querySelector("section.imgviewer");

const singelimg = document.getElementById("singelimg");

let imgArry = [
  "img/bachelor-img.webp",
  "img/diploma-img.webp",
  "img/axon-img.webp",
  "img/nti-img.webp",
  "img/iti2-img.webp",
  "img/iti1-img.webp",
  "img/aswan1-img.webp",
  "img/aswan2-img.webp",
];

let imgArry2 = [
  "../img/bachelor-img.webp",
  "../img/diploma-img.webp",
  "../img/axon-img.webp",
  "../img/nti-img.webp",
  "../img/iti2-img.webp",
  "../img/iti1-img.webp",
  "../img/aswan1-img.webp",
  "../img/aswan2-img.webp",
];

my1btn.onclick = () => {
  sectionImgviewer.classList.remove("imgviewerok");
  singelimg.innerHTML = ``;
};

function showImg(idx, alt) {
  singelimg.innerHTML = `<img src="${imgArry[idx]}" alt="${alt}">`;
  sectionImgviewer.classList.add("imgviewerok");
}

function showImg2(idx, alt) {
  singelimg.innerHTML = `<img src="${imgArry2[idx]}" alt="${alt}">`;
  sectionImgviewer.classList.add("imgviewerok");
}