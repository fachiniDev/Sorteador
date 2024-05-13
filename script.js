function sorteando(){
    let result = document.querySelector('.result')
    let palavras = ["Açai", "Lanche", "Shopping", "Cozinhar", "Filme", "Noite do Petisco", "SPA em casa", "Skincare", "Artesanato", "Nails Night", 
    "Piquinique", "Café da manhã", "Visitar um lugar novo", "Noite de jogos"];
    let sorteio = Math.floor(Math.random()* palavras.length);


    result.innerHTML = (palavras[sorteio]);
}

var botao = document.getElementById('btn')
botao.addEventListener("click", sorteando);