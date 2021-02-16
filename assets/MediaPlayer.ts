class mediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    // creamos la clase con prototype
    tooglePlay() {
        // le da play al video
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    amute() {
        this.media.muted = false;
    }
    toogleMute() {
        if (this.media.muted) {
            this.media.muted = false;
        } else {
            this.media.muted = true;
        }
    }
}
// exportar la clase a el index
export default mediaPlayer;