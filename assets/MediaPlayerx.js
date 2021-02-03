// soy la prueba con clases

class MediaPlayerx{
    constructor(config){
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins(){
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,

            get muted(){
                return this.media.muted;
            },
            set mute(value){
                this.media.muted = value
            }
        }
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }
    play(){
        this.media.play();
    }
    pause(){
        this.media.pause();
    }
    tooglePlay(){
        if(this.media.paused){
            this.media.play();
        }else{
            this.media.pause();
        }
    }
    mute(){
        this.media.muted = true
    }
    amute(){
        this.media.muted = false
    }
    toogleMute(){
        if(this.media.muted){
            this.media.muted = false
        }else{
            this.media.muted = true
        }
    }

}

export default MediaPlayerx;