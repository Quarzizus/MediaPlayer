const nombreCompleto = {
    nombre: "Miguel",
    apellido: "Vasquez",
    get persona(){
        return `${this.nombre} ${this.apellido}`
    },
    set persona(value){
        const data = value.split(' ')
        this.name = data[0]
        this.apellido = data [1]
    }
}
console.log(nombreCompleto.persona)
console.log(nombreCompleto.persona = 'Jimena Várgas')