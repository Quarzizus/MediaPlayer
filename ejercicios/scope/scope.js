// scope 

// scope global 

var variable = "Soy la variable local"

// function scope

function imprimir(){
    for(var i = 1; i<10; i++){
        setTimeout(function(){
            console.log(i)
        }, 2000)
    }
}
imprimir();