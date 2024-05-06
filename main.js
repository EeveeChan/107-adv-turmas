Reconhecedor = window.webkitSpeechRecognition
reconhecerFala = new Reconhecedor()

function start(){
    document.getElementById("texto").innerHTML=""
    reconhecerFala.start()
}

reconhecerFala.onresult = function(evento){
    console.log(evento)
    fala = evento.results[0][0].transcript
    document.getElementById("texto").innerHTML=fala
}