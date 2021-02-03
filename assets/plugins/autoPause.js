class autoPause{
    constructor(){
        this.threshold = 0.25
        this.handler = this.handler.bind(this)
        this.handlerVisibly = this.handlerVisibly.bind(this)
    }
    run(player){
        this.player = player 
        const observer = new IntersectionObserver(this.handler, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)
        // Evento de cambiar de pestalla
        document.addEventListener("visibilitychange", this.handlerVisibly)
    }
    handler(entries){
        const entry = entries[0]
        const visibly = entry.intersectionRatio >= this.threshold
       
        if(visibly){
           this.player.play()
           console.log("Yes")
       } else{
           this.player.pause()
           console.log("Estamos en pausa")
        }
    }
    handlerVisibly(){
        const visibly = document.visibilityState == "visible"
        if(visibly){
            this.player.play()
        }else{
            this.player.pause()
        }
    }

}

export default autoPause