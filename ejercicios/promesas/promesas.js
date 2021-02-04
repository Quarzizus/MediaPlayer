async function getMovies(){
    try {
        const cajita = document.querySelector(".caja")
        cajita.innerHTML = "";
        for(let i = 11; i <= 20; i ++){
            const Token = `b89fc45c2067cbd33560270639722eae`
            const api = `https://api.themoviedb.org/3/movie/${i}?api_key=${Token}`;
            const peticion = await fetch(api)
            const data = await peticion.json()
            // const lista = document.querySelector(".caja"); 
            cajita.innerHTML +=`
            <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" width="200px"/>
            <li>"Titulo: ${data.title}"</li>
            <li>"Popularidad: ${data.popularity}"</li>
            <li>"Votacion: ${data.vote_average}"</li>
            <br>
            `
        }
    } catch (error) {
        console.log(error)
    }
}
async function getPopular(){
    const Token = `b89fc45c2067cbd33560270639722eae`
    const url =  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${Token}`;
    const peticion = await fetch (url);
    const data = await peticion.json();
    const cajita = document.querySelector(".caja");
    cajita.innerHTML = "";
    for(i of data.results){
        cajita.innerHTML +=`
        <img src="https://image.tmdb.org/t/p/w342${i.poster_path}" width="200px"/>
        <li>"Titulo: ${i.title}"</li>
        <li>"Popularidad: ${i.popularity}"</li>
        <li>"Votacion: ${i.vote_average}"</li>
        <br>
        `      
    }
}
document.querySelector(".movies").addEventListener("click",getMovies)
document.querySelector(".popular").addEventListener("click",getPopular)

