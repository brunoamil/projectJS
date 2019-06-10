import { handleStatus } from "./utils/promise-helpers.js";

document.querySelector("#myButton").onclick = () =>
  //fech segue o padrão da promise
  fetch("http://localhost:3000/notas")
    .then(handleStatus)
    .then(notas => console.log(notas))
    .catch(console.log());
