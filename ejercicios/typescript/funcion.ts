// funciones

// asigned after of types
function  add(a: number, b: number = 0): number{
    return a + b
}

const suma = add(5)
console.log(suma)

// funcion que regresa otra

// type a function 
function createAdder(a: number): (number) => number{
    return function (b: number){
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlusSix = addFour(6)

// with "?" for type a "maybe" 
function fullName (firstName: string, lastname?: string): string{
    return `${firstName} ${lastname}`
}

const miguel = fullName(`Miguel`, 'Angel')