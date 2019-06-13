import { log } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";
import { notasService as service } from "./nota/service.js";
import {
  takeUntill,
  debounceTime,
  partialize,
  pipe
} from "./utils/operators.js";

const operations = pipe(
  partialize(takeUntill, 3),
  partialize(debounceTime, 500)
);

const action = operations(() =>
  service
    .sumItems("2143")
    .then(console.log)
    .catch(console.log)
);

document.querySelector("#myButton").onclick = action;
//fech segue o padrão da promise
