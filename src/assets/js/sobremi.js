/* import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faAngleLeft } from "@fortawesome/free-solid-svg-icons/";

import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/carousel.js';

library.add(faCheck);
library.add(faAngleLeft);
dom.watch(); */

import '../scss/commonSCSS/estilo.scss';
import '../scss/customPageSCSS/estilo.scss';


import '../imgs/coches/img2.png';
import '../imgs/img1.png';

let {log,dir,table,timeEnd,time}=console;


log("Pagina SOBRE MI!!!!!")

function doble(str) {
    return str + ", " + str;
}
function cap(str) {
    return str[0].toUpperCase() + str.substring(1);
}

function exc(str) {
    return str.replace(/$/, "!!!!!!");
}
function el(str) {
    return (str.replace(/^/, "<p>")).replace(/$/, "</p>");
}
let cadena = "luis";

let string = cadena |> doble |> cap |> exc |> el;

log(string)



