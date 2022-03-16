
var button = document.querySelector ("#iniciar-jogo")
var reiniciar = document.querySelector ("#reiniciar-jogo")
var palavras = ["Amarelo","Amiga","Amor","Aviao","Balao","Bolo","Branco","Cama","Caneca","Celular","Clube","Copo","Doce","Elefante","Escola","Estojo","Faca","Foto","Garfo","Geleia","Girafa","Janela","Limonada","Meia","Noite","oculos","onibus","Parque","Passarinho","Peixe","Pijama","Rato","Umbigo","Acender","Afilhado","vespero","Assombracao","Asterisco","Basquete","Caminho","Champanhe","Chiclete","Chuveiro","Coelho","Contexto","Convivencia","Coracao","Eloquente","Esfirra","Esquerdo","Excecao","Impacto","Independencia","Modernidade","Oftalmologista","Paralelepipedo","Prognosticio","Quarentena","Refeicao","Reportagem","Sino","Visceral","afobado","Amendoim","Banheiro","Caatinga","Cachorro","Campeonato","Capricornio","Catapora","Corrupcao","Crepusculo","Esparadrapo","Forca","Galaxia","Historia","Manjericao","Menta","Moeda","Oracao","Pacoca","Palavra","Pedreiro","Pneumonia","Pulmao","Rotatoria","Serenata","Trilogia","Xicara"]
var palavraSelecionada = []
var arrayPalavra = []
var lis = document.querySelectorAll('li')
var erros = 0
var acerto = 0
var acertos = []

function selecionarPalavra(){
    palavraSelecionada = [palavras[Math.floor(Math.random() * palavras.length)]]
    for(var i=0; i < palavraSelecionada.length; i++){
        arrayPalavra = palavraSelecionada[i].toUpperCase()  
    }
}

function valida(){
    x2=500  
    for(var l = 0; l < lis.length; l++) {
        lis[l].addEventListener('click', function() {
            x1=350 
            acertos = []
            for(lc=0; lc<arrayPalavra.length; lc++){
                if((this.textContent) == arrayPalavra[lc]){
                    desenhaLetraCerta(this.textContent)
                    acertos.push(this.textContent)
                    acerto++
                }
                x1=x1+60
            }
            if(((this.textContent) != arrayPalavra[lc]) && acertos.length<1){
                desenhaLetraErrada(this.textContent)
                erros++
                desenhaBonecoForca()
            }
            if(acerto == arrayPalavra.length){
                desenhaMensagemVenceu()
            }
            x2 = x2 + 50
        })
    }
}

function desenhaBonecoForca(){
    if(erros == 1){
        desenhaCabeca()
    }
    if(erros==2){
        desenhaCorpo()
    }
    if(erros == 3){
        desenhaBracoD()
    }
    if(erros==4){
        desenhaBracoE()
    }
    if(erros == 5){
        desenhaPernaD()
    }
    if(erros==6){
        desenhaPernaE()
        desenhaMensagemPerdeu()
    }
}

function iniciar(){
    desenhaFundo()
    desenhaForca()
    selecionarPalavra() 
    desenhaTraco() 
    valida()
}

function restart(){
    location.reload() 
}

reiniciar.addEventListener("click", restart)
button.addEventListener("click", iniciar)