
interface Xmen {
    nombre: string,
    poder: string
}

const enviarMision = ( xmen: Xmen )  => {
    console.log("Enviando a misión a " + xmen.nombre );
}

const enviarCuartel = ( xmen: Xmen )  => {
    console.log("Enviando a cuartel a " + xmen.nombre );
}

let wolverine: Xmen = {
    nombre: "Wolverine",
    poder: "Regeneración"
}

enviarMision( wolverine );
enviarCuartel( wolverine );