const my1btn = document.getElementById("imgbtn");
const sectionImgviewer = document.querySelector("section.imgviewer");
// const serImgBach = document.getElementById("serImgBach");
// const serImgDip = document.getElementById("serImgDip");

const singelimg = document.getElementById("singelimg");

let imgArry = ["img/bachelor-img.webp", "img/diploma-img.webp"];

my1btn.onclick = () => {
  sectionImgviewer.classList.remove("imgviewerok");
  singelimg.innerHTML = ``;
};

function showImg(ak) {
  singelimg.innerHTML = `<img src="${imgArry[ak]}">`;
  sectionImgviewer.classList.add("imgviewerok");
}
