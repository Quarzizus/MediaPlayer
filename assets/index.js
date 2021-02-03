// importar lo que fue exportado en mediaPlayer
import mediaPlayer from "./MediaPlayer.js";
import autoPlay from "../assets/plugins/autoPlay.js";
import autoPause from "../assets/plugins/autoPause.js";
// obtenemos selectores
const video = document.querySelector("video");
const boton = document.querySelector("button");
const botonm = document.querySelector("#mute")

// creamos la instancia
const player = new mediaPlayer({ 
    el: video, 
    plugins: 
     [
         new autoPlay(),
         new autoPause(),
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