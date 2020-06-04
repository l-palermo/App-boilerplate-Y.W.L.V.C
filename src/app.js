import "./app.css";
import svg from "./assets/svg-file.svg";

export default () => {
  const div = document.createElement("div");
  div.innerHTML = `<h1 class='helloWorld'>Hello World</h1>`;
  const element = document.getElementById("root");
  element.appendChild(div);

  const myIcon = new Image();
  myIcon.src = svg;
  element.appendChild(myIcon);
};
