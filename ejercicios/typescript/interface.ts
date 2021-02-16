// intarface
// enum Color {
//     rojo = "Rojo",
//     verde = "Verde",
// }
// interface Rectangulo {
//     ancho: number
//     alto: number
//     color: Color
// }

// let rect: Rectangulo ={
//     ancho:4,
//     alto: 5,
//     color: Color.rojo
// }

// function area(r: Rectangulo) {
//     return r.alto * r.ancho;
// }

// const areaReact = area(rect)
// console.log(areaReact); // 20

// rect.toString = function(){
//     return this.color ? `Un rectangulo ${this.color}` : ` Un rectangulo `
// }

// console.log(rect.toString())

enum sabores {
    mora = "mora",
    fresa = "fresa",
    durazno = "durazno",
}

interface yogurt {
    marca:  string
    sabor: sabores
    miligramos: number
}

let myYogurt: yogurt = {
    marca: "colanta",
    sabor: sabores.mora,
    miligramos: 4555,
}

function show(yogur: yogurt){
    console.log(`${yogur.marca}`)
    console.log(`${yogur.sabor}`)
    console.log(`${yogur.miligramos}`)
}

const myFunction = show(myYogurt)