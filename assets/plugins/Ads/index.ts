import Ads from "../Ads/add"

class AdsPlugin {
    private ads: Ads
    private player: MediaPlayer
    private media: HTMLElement
    constructor(){
        this.ads = Ads.getIntance()
        this.handlerUpdate = this.handlerUpdate.bind(this)
    }
    run(player: MediaPlayer){
        this.player = player;
        this.media = this.player.media
        this.media.addEventListener('timeupdate', this.handlerUpdate)
    }

    private handlerUpdate(){
        const currentTime = Math.floor(this.media.currentTime)
        if(currentTime %30 == 0){
            this.renderAd()
        }
    }
    private renderAd(){
        const ad = this.ads.getAd()
        console.log(ad)
    }
}

export default AdsPlugin