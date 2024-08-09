"use strict";
let esSuperman = true;
let esBatman;
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Oops");
}
esSuperman = convertirAClark();
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Oops");
}
function convertirAClark() {
    return false;
}
