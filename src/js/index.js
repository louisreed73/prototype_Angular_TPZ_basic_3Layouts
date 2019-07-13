import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faCheck, faAngleLeft } from "@fortawesome/free-solid-svg-icons/";

library.add(faCheck);
library.add(faAngleLeft);
dom.watch();

import '../css/estilo.scss';

import '../imgs/img1.png';

import {pepito} from './estilo.js';


console.log('y también desde estilo saco jQuery: ' + $);

let luis=()=>{
    console.log("Luis!!!!!!")
}


console.log($);
luis();

pepito("Soy pepito desde el modulo estilojs !!!!!!!")
console.log("Hola!!!!!!");

