import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faCheck, faAngleLeft } from "@fortawesome/free-solid-svg-icons/";

import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/carousel.js';

library.add(faCheck);
library.add(faAngleLeft);
dom.watch();

import '../css/estilo.scss';

import '../imgs/coches/img2.png';
import '../imgs/img1.png';

import {pepito} from './estilo.js';


console.log('y también desde estilo saco jQuery: ' + $);

let luis=()=>{
    console.log("Luis!!!!!!")
}


console.log($);
luis();

pepito("Soy pepito desde el modulo estilojs !!!!!!!")
// console.log("Hola!!!!!!");

let {log}=console;


let{create, freeze}=Object;



let luis1=create({});

// freeze(luis1);


// Object.freeze(luis1);

luis1.edad=46;

log("Hijo de puta!!!!",luis1);



