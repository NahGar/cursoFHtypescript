//type es palabra reservada de typescript
type Heroe = {
    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string,
}

let flash1:Heroe = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr rápido","Viajar en el tiempo"],
    getNombre() {
        return this.nombre;
    },
}