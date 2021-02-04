
class contenedorC{
    constructor(config){
        this.contenedor = config.el
        this.plugins = config.plugins || []
        this.cajitas = config.cajas
        this.threshold = 0.25
        this.handler = this.handler.bind(this)
        this._initPlugins();
    }
    _initPlugins(){
        this.plugins.forEach(plugin=> {
            plugin.run(this)
        });
    }
    cambiarColor(){
        const arrayCajitas = this.nodeListArray(this.cajitas)
        const validacion = this.validar(arrayCajitas)
        if(validacion){
            if(!arrayCajitas[0].classList.contains("blue")){
                arrayCajitas.map(cajita => cajita.classList.add("blue"))
            }else{
                arrayCajitas.map(cajita => cajita.classList.remove("blue"))
                console.log("Cambio a amarillo")
             }
            }
        }
    nodeListArray(nodeList){
        return Array.apply(null, nodeList)
    }
    validar(array){
        const v = array.every(caja => 
            caja.classList.contains("cajas")
        );
        if(v){
            return true
        }else{
            return false
        }
    }
    changeWithScroll(){
        // creamos el observer
        const observer = new IntersectionObserver(this.handler, {
            // el objeto config
            threshold: this.threshold
        })
        // metodo : a quién observamos
        observer.observe(this.contenedor)
        document.addEventListener("visibilitychange", this.handlerVisibly)
    }
    handler(entries){ 
        const entry = entries[0]
        const visible = entry.intersectionRatio >= this.threshold
        if(visible){
            console.log("Visible")
            this.contenedor.classList.remove("yellow")
        }else{
            console.log("No visible")
            this.contenedor.classList.add("yellow")
        }
    }
    handlerVisibly(){
        const visibly = document.visibilityState == "visible"
        if(visibly){
            console.log("Estás en la pestaña")
            // this.contenedor.classList.remove("yellow")
        }else{
            console.log("No estabas en la pestaña")
            // this.contenedor.classList.add("yellow")
        }
    }
}

export default contenedorC;

