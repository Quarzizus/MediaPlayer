// closures

// Immediaty involved function expresion (IIFE)
(function(){
    let color = "green";
    
    function printColor(){
        console.log(color)
    }
    
    printColor();
    
})();

// funciones que regresa funciones
function makeColorPrint(color){
    let colorMessage = `The color is ${color}`
    return function(){
        console.log(colorMessage)
    }
}
let greenColorPrinter = makeColorPrint("green");
console.log(greenColorPrinter())

// variables privadas

// const counter = {
//     count: 3,
// }

// console.log(counter.count)

function makeCounter(n){
    let count = n;
    return {
        increase: function (){
            count = count +1
        },
        decrease: function(){
            count = count -1
        },
        getCount: function(){
            return count
        }
    }
}

let counter = makeCounter(7)
console.log(counter.getCount())
counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount())

class carrito{
    constructor(){
        this.carrito = []
    }
    add(item){
        this.carrito.push(item)
    }
}

const myCarrito = new carrito

myCarrito.add("banano")
myCarrito.add("manzana")
myCarrito.add("papaya")
console.log(myCarrito)