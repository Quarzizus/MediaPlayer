// importar lo que fue exportado en mediaPlayer
import mediaPlayer from "./MediaPlayer";
import autoPlay from "../assets/plugins/autoPlay";
import autoPause from "../assets/plugins/autoPause";
import AdsPlugin from "./plugins/Ads/index";
// obtenemos selectores
const video:HTMLElement = document.querySelector("video");
const boton: HTMLElement = document.querySelector("button");
const botonm:HTMLElement = document.querySelector("#mute")

// creamos la instancia
const player = new mediaPlayer({ 
    el: video, 
    plugins: 
     [
         new autoPlay(),
         new autoPause(),
         new Ads(),
     ],
});

if('serviceWorker' in navigator){
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.log(error.message)
    })
}

// le agregamos al boton la instancia anterior
boton.onclick = () => player.tooglePlay();
botonm.onclick = () => player.toogleMute()