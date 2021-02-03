// import mediaPlayer from "./MediaPlayerx.js";
// import MediaPlayerx from "../MediaPlayerx.js";

// class autoPlay extends MediaPlayerx{
//     run(player){    
//         if(!player.muted){
//             this.media.muted = true
//         }
//         this.play();
//     }
// }
//}
function autoPlayx(){
    
}

autoPlayx.prototype.run = function(player){
    if(!player.muted){
        player.media.muted = true     
    } 
        player.play();    
    
}

export default autoPlayx