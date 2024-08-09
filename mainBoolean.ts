let esSuperman:boolean = true;
let esBatman:Boolean;

if( esSuperman ) {
    console.log("Estamos salvados");
}
else {
    console.log("Oops");
}

esSuperman = convertirAClark();

if( esSuperman ) {
    console.log("Estamos salvados");
}
else {
    console.log("Oops");
}


function convertirAClark() {
    return false;
}