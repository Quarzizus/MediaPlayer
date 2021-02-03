function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }
  mediaPlayer.prototype._initPlugins = function(){
      const player ={
          play: () => this.play(),
          pause: () => this.pause(),
          media: this.media,
          get muted() {
              return this.media.muted;
          },
          set muted(value) {
            this.media.muted = value 
          },
      }
      this.plugins.forEach(plugin => {
          plugin.run(this)
      });
  }
  mediaPlayer.prototype.play = function(){
      this.media.play();
  }
  mediaPlayer.prototype.pause = function(){
      this.media.pause();
  }
  // creamos la clase con prototype
  mediaPlayer.prototype.tooglePlay = function () {
    // le da play al video
    if (this.media.paused) {
      this.media.play();
    } else {
      this.media.pause();
    }
  };
  mediaPlayer.prototype.mute = function(){
      this.media.muted = true 
  }
  mediaPlayer.prototype.amute = function(){
      this.media.muted = false   
  }
  mediaPlayer.prototype.toogleMute = function(){
      if(this.media.muted){
          this.media.muted = false
        }else{
            this.media.muted = true
        }
}
// exportar la clase a el index
export default mediaPlayer;