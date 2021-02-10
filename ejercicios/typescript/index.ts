// boolean
let muted: boolean = true; 
muted = false

// numbers
let numerador:number = 44
let denominador:number = 6
let resultado = numerador/denominador

// string

let nombre: string = "Miguel"
let saludo = `Me llamo ${nombre}`

// arrays 

let people: string[] =["Miguel", "Jimena", "Juan"] 
let peopleNumbers: Array< string | number> = ["Miguel", 3000]
let newPeople = people.map(nombre => nombre + " Holi")

// console.log(people)
// console.log(peopleNumbers)
// console.log(newPeople)

// enum

enum color {
    Rojo = "rojo",
    Verde = "Verde",
    Azul = "azul",
}

let colorFavorito: color = color.Verde
console.log(` My favorite color es ${colorFavorito}`);

// any 
let comodin: any = "As bajo la manga"
comodin ={color : "Carta"}

// object 

let someObject: object = {type: "Boleano"}