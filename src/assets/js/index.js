/* import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faAngleLeft } from "@fortawesome/free-solid-svg-icons/";

import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/carousel.js';

library.add(faCheck);
library.add(faAngleLeft);
dom.watch(); */

import '../scss/commonSCSS/estilo.scss';

import '../imgs/coches/img2.png';
import '../imgs/img1.png';

(function () {
    if (typeof window.CustomEvent === "function") return false; //If not IE

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();


let { log, dir, table, timeEnd, time } = console;

log("Pagina INDEX!!!!!");




const qs=(elem)=>{
    return document.querySelector.call(document,elem);
};

const qsA=(elem)=>{
    return document.querySelectorAll.call(document,elem);
};

const elems=[
    qs(".parent"),
    qsA(".parent > div")
];

let [
    padre,
    hijos
]=elems;

console.log(padre,hijos);

const cargaList=(nodList)=> {
    [...nodList].forEach(element => {
        element.addEventListener("veronica",function (e){
            console.log(this)
        })
    });
};

cargaList(hijos);

padre.addEventListener("click",function (e){
    log(this);

    [...hijos].forEach(element => {
        element.dispatchEvent(new CustomEvent("veronica",{
            bubbles:true
        }))
    });


})


let verita={
    nombre:"AmadaVero",
    edad:44
};

let copiaSa=Object.assign({},verita);

log(`quiero copiar a Vero: ${copiaSa}`)
log(copiaSa)

