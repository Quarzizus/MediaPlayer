class autoPausex {
    constructor(){
        this.threshold = 0.15
        this.handler = this.handler.bind(this)
    }

    handler(entries){
        // la primera de las entradas = media.player
        const entry = entries[0]
        // parametro para la validacion
        const visible = entry.intersectionRatio >= this.threshold
        if(visible){
            this.player.play()
            console.log("Play")
        }else{
            this.player.pause()
            console.log("Pause")
        }
    }
    run(player){
        // run.player = player
        this.player = player
        // creamos el observador 
        const observer = new IntersectionObserver(this.handler, {
            //objecto configurador 
            threshold: this.threshold
        })
        // que vamos a observar ?
        observer.observe(this.player.media)     
    }
}

export default autoPausex