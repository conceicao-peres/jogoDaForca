var canva = document.querySelector("#forca")
var pincel = canva.getContext('2d')

function desenhaFundo(){
    pincel.fillStyle = 'lightgray' 
    pincel.fillRect(0, 0, 1200, 500)
}

function desenhaForca(){
    pincel.lineWidth = 15 
    pincel.fillStyle = 'gray'
    pincel.strokeStyle = 'gray'
    pincel.beginPath()
    pincel.moveTo(100, 350)
    pincel.lineTo(20, 390)
    pincel.lineTo(180, 390)
    pincel.closePath()
    pincel.stroke()

    pincel.beginPath();
    pincel.moveTo(100, 350)
    pincel.lineTo(100, 100)
    pincel.moveTo(100, 100)
    pincel.lineTo(300, 100)
    pincel.moveTo(300, 100)
    pincel.lineTo(300, 150)
    pincel.stroke()

    pincel.beginPath();
    pincel.moveTo(100, 170)
    pincel.lineTo(170, 100)
    pincel.stroke()
 }
 desenhaForca()

function desenhaTraco(){ 
    pincel.font = '10px Times New Roman'
    pincel.fillStyle = 'gray'
    pincel.lineWidth = 3 
    var x = 350
    var y = 350
    for (var i=0; i < arrayPalavra.length; i++){
        pincel.beginPath();
        pincel.moveTo(x, y)
        pincel.lineTo(x + 50, y)
        pincel.stroke();
        x = x + 60
    }
}
function desenhaLetraCerta(letra){
    pincel.font = '50px Times New Roman'
    pincel.fillStyle = 'gray'
    pincel.fillText(letra, x1, 340)
}

function desenhaLetraErrada(letra){
    pincel.font = '50px Times New Roman'
    pincel.fillStyle = 'gray'
    pincel.fillText(letra, x2, 100)
}

function desenhaCabeca() {
    pincel.lineWidth = 15 
    pincel.beginPath()
    pincel.arc(300, 170, 25, 0, 2 * Math.PI)
    pincel.fillStyle = 'gray'
    pincel.strokeStyle = 'gray'
    pincel.stroke()
}
  
function desenhaCorpo() {
    pincel.fillStyle = 'gray'
    pincel.lineWidth = 15
    pincel.beginPath()
    pincel.moveTo(300, 195)
    pincel.lineTo(300, 250)
    pincel.stroke()
    pincel.closePath()  
}
  
function desenhaBracoE() {
    pincel.fillStyle = 'gray'
    pincel.lineWidth = 15
    pincel.beginPath()
    pincel.moveTo(300, 195)
    pincel.lineTo(260, 220)
    pincel.stroke()
    pincel.closePath() 
}
  
function desenhaBracoD() {
    pincel.fillStyle = 'gray'
    pincel.lineWidth = 15
    pincel.beginPath()
    pincel.moveTo(300, 195)
    pincel.lineTo(340, 220)
    pincel.stroke()
    pincel.closePath()
}

function desenhaPernaE() {
    pincel.fillStyle = 'gray'
    pincel.lineWidth = 15
    pincel.beginPath()
    pincel.moveTo(300, 250)
    pincel.lineTo(260, 290) 
    pincel.stroke()
    pincel.closePath()
}
 
function desenhaPernaD() {
    pincel.fillStyle = 'gray'
    pincel.lineWidth = 15
    pincel.beginPath()
    pincel.moveTo(300, 250)
    pincel.lineTo(340, 290)
    pincel.stroke()
    pincel.closePath()
}

function desenhaMensagemVenceu(){
    pincel.font = '30px Times New Roman'
    pincel.fillStyle = 'darkgreen'
    pincel.fillText("PARABÉNS, VC VENCEU!", 600, 150)
    desenhaCarinhaFeliz()
}

function desenhaMensagemPerdeu(){
    pincel.font = '30px Times New Roman'
    pincel.fillStyle = 'darkred'
    pincel.fillText("VC PERDEU!", 600, 150) 
    desenhaCarinhaTriste()
    pincel.fillText(`A palavra era ${palavraSelecionada}`, 710, 200)   
}

function desenhaCarinhaFeliz(){
    pincel.lineWidth = 3 
    pincel.fillStyle = 'darkgreen'
    pincel.strokeStyle = 'darkgreen'
    pincel.beginPath()
    pincel.arc(770, 200, 30, 0, Math.PI * 2, true)
    pincel.moveTo(785,200)
    pincel.arc(770, 200, 15, 0, Math.PI, false)
    pincel.moveTo(760, 190)
    pincel.arc(760, 190, 3, 0, Math.PI * 2, true)
    pincel.moveTo(780, 190)
    pincel.arc(780, 190, 3, 0, Math.PI * 2, true)
    pincel.stroke()
}

function desenhaCarinhaTriste(){
    pincel.lineWidth = 3 
    pincel.fillStyle = 'darred'
    pincel.strokeStyle = 'darkred'
    pincel.beginPath()
    pincel.arc(670, 200, 30, 0, Math.PI * 2, true)
    pincel.moveTo(685,220)
    pincel.arc(670, 220, 15, 0, Math.PI, true)
    pincel.moveTo(660, 190)
    pincel.arc(660, 190, 3, 0, Math.PI * 2, true)
    pincel.moveTo(680, 190)
    pincel.arc(680, 190, 3, 0, Math.PI * 2, true)
    pincel.stroke()
}