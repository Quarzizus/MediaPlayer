import MediaPlayerx from "./MediaPlayerx.js";
import autoPausex from "./plugins/autoPausex.js";
import autoPlay from "./plugins/autoPlayx.js";

const video = document.querySelector("video")
const boton = document.querySelector("#play")
const muteBoton = document.querySelector("#mute")

const myMedia = new MediaPlayerx({el:video, plugins: 
    [
        new autoPlay(),
        new autoPausex(),
    ] 
});
boton.onclick = () => myMedia.tooglePlay();
muteBoton.onclick = () => myMedia.toogleMute();
