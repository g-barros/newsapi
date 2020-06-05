const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "b49dd35a15274d17bc835047a877ccf5";

const lista = document.querySelector('#listaDeNoticias');
const btnHome = document.querySelector(".navbar-brand");
const btnTec = document.querySelector('#tec');
const btnUltimas = document.querySelector("#ultimas");

async function getArticles() {
    let resposta = await fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`);

    let dados = await resposta.json();

    lista.innerHTML = "";

    dados.articles.forEach(artigo => {
        lista.innerHTML += `<div class="col-4">
        <div class="card"><img class="card-img-top"
            src="${artigo.urlToImage}">
        <div class="card-body">
            <h5 class="card-title">${artigo.title}</h5>
            <p class="card-text">${artigo.description}</p>
            <a class="btn btn-primary"
            href="${artigo.url}">Ir para noticia</a>
        </div>
        </div>
        </div>`
    });
}

btnTec.addEventListener("click", async function() {

    let resposta = await fetch(`${BASE_URL}/top-headlines?country=br&category=technology&apiKey=${API_KEY}`);

    let dados = await resposta.json();

    lista.innerHTML = "";

    dados.articles.forEach(artigo => {
        lista.innerHTML += `<div class="col-4">
        <div class="card"><img class="card-img-top"
            src="${artigo.urlToImage}">
        <div class="card-body">
            <h5 class="card-title">${artigo.title}</h5>
            <p class="card-text">${artigo.description}</p>
            <a class="btn btn-primary"
            href="${artigo.url}">Ir para noticia</a>
        </div>
        </div>
        </div>`
    });
});

btnHome.addEventListener("click", function() {
    getArticles();
});
btnUltimas.addEventListener("click", function() {
    getArticles();
});

getArticles();

