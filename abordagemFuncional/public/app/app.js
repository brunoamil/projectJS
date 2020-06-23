import { log, timeoutPromise, retry } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntill, debounceTime, partialize, pipe } from './utils/operators.js';
import { EventEmitter } from './utils/event-emitter.js';



const operatios = pipe(
    partialize(takeUntill, 3),
    partialize(debounceTime,500)
);

const action = operatios(() =>
        retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
        .then(total => EventEmitter.emit('itensTotalizados', total))
        .catch(console.log)
    );


document
.querySelector("#myButton")
.onclick = action; 

    

  


   