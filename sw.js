// self es el this de los serviceWorkers
// install se llama cuando el navegador instala
// el service workers
self.addEventListener("install", event =>{
    // creamos el pre cache 
    //cositas que queremos que se mantengan
    event.waitUntil(precache())
} )

self.addEventListener("fech", event => {
    const request = event.request;
    if(request.method !== "GET"){
        return
    }

    //buscar en cache
    event.respondWith(cachedResponse(request))
})

async function precache(){
    // utilizamos caches del DOM
    const cache = await caches.open("v1")
    return cache.addAll([
        // '/',
        // '/index.html',
        // 'assets/index.js',
        // 'assets/MediaPlayer.js',
        // 'assets/plugins/autoPlay.js',
        // 'assets/plugins/autoPause.js',
        // 'assets/index.css',
        // 'assets.BigBuckBunny.mp4',
    ])
}

async function cachedResponse(request){
    const cache = await caches.open("v1")
    response = await cache.match(request)
    return response || fetch(request)
}