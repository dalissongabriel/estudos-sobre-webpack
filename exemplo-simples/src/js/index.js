import img from "../assets/bg.jpg";
import "../css/styles.scss";

const textComponent = () => {
  const elH1 = document.createElement("h1");
  elH1.innerHTML = "Olá novo mundo!";
  elH1.classList.add("title");
  return elH1;
};

const imgComponent = () => {
  const imgEl = new Image(300, 150);
  imgEl.src = img;
  return imgEl;
};

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());
